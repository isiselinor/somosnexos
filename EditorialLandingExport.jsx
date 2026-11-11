const NS = window.NEXOSDesignSystem_0519e6;
const { Button, Card, Notice, StatCard, CurrencyCard, DonationsTable, ExpenseCategory, EmptyState,
        SearchInput, FilterSelect, DonateModal, PaymentMethod, DriveLinkButton, StepCard, CopyButton } = NS;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#E0680E", "#11354C", "#11354C", "#FFFFFF"],
  "portada": "Sobrio",
  "subventana": "Página",
  "overlay": "Navy",
  "winHeader": "Navy"
}/*EDITMODE-END*/;

const A = {
  wrap:{ maxWidth:1180, margin:'0 auto', padding:'0 24px' },
  eyebrow:{ fontSize:11, fontWeight:800, letterSpacing:1.4, textTransform:'uppercase', color:'var(--accent-text)' },
  h2:{ fontFamily:'var(--font-display)', fontSize:'clamp(28px,4vw,44px)', fontWeight:700, letterSpacing:'-1px', lineHeight:1.05, margin:'10px 0 0', color:'var(--ink)' },
  lead:{ fontSize:17, lineHeight:1.7, color:'var(--muted)', maxWidth:620, margin:'14px 0 0' }
};

function NavBar({ onOpen, onDonate, lang, setLang, forceSolid }) {
  const d = window.nexosContent(lang); const u = d.ui;
  const [scrolled, setScrolled] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  const solid = forceSolid || scrolled;
  const navActual = (function(){ const h = (location.hash || '').replace('#',''); return h.indexOf('p-') === 0 ? 'proyectos' : (['proyectos','transparencia','nosotros'].indexOf(h) > -1 ? h : 'inicio'); })();
  React.useEffect(function(){
    const el = document.getElementById('scroller') || window;
    function onScroll(){ const y = el === window ? window.scrollY : el.scrollTop; setScrolled(y > 40); }
    el.addEventListener('scroll', onScroll); return function(){ el.removeEventListener('scroll', onScroll); };
  }, []);
  React.useEffect(function(){ document.body.style.overflow = menu ? 'hidden' : ''; return function(){ document.body.style.overflow = ''; }; }, [menu]);
  return (
    <div style={{ position:'sticky', top:0, zIndex:25, background: solid ? 'rgba(255,255,255,.92)' : 'transparent',
      backdropFilter: solid ? 'saturate(180%) blur(14px)' : 'none', borderBottom:'1px solid ' + (solid ? 'var(--line)' : 'transparent'), transition:'background .2s, border-color .2s' }}>
      <div style={{ ...A.wrap, display:'flex', alignItems:'center', gap:18, height:70 }}>
        <a href="#inicio" style={{ display:'flex', alignItems:'center', gap:9, textDecoration:'none' }}>
          <img src={solid ? 'logo-nexos.svg' : 'logo-nexos-blanco.svg'} alt="NEXOS" style={{ height:34, width:'auto', display:'block' }} />
        </a>
        <nav style={{ display:'flex', gap:20, marginLeft:'auto', alignItems:'center', flexWrap:'nowrap' }} className="navlinks">
          {d.nav.map(function(n){
            return <a key={n.id} href={n.href || ('#' + n.id)} target={n.href ? '_blank' : undefined} rel={n.href ? 'noopener' : undefined} onClick={n.id === 'quienes' || n.id === 'aliados' || n.id === 'faq' ? function(e){ e.preventDefault(); onOpen(n.id); } : undefined}
              style={{ fontSize:13.5, fontWeight:600, textDecoration:'none', whiteSpace:'nowrap', color: solid ? 'var(--ink)' : 'rgba(255,255,255,.86)', borderBottom: n.id === navActual ? '2px solid ' + (solid ? 'var(--accent)' : '#fff') : '2px solid transparent', paddingBottom:2 }}>{n.label}</a>;
          })}
        </nav>
        <button className="menubtn" aria-label={u.menu} onClick={function(){ setMenu(!menu); }} style={{ display:'none', background:'none', border:'1px solid ' + (solid ? 'var(--line)' : 'rgba(255,255,255,.4)'), color: solid ? 'var(--ink)' : '#fff', borderRadius:999, width:40, height:38, marginLeft:'auto', fontSize:15, cursor:'pointer', lineHeight:1 }}>{menu ? '×' : '☰'}</button>
        <button onClick={function(){ setLang(lang === 'ES' ? 'EN' : 'ES'); }} aria-label={lang === 'ES' ? 'Switch to English' : 'Cambiar a español'} style={{ background:'none', border:'1px solid ' + (solid ? 'var(--line)' : 'rgba(255,255,255,.4)'), color: solid ? 'var(--ink)' : '#fff', borderRadius:999, padding:'7px 12px', fontSize:12, fontWeight:700, cursor:'pointer' }}>{lang === 'ES' ? 'EN' : 'ES'}</button>
        <Button variant="primarySmall" onClick={onDonate} style={{ fontSize:13.5, padding:'11px 20px' }}>{u.donar}</Button>
      </div>
      {menu ? (
        <div style={{ background:'#fff', borderTop:'1px solid var(--line)', boxShadow:'0 20px 40px rgba(17,53,76,.12)' }}>
          <div style={{ ...A.wrap, display:'grid', padding:'8px 24px 16px' }}>
            {d.nav.map(function(n){
              const isWin = ['quienes','aliados','faq'].indexOf(n.id) > -1;
              return <a key={n.id} href={n.href || ('#' + n.id)} target={n.href ? '_blank' : undefined} rel={n.href ? 'noopener' : undefined} onClick={function(e){ if (isWin) { e.preventDefault(); onOpen(n.id); } setMenu(false); }}
                style={{ padding:'14px 0', borderBottom:'1px solid var(--line)', fontSize:16, fontWeight:700, color:'var(--ink)', textDecoration:'none' }}>{n.label}</a>;
            })}
          </div>
        </div>) : null}
    </div>
  );
}

function Hero({ onDonate, onOpen, scrimBase, lang }) {
  const d = window.nexosContent(lang); const u = d.ui; const x = window.NEXOS_FIXTURE;
  return (
    <div style={{ position:'relative', minHeight:'clamp(560px,78vh,760px)', display:'flex', flexDirection:'column', justifyContent:'flex-end', marginTop:-70, paddingTop:70 }}>
      <img src="img/f4926bd7c6.jpg" alt="" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 32%' }} />
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, color-mix(in oklab, ' + scrimBase + ' 62%, transparent) 0%, color-mix(in oklab, ' + scrimBase + ' 28%, transparent) 34%, color-mix(in oklab, ' + scrimBase + ' 88%, transparent) 100%) ' }}></div>
      <div style={{ ...A.wrap, position:'relative', paddingBottom:34, paddingTop:60 }}>
        <div style={{ ...A.eyebrow, color:'#F4B044' }}>{d.hero.eyebrow}</div>
        <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(36px,6.4vw,72px)', fontWeight:800, lineHeight:1.02, letterSpacing:'-2px', color:'#fff', margin:'12px 0 0', maxWidth:900, textWrap:'balance' }}>{d.hero.titulo}</h1>
        <p style={{ fontSize:'clamp(15px,1.6vw,19px)', lineHeight:1.65, color:'rgba(255,255,255,.85)', maxWidth:620, margin:'18px 0 0' }}>{d.hero.bajada}</p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:12, margin:'28px 0 0', alignItems:'center' }}>
          <Button variant="primary" onClick={onDonate} style={{ width:'auto', padding:'16px 30px', fontSize:17, whiteSpace:'nowrap' }}>{u.donarAhora}</Button>
          <button onClick={function(){ onOpen('quienes'); }} style={{ background:'rgba(255,255,255,.12)', border:'1px solid rgba(255,255,255,.42)', color:'#fff', borderRadius:999, padding:'15px 26px', fontSize:15, fontWeight:700, cursor:'pointer', backdropFilter:'blur(6px)' }}>{u.quienesLink}</button>
        </div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:'26px 46px', margin:'40px 0 0', paddingTop:24, borderTop:'1px solid rgba(255,255,255,.22)' }}>
          {[[u.recaudado,'≈ US$ ' + x.totalUSD],[u.ejecutado,'≈ US$ ' + x.totalEgresos],[u.donaciones, x.totalDonaciones]].map(function(p){
            return (<div key={p[0]}>
              <div style={{ fontFamily:'var(--font-display)', fontSize:'clamp(22px,2.6vw,32px)', fontWeight:700, color:'#fff', lineHeight:1 }}>{p[1]}</div>
              <div style={{ fontSize:11.5, letterSpacing:.6, textTransform:'uppercase', color:'rgba(255,255,255,.62)', marginTop:6 }}>{p[0]}</div>
            </div>);
          })}
          <div style={{ marginLeft:'auto', fontSize:11, color:'rgba(255,255,255,.5)', alignSelf:'flex-end' }}>{d.hero.credito}</div>
        </div>
      </div>
    </div>
  );
}

