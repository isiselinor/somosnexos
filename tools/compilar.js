/* NEXOS · compila los .jsx a un solo app.js (una vez, antes de publicar).
   Así el navegador de cada visitante no tiene que descargar Babel ni traducir el código.
   Uso: node tools/compilar.js [ruta a @babel/standalone]
   Usa las mismas opciones que Babel aplicaba antes en el navegador (presets react + env). */
const fs = require('fs'), path = require('path');
const raiz = path.join(__dirname, '..');
const Babel = require(process.argv[2] || '@babel/standalone');
const archivos = ['tweaks-panel.jsx', 'SectionWindowExport.jsx', 'SectionPageExport.jsx', 'LightboxExport.jsx', 'ProyectosExport.jsx', 'EditorialLandingExport.jsx', 'main.jsx'];
const opciones = { presets: ['react', 'env'], plugins: ['transform-class-properties', 'transform-object-rest-spread', 'transform-flow-strip-types'], sourceType: 'script', compact: false, comments: false };
const partes = archivos.map(function (f) {
  const codigo = fs.readFileSync(path.join(raiz, f), 'utf8');
  return '/* ' + f + ' */\n' + Babel.transform(codigo, Object.assign({ filename: f }, opciones)).code;
});
fs.writeFileSync(path.join(raiz, 'app.js'), '/* Generado por tools/compilar.js — no editar a mano: se editan los .jsx */\n' + partes.join('\n;\n'));
console.log('app.js listo:', Math.round(fs.statSync(path.join(raiz, 'app.js')).size / 1024), 'KB');
