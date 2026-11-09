/* Contenido editorial de la landing, en ES y EN.
   Los textos de las secciones (Quiénes somos, Evidencia, Aliados, Preguntas) pueden
   sobreescribirse desde la hoja "Config" del Sheet: ver nexosContent() abajo. */

const NEXOS_ES = {
  nav: [
    { id:'inicio', label:'Inicio' },
    { id:'proyectos', label:'Proyectos' },
    { id:'transparencia', label:'Transparencia' },
    { id:'nosotros', label:'Nosotros' }
  ],
  hero: {
    eyebrow: 'Ayuda directa, humana y transparente',
    titulo: 'Crear Nexos. Transformar realidades. Construir comunidad.',
    tituloHtml: 'Crear <span style="color:var(--accent)">Nexos</span>. Transformar realidades. Construir comunidad.',
    bajada: 'Somos el puente entre los que quieren ayudar y las necesidades reales. Ayuda directa, humana y transparente.',
    credito: 'Foto: Francisco Rizquez — La Guaira 2026'
  },
  ventanas: {
    quienes: {
      titulo: 'Quiénes somos',
      eyebrow: 'Nuestra misión',
      resumen: 'El puente entre quien puede aportar y quien necesita reconstruirse.',
      foto: 'img/ed4dbbe014.jpg',
      cuerpo: [
        'Somos <b>el puente</b> entre la voluntad de los que quieren aportar y la resiliencia de las comunidades que hoy necesitan reconstruirse.',
        'Nacimos después del <b>24 de junio</b>, cuando quedó claro que la ayuda existía pero no encontraba el camino. Unimos el movimiento con la acción y la estrategia con la empatía: voluntarios en terreno, compras verificadas y cuentas publicadas.',
        'Somos la prueba de que cuando las manos se juntan de forma transparente, la ayuda llega <b>más lejos, más rápido y de forma más humana</b>.'
      ],
      datos: [
        { k:'Fundado', v:'Junio 2026' },
        { k:'Dónde operamos', v:'Estado La Guaira' },
        { k:'Equipo', v:'Voluntarios' }
      ]
    },
    evidencia: {
      titulo: 'Transparencia',
      eyebrow: 'Todo verificable',
      resumen: 'Facturas de cada compra y fotos de cada entrega.',
      foto: 'img/67fd3461c8.jpg',
      cuerpo: ['Publicamos las facturas de cada compra y las fotos de cada entrega. Si algo no cuadra, escríbenos y lo corregimos a la vista de todos.']
    },
    aliados: {
      titulo: 'Aliados y voluntarios',
      eyebrow: 'Súmate',
      resumen: 'Cómo sumar tu tiempo, tu oficio o tu transporte.',
      foto: 'img/432f07ae63.jpg',
      cuerpo: [
        'No recibimos financiamiento institucional: cada campaña se sostiene con aportes de personas y con el trabajo de voluntarios que ponen tiempo, camioneta, cocina o manos.',
        'Si quieres sumar tu organización, tu oficio o tu transporte, escríbenos por Instagram y te decimos exactamente qué falta esta semana.'
      ],
      formas: [
        { titulo:'Voluntario en terreno', detalle:'Carga, reparto, cocina y construcción en La Guaira.' },
        { titulo:'Aliado logístico', detalle:'Fletes, depósito, almacenamiento o combustible.' },
        { titulo:'Proveedor', detalle:'Farmacias, ferreterías y mercados con precio solidario.' },
        { titulo:'Difusión', detalle:'Comparte el reporte: la transparencia también se comparte.' }
      ]
    },
    faq: {
      titulo: 'Preguntas frecuentes',
      eyebrow: 'Antes de donar',
      resumen: 'Dudas antes de donar, respondidas sin vueltas.',
      foto: 'img/95568b110c.jpg',
      items: [
        { q:'¿Cómo sé que mi dinero llegó?', a:'Cada donación aparece en el reporte con tu nombre, método de pago y monto. Puedes buscar tu nombre en nuestra página principal y encontrar tu aporte. El sistema se actualiza manualmente por lo que puede tomar algunos días.' },
        { q:'¿En qué monedas puedo donar?', a:'Recibimos USD, VES, ARS, EUR y USDT. En el reporte convertimos todo a USD para simplificar.' },
        { q:'¿Puedo donar cosas y no dinero?', a:'Sí, pero las necesidades van cambiando día a día por lo que no tenemos una lista fija de necesidades. Si quieres donar cosas ponte en contacto con nosotros por Instagram.' }
      ]
    }
  },
  ficha: [
    { k:'Fundado', v:'Junio 2026' },
    { k:'Zona', v:'La Guaira' },
    { k:'Equipo', v:'Voluntarios' }
  ],
  credito: 'Francisco Rizquez — La Guaira 2026',
  fotos: [
    { src:'img/2a91782da5.jpg', credito:'Francisco Rizquez — La Guaira' },
    { src:'img/ed3b96cb77.jpg', credito:'Ler Rosell — La Guaira' },
    { src:'img/9c5c9b0309.jpg', credito:'Ler Rosell — La Guaira' },
    { src:'img/28aaf29095.jpg', credito:'Ler Rosell — La Guaira' },
    { src:'img/87809d26a4.jpg', credito:'Patricia Díaz — La Guaira' }
  ],
  aviso: 'En el asunto de la transferencia: tu nombre o un “gracias” 💙',
  ui: {
    donar: 'Donar',
    donarAhora: '💙 Donar ahora',
    quienesLink: 'Quiénes somos →',
    abrirVentana: 'Abrir ventana →',
    volver: '← Volver',
    menu: 'Menú',
    recaudado: 'Recaudado',
    ejecutado: 'Ejecutado',
    donaciones: 'Donaciones',
    actualizado: 'Actualizado',
    totalRecaudado: 'Total recaudado',
    totalEgresos: 'Total egresos',
    saldo: 'Saldo disponible',
    seccionesLead: 'Conoce cada parte de la historia →',
    enTerreno: 'En terreno',
    fotosPor: 'Fotos: nuestro equipo en terreno',
    anterior: 'Anterior', siguiente: 'Siguiente', ampliar: 'Ampliar foto',
    cifrasTitulo: 'La ayuda en números',
    boletinEyebrow: 'En Substack', boletinTitulo: 'Lo que no cabe en una cifra, te lo contamos con una historia', boletinCinta: ['Ayuda directa y transparente','Reportes de gastos y donaciones','Contacto directo con las comunidades','Proyectos de impacto real','Historias desde el terreno','Colaboraciones con otras fundaciones'], boletinTexto: 'Mantente al tanto de todo lo que estamos haciendo y los próximos pasos en nuestro Substack.', boletinBoton: 'Suscríbete', boletinQuienes: 'Lee nuestras historias en Substack',
    donarTitulo: 'Cómo donar en 3 pasos',
    paso1t: 'Elige método', paso1: 'Haz click en <b style="color:var(--accent)">Donar ahora</b> y selecciona la forma de pago que prefieras.',
    paso2t: 'Copia y transfiere', paso2: 'Copia los datos con <b style="color:var(--accent)">Copiar</b> y haz tu aporte desde tu banco.',
    paso3t: 'Pon tu nombre', paso3: 'En el asunto, tu nombre o un “gracias”. Con eso basta 💙',
    evidenciaLead: 'Cada compra tiene su factura y cada entrega su foto.',
    facturas: 'Facturas', verFacturas: '📄 Ver facturas de compras', facturasSub: 'Carpeta de Drive, ordenada por categoría de gasto.',
    fotosLabel: 'Fotos', verFotos: '📷 Ver fotos de las donaciones', fotosSub: 'Entregas en terreno, fecha por fecha.',
    comoVerificamos: 'Cómo verificamos cada gasto →',
    fotosCredito: 'Fotos: ',
    reporteTitulo: '¿Ya donaste? Busca tu nombre',
    reporteLead: 'Los datos vienen de la hoja de cálculo del equipo.',
    buscar: '🔎 Escribe tu nombre…',
    todosMetodos: 'Todos los métodos',
    vacio: '🔎 Escribe al menos 3 letras de tu nombre para ver tus donaciones.',
    sinResultados: 'No encontramos donaciones con ese nombre. Revisa cómo está escrito.',
    mostrando: function(n, tot){ return 'Mostrando ' + n + ' de ' + tot + ' coincidencias — afina el nombre para ver la tuya.'; },
    resultados: function(n){ return n + ' resultado(s)'; },
    egresosTitulo: 'Egresos por categoría',
    secciones: 'Secciones', contacto: 'Contacto',
    creditoSistema: 'Sistema creado por Isis Elinor',
    avisoModal: ['En el asunto de la transferencia: ', 'tu nombre o un “gracias”', ' 💙'],
    escribirInstagram: 'Escribirnos por Instagram',
    seguirLeyendo: 'Seguir leyendo',
    cadaAporte: 'Cada aporte se publica.',
    cadaAporteSub: ['En el asunto: ', 'tu nombre o un “gracias”', '.'],
    fotoPor: 'Foto: '
  }
};