function HeroSobrio({ onDonate, onOpen, lang }) {
  const d = window.nexosContent(lang); const u = d.ui; const x = window.NEXOS_FIXTURE;
  return (
    <section style={{ background:'var(--nexos-blue)' }}>
      <div style={{ ...A.wrap, maxWidth:900, paddingTop:'clamp(56px,9vw,110px)', paddingBottom:'clamp(40px,6vw,72px)' }}>
        <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(30px,4.4vw,52px)', fontWeight:700, lineHeight:1.08, letterSpacing:'-1.6px', color:'#fff', margin:0, maxWidth:760, textWrap:'balance' }}>{d.hero.titulo}</h1>
        <p style={{ fontSize:'clamp(15px,1.6vw,18px)', lineHeight:1.7, color:'rgba(255,255,255,.82)', maxWidth:560, margin:'20px 0 0' }}>{d.hero.bajada}</p>
        <div style={{ display:'flex', gap:14, alignItems:'center', margin:'30px 0 0', flexWrap:'wrap' }}>
          <Button variant="primary" onClick={onDonate} style={{ width:'auto', padding:'15px 28px', fontSize:16, whiteSpace:'nowrap' }}>{u.donarAhora}</Button>
          <button onClick={function(){ onOpen('quienes'); }} style={{ background:'none', border:'none', padding:0, color:'#fff', fontSize:15, fontWeight:700, cursor:'pointer', textDecoration:'underline' }}>{u.quienesLink}</button>
        </div>
        <div style={{ fontSize:12, color:'rgba(255,255,255,.68)', margin:'26px 0 0' }}>{x ? (u.recaudado + ' ≈ US$ ' + x.totalUSD + ' · ' + u.ejecutado + ' ≈ US$ ' + x.totalEgresos + ' · ' + u.actualizado + ' ' + x.actualizado) : ''}</div>
      </div>
    </section>
  );
}

function HeroCentrado({ onDonate, onOpen, lang }) {
  const d = window.nexosContent(lang); const u = d.ui; const x = window.NEXOS_FIXTURE;
  return (
    <section style={{ background:'transparent', borderBottom:'1px solid var(--line)' }}>
      <div style={{ ...A.wrap, maxWidth:860, textAlign:'center', paddingTop:'clamp(58px,9vw,116px)', paddingBottom:'clamp(40px,6vw,70px)' }}>
        <img src="img/3711202f3b.png" alt="" style={{ height:64, margin:'0 auto', display:'block' }} />
        <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(32px,5vw,58px)', fontWeight:800, lineHeight:1.04, letterSpacing:'-2px', color:'var(--ink)', margin:'26px 0 0', textWrap:'balance' }} dangerouslySetInnerHTML={{ __html:d.hero.tituloHtml }} />
        <p style={{ fontSize:'clamp(15px,1.6vw,18px)', lineHeight:1.7, color:'var(--muted)', maxWidth:560, margin:'20px auto 0' }}>{d.hero.bajada}</p>
        <div style={{ display:'flex', gap:12, justifyContent:'center', margin:'30px 0 0', flexWrap:'wrap' }}>
          <Button variant="primary" onClick={onDonate} style={{ width:'auto', padding:'15px 28px', fontSize:16, whiteSpace:'nowrap' }}>{u.donarAhora}</Button>
          <button onClick={function(){ onOpen('quienes'); }} style={{ background:'none', border:'1px solid var(--line)', color:'var(--ink)', borderRadius:999, padding:'14px 24px', fontSize:15, fontWeight:700, cursor:'pointer' }}>{u.quienesLink}</button>
        </div>
        <div style={{ fontSize:12, color:'var(--muted)', margin:'24px 0 0' }}>{u.actualizado} {x.actualizado}</div>
      </div>
    </section>
  );
}

function HeroMinimal({ onDonate, onOpen, lang }) {
  const d = window.nexosContent(lang); const u = d.ui; const x = window.NEXOS_FIXTURE;
  return (
    <section style={{ background:'transparent', borderBottom:'1px solid var(--line)' }}>
      <div style={{ ...A.wrap, paddingTop:'clamp(64px,10vw,132px)', paddingBottom:'clamp(38px,5vw,60px)', maxWidth:1000 }}>
        <div style={A.eyebrow}>{d.hero.eyebrow}</div>
        <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(38px,7vw,84px)', fontWeight:800, lineHeight:1, letterSpacing:'-2.6px', color:'var(--ink)', margin:'18px 0 0', textWrap:'balance' }} dangerouslySetInnerHTML={{ __html:d.hero.tituloHtml }} />
        <p style={{ fontSize:'clamp(16px,1.8vw,20px)', lineHeight:1.65, color:'var(--muted)', maxWidth:620, margin:'26px 0 0' }}>{d.hero.bajada}</p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:12, margin:'34px 0 0', alignItems:'center' }}>
          <Button variant="primary" onClick={onDonate} style={{ width:'auto', padding:'16px 30px', fontSize:17, whiteSpace:'nowrap' }}>{u.donarAhora}</Button>
          <button onClick={function(){ onOpen('quienes'); }} style={{ background:'none', border:'1px solid var(--line)', color:'var(--ink)', borderRadius:999, padding:'15px 26px', fontSize:15, fontWeight:700, cursor:'pointer' }}>{u.quienesLink}</button>
        </div>
      </div>
      <div style={{ borderTop:'1px solid var(--line)' }}>
        <div style={{ ...A.wrap, display:'flex', flexWrap:'wrap', gap:'20px 56px', padding:'22px 26px' }}>
          {[[u.recaudado,'≈ US$ ' + x.totalUSD],[u.ejecutado,'≈ US$ ' + x.totalEgresos],[u.donaciones, x.totalDonaciones]].map(function(p){
            return (<div key={p[0]}>
              <div style={{ fontFamily:'var(--font-display)', fontSize:'clamp(20px,2.2vw,27px)', fontWeight:700, color:'var(--ink)', letterSpacing:'-.8px' }}>{p[1]}</div>
              <div style={{ fontSize:11, letterSpacing:.8, textTransform:'uppercase', color:'var(--muted)', marginTop:6 }}>{p[0]}</div></div>);
          })}
          <div style={{ marginLeft:'auto', alignSelf:'flex-end', fontSize:11.5, color:'var(--muted)' }}>{u.actualizado} {x.actualizado}</div>
        </div>
      </div>
    </section>
  );
}

