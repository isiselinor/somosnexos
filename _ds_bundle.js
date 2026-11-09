/* @ds-bundle: {"format":4,"namespace":"NEXOSDesignSystem_0519e6","components":[{"name":"BrandHeader","sourcePath":"components/brand/BrandHeader.jsx"},{"name":"MissionStatement","sourcePath":"components/brand/MissionStatement.jsx"},{"name":"SiteFooter","sourcePath":"components/brand/SiteFooter.jsx"},{"name":"StepCard","sourcePath":"components/brand/StepCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CopyButton","sourcePath":"components/core/CopyButton.jsx"},{"name":"Notice","sourcePath":"components/core/Notice.jsx"},{"name":"SectionTitle","sourcePath":"components/core/SectionTitle.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"CurrencyCard","sourcePath":"components/data/CurrencyCard.jsx"},{"name":"DetailField","sourcePath":"components/data/DetailField.jsx"},{"name":"DonationsTable","sourcePath":"components/data/DonationsTable.jsx"},{"name":"EmptyState","sourcePath":"components/data/EmptyState.jsx"},{"name":"ExpenseCategory","sourcePath":"components/data/ExpenseCategory.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"FilterSelect","sourcePath":"components/forms/FilterSelect.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"DonateModal","sourcePath":"components/overlay/DonateModal.jsx"},{"name":"DriveLinkButton","sourcePath":"components/overlay/DriveLinkButton.jsx"},{"name":"PaymentMethod","sourcePath":"components/overlay/PaymentMethod.jsx"}],"sourceHashes":{"components/brand/BrandHeader.jsx":"0a808ae5f2b4","components/brand/MissionStatement.jsx":"6e77243a9695","components/brand/SiteFooter.jsx":"a5760c3c729a","components/brand/StepCard.jsx":"72d94a372aaa","components/core/Button.jsx":"6d84b99b592d","components/core/Card.jsx":"6cd33af4114b","components/core/CopyButton.jsx":"2ea1cbbb5bcf","components/core/Notice.jsx":"df34950aacb9","components/core/SectionTitle.jsx":"4a08e3d1efeb","components/core/Tag.jsx":"87390c2a1d8b","components/data/CurrencyCard.jsx":"46fb6568cbd9","components/data/DetailField.jsx":"8ca70f412fff","components/data/DonationsTable.jsx":"76a23bccd187","components/data/EmptyState.jsx":"65c45917b933","components/data/ExpenseCategory.jsx":"d9df8e719496","components/data/StatCard.jsx":"19a743b1b380","components/forms/FilterSelect.jsx":"96ff9834f15f","components/forms/SearchInput.jsx":"71d4096cfc39","components/overlay/DonateModal.jsx":"6dae2ac76f7d","components/overlay/DriveLinkButton.jsx":"64ddc736fa61","components/overlay/PaymentMethod.jsx":"93b934c5bce8","ui_kits/donations-site/ReportScreen.jsx":"eb7c26f71912","ui_kits/donations-site/data.js":"2d184e03e46c","ui_kits/landing/EditorialLanding.jsx":"f37f3114a518","ui_kits/landing/GraphicLanding.jsx":"06b384fb55da","ui_kits/landing/Lightbox.jsx":"9784b950164a","ui_kits/landing/SectionPage.jsx":"9057694be6c4","ui_kits/landing/SectionWindow.jsx":"5e29fbc3b97b","ui_kits/landing/content.js":"f06bab260e87","ui_kits/landing/data-source.js":"6a0408dd5849","ui_kits/landing/export/EditorialLandingExport.jsx":"a250013c0c39","ui_kits/landing/export/LightboxExport.jsx":"3f692c1639de","ui_kits/landing/export/SectionPageExport.jsx":"f603296a5cb3","ui_kits/landing/export/SectionWindowExport.jsx":"8d606ec3f4d0","ui_kits/landing/export/content.js":"c7767dc99ce2","ui_kits/landing/export/data-source.js":"6a0408dd5849","ui_kits/landing/export/image-slot.js":"fff26d081c8d","ui_kits/landing/export/tweaks-panel.jsx":"d259e3a86f73","ui_kits/landing/image-slot.js":"fff26d081c8d","ui_kits/landing/tweaks-panel.jsx":"d259e3a86f73"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NEXOSDesignSystem_0519e6 = window.NEXOSDesignSystem_0519e6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/MissionStatement.jsx
try { (() => {
function MissionStatement({
  label = 'Nuestra misión',
  children,
  html,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-prose)',
      margin: 'var(--space-12) auto var(--space-3)',
      textAlign: 'center',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-label)',
      fontWeight: 'var(--weight-black)',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--accent)',
      textTransform: 'uppercase',
      marginBottom: 'var(--space-5)'
    }
  }, label), html ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-prose)',
      color: 'var(--text-body)',
      textAlign: 'justify',
      textAlignLast: 'center'
    },
    dangerouslySetInnerHTML: {
      __html: html
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-prose)',
      color: 'var(--text-body)',
      textAlign: 'justify',
      textAlignLast: 'center'
    }
  }, children));
}
Object.assign(__ds_scope, { MissionStatement });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/MissionStatement.jsx", error: String((e && e.message) || e) }); }

// components/brand/SiteFooter.jsx
try { (() => {
function SiteFooter({
  tagline,
  creditLabel = 'Sistema creado por',
  creditName = 'Isis Elinor',
  creditHref = 'https://www.instagram.com/isiselinor/',
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)',
      textAlign: 'center',
      margin: 'var(--space-14) 0 90px',
      paddingTop: 'var(--space-8)',
      borderTop: '1px solid var(--line)',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, tagline ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      margin: '0 0 var(--space-4)'
    }
  }, tagline) : null, /*#__PURE__*/React.createElement("span", null, creditLabel, " "), /*#__PURE__*/React.createElement("a", {
    href: creditHref,
    target: "_blank",
    rel: "noopener",
    style: {
      color: 'var(--blue)',
      textDecoration: 'none',
      fontWeight: 'var(--weight-medium)'
    }
  }, creditName));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/brand/StepCard.jsx