const NEXOS_EN = {
  nav: [
    { id:'inicio', label:'Home' },
    { id:'proyectos', label:'Projects' },
    { id:'transparencia', label:'Transparency' },
    { id:'nosotros', label:'About us' }
  ],
  hero: {
    eyebrow: 'Direct, human and transparent aid',
    titulo: 'Create Nexos. Transform realities. Build community.',
    tituloHtml: 'Create <span style="color:var(--accent)">Nexos</span>. Transform realities. Build community.',
    bajada: 'We are the bridge between those who want to help and real needs. Direct, human and transparent aid.',
    credito: 'Photo: Francisco Rizquez — La Guaira 2026'
  },
  ventanas: {
    quienes: {
      titulo: 'Who we are',
      eyebrow: 'Our mission',
      resumen: 'The bridge between those who can give and those who need to rebuild.',
      foto: 'img/ed4dbbe014.jpg',
      cuerpo: [
        'We are <b>the bridge</b> between the will of those who want to give and the resilience of the communities that need to rebuild today.',
        'We started after <b>June 24th</b>, when it became clear that the aid existed but could not find its way. We joined movement with action and strategy with empathy: volunteers on the ground, verified purchases and published accounts.',
        'We are the proof that when hands come together transparently, aid travels <b>farther, faster and in a more human way</b>.'
      ],
      datos: [
        { k:'Founded', v:'June 2026' },
        { k:'Where we work', v:'La Guaira State' },
        { k:'Team', v:'Volunteers' }
      ]
    },
    evidencia: {
      titulo: 'Transparency',
      eyebrow: 'Everything verifiable',
      resumen: 'Receipts for every purchase and photos of every delivery.',
      foto: 'img/67fd3461c8.jpg',
      cuerpo: ['We publish the receipt for every purchase and photos of every delivery. If something does not add up, write to us and we will fix it in plain sight.']
    },
    aliados: {
      titulo: 'Partners and volunteers',
      eyebrow: 'Join us',
      resumen: 'How to contribute your time, your trade or your transport.',
      foto: 'img/432f07ae63.jpg',
      cuerpo: [
        'We receive no institutional funding: every campaign is sustained by individual donations and by volunteers who give their time, their truck, their kitchen or their hands.',
        'If you want to bring in your organization, your trade or your transport, write to us on Instagram and we will tell you exactly what is missing this week.'
      ],
      formas: [
        { titulo:'Volunteer on the ground', detalle:'Loading, distribution, cooking and building in La Guaira.' },
        { titulo:'Logistics partner', detalle:'Freight, storage, warehousing or fuel.' },
        { titulo:'Supplier', detalle:'Pharmacies, hardware stores and markets at solidarity prices.' },
        { titulo:'Outreach', detalle:'Share the report: transparency is shared too.' }
      ]
    },
    faq: {
      titulo: 'Frequently asked questions',
      eyebrow: 'Before you donate',
      resumen: 'Questions before donating, answered straight.',
      foto: 'img/95568b110c.jpg',
      items: [
        { q:'How do I know my money arrived?', a:'Every donation appears in the report with your name, payment method and amount. You can search for your name on our main page and find your contribution. The system is updated manually, so it may take a few days.' },
        { q:'What currencies can I donate in?', a:'We accept USD, VES, ARS, EUR and USDT. In the report we convert everything to USD to keep it simple.' },
        { q:'Can I donate goods instead of money?', a:'Yes, but needs change day to day, so we do not have a fixed list of needs. If you want to donate goods, reach out to us on Instagram.' }
      ]
    }
  },
  ficha: [
    { k:'Founded', v:'June 2026' },
    { k:'Area', v:'La Guaira' },
    { k:'Team', v:'Volunteers' }
  ],
  credito: 'Francisco Rizquez — La Guaira 2026',
  fotos: NEXOS_ES.fotos,
  aviso: 'In the transfer reference: your name or a “thank you” 💙',
  ui: {
    donar: 'Donate',
    donarAhora: '💙 Donate now',
    quienesLink: 'Who we are →',
    abrirVentana: 'Open →',
    volver: '← Back',
    menu: 'Menu',
    recaudado: 'Raised',
    ejecutado: 'Spent',
    donaciones: 'Donations',
    actualizado: 'Updated',
    totalRecaudado: 'Total raised',
    totalEgresos: 'Total spent',
    saldo: 'Available balance',
    seccionesLead: 'Explore every part of the story →',
    enTerreno: 'On the ground',
    fotosPor: 'Photos: our team on the ground',
    anterior: 'Previous', siguiente: 'Next', ampliar: 'Enlarge photo',
    cifrasTitulo: 'Aid in numbers',
    boletinEyebrow: 'On Substack', boletinTitulo: "What doesn't fit in a number, we tell you with a story", boletinCinta: ['Direct and transparent aid','Expense and donation reports','Direct contact with communities','Real-impact projects','Stories from the ground','Collaborations with other foundations'], boletinTexto: 'Stay up to date with everything we are doing and our next steps on our Substack.', boletinBoton: 'Subscribe', boletinQuienes: 'Read our stories on Substack',
    donarTitulo: 'How to donate in 3 steps',
    paso1t: 'Choose a method', paso1: 'Click <b style="color:var(--accent)">Donate now</b> and select the payment method you prefer.',
    paso2t: 'Copy and transfer', paso2: 'Copy the details with <b style="color:var(--accent)">Copy</b> and send your contribution from your bank.',
    paso3t: 'Add your name', paso3: 'In the reference, your name or a “thank you”. That’s all 💙',
    evidenciaLead: 'Every purchase has its receipt and every delivery its photo.',
    facturas: 'Receipts', verFacturas: '📄 See purchase receipts', facturasSub: 'Drive folder, sorted by spending category.',
    fotosLabel: 'Photos', verFotos: '📷 See donation photos', fotosSub: 'Deliveries on the ground, date by date.',
    comoVerificamos: 'How we verify every expense →',
    fotosCredito: 'Photos: ',
    reporteTitulo: 'Already donated? Find your name',
    reporteLead: 'The data comes from the team spreadsheet.',
    buscar: '🔎 Type your name…',
    todosMetodos: 'All methods',
    vacio: '🔎 Type at least 3 letters of your name to see your donations.',
    sinResultados: 'We found no donations under that name. Check the spelling.',
    mostrando: function(n, tot){ return 'Showing ' + n + ' of ' + tot + ' matches — refine the name to find yours.'; },
    resultados: function(n){ return n + ' result(s)'; },
    egresosTitulo: 'Spending by category',
    secciones: 'Sections', contacto: 'Contact',
    creditoSistema: 'System built by Isis Elinor',
    avisoModal: ['In the transfer reference: ', 'your name or a “thank you”', ' 💙'],
    escribirInstagram: 'Write to us on Instagram',
    seguirLeyendo: 'Keep reading',
    cadaAporte: 'Every contribution is published.',
    cadaAporteSub: ['In the reference: ', 'your name or a “thank you”', '.'],
    fotoPor: 'Photo: '
  }
};