// Aliados de la página Nosotros. Para sumar un logo: guardar el archivo en el sitio y poner su ruta en logo.
const NX_ALIADOS = [
  { nombre:'Uno a Uno', logo:'' },
  { nombre:'La Vida Boheme', logo:'proyectos/volver-a-sonar/logo-la-vida-boheme.png' },
  { nombre:'Eposak', logo:'' },
  { nombre:'Sinfónica Gran Mariscal de Ayacucho', logo:'proyectos/volver-a-sonar/logo-orquesta.png' },
  { nombre:'Reverse Lab', logo:'' }
];

function PhotoStrip({ onZoom, lang }) {
  const d = window.nexosContent(lang); const u = d.ui;
  const ref = React.useRef(null);
  const [pausa, setPausa] = React.useState(false);
  const reanudar = React.useRef(null);
  // En bucle: al llegar al final vuelve al principio (y al revés).
  function nudge(dir){
    const el = ref.current; if (!el) return;
    const max = el.scrollWidth - el.clientWidth - 4;
    if (dir > 0 && el.scrollLeft >= max) el.scrollTo({ left:0, behavior:'smooth' });
    else if (dir < 0 && el.scrollLeft <= 4) el.scrollTo({ left:el.scrollWidth, behavior:'smooth' });
    else el.scrollBy({ left: dir * Math.round(el.clientWidth * .7), behavior:'smooth' });
  }
  // Avance automático cada 5 s; se pausa al pasar el mouse, al tocar o con el foco, y no corre si la persona pidió menos movimiento.
  React.useEffect(function(){
    if (pausa) return;
    try { if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; } catch (e) {}
    const t = setInterval(function(){ nudge(1); }, 5000);
    return function(){ clearInterval(t); };
  }, [pausa]);
  function pausar(){ clearTimeout(reanudar.current); setPausa(true); }
  function soltar(ms){ clearTimeout(reanudar.current); reanudar.current = setTimeout(function(){ setPausa(false); }, ms || 0); }
  React.useEffect(function(){ return function(){ clearTimeout(reanudar.current); }; }, []);
  return (
    <div style={{ marginTop:'clamp(34px,5vw,56px)' }} onMouseEnter={pausar} onMouseLeave={function(){ soltar(0); }} onFocus={pausar} onBlur={function(){ soltar(0); }} onTouchStart={function(){ pausar(); soltar(8000); }}>
      <div style={{ display:'flex', alignItems:'baseline', gap:14, marginBottom:16 }}>
        <div style={{ fontSize:11, fontWeight:800, letterSpacing:1.2, textTransform:'uppercase', color:'var(--muted)' }}>{u.enTerreno}</div>
        <div style={{ fontSize:13, color:'var(--muted)' }}>{u.fotosPor}</div>
        <div style={{ marginLeft:'auto', display:'flex', gap:8 }}>
          <button onClick={function(){ nudge(-1); }} aria-label={u.anterior} className="strip-nav">←</button>
          <button onClick={function(){ nudge(1); }} aria-label={u.siguiente} className="strip-nav">→</button>
        </div>
      </div>
      <div ref={ref} className="strip">
        {d.fotos.map(function(p, i){
          return (<figure key={p.src} className="strip-item" style={{ margin:0, position:'relative' }}>
            <button onClick={function(){ onZoom(i); }} className="zoomable" aria-label={u.ampliar}
              style={{ display:'block', width:'100%', height:300, padding:0, border:'none', borderRadius:'var(--radius-lg)', overflow:'hidden', cursor:'zoom-in', background:'none' }}>
              <img src={p.src} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
            </button>
            <figcaption style={{ position:'absolute', left:10, bottom:10, fontSize:11, color:'#fff', background:'rgba(17,53,76,.55)', padding:'4px 9px', borderRadius:999 }}>{p.credito}</figcaption>
          </figure>);
        })}
      </div>
    </div>
  );
}

function FaqRow({ q, a, open }) {
  const [o, setO] = React.useState(!!open);
  return (
    <div style={{ borderTop:'1px solid var(--line)' }}>
      <button onClick={function(){ setO(!o); }} aria-expanded={o} style={{ width:'100%', background:'none', border:'none', padding:'16px 0', display:'flex', gap:14, alignItems:'flex-start', textAlign:'left', cursor:'pointer' }}>
        <span style={{ color:'var(--accent)', fontWeight:800, transform:'rotate(' + (o ? 90 : 0) + 'deg)', transition:'transform .15s' }}>▸</span>
        <span style={{ fontWeight:700, fontSize:15, flex:1, color:'var(--ink)' }}>{q}</span>
      </button>
      {o ? <p style={{ margin:'0 0 16px 28px', fontSize:14, lineHeight:1.7, color:'var(--muted)' }}>{a}</p> : null}
    </div>
  );
}

// Un gasto con su código y el enlace a su factura (si el equipo la cargó en el Sheet).
function GastoConFactura({ it, en }) {
  const fs = it.facturas || [];
  return (<span style={{ display:'flex', flexWrap:'wrap', gap:'4px 10px', alignItems:'baseline' }}>
    {it.codigo ? <span style={{ fontFamily:'ui-monospace,Menlo,monospace', fontSize:12, fontWeight:600, color:'var(--accent-text)', whiteSpace:'nowrap' }}>{it.codigo}</span> : null}
    <span style={{ minWidth:0 }}>{it.concepto}</span>
    {fs.map(function (u, i) {
      return <a key={u} href={u} target="_blank" rel="noopener" style={{ color:'var(--ink)', fontWeight:700, whiteSpace:'nowrap', textDecoration:'underline', textUnderlineOffset:3 }}>
        {(en ? 'See invoice' : 'Ver factura') + (fs.length > 1 ? ' ' + (i + 1) : '') + ' ↗'}</a>;
    })}
  </span>);
}