try { (() => {
function StepCard({
  n,
  title,
  children,
  html,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      boxShadow: 'var(--shadow-card)',
      borderRadius: 'var(--radius-step)',
      padding: 'var(--pad-step)',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      marginBottom: '5px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-step)',
      fontWeight: 'var(--weight-black)',
      color: 'var(--accent)',
      lineHeight: 'var(--leading-tight)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-heading)',
      fontSize: 'var(--text-sm-plus)'
    }
  }, title)), html ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs-plus)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-body)'
    },
    dangerouslySetInnerHTML: {
      __html: html
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs-plus)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { StepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StepCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-5)',
  fontFamily: 'var(--font-ui)',
  fontWeight: 'var(--weight-black)',
  cursor: 'pointer',
  border: 'none',
  textDecoration: 'none',
  lineHeight: 'var(--leading-tight)',
  transition: 'transform var(--dur-fast), filter var(--dur-fast)'
};
const variants = {
  primary: {
    background: 'var(--action-primary-bg)',
    color: 'var(--action-primary-fg)',
    borderRadius: 'var(--radius-pill)',
    padding: '17px',
    fontSize: '20px',
    letterSpacing: '.2px',
    width: 'var(--width-cta)',
    maxWidth: '100%',
    boxShadow: 'var(--shadow-cta)'
  },
  primarySmall: {
    background: 'var(--action-primary-bg)',
    color: 'var(--action-primary-fg)',
    borderRadius: 'var(--radius-pill)',
    padding: '10px 18px',
    fontSize: 'var(--text-base)'
  },
  floating: {
    background: 'var(--action-primary-bg)',
    color: 'var(--action-primary-fg)',
    borderRadius: 'var(--radius-pill)',
    padding: '16px 26px',
    fontSize: '17px',
    boxShadow: 'var(--shadow-float)'
  },
  quiet: {
    background: 'var(--action-quiet-bg)',
    color: 'var(--action-quiet-fg)',
    border: 'var(--border-card)',
    borderRadius: 'var(--radius-pill)',
    padding: '10px 16px',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--weight-semibold)',
    gap: 'var(--space-3)',
    boxShadow: 'var(--shadow-card)'
  },
  quietBlue: {
    background: 'var(--action-quiet-bg)',
    color: 'var(--blue)',
    border: 'var(--border-card)',
    borderRadius: 'var(--radius-pill)',
    padding: '10px 16px',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--weight-semibold)',
    gap: 'var(--space-3)',
    boxShadow: 'var(--shadow-card)'
  }
};
function Button({
  variant = 'primary',
  as,
  href,
  children,
  style,
  disabled,
  ...rest
}) {
  const Tag = as || (href ? 'a' : 'button');
  const s = {
    ...base,
    ...(variants[variant] || variants.primary),
    ...(disabled ? {
      opacity: .5,
      cursor: 'not-allowed'
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: s,
    disabled: Tag === 'button' ? disabled : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/BrandHeader.jsx
try { (() => {
const igIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  style: {
    width: 16,
    height: 16
  }
}, /*#__PURE__*/React.createElement("rect", {
  x: "2.5",
  y: "2.5",
  width: "19",
  height: "19",
  rx: "5.2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4.2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17.6",
  cy: "6.4",
  r: "1.1",
  fill: "currentColor",
  stroke: "none"
}));
function BrandHeader({
  logoSrc,
  wordmark = 'NEXOS',
  instagram = 'https://instagram.com/somos.nexosve',
  lang = 'EN',
  onToggleLang,
  subline,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "quietBlue",
    href: instagram,
    target: "_blank",
    rel: "noopener",
    style: {
      justifySelf: 'start'
    }
  }, igIcon, /*#__PURE__*/React.createElement("span", null, "Instagram")), /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: 'center',
      minWidth: 0,
      display: 'flex',
      alignItems: 'center',
      gap: '13px'
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: wordmark,
    style: {
      height: 78,
      width: 'auto',
      display: 'block'
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-wordmark)',
      fontWeight: 'var(--weight-black)',
      letterSpacing: 'var(--tracking-wordmark)',
      color: 'var(--blue)',
      lineHeight: 'var(--leading-tight)',
      fontFamily: 'var(--font-display)'
    }
  }, wordmark)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "quiet",
    onClick: onToggleLang,
    style: {
      justifySelf: 'end'
    }
  }, lang)), subline ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#b3b8c4',
      fontSize: 'var(--text-micro)',
      textAlign: 'center',
      margin: '5px 0 var(--space-7)'
    }
  }, subline) : null);
}
Object.assign(__ds_scope, { BrandHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BrandHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  radius = 'var(--radius-card)',
  pad = 'var(--pad-card)',
  accentTop,
  children,
  style,
  ...rest
}) {
  const s = {
    background: 'var(--surface-card)',
    border: 'var(--border-card)',
    boxShadow: 'var(--shadow-card)',
    borderRadius: radius,
    padding: pad,
    ...(accentTop ? {
      borderTop: 'var(--border-stat-top) solid ' + accentTop
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/CopyButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CopyButton({
  value = '',
  label = 'Copiar',
  copiedLabel = '✓ Copiado',
  style,
  ...rest
}) {
  const [ok, setOk] = React.useState(false);
  function onClick() {
    try {
      navigator.clipboard && navigator.clipboard.writeText(value);
    } catch (e) {}
    setOk(true);
    setTimeout(function () {
      setOk(false);
    }, 1400);
  }
  const s = {
    background: ok ? 'var(--accent)' : 'var(--surface-notice)',
    color: ok ? 'var(--white)' : 'var(--accent)',
    border: 'none',
    borderRadius: 'var(--radius-xs)',
    padding: '5px 10px',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--weight-semibold)',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    fontFamily: 'var(--font-ui)',
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: s
  }, rest), ok ? copiedLabel : label);
}
Object.assign(__ds_scope, { CopyButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CopyButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Notice.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Notice({
  children,
  style,
  ...rest
}) {
  const s = {
    background: 'var(--surface-notice)',
    border: '1px solid var(--accent)',
    borderRadius: 'var(--radius-sm)',
    padding: '8px 10px',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--leading-body)',
    color: 'var(--text-body)',
    fontFamily: 'var(--font-ui)',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { Notice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Notice.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionTitle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionTitle({
  children,
  style,
  ...rest
}) {
  const s = {
    fontSize: 'var(--text-section)',
    margin: 'var(--space-16) 0 var(--space-7)',
    color: 'var(--text-heading)',
    fontWeight: 'var(--weight-black)',
    letterSpacing: 'var(--tracking-title)',
    fontFamily: 'var(--font-ui)',
    ...style
  };
  return /*#__PURE__*/React.createElement("h2", _extends({
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { SectionTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionTitle.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  style,
  ...rest
}) {
  const s = {
    fontSize: 'var(--text-label)',
    color: 'var(--blue)',
    border: '1px solid var(--blue-lt)',
    borderRadius: 'var(--radius-lg)',
    padding: '2px 8px',
    display: 'inline-block',
    fontFamily: 'var(--font-ui)',
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/CurrencyCard.jsx
try { (() => {
function CurrencyCard({
  symbol,
  currency,
  simbolo,
  moneda,
  total,
  count,
  usd,
  countLabel = 'donaciones',
  style
}) {
  const sym = symbol != null ? symbol : simbolo;
  const cur = currency != null ? currency : moneda;
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    style: {
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--accent)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-sm)',
      letterSpacing: 'var(--tracking-caps)'
    }
  }, sym, " \xB7 ", cur), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-title)',
      fontWeight: 'var(--weight-black)',
      marginTop: 'var(--space-3)'
    }
  }, total), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-xs)',
      marginTop: 'var(--space-2)'
    }
  }, count, " ", countLabel), usd ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-xs)',
      marginTop: 'var(--space-2)'
    }
  }, "\u2248 US$ ", usd) : null);
}
Object.assign(__ds_scope, { CurrencyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/CurrencyCard.jsx", error: String((e && e.message) || e) }); }

// components/data/DetailField.jsx
try { (() => {
function DetailField({
  label,
  value,
  href,
  copyValue,
  first,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: 'var(--space-3) 0',
      borderTop: first ? 'none' : '1px dashed var(--line)',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-xs)'
    }
  }, label) : null, href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener",
    style: {
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-base)',
      wordBreak: 'break-all',
      textAlign: 'right',
      flex: 1,
      color: 'var(--blue)',
      textDecoration: 'none'
    }
  }, value) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-base)',
      wordBreak: 'break-all',
      textAlign: 'right',
      flex: 1
    }
  }, value), /*#__PURE__*/React.createElement(__ds_scope.CopyButton, {
    value: copyValue != null ? copyValue : String(value)
  }));
}
Object.assign(__ds_scope, { DetailField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DetailField.jsx", error: String((e && e.message) || e) }); }

// components/data/DonationsTable.jsx
try { (() => {
const th = {
  textAlign: 'left',
  padding: 'var(--pad-cell)',
  borderBottom: '1px solid var(--line)',
  color: 'var(--text-muted)',
  fontWeight: 'var(--weight-medium)',
  cursor: 'pointer',
  userSelect: 'none'
};
const td = {
  textAlign: 'left',
  padding: 'var(--pad-cell)',
  borderBottom: '1px solid var(--line)'
};
function DonationsTable({
  rows = [],
  columns,
  onSort,
  style
}) {
  const cols = columns || ['Donante', 'Método', 'Monto'];
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 'var(--text-base)',
      fontFamily: 'var(--font-ui)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, cols.map(function (c, i) {
    return /*#__PURE__*/React.createElement("th", {
      key: c,
      style: {
        ...th,
        textAlign: i === cols.length - 1 ? 'right' : 'left'
      },
      onClick: onSort ? function () {
        onSort(i);
      } : undefined
    }, c);
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.map(function (r, i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement("td", {
      style: td
    }, r.donante), /*#__PURE__*/React.createElement("td", {
      style: td
    }, /*#__PURE__*/React.createElement(__ds_scope.Tag, null, r.metodo)), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        textAlign: 'right',
        fontVariantNumeric: 'tabular-nums',
        whiteSpace: 'nowrap'
      }
    }, r.simbolo, " ", r.monto));
  })));
}
Object.assign(__ds_scope, { DonationsTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DonationsTable.jsx", error: String((e && e.message) || e) }); }

// components/data/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EmptyState({
  children,
  style,
  ...rest
}) {
  const s = {
    color: 'var(--text-muted)',
    padding: '34px 18px',
    textAlign: 'center',
    fontSize: 'var(--text-md)',
    border: '1px dashed var(--line)',
    borderRadius: 'var(--radius-card)',
    background: 'var(--surface-soft)',
    fontFamily: 'var(--font-ui)',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/data/ExpenseCategory.jsx
try { (() => {
function ExpenseCategory({
  name,
  description,
  total,
  pct,
  items = [],
  open,
  style
}) {
  const [isOpen, setOpen] = React.useState(!!open);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      boxShadow: 'var(--shadow-card)',
      borderRadius: 'var(--radius-cat)',
      marginBottom: 'var(--space-5)',
      overflow: 'hidden',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function () {
      setOpen(!isOpen);
    },
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: '13px 14px',
      cursor: 'pointer',
      fontSize: 'var(--text-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      marginRight: 'var(--space-3)',
      display: 'inline-block',
      transform: 'rotate(' + (isOpen ? 90 : 0) + 'deg)',
      transition: 'transform var(--dur-base)'
    }
  }, "\u25B8"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)',
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-semibold)'
    }
  }, name), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-regular)'
    }
  }, description) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-figure)',
      fontWeight: 'var(--weight-black)',
      fontVariantNumeric: 'tabular-nums',
      whiteSpace: 'nowrap',
      textAlign: 'right',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "US$ ", total), pct != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-regular)'
    }
  }, pct, "% del total") : null)), isOpen ? /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 'var(--text-sm)',
      margin: '0 0 var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("tbody", null, items.map(function (it, i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 14px',
        borderBottom: '1px solid var(--line)',
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)'
      }
    }, it.concepto), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 14px',
        borderBottom: '1px solid var(--line)',
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)',
        textAlign: 'right',
        fontVariantNumeric: 'tabular-nums',
        whiteSpace: 'nowrap'
      }
    }, "US$ ", it.monto));
  }))) : null);
}
Object.assign(__ds_scope, { ExpenseCategory });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ExpenseCategory.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
const tones = {
  income: {
    rule: 'var(--stat-income)',
    value: 'var(--stat-income)'
  },
  expense: {
    rule: 'var(--stat-expense)',
    value: 'var(--stat-expense)'
  },
  balance: {
    rule: 'var(--stat-balance)',
    value: 'var(--stat-balance)'
  },
  neutral: {
    rule: 'var(--line)',
    value: 'var(--text-heading)'
  }
};
function StatCard({
  label,
  value,
  note,
  tone = 'neutral',
  style
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    accentTop: t.rule,
    pad: "var(--pad-stat)",
    style: {
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-caps-sm)',
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-stat)',
      fontWeight: 'var(--weight-black)',
      marginTop: 'var(--space-2)',
      color: t.value
    }
  }, value), note ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-xs)',
      marginTop: 'var(--space-3)'
    }
  }, note) : null);
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/FilterSelect.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FilterSelect({
  options = [],
  placeholder,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const s = {
    background: 'var(--surface-card)',
    border: '1px solid ' + (focus ? 'var(--border-focus)' : 'var(--line)'),
    color: 'var(--text-body)',
    padding: 'var(--pad-control)',
    borderRadius: 'var(--radius-md)',
    fontSize: 'var(--text-base)',
    outline: 'none',
    boxShadow: 'var(--shadow-card)',
    fontFamily: 'var(--font-ui)',
    ...style
  };
  return /*#__PURE__*/React.createElement("select", _extends({
    style: s,
    onFocus: function () {
      setFocus(true);
    },
    onBlur: function () {
      setFocus(false);
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(function (o) {
    const value = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  }));
}
Object.assign(__ds_scope, { FilterSelect });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FilterSelect.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchInput({
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const s = {
    background: 'var(--surface-card)',
    border: '1px solid ' + (focus ? 'var(--border-focus)' : 'var(--line)'),
    color: 'var(--text-body)',
    padding: 'var(--pad-control)',
    borderRadius: 'var(--radius-md)',
    fontSize: 'var(--text-base)',
    outline: 'none',
    boxShadow: 'var(--shadow-card)',
    flex: 1,
    minWidth: '180px',
    fontFamily: 'var(--font-ui)',
    ...style
  };
  return /*#__PURE__*/React.createElement("input", _extends({
    style: s,
    onFocus: function () {
      setFocus(true);
    },
    onBlur: function () {
      setFocus(false);
    }
  }, rest));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/overlay/DonateModal.jsx
try { (() => {
function DonateModal({
  open,
  title = 'Quiero donar 💙',
  subtitle = 'Elige un método y copia los datos. ¡Gracias!',
  notice,
  onClose,
  children,
  style
}) {
  React.useEffect(function () {
    if (!open || !onClose) return;
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return function () {
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: function (e) {
      if (e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--overlay-scrim)',
      display: 'flex',
      zIndex: 40,
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: 'var(--space-12)',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-modal)',
      maxWidth: 'var(--width-modal)',
      width: '100%',
      padding: 'var(--space-11)',
      marginTop: 'var(--space-12)',
      boxShadow: 'var(--shadow-modal)',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 var(--space-2)',
      fontSize: 'var(--text-title)',
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)'
    }
  }, subtitle)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-muted)',
      fontSize: 'var(--text-step)',
      cursor: 'pointer',
      lineHeight: 'var(--leading-tight)'
    }
  }, "\xD7")), notice ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Notice, null, notice)) : null, children));
}
Object.assign(__ds_scope, { DonateModal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/DonateModal.jsx", error: String((e && e.message) || e) }); }

// components/overlay/DriveLinkButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DriveLinkButton({
  tone = 'blue',
  href,
  children,
  style,
  ...rest
}) {
  const color = tone === 'coral' ? 'var(--accent)' : 'var(--blue)';
  const s = {
    borderRadius: 'var(--radius-step)',
    padding: 'var(--space-7)',
    textAlign: 'center',
    fontWeight: 'var(--weight-black)',
    fontSize: 'var(--text-base)',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 'var(--leading-snug)',
    background: 'var(--white)',
    boxShadow: 'var(--shadow-card)',
    transition: 'filter var(--dur-fast)',
    border: 'var(--border-outline-strong) solid ' + color,
    color: color,
    fontFamily: 'var(--font-ui)',
    ...style
  };
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: "_blank",
    rel: "noopener",
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { DriveLinkButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/DriveLinkButton.jsx", error: String((e && e.message) || e) }); }

// components/overlay/PaymentMethod.jsx
try { (() => {
function PaymentMethod({
  name,
  fields = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-cat)',
      padding: 'var(--space-7)',
      marginBottom: 'var(--space-6)',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--accent)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      marginBottom: 'var(--space-4)'
    }
  }, name), fields.map(function (fd, i) {
    return /*#__PURE__*/React.createElement(__ds_scope.DetailField, {
      key: i,
      first: i === 0,
      label: fd.campo,
      value: fd.valor,
      href: fd.enlace ? fd.copiar : undefined,
      copyValue: fd.copiar
    });
  }));
}
Object.assign(__ds_scope, { PaymentMethod });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/PaymentMethod.jsx", error: String((e && e.message) || e) }); }


__ds_ns.BrandHeader = __ds_scope.BrandHeader;

__ds_ns.MissionStatement = __ds_scope.MissionStatement;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.StepCard = __ds_scope.StepCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CopyButton = __ds_scope.CopyButton;

__ds_ns.Notice = __ds_scope.Notice;

__ds_ns.SectionTitle = __ds_scope.SectionTitle;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.CurrencyCard = __ds_scope.CurrencyCard;

__ds_ns.DetailField = __ds_scope.DetailField;

__ds_ns.DonationsTable = __ds_scope.DonationsTable;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ExpenseCategory = __ds_scope.ExpenseCategory;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.FilterSelect = __ds_scope.FilterSelect;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.DonateModal = __ds_scope.DonateModal;

__ds_ns.DriveLinkButton = __ds_scope.DriveLinkButton;

__ds_ns.PaymentMethod = __ds_scope.PaymentMethod;

})();