window.NEXOS_CONTENT = { ES: NEXOS_ES, EN: NEXOS_EN };
/* Compatibilidad: las páginas viejas siguen leyendo window.NEXOS_LANDING (español). */
window.NEXOS_LANDING = NEXOS_ES;

/* Devuelve el contenido del idioma pedido, con los textos que venga escribiendo
   el equipo en la hoja "Config" del Sheet pisando los valores por defecto.
   Formato esperado en Config (columnas: clave | es | en):
     quienes.titulo | Quiénes somos      | Who we are
     quienes.resumen| (texto de la tarjeta de portada)
     quienes.cuerpo | párrafo 1\n\npárrafo 2 (una línea en blanco separa párrafos)
     evidencia.*, aliados.*, faq.* igual
     faq.items      | P: pregunta\nR: respuesta\n\nP: …\nR: … */
window.nexosContent = function (lang) {
  const base = window.NEXOS_CONTENT[lang === 'EN' ? 'EN' : 'ES'];
  const t = (window.NEXOS_FIXTURE && window.NEXOS_FIXTURE.textos) || null;
  if (!t) return base;
  const col = lang === 'EN' ? 'en' : 'es';
  const pick = function (clave) {
    const row = t[clave];
    if (!row) return '';
    const val = typeof row === 'string' ? row : (row[col] || row.es || '');
    return String(val || '').trim();
  };
  const parrafos = function (s) { return s.split(/\n\s*\n/).map(function (p) { return p.trim().replace(/\n/g, ' '); }).filter(Boolean); };
  const out = Object.assign({}, base, { ventanas: {} });
  Object.keys(base.ventanas).forEach(function (id) {
    const v = Object.assign({}, base.ventanas[id]);
    ['titulo', 'eyebrow', 'resumen'].forEach(function (f) { const s = pick(id + '.' + f); if (s) v[f] = s; });
    const cuerpo = pick(id + '.cuerpo'); if (cuerpo) v.cuerpo = parrafos(cuerpo);
    const items = pick(id + '.items');
    if (items) {
      const parsed = parrafos(items).map(function (b) {
        const m = b.match(/^\s*(?:P|Q)\s*:\s*([\s\S]*?)\s*(?:R|A)\s*:\s*([\s\S]*)$/i);
        return m ? { q: m[1].trim(), a: m[2].trim() } : null;
      }).filter(Boolean);
      if (parsed.length) v.items = parsed;
    }
    out.ventanas[id] = v;
  });
  const aviso = pick('general.aviso'); if (aviso) out.aviso = aviso;
  const heroBajada = pick('hero.bajada');
  if (heroBajada) out.hero = Object.assign({}, base.hero, { bajada: heroBajada });
  return out;
};