function ProyectoCuentas({ p, lang, total, abierto, onOpen }) {
  const [o, setO] = React.useState(!!abierto);
  const en = lang === 'EN';
  const f = window.NEXOS_FIXTURE || {};
  const info = function (cat) { return (f.egresosRaw || []).filter(function (c) { return c.categoria === cat; })[0] || {}; };
  const tag = { cerrado:{ background:'var(--blue-lt)', color:'var(--ink)' }, curso:{ background:'var(--ink)', color:'var(--amber)' }, pronto:{ background:'var(--ink)', color:'var(--amber)' } }[p.tipo];
  const pct = total ? p.gastado / total * 100 : 0;
  const pctTxt = (pct >= 10 ? Math.round(pct) : Math.round(pct * 10) / 10).toString().replace('.', en ? '.' : ',') + '%';
  return (
    <div id={'cuentas-' + p.id} style={{ border:'1px solid var(--line-strong)', borderRadius:18, background:'#fff', scrollMarginTop:90 }}>
      <button type="button" aria-expanded={o} onClick={function(){ setO(!o); }}
        style={{ width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', gap:16, padding:'20px 22px', background:'none', border:0, font:'inherit', color:'inherit', textAlign:'left', cursor:'pointer' }}>
        <span style={{ display:'flex', gap:12, alignItems:'flex-start', minWidth:0 }}>
          <span style={{ color:'var(--accent)', fontWeight:800, transform:'rotate(' + (o ? 90 : 0) + 'deg)', transition:'transform .15s', marginTop:4 }}>▸</span>
          <span style={{ minWidth:0 }}>
            <b style={{ fontFamily:'var(--font-display)', fontSize:21, marginRight:10 }}>{p.nombre}</b>
            <span style={{ display:'inline-block', fontSize:11, fontWeight:700, borderRadius:999, padding:'3px 10px', verticalAlign:'middle', ...tag }}>{p.estado}</span>
            <span style={{ display:'block', fontSize:15, color:'var(--muted)', marginTop:4 }}>{p.lema}{p.compras.length ? ' · ' + window.prFmt(p.compras.length, lang) + (en ? ' purchases' : ' compras') : ''}</span>
          </span>
        </span>
        <span style={{ textAlign:'right', whiteSpace:'nowrap', fontVariantNumeric:'tabular-nums' }}>
          <b style={{ fontFamily:'var(--font-display)', fontSize:22 }}>US$ {window.prFmt(p.gastado, lang)}</b>
          <span style={{ display:'block', fontSize:13, color:'var(--muted)' }}>{pctTxt}{en ? ' of total invested' : ' de lo invertido'}</span>
        </span>
      </button>
      {o ? (
        <div style={{ padding:'0 22px 20px' }}>
          {p.porCategoria.length ? p.porCategoria.map(function (c) {
            const inf = info(c.categoria);
            const dec = function (n) { return (Number(n) || 0).toLocaleString(en ? 'en-US' : 'es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };
            const items = p.compras.filter(function (it) { return (it.categoria || '') === c.categoria || (!it.categoria && c.categoria === (en ? 'Other' : 'Otros')); })
              .map(function (it) { return { concepto: <GastoConFactura it={it} en={en} />, monto: dec(it.monto) }; });
            return <ExpenseCategory key={c.categoria} name={en ? (inf.categoriaEN || c.categoria) : c.categoria} description={en ? (inf.descripcionEN || inf.descripcion || '') : (inf.descripcion || '')}
              total={window.prFmt(c.total, lang)} pct={p.gastado ? String(Math.round(c.total / p.gastado * 1000) / 10).replace('.', en ? '.' : ',') : 0} items={items} />;
          }) : <p style={{ margin:0, fontSize:15, color:'var(--muted)' }}>{en ? 'No purchases yet.' : 'Todavía no hay compras.'}</p>}
          <a href={'#p-' + p.id} onClick={function (e) { e.preventDefault(); onOpen(p.id); }} style={{ display:'inline-block', marginTop:12, fontSize:15, fontWeight:700, color:'var(--ink)' }}>{en ? 'Get to know the project →' : 'Conoce el proyecto →'}</a>
        </div>) : null}
    </div>);
}

function Section({ id, eyebrow, titulo, lead, leadWide, children, tone }) {
  const solid = tone === 'coral' ? 'var(--nexos-coral)' : null;
  const light = !!solid;
  return (
    <section id={id} style={{ padding:'clamp(56px,8vw,96px) 0', background: solid || '#fff' }}>
      <div style={A.wrap}>
        {eyebrow ? <div style={{ ...A.eyebrow, color: light ? 'rgba(255,255,255,.75)' : A.eyebrow.color }}>{eyebrow}</div> : null}
        {titulo ? <h2 style={{ ...A.h2, color: light ? '#fff' : A.h2.color }}>{titulo}</h2> : null}
        {lead ? <p style={{ ...(leadWide ? { ...A.lead, maxWidth:'none', whiteSpace:'nowrap', overflowX:'auto' } : A.lead), color: light ? 'rgba(255,255,255,.85)' : A.lead.color }}>{lead}</p> : null}
        <div style={{ marginTop:34 }}>{children}</div>
      </div>
    </section>
  );
}

const NEXOS_EMPTY = { actualizado:'', totalUSD:'0,00', totalEgresos:'0,00', saldo:'0,00', totalDonaciones:0, notaTasas:'', porMoneda:[], metodos:[], movimientos:[], egresos:[], metodosDonacion:[], enlaceFacturas:'', enlaceFotos:'' };

function EditorialLandingExport() {
  const loadingData = !window.NEXOS_FIXTURE;
  const x = window.NEXOS_FIXTURE || NEXOS_EMPTY;
  const [lang, setLang] = React.useState(function(){ try { return localStorage.getItem('nexos.lang') === 'EN' ? 'EN' : 'ES'; } catch (e) { return 'ES'; } });
  React.useEffect(function(){ try { localStorage.setItem('nexos.lang', lang); } catch (e) {} document.documentElement.lang = lang === 'EN' ? 'en' : 'es'; }, [lang]);
  const d = window.nexosContent(lang); const u = d.ui;
  const P = lang === 'EN'
    ? { miraUso:'See how your help was used →', verTransparencia:'See everything in Transparency →', cargando:'Loading live figures…', buscarLead:'Type at least 3 letters to see your donations.', verGastos:'See expenses, receipts and photos in Transparency →', transpLead:'Every dollar received, every purchase with its receipt and every delivery with its photo.', escribenos:'Write to us on Instagram →', evidenciaTit:'Receipts and photos' }
    : { miraUso:'Mira en qué se usó tu ayuda →', verTransparencia:'Ver todo en Transparencia →', cargando:'Cargando cifras en vivo…', buscarLead:'Escribe al menos 3 letras y mira tus aportes.', verGastos:'Ver gastos, facturas y fotos en Transparencia →', transpLead:'Cada dólar recibido, cada compra con su factura y cada entrega con su foto.', escribenos:'Escríbenos por Instagram →', evidenciaTit:'Facturas y fotos' };
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const pal = t.palette || TWEAK_DEFAULTS.palette;
  React.useEffect(function(){
    const r = document.documentElement.style;
    r.setProperty('--accent', pal[0]);
    r.setProperty('--blue', pal[1]);
    r.setProperty('--ink', pal[2]);
    r.setProperty('--peach', pal[3]);
    r.setProperty('--nexos-coral', pal[0]);
    r.setProperty('--nexos-blue', pal[1]);
    r.setProperty('--blue-lt', '#87A5B7');
    r.setProperty('--amber', '#F4B044');
    r.setProperty('--muted', '#4E606D');
    r.setProperty('--line', 'color-mix(in oklab, ' + pal[2] + ' 8%, white)');
    r.setProperty('--soft', 'color-mix(in oklab, ' + pal[2] + ' 2%, white)');
    r.setProperty('--overlay-scrim', 'color-mix(in oklab, ' + pal[2] + ' 55%, transparent)');
    r.setProperty('--row-hover', 'color-mix(in oklab, ' + pal[0] + ' 7%, white)');
    r.setProperty('--shadow-cta', '0 14px 30px color-mix(in oklab, ' + pal[0] + ' 34%, transparent)');
    r.setProperty('--shadow-float', '0 12px 28px color-mix(in oklab, ' + pal[0] + ' 42%, transparent)');
  }, [pal.join()]);
  const scrimBase = t.overlay === 'Coral' ? pal[0] : t.overlay === 'Negro' ? '#0c0c0e' : pal[2];
  const [drawer, setDrawer] = React.useState(null);
  const [proyecto, setProyectoState] = React.useState(function(){ const h = (location.hash || '').match(/^#p-([\w-]+)$/); return h ? h[1] : null; });
  const setProyecto = function(id){
    setProyectoState(id);
    try { history.replaceState(null, '', id ? '#p-' + id : location.pathname + location.search); } catch (e) {}
  };
  const PAGINAS = ['inicio','proyectos','transparencia','nosotros'];
  const paginaDeHash = function(){ const h = (location.hash || '').replace('#',''); return h.indexOf('p-') === 0 ? 'proyectos' : (PAGINAS.indexOf(h) > -1 ? h : 'inicio'); };
  const [pagina, setPagina] = React.useState(paginaDeHash);
  React.useEffect(function(){
    function onHash(){
      const h = (location.hash || '').match(/^#p-([\w-]+)$/); setProyectoState(h ? h[1] : null);
      if (!h) { setPagina(paginaDeHash()); window.scrollTo(0, 0); }
    }
    window.addEventListener('hashchange', onHash); return function(){ window.removeEventListener('hashchange', onHash); };
  }, []);
  const [donar, setDonar] = React.useState(false);
  const [zoom, setZoom] = React.useState(null);
  const [q, setQ] = React.useState(''); const [met, setMet] = React.useState('');
  const busca = q.trim();
  const listos = busca.length >= 3;
  const encontrados = listos ? x.movimientos.filter(function(m){
    if (m.donante.toLowerCase().indexOf(busca.toLowerCase()) === -1) return false;
    if (met && m.metodo !== met) return false; return true;
  }) : [];
  const TOPE = 25;
  const rows = encontrados.slice(0, TOPE);
  Object.assign(P, lang === 'EN' ? {
    heroTitulo:'Create Nexos. Transform realities. <span style="color:var(--amber)">Build community.</span>',
    heroBajada:'Social and environmental impact projects in Venezuela  •  We are the bridge between those who want to help and real needs',
    conoceProyectos:'See the projects →', comoEy:'How it works', comoTit:'Impact projects funded together',
    pasos:[['Give from wherever you are','Pesos, bolívares, euros, dollars or crypto. It all goes into one fund.'],['We turn it into projects','We work directly with communities, identify needs and carry out solutions.'],['We publish everything','Total transparency. You can search every donation received and see where each dollar was invested.']],
    cuentasEy:'Clear accounts', cuentasTit:'Since June 24', recibimos:'We received', invertimos:'We invested', disponible:'Available',
    enDonaciones:function(n){ return 'in ' + n + ' donations'; }, enCompras:function(n){ return 'in ' + n + ' purchases with invoice'; }, paraProyectos:'for the projects in progress', verCadaGasto:'See every expense →',
    empezamosEy:'Where we started', cierreTit:'The next project starts with you', cierreTxt:'Tap Donate, choose the payment method and copy the details.',
    transpTit:'Every dollar, <span style="color:var(--amber)">in plain sight</span>', transpLead2:'',
    porProyEy:'By project', porProyTit:'Where it was invested', pruebasEy:'The proof', pruebasTxt:'Every invoice and every photo, sorted by date in open folders. Check them whenever you want.',
    verFacturas:'See invoices ↗', verFotos:'See photos ↗', buscarTit:'Donated? Find your name', buscarSub:'Thank you for helping, donations are the engine of our work.',
    misionHtml:'We are <span style="color:var(--amber)">the bridge</span> between those who want to help and the real needs of our country.', nosotrosEy:'About us',
    misionTxt:'Direct, human and transparent aid.',
    quienesEy:'Who we are', quienesTit:'From the emergency to projects',
    quienesTxt:'We are a group of organized civilians who, after the earthquake, decided to form a group dedicated to humanitarian aid. At first we focused on the emergency in the zona cero, but the will stayed over time and we have been transforming to keep supporting those who need it, creating impact and growing together.',
    pilares:[['Our purpose','To build a better country through social and environmental impact projects.'],['How we do it','Absolute transparency, collaborative networks and direct contact with communities.']],
    aliadosTit:'Partners',
    conQuienEy:'Who we work with', puenteTit:'Be part of it. Every bit of help counts.', puenteTxt:'Donate, share or write to us on IG @somos.nexosve',
    faqNuevas:[{ q:'Which project does my donation go to?', a:'To the common NEXOS fund. From there we invest it in the projects in progress, starting with the most urgent.' },{ q:'What is the available fund?', a:'What we received and haven’t invested yet. It goes to the projects in progress and the ones coming next.' }]
  } : {
    heroTitulo:'Crear Nexos. Transformar realidades. <span style="color:var(--amber)">Construir comunidad.</span>',
    heroBajada:'Proyectos de Impacto Social y Ambiental en Venezuela  •  Somos el puente entre quienes quieren ayudar y las necesidades reales',
    conoceProyectos:'Conoce los proyectos →', comoEy:'Cómo funciona', comoTit:'Proyectos de impacto financiados en colectivo',
    pasos:[['Donas desde donde estés','Pesos, bolívares, euros, dólares o cripto. Todo llega a un mismo fondo.'],['Lo convertimos en proyectos','Trabajamos directo con las comunidades, identificamos necesidades y llevamos a cabo soluciones.'],['Publicamos todo','Transparencia absoluta. Puedes buscar todas las donaciones recibidas y en qué se ha invertido cada dólar.']],
    cuentasEy:'Las cuentas, claras', cuentasTit:'Desde el 24 de junio', recibimos:'Recibimos', invertimos:'Invertimos', disponible:'Disponible',
    enDonaciones:function(n){ return 'en ' + n + ' donaciones'; }, enCompras:function(n){ return 'en ' + n + ' compras con factura'; }, paraProyectos:'para los proyectos en curso', verCadaGasto:'Ver cada gasto →',
    empezamosEy:'Donde empezamos', cierreTit:'El próximo proyecto empieza con tu aporte', cierreTxt:'Toca Donar, elige el medio de pago y copia los datos.',
    transpTit:'Cada dólar, <span style="color:var(--amber)">a la vista</span>',
    porProyEy:'Por proyecto', porProyTit:'En qué se invirtió', pruebasEy:'Las pruebas', pruebasTxt:'Cada factura y cada foto, ordenadas por fecha en carpetas abiertas. Revísalas cuando quieras.',
    verFacturas:'Ver facturas ↗', verFotos:'Ver fotos ↗', buscarTit:'¿Donaste? Busca tu nombre', buscarSub:'Gracias por ayudar, las donaciones son el motor de nuestra acción.',
    misionHtml:'Somos <span style="color:var(--amber)">el puente</span> entre los que quieren ayudar y las necesidades reales de nuestro país.', nosotrosEy:'Nosotros',
    misionTxt:'Ayuda directa, humana y transparente.',
    quienesEy:'Quiénes somos', quienesTit:'De la emergencia a los proyectos',
    quienesTxt:'Somos un grupo de civiles organizados que, a raíz del terremoto, decidimos formar una agrupación dedicada a la ayuda humanitaria. En principio nos enfocamos en atender la emergencia en la zona cero, pero la voluntad se mantuvo en el tiempo y nos hemos ido transformando para seguir apoyando a quienes lo necesitan, generando impacto y creciendo juntos.',
    pilares:[['Nuestro propósito','Construir un mejor país a través de proyectos de impacto social y ambiental.'],['Cómo lo hacemos','Transparencia absoluta, redes colaborativas y contacto directo con las comunidades.']],
    aliadosTit:'Aliados',
    conQuienEy:'Con quién trabajamos', puenteTit:'Sé parte. Toda ayuda suma.', puenteTxt:'Dona, comparte o escríbenos en IG @somos.nexosve',
    faqNuevas:[{ q:'¿A qué proyecto va mi donación?', a:'Al fondo común de NEXOS. Desde ahí la invertimos en los proyectos en curso, empezando por lo más urgente.' },{ q:'¿Qué es el fondo disponible?', a:'Lo que recibimos y todavía no se invirtió. Se usa en los proyectos en curso y en los que vienen.' }]
  });
  P.transpLead = lang === 'EN' ? 'You can search every donation received and the expenses categorized by project.' : 'Puedes buscar todas las donaciones recibidas y los gastos categorizados por proyecto.';
  P.evidenciaTit = lang === 'EN' ? 'Invoices and photos' : 'Facturas y fotos';

  const proyectosTodos = loadingData ? [] : window.nexosProyectos(lang);
  const cerrado = proyectosTodos.filter(function(p){ return p.tipo === 'cerrado'; })[0];
  const proyectosOrden = proyectosTodos.slice().sort(function(a, b){ return b.gastado - a.gastado; });
  const totalProyectos = proyectosOrden.reduce(function(a, p){ return a + (p.gastado || 0); }, 0);
  const nCompras = proyectosOrden.reduce(function(a, p){ return a + p.compras.length; }, 0);
  const colorTipo = { cerrado:'var(--ink)', curso:'var(--accent)', pronto:'var(--amber)' };

  function cuentas(conReparto) {
    if (loadingData) return <div style={{ color:'var(--muted)', fontSize:14 }}>{P.cargando}</div>;
    const tile = { borderRadius:18, padding:22, display:'flex', flexDirection:'column', gap:4 };
    const num = { fontFamily:'var(--font-display)', fontSize:'clamp(26px,3vw,32px)', fontWeight:700, fontVariantNumeric:'tabular-nums' };
    return (<React.Fragment>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))', gap:16 }}>
        <div style={{ ...tile, background:'var(--steel-1)' }}><span style={{ fontSize:14, fontWeight:700, color:'var(--muted)' }}>{P.recibimos}</span><b style={num}>US$ {x.totalUSD}</b><span style={{ fontSize:14, color:'var(--muted)' }}>{P.enDonaciones(window.prFmt(x.totalDonaciones, lang))}</span></div>
        <div style={{ ...tile, background:'var(--steel-1)' }}><span style={{ fontSize:14, fontWeight:700, color:'var(--muted)' }}>{P.invertimos}</span><b style={num}>US$ {x.totalEgresos}</b><span style={{ fontSize:14, color:'var(--muted)' }}>{nCompras ? P.enCompras(window.prFmt(nCompras, lang)) : ''}</span></div>
        <div style={{ ...tile, background:'var(--ink)', color:'#fff' }}><span style={{ fontSize:14, fontWeight:700, color:'var(--amber)' }}>{P.disponible}</span><b style={num}>US$ {x.saldo}</b><span style={{ fontSize:14, color:'var(--on-ink-soft)' }}>{P.paraProyectos}</span></div>
      </div>
      {conReparto && totalProyectos ? <React.Fragment>
        <div aria-hidden="true" style={{ display:'flex', height:14, borderRadius:999, overflow:'hidden', gap:3, marginTop:22 }}>
          {proyectosOrden.filter(function(p){ return p.gastado > 0; }).map(function(p){ return <div key={p.id} style={{ flex:p.gastado, minWidth:8, background:colorTipo[p.tipo] }}></div>; })}
        </div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:'8px 24px', fontSize:14, alignItems:'center', marginTop:12 }}>
          {proyectosOrden.filter(function(p){ return p.gastado > 0; }).map(function(p){ return <span key={p.id}><span style={{ display:'inline-block', width:10, height:10, borderRadius:'50%', background:colorTipo[p.tipo], marginRight:6 }}></span>{p.nombre} · US$ {window.prFmt(p.gastado, lang)}</span>; })}
          <a href="#transparencia" style={{ marginLeft:'auto', fontWeight:700, color:'var(--ink)' }}>{P.verCadaGasto}</a>
        </div>
      </React.Fragment> : null}
    </React.Fragment>);
  }

  function buscador(id, lead, tinted) {
    return (<section id={id} style={{ background: tinted ? 'var(--steel-1)' : '#fff', padding:'clamp(48px,7vw,60px) 0' }}>
      <div style={A.wrap}>
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:28, fontWeight:700, margin:0, color:'var(--ink)' }}>{P.buscarTit}</h2>
        <p style={{ fontSize:15, color:'var(--muted)', margin:'6px 0 18px' }}>{P.buscarSub}</p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:10, marginBottom:14 }}>
          <SearchInput placeholder={u.buscar} value={q} onChange={function(e){ setQ(e.target.value); }} />
          <FilterSelect placeholder={u.todosMetodos} options={x.metodos} value={met} onChange={function(e){ setMet(e.target.value); }} />
        </div>
        {!listos
          ? <EmptyState>{u.vacio}</EmptyState>
          : encontrados.length === 0
            ? <EmptyState>{u.sinResultados}</EmptyState>
            : <React.Fragment>
                <Card pad="6px 8px"><DonationsTable rows={rows} /></Card>
                <div style={{ fontSize:12, color:'var(--muted)', marginTop:12, textAlign:'center' }}>
                  {encontrados.length > TOPE ? u.mostrando(TOPE, encontrados.length) : u.resultados(encontrados.length)}
                </div>
              </React.Fragment>}
      </div>
    </section>);
  }

  function cierre(titulo, texto) {
    return (<section style={{ background:'var(--warm)', borderTop:'1px solid var(--line)' }}>
      <div style={{ ...A.wrap, padding:'clamp(40px,6vw,56px) 24px', display:'flex', flexWrap:'wrap', gap:24, alignItems:'center', justifyContent:'space-between' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:8, maxWidth:660 }}>
          <h2 style={{ ...A.h2, fontSize:'clamp(24px,3vw,32px)', margin:0 }}>{titulo}</h2>
          <p style={{ margin:0, fontSize:16, lineHeight:1.6, color:'var(--muted)' }}>{texto}</p>
        </div>
        <Button variant="primary" onClick={function(){ setDonar(true); }} style={{ width:'auto', padding:'16px 34px', fontSize:16, whiteSpace:'nowrap' }}>{u.donar}</Button>
      </div>
    </section>);
  }

  const boletin = (
      <section id="historias" style={{ background:'var(--nexos-blue)', overflow:'hidden' }}>
        <div style={{ overflow:'hidden', borderBottom:'1px solid rgba(255,255,255,.2)', padding:'16px 0' }}>
          <div className="nx-marquee" style={{ display:'flex', gap:40, whiteSpace:'nowrap', width:'max-content', fontSize:16, fontWeight:700, color:'#fff' }}>
            {[0,1,2,3].map(function(k){ return u.boletinCinta.map(function(t, i){ return <React.Fragment key={k + '-' + i}><span>{t}</span><span style={{ color:'var(--amber)' }}>●</span></React.Fragment>; }); })}
          </div>
        </div>
        <div style={{ ...A.wrap, padding:'clamp(48px,7vw,84px) 24px', display:'flex', flexDirection:'column', gap:16, alignItems:'flex-start' }}>
          <div style={{ fontSize:11, fontWeight:800, letterSpacing:1.6, textTransform:'uppercase', color:'var(--amber)' }}>{u.boletinEyebrow}</div>
          <h2 style={{ ...A.h2, color:'#fff', margin:0, maxWidth:720, textWrap:'balance' }}>{u.boletinTitulo}</h2>
          <p style={{ fontSize:16, lineHeight:1.7, color:'var(--on-ink-soft)', margin:0, maxWidth:560 }}>{u.boletinTexto}</p>
          <a href="https://somosnexos.substack.com" target="_blank" rel="noopener" style={{ display:'inline-block', marginTop:8, background:'var(--amber)', color:'var(--ink)', fontWeight:800, fontSize:15, padding:'14px 26px', borderRadius:999, textDecoration:'none' }}>{u.boletinBoton}</a>
        </div>
      </section>);

  return (
    <div id="top" style={{ background:'#fff' }}>
      <NavBar onOpen={setDrawer} onDonate={function(){ setDonar(true); }} lang={lang} setLang={setLang} forceSolid={t.portada !== 'Foto'} />
      {proyecto ? <ProyectoPage lang={lang} id={proyecto} onClose={function(){ setProyecto(null); }} onDonate={function(){ setDonar(true); }} /> : null}

      {!proyecto && pagina === 'inicio' ? (<React.Fragment>
      <section style={{ background:'var(--ink)', color:'#fff' }}>
        <div style={{ ...A.wrap, paddingTop:'clamp(52px,8vw,64px)', paddingBottom:'clamp(52px,8vw,64px)', display:'flex', flexDirection:'column', gap:18, alignItems:'flex-start' }}>
          <div style={{ ...A.eyebrow, color:'var(--amber)' }}>{d.hero.eyebrow}</div>
          <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(34px,5.6vw,56px)', fontWeight:800, lineHeight:1.04, letterSpacing:'-1.6px', color:'#fff', margin:0, maxWidth:860, textWrap:'balance' }} dangerouslySetInnerHTML={{ __html:P.heroTitulo }} />
          <p style={{ fontSize:'clamp(16px,1.7vw,18px)', lineHeight:1.6, color:'var(--on-ink-soft)', maxWidth:640, margin:0 }}>{P.heroBajada}</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'14px 22px', alignItems:'center' }}>
            <Button variant="primary" onClick={function(){ setDonar(true); }} style={{ width:'auto', padding:'16px 30px', fontSize:17, whiteSpace:'nowrap' }}>{u.donar}</Button>
            <a href="#proyectos" style={{ fontSize:15, fontWeight:700, color:'#fff' }}>{P.conoceProyectos}</a>
          </div>
        </div>
      </section>

      <section style={{ padding:'clamp(56px,8vw,80px) 0 clamp(48px,7vw,64px)' }}>
        <div style={A.wrap}>
          <div style={A.eyebrow}>{P.comoEy}</div>
          <h2 style={A.h2}>{P.comoTit}</h2>
          <ol style={{ listStyle:'none', margin:'30px 0 0', padding:0, display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:18 }}>
            {P.pasos.map(function(s, i){
              const c = ['var(--accent)','var(--blue-lt)','var(--ink)'][i];
              return (<li key={i} style={{ borderTop:'4px solid ' + c, paddingTop:18, display:'flex', flexDirection:'column', gap:8 }}>
                <b style={{ fontFamily:'var(--font-display)', fontSize:15, color: i === 0 ? 'var(--accent-text)' : i === 1 ? 'var(--muted)' : 'var(--ink)' }}>{'0' + (i + 1)}</b>
                <b style={{ fontSize:20 }}>{s[0]}</b>
                <span style={{ fontSize:16, lineHeight:1.6, color:'var(--muted)' }}>{s[1]}</span>
              </li>);
            })}
          </ol>
        </div>
      </section>

      <ProyectosSection lang={lang} onOpen={setProyecto} />

      <section style={{ padding:'clamp(56px,8vw,72px) 0' }}>
        <div style={A.wrap}>
          <div style={A.eyebrow}>{P.cuentasEy}</div>
          <h2 style={A.h2}>{P.cuentasTit}</h2>
          <div style={{ marginTop:26 }}>{cuentas(true)}</div>
        </div>
      </section>

      {cerrado ? (
        <section style={{ background:'var(--ink)', padding:'clamp(48px,7vw,64px) 0' }}>
          <div style={{ ...A.wrap, display:'flex', flexDirection:'column', gap:18 }}>
            <div style={{ ...A.eyebrow, color:'var(--amber)' }}>{P.empezamosEy}</div>
            <window.ZonaCerradaCard p={cerrado} lang={lang} onOpen={setProyecto} grande={true} />
          </div>
        </section>) : null}

      {buscador('reporte', P.buscarLead, false)}

      {boletin}

      {cierre(P.cierreTit, P.cierreTxt)}
      </React.Fragment>) : null}

      {!proyecto && pagina === 'proyectos' ? <ProyectosPagina lang={lang} onOpen={setProyecto} onDonate={function(){ setDonar(true); }} /> : null}

      {!proyecto && pagina === 'transparencia' ? (<React.Fragment>
      <section style={{ background:'var(--ink)', color:'#fff' }}>
        <div style={{ ...A.wrap, paddingTop:'clamp(48px,8vw,64px)', paddingBottom:'clamp(44px,7vw,56px)', display:'flex', flexDirection:'column', gap:18, alignItems:'flex-start' }}>
          <div style={{ ...A.eyebrow, color:'var(--amber)' }}>{d.ventanas.evidencia.titulo}</div>
          <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(32px,5vw,52px)', fontWeight:700, lineHeight:1.06, letterSpacing:'-1.4px', margin:0, maxWidth:860 }} dangerouslySetInnerHTML={{ __html:P.transpTit }} />
          <p style={{ fontSize:18, lineHeight:1.6, color:'var(--on-ink-soft)', maxWidth:680, margin:0 }}>{P.transpLead}</p>
        </div>
      </section>
      <section id="cifras" style={{ padding:'clamp(44px,7vw,56px) 0 clamp(36px,6vw,48px)' }}>
        <div style={A.wrap}>
          {cuentas(false)}
          {!loadingData && x.porMoneda.length ? <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(170px,1fr))', gap:14, marginTop:22 }}>
            {x.porMoneda.map(function(m){ return <CurrencyCard key={m.moneda} {...m} />; })}
          </div> : null}
          {!loadingData && x.notaTasas ? <p style={{ fontSize:14, color:'var(--muted)', margin:'16px 0 0', lineHeight:1.6 }}>{x.notaTasas}</p> : null}
        </div>
      </section>

      {buscador('reporte', u.reporteLead, true)}

      <section id="por-proyecto" style={{ padding:'clamp(56px,8vw,64px) 0' }}>
        <div style={A.wrap}>
          <div style={A.eyebrow}>{P.porProyEy}</div>
          <h2 style={A.h2}>{P.porProyTit}</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:16, marginTop:26 }}>
            {loadingData ? <div style={{ color:'var(--muted)', fontSize:14 }}>{P.cargando}</div>
              : proyectosOrden.map(function(p, i){ return <ProyectoCuentas key={p.id} p={p} lang={lang} total={totalProyectos} abierto={window.__nxAbrir ? window.__nxAbrir === p.id : i === 0} onOpen={setProyecto} />; })}
          </div>
        </div>
      </section>

      <section id="evidencia" style={{ background:'var(--ink)', color:'#fff' }}>
        <div style={{ ...A.wrap, padding:'clamp(48px,7vw,60px) 24px', display:'flex', flexWrap:'wrap', gap:'24px 48px', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ flex:'1 1 440px', minWidth:0, display:'flex', flexDirection:'column', gap:12 }}>
            <div style={{ ...A.eyebrow, color:'var(--amber)' }}>{P.pruebasEy}</div>
            <h2 style={{ ...A.h2, color:'#fff', margin:0 }}>{P.evidenciaTit}</h2>
            <p style={{ margin:0, fontSize:17, lineHeight:1.7, color:'var(--on-ink-soft)' }}>{P.pruebasTxt}</p>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:12 }}>
            {x.enlaceFacturas ? <a href={x.enlaceFacturas} target="_blank" rel="noopener" style={{ background:'var(--amber)', color:'var(--ink)', fontWeight:800, borderRadius:999, padding:'0 26px', minHeight:50, display:'inline-flex', alignItems:'center', textDecoration:'none' }}>{P.verFacturas}</a> : null}
            {x.enlaceFotos ? <a href={x.enlaceFotos} target="_blank" rel="noopener" style={{ border:'2px solid var(--blue-lt)', color:'#fff', fontWeight:800, borderRadius:999, padding:'0 26px', minHeight:50, display:'inline-flex', alignItems:'center', textDecoration:'none', boxSizing:'border-box' }}>{P.verFotos}</a> : null}
          </div>
        </div>
      </section>
      </React.Fragment>) : null}

      {!proyecto && pagina === 'nosotros' ? (<React.Fragment>
      <section style={{ background:'var(--ink)', color:'#fff' }}>
        <div style={{ ...A.wrap, paddingTop:'clamp(48px,8vw,64px)', paddingBottom:'clamp(48px,8vw,64px)', display:'flex', flexWrap:'wrap', gap:44, alignItems:'center' }}>
          <div style={{ flex:'1 1 460px', minWidth:0, display:'flex', flexDirection:'column', gap:18 }}>
            <div style={{ ...A.eyebrow, color:'var(--amber)' }}>{P.nosotrosEy}</div>
            <p style={{ fontFamily:'var(--font-display)', fontSize:'clamp(24px,3.4vw,34px)', lineHeight:1.3, fontWeight:700, letterSpacing:'-.4px', margin:0 }} dangerouslySetInnerHTML={{ __html:P.misionHtml }} />
            <p style={{ fontSize:18, lineHeight:1.7, color:'var(--on-ink-soft)', margin:0 }}>{P.misionTxt}</p>
          </div>
          {d.fotos[0] ? <img src={d.fotos[0].src} alt="" style={{ flex:'1 1 320px', minWidth:0, maxWidth:'100%', aspectRatio:'4/5', objectFit:'cover', borderRadius:22 }} /> : null}
        </div>
      </section>
      <section style={{ padding:'clamp(56px,8vw,72px) 0' }}>
        <div style={A.wrap}>
          <div style={A.eyebrow}>{P.quienesEy}</div>
          <p style={{ fontSize:18, lineHeight:1.75, color:'var(--ink)', margin:'18px 0 0', maxWidth:820 }}>{P.quienesTxt}</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:20, marginTop:28 }}>
            {P.pilares.map(function(h, i){
              const dark = i === 0;
              return (<div key={i} style={{ background: dark ? 'var(--ink)' : 'var(--steel-1)', color: dark ? '#fff' : 'var(--ink)', borderRadius:20, padding:28, display:'flex', flexDirection:'column', gap:10 }}>
                <span style={{ fontSize:13, fontWeight:800, letterSpacing:1.2, textTransform:'uppercase', color: dark ? 'var(--amber)' : 'var(--accent-text)' }}>{h[0]}</span>
                <b style={{ fontFamily:'var(--font-display)', fontSize:21, lineHeight:1.35 }}>{h[1]}</b>
              </div>);
            })}
          </div>
          <PhotoStrip onZoom={setZoom} lang={lang} />
        </div>
      </section>
      <section id="aliados" style={{ background:'var(--steel-1)', padding:'clamp(48px,7vw,60px) 0' }}>
        <div style={A.wrap}>
          <h2 style={A.h2}>{P.aliadosTit}</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:14, marginTop:24 }}>
            {NX_ALIADOS.map(function(a){
              return (<div key={a.nombre} style={{ background:'#fff', borderRadius:16, padding:20, minHeight:96, display:'flex', alignItems:'center', gap:14 }}>
                {a.logo ? <img src={a.logo} alt="" style={{ width:52, height:52, objectFit:'contain', borderRadius:10, flexShrink:0 }} /> : null}
                <b style={{ fontSize:16, lineHeight:1.35 }}>{a.nombre}</b>
              </div>);
            })}
          </div>
        </div>
      </section>
      <Section id="faq" titulo={d.ventanas.faq.titulo}>
        <div style={{ maxWidth:820 }}>
          {P.faqNuevas.concat(d.ventanas.faq.items || []).map(function(it, i){ return <FaqRow key={i} q={it.q} a={it.a} open={i === 0} />; })}
        </div>
      </Section>
      {boletin}
      {cierre(P.puenteTit, P.puenteTxt)}
      </React.Fragment>) : null}

      <footer style={{ background:'var(--ink)', color:'rgba(255,255,255,.7)', padding:'54px 0 40px' }}>
        <div style={A.wrap}>
          <img src="logo-nexos-blanco.svg" alt="NEXOS" style={{ height:40, width:'auto', display:'block' }} />
          <p style={{ fontSize:14, lineHeight:1.7, margin:'14px 0 0', maxWidth:460 }}>{lang === 'EN' && x.taglineEn ? x.taglineEn : x.tagline}</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'18px 26px', margin:'30px 0 0', paddingTop:24, borderTop:'1px solid rgba(255,255,255,.16)' }}>
            {d.nav.map(function(n){ return <a key={n.id} href={'#' + n.id} style={{ color:'rgba(255,255,255,.7)', textDecoration:'none', fontSize:13.5 }}>{n.label}</a>; })}
            <a href="https://somosnexos.substack.com" target="_blank" rel="noopener" style={{ color:'rgba(255,255,255,.7)', textDecoration:'none', fontSize:13.5 }}>{lang === 'EN' ? 'Stories ↗' : 'Historias ↗'}</a>
            <a href="https://instagram.com/somos.nexosve" style={{ color:'#fff', textDecoration:'none', fontSize:13.5, fontWeight:700, marginLeft:'auto' }}>@somos.nexosve</a>
            <a href="https://www.instagram.com/isiselinor/" style={{ color:'inherit', textDecoration:'none', fontSize:12 }}>{u.creditoSistema}</a>
          </div>
        </div>
      </footer>

      <div style={{ position:'fixed', left:0, right:0, bottom:0, zIndex:30, padding:12, display:'none', background:'rgba(255,255,255,.94)', borderTop:'1px solid var(--line)', backdropFilter:'blur(10px)' }} className="mobile-cta">
        <Button variant="primary" onClick={function(){ setDonar(true); }} style={{ width:'100%' }}>{u.donarAhora}</Button>
      </div>

      <LightboxExport index={zoom} fotos={d.fotos} onClose={function(){ setZoom(null); }} onIndex={setZoom} />
      {t.subventana === 'Página'
        ? <SectionPageExport lang={lang} id={drawer} onClose={function(){ setDrawer(null); }} onOpen={setDrawer} onDonate={function(){ setDonar(true); }} />
        : <SectionWindowExport lang={lang} variant={t.winHeader === 'Coral' ? 'grafica' : 'editorial'} id={drawer} onClose={function(){ setDrawer(null); }} onOpen={setDrawer} onDonate={function(){ setDonar(true); }} />}
      <DonateModal open={donar} onClose={function(){ setDonar(false); }} notice={<span>{u.avisoModal[0]}<b style={{ color:'var(--accent)' }}>{u.avisoModal[1]}</b>{u.avisoModal[2]}</span>}>
        {x.metodosDonacion.map(function(m){ return <PaymentMethod key={m.metodo} name={m.metodo} fields={m.campos} />; })}
      </DonateModal>

      <window.TweaksPanel>
        <window.TweakSection label="Paleta" />
        <window.TweakColor label="Colores de marca" value={pal}
          options={[["#E0680E","#11354C","#11354C","#FFFFFF"],
                    ["#E0680E","#11354C","#141c33","#fde7e0"],
                    ["#d2542f","#23407f","#211a16","#f4e4d6"],
                    ["#E0680E","#12306b","#0e1a33","#e8eef9"],
                    ["#f04e28","#0b2a6b","#101014","#ffede6"]]}
          onChange={function(v){ setTweak('palette', v); }} />
        <window.TweakSection label="Portada" />
        <window.TweakSelect label="Encabezado" value={t.portada} options={['Sobrio','Centrado','Titular','Foto']}
          onChange={function(v){ setTweak('portada', v); }} />
        {t.portada === 'Foto' ? <window.TweakRadio label="Tono del degradado" value={t.overlay} options={['Navy','Coral','Negro']}
          onChange={function(v){ setTweak('overlay', v); }} /> : null}
        <window.TweakSection label="Sub-ventanas" />
        <window.TweakRadio label="Formato" value={t.subventana} options={['Página','Dos columnas']}
          onChange={function(v){ setTweak('subventana', v); }} />
        {t.subventana === 'Dos columnas' ? <window.TweakRadio label="Cabecera" value={t.winHeader} options={['Navy','Coral']}
          onChange={function(v){ setTweak('winHeader', v); }} /> : null}
      </window.TweaksPanel>
    </div>
  );
}

Object.assign(window, { EditorialLandingExport });
