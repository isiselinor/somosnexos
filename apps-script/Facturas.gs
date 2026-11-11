// ==================================================================
//  FACTURAS CON CÓDIGO (pestaña Gastos, columnas H y I)
//  H = Código  (lo llena el script: VS-001, VS-002…)
//  I = Factura (el equipo pega el enlace de Drive; si son varios, separados por coma)
//  Al correr "Asignar códigos y ordenar facturas":
//   1. Pone código a cada gasto de un proyecto activo que no lo tenga.
//   2. Renombra cada factura enlazada como "VS-004 Descripción.pdf" (VS-004a, VS-004b si son varias).
//   3. La mueve a la carpeta del proyecto.
//  Zona Cero y los gastos sin proyecto no llevan código.
// ==================================================================

const FACT = { colCodigo: 8, colFactura: 9 };

// Proyectos que usan códigos. Para sumar uno: agregarlo aquí con sus letras y su carpeta de Drive.
//   clave = el texto del proyecto en la columna G (sin el emoji)
const FACT_PROYECTOS = {
  'volver a sonar':    { prefijo: 'VS',  carpeta: '1kbqoCU6RGKskQen0-A0c6DtImYvwBdTk' },
  // 'volver a trabajar': { prefijo: 'VT',  carpeta: '' },   // se activa después de la prueba
  // 'lumus i':           { prefijo: 'LU1', carpeta: '' }
};

function factClave_(proyecto) {
  return String(proyecto || '').replace(/[^\p{L}\p{N} ]/gu, '').replace(/\s+/g, ' ').trim().toLowerCase();
}
function factConfig_(proyecto) { return FACT_PROYECTOS[factClave_(proyecto)] || null; }

// Saca los IDs de Drive de lo que se pegó en la celda (uno o varios enlaces).
function factIds_(texto) {
  var ids = [];
  String(texto || '').split(/[\s,;]+/).forEach(function (t) {
    var m = t.match(/\/d\/([\w-]{20,})/) || t.match(/[?&]id=([\w-]{20,})/) || t.match(/^([\w-]{25,})$/);
    if (m && ids.indexOf(m[1]) === -1) ids.push(m[1]);
  });
  return ids;
}
// Enlaces públicos para la página (solo lectura).
function factEnlaces_(texto) {
  return factIds_(texto).map(function (id) { return 'https://drive.google.com/file/d/' + id + '/view'; });
}

function factNombreLimpio_(s) {
  return String(s || '').replace(/[\\/:*?"<>|#\n\r\t]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 70);
}

// Menú: recorre todos los gastos.
function asignarCodigosYFacturas() {
  var res = factProcesar_(null);
  var msg = res.codigos + ' código(s) nuevo(s) · ' + res.renombradas + ' factura(s) ordenada(s).';
  if (res.errores.length) msg += '\n\nNo se pudo con:\n• ' + res.errores.slice(0, 10).join('\n• ');
  try { SpreadsheetApp.getUi().alert('Facturas', msg, SpreadsheetApp.getUi().ButtonSet.OK); } catch (e) { Logger.log(msg); }
  try { actualizarTodo(); } catch (e) {}
}

// Disparador al editar (se instala una vez con "Activar ordenado automático").
function alEditarFacturas(e) {
  try {
    if (!e || !e.range) return;
    var hoja = e.range.getSheet();
    if ((hoja.getName() || '').toLowerCase() !== GASTOS.hoja.toLowerCase()) return;
    var c1 = e.range.getColumn(), c2 = c1 + e.range.getNumColumns() - 1;
    if (c2 < GASTOS.colProyecto || c1 > FACT.colFactura) return;
    var filas = [];
    for (var f = e.range.getRow(); f < e.range.getRow() + e.range.getNumRows(); f++) filas.push(f);
    factProcesar_(filas);
  } catch (err) { Logger.log(err); }
}

function activarOrdenadoAutomatico() {
  var ss = SpreadsheetApp.getActive();
  var ya = ScriptApp.getProjectTriggers().some(function (t) { return t.getHandlerFunction() === 'alEditarFacturas'; });
  if (!ya) ScriptApp.newTrigger('alEditarFacturas').forSpreadsheet(ss).onEdit().create();
  SpreadsheetApp.getUi().alert('Facturas', ya ? 'Ya estaba activo.' : 'Listo: cada vez que se pegue un enlace en la columna Factura, el gasto recibe su código y la factura se ordena sola.', SpreadsheetApp.getUi().ButtonSet.OK);
}

// filas = null para todas, o una lista de números de fila.
function factProcesar_(filas) {
  var hoja = buscarHoja_(GASTOS.hoja);
  var out = { codigos: 0, renombradas: 0, errores: [] };
  if (!hoja) return out;
  var cab = GASTOS.filaInicio;                       // fila de encabezados
  if (!String(hoja.getRange(cab, FACT.colCodigo).getValue()).trim()) hoja.getRange(cab, FACT.colCodigo).setValue('Código');
  if (!String(hoja.getRange(cab, FACT.colFactura).getValue()).trim()) hoja.getRange(cab, FACT.colFactura).setValue('Factura');
  var ult = hoja.getLastRow();
  if (ult <= cab) return out;
  var n = ult - cab;
  var vals = hoja.getRange(cab + 1, 1, n, FACT.colFactura).getValues();

  // Último número usado por prefijo (los códigos nunca se reutilizan).
  var maxNum = {};
  vals.forEach(function (r) {
    var m = String(r[FACT.colCodigo - 1]).trim().match(/^([A-Z]+\d?)-(\d{3,})/);
    if (m) maxNum[m[1]] = Math.max(maxNum[m[1]] || 0, Number(m[2]));
  });

  var carpetas = {};
  for (var i = 0; i < n; i++) {
    var fila = cab + 1 + i;
    if (filas && filas.indexOf(fila) === -1) continue;
    var r = vals[i];
    var desc = String(r[GASTOS.colConcepto - 1]).trim();
    var conf = factConfig_(r[GASTOS.colProyecto - 1]);
    if (!desc || !conf) continue;

    var codigo = String(r[FACT.colCodigo - 1]).trim();
    if (!codigo) {
      maxNum[conf.prefijo] = (maxNum[conf.prefijo] || 0) + 1;
      codigo = conf.prefijo + '-' + ('00' + maxNum[conf.prefijo]).slice(-3);
      hoja.getRange(fila, FACT.colCodigo).setValue(codigo);
      out.codigos++;
    }

    var ids = factIds_(r[FACT.colFactura - 1]);
    ids.forEach(function (id, k) {
      try {
        var file = DriveApp.getFileById(id);
        var ext = (file.getName().match(/\.[A-Za-z0-9]{2,5}$/) || [''])[0];
        var sufijo = ids.length > 1 ? String.fromCharCode(97 + k) : '';
        var nombre = codigo + sufijo + ' ' + factNombreLimpio_(desc) + ext;
        var cambio = false;
        if (file.getName() !== nombre) { file.setName(nombre); cambio = true; }
        if (conf.carpeta) {
          if (!carpetas[conf.carpeta]) carpetas[conf.carpeta] = DriveApp.getFolderById(conf.carpeta);
          var destino = carpetas[conf.carpeta];
          var yaEsta = false, padres = file.getParents();
          while (padres.hasNext()) { if (padres.next().getId() === destino.getId()) yaEsta = true; }
          if (!yaEsta) { file.moveTo(destino); cambio = true; }
        }
        if (cambio) out.renombradas++;
      } catch (err) {
        out.errores.push('fila ' + fila + ' (' + codigo + '): ' + String(err.message || err).slice(0, 90));
      }
    });
  }
  return out;
}
