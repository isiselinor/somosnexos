/* Generado por tools/compilar.js — no editar a mano: se editan los .jsx */
/* tweaks-panel.jsx */
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var __TWEAKS_STYLE = "\n  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;\n    max-height:calc(100vh - 32px);display:flex;flex-direction:column;\n    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;\n    background:rgba(250,249,247,.78);color:#29261b;\n    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);\n    border:.5px solid rgba(255,255,255,.6);border-radius:14px;\n    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);\n    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}\n  .twk-hd{display:flex;align-items:center;justify-content:space-between;\n    padding:10px 8px 10px 14px;cursor:move;user-select:none}\n  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}\n  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);\n    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}\n  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}\n  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;\n    overflow-y:auto;overflow-x:hidden;min-height:0;\n    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}\n  .twk-body::-webkit-scrollbar{width:8px}\n  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}\n  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;\n    border:2px solid transparent;background-clip:content-box}\n  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);\n    border:2px solid transparent;background-clip:content-box}\n  .twk-row{display:flex;flex-direction:column;gap:5px}\n  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}\n  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;\n    color:rgba(41,38,27,.72)}\n  .twk-lbl>span:first-child{font-weight:500}\n  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}\n\n  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;\n    color:rgba(41,38,27,.45);padding:10px 0 0}\n  .twk-sect:first-child{padding-top:0}\n\n  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;\n    border:.5px solid rgba(0,0,0,.1);border-radius:7px;\n    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}\n  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}\n  select.twk-field{padding-right:22px;\n    background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>\");\n    background-repeat:no-repeat;background-position:right 8px center}\n\n  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;\n    border-radius:999px;background:rgba(0,0,0,.12);outline:none}\n  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;\n    width:14px;height:14px;border-radius:50%;background:#fff;\n    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}\n  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;\n    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}\n\n  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;\n    background:rgba(0,0,0,.06);user-select:none}\n  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;\n    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);\n    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}\n  .twk-seg.dragging .twk-seg-thumb{transition:none}\n  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;\n    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;\n    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;\n    overflow-wrap:anywhere}\n\n  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;\n    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}\n  .twk-toggle[data-on=\"1\"]{background:#34c759}\n  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;\n    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}\n  .twk-toggle[data-on=\"1\"] i{transform:translateX(14px)}\n\n  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;\n    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}\n  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;\n    user-select:none;padding-right:8px}\n  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;\n    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;\n    outline:none;color:inherit;-moz-appearance:textfield}\n  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{\n    -webkit-appearance:none;margin:0}\n  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}\n\n  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;\n    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}\n  .twk-btn:hover{background:rgba(0,0,0,.88)}\n  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}\n  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}\n\n  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;\n    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;\n    background:transparent;flex-shrink:0}\n  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}\n  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}\n  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}\n\n  .twk-chips{display:flex;gap:6px}\n  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;\n    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;\n    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);\n    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}\n  .twk-chip:hover{transform:translateY(-1px);\n    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}\n  .twk-chip[data-on=\"1\"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),\n    0 2px 6px rgba(0,0,0,.15)}\n  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;\n    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}\n  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}\n  .twk-chip>span>i:first-child{box-shadow:none}\n  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;\n    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}\n";
function useTweaks(defaults) {
  var _React$useState = React.useState(defaults),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    values = _React$useState2[0],
    setValues = _React$useState2[1];
  var setTweak = React.useCallback(function (keyOrEdits, val) {
    var edits = _typeof(keyOrEdits) === 'object' && keyOrEdits !== null ? keyOrEdits : _defineProperty({}, keyOrEdits, val);
    setValues(function (prev) {
      return _objectSpread(_objectSpread({}, prev), edits);
    });
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits: edits
    }, '*');
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}
function TweaksPanel(_ref2) {
  var _ref2$title = _ref2.title,
    title = _ref2$title === void 0 ? 'Tweaks' : _ref2$title,
    children = _ref2.children;
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    open = _React$useState4[0],
    setOpen = _React$useState4[1];
  var dragRef = React.useRef(null);
  var offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  var PAD = 16;
  var clampToViewport = React.useCallback(function () {
    var panel = dragRef.current;
    if (!panel) return;
    var w = panel.offsetWidth,
      h = panel.offsetHeight;
    var maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    var maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(function () {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return function () {
        return window.removeEventListener('resize', clampToViewport);
      };
    }
    var ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return function () {
      return ro.disconnect();
    };
  }, [open, clampToViewport]);
  React.useEffect(function () {
    var onMsg = function onMsg(e) {
      var _e$data;
      var t = e === null || e === void 0 || (_e$data = e.data) === null || _e$data === void 0 ? void 0 : _e$data.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return function () {
      return window.removeEventListener('message', onMsg);
    };
  }, []);
  var dismiss = function dismiss() {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  var onDragStart = function onDragStart(e) {
    var panel = dragRef.current;
    if (!panel) return;
    var r = panel.getBoundingClientRect();
    var sx = e.clientX,
      sy = e.clientY;
    var startRight = window.innerWidth - r.right;
    var startBottom = window.innerHeight - r.bottom;
    var move = function move(ev) {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    var _up = function up() {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', _up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', _up);
  };
  React.useEffect(function () {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return function () {
      return document.documentElement.removeAttribute('data-om-starter');
    };
  }, []);
  if (!open) return null;
  return React.createElement(React.Fragment, null, React.createElement("style", null, __TWEAKS_STYLE), React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, React.createElement("b", null, title), React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    },
    onClick: dismiss
  }, "\u2715")), React.createElement("div", {
    className: "twk-body"
  }, children)));
}
function TweakSection(_ref3) {
  var label = _ref3.label,
    children = _ref3.children;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow(_ref4) {
  var label = _ref4.label,
    value = _ref4.value,
    children = _ref4.children,
    _ref4$inline = _ref4.inline,
    inline = _ref4$inline === void 0 ? false : _ref4$inline;
  return React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, React.createElement("div", {
    className: "twk-lbl"
  }, React.createElement("span", null, label), value != null && React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}
function TweakSlider(_ref5) {
  var label = _ref5.label,
    value = _ref5.value,
    _ref5$min = _ref5.min,
    min = _ref5$min === void 0 ? 0 : _ref5$min,
    _ref5$max = _ref5.max,
    max = _ref5$max === void 0 ? 100 : _ref5$max,
    _ref5$step = _ref5.step,
    step = _ref5$step === void 0 ? 1 : _ref5$step,
    _ref5$unit = _ref5.unit,
    unit = _ref5$unit === void 0 ? '' : _ref5$unit,
    _onChange = _ref5.onChange;
  return React.createElement(TweakRow, {
    label: label,
    value: "".concat(value).concat(unit)
  }, React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: function onChange(e) {
      return _onChange(Number(e.target.value));
    }
  }));
}
function TweakToggle(_ref6) {
  var label = _ref6.label,
    value = _ref6.value,
    onChange = _ref6.onChange;
  return React.createElement("div", {
    className: "twk-row twk-row-h"
  }, React.createElement("div", {
    className: "twk-lbl"
  }, React.createElement("span", null, label)), React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: function onClick() {
      return onChange(!value);
    }
  }, React.createElement("i", null)));
}
function TweakRadio(_ref7) {
  var _$3$options$length;
  var label = _ref7.label,
    value = _ref7.value,
    options = _ref7.options,
    _onChange2 = _ref7.onChange;
  var trackRef = React.useRef(null);
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    dragging = _React$useState6[0],
    setDragging = _React$useState6[1];
  var valueRef = React.useRef(value);
  valueRef.current = value;
  var labelLen = function labelLen(o) {
    return String(_typeof(o) === 'object' ? o.label : o).length;
  };
  var maxLen = options.reduce(function (m, o) {
    return Math.max(m, labelLen(o));
  }, 0);
  var fitsAsSegments = maxLen <= ((_$3$options$length = {
    2: 16,
    3: 10
  }[options.length]) !== null && _$3$options$length !== void 0 ? _$3$options$length : 0);
  if (!fitsAsSegments) {
    var resolve = function resolve(s) {
      var m = options.find(function (o) {
        return String(_typeof(o) === 'object' ? o.value : o) === s;
      });
      return m === undefined ? s : _typeof(m) === 'object' ? m.value : m;
    };
    return React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: function onChange(s) {
        return _onChange2(resolve(s));
      }
    });
  }
  var opts = options.map(function (o) {
    return _typeof(o) === 'object' ? o : {
      value: o,
      label: o
    };
  });
  var idx = Math.max(0, opts.findIndex(function (o) {
    return o.value === value;
  }));
  var n = opts.length;
  var segAt = function segAt(clientX) {
    var r = trackRef.current.getBoundingClientRect();
    var inner = r.width - 4;
    var i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  var onPointerDown = function onPointerDown(e) {
    setDragging(true);
    var v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) _onChange2(v0);
    var move = function move(ev) {
      if (!trackRef.current) return;
      var v = segAt(ev.clientX);
      if (v !== valueRef.current) _onChange2(v);
    };
    var _up2 = function up() {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', _up2);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', _up2);
  };
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: "calc(2px + ".concat(idx, " * (100% - 4px) / ").concat(n, ")"),
      width: "calc((100% - 4px) / ".concat(n, ")")
    }
  }), opts.map(function (o) {
    return React.createElement("button", {
      key: o.value,
      type: "button",
      role: "radio",
      "aria-checked": o.value === value
    }, o.label);
  })));
}
function TweakSelect(_ref8) {
  var label = _ref8.label,
    value = _ref8.value,
    options = _ref8.options,
    _onChange3 = _ref8.onChange;
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: function onChange(e) {
      return _onChange3(e.target.value);
    }
  }, options.map(function (o) {
    var v = _typeof(o) === 'object' ? o.value : o;
    var l = _typeof(o) === 'object' ? o.label : o;
    return React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText(_ref9) {
  var label = _ref9.label,
    value = _ref9.value,
    placeholder = _ref9.placeholder,
    _onChange4 = _ref9.onChange;
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: function onChange(e) {
      return _onChange4(e.target.value);
    }
  }));
}
function TweakNumber(_ref0) {
  var label = _ref0.label,
    value = _ref0.value,
    min = _ref0.min,
    max = _ref0.max,
    _ref0$step = _ref0.step,
    step = _ref0$step === void 0 ? 1 : _ref0$step,
    _ref0$unit = _ref0.unit,
    unit = _ref0$unit === void 0 ? '' : _ref0$unit,
    _onChange5 = _ref0.onChange;
  var clamp = function clamp(n) {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  var startRef = React.useRef({
    x: 0,
    val: 0
  });
  var onScrubStart = function onScrubStart(e) {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    var decimals = (String(step).split('.')[1] || '').length;
    var move = function move(ev) {
      var dx = ev.clientX - startRef.current.x;
      var raw = startRef.current.val + dx * step;
      var snapped = Math.round(raw / step) * step;
      _onChange5(clamp(Number(snapped.toFixed(decimals))));
    };
    var _up3 = function up() {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', _up3);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', _up3);
  };
  return React.createElement("div", {
    className: "twk-num"
  }, React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: function onChange(e) {
      return _onChange5(clamp(Number(e.target.value)));
    }
  }), unit && React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}
function __twkIsLight(hex) {
  var h = String(hex).replace('#', '');
  var x = h.length === 3 ? h.replace(/./g, function (c) {
    return c + c;
  }) : h.padEnd(6, '0');
  var n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  var r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
var __TwkCheck = function __TwkCheck(_ref1) {
  var light = _ref1.light;
  return React.createElement("svg", {
    viewBox: "0 0 14 14",
    "aria-hidden": "true"
  }, React.createElement("path", {
    d: "M3 7.2 5.8 10 11 4.2",
    fill: "none",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
  }));
};
function TweakColor(_ref10) {
  var label = _ref10.label,
    value = _ref10.value,
    options = _ref10.options,
    _onChange6 = _ref10.onChange;
  if (!options || !options.length) {
    return React.createElement("div", {
      className: "twk-row twk-row-h"
    }, React.createElement("div", {
      className: "twk-lbl"
    }, React.createElement("span", null, label)), React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: function onChange(e) {
        return _onChange6(e.target.value);
      }
    }));
  }
  var key = function key(o) {
    return String(JSON.stringify(o)).toLowerCase();
  };
  var cur = key(value);
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map(function (o, i) {
    var colors = Array.isArray(o) ? o : [o];
    var _colors = _toArray(colors),
      hero = _colors[0],
      rest = _arrayLikeToArray(_colors).slice(1);
    var sup = rest.slice(0, 4);
    var on = key(o) === cur;
    return React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: function onClick() {
        return _onChange6(o);
      }
    }, sup.length > 0 && React.createElement("span", null, sup.map(function (c, j) {
      return React.createElement("i", {
        key: j,
        style: {
          background: c
        }
      });
    })), on && React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton(_ref11) {
  var label = _ref11.label,
    onClick = _ref11.onClick,
    _ref11$secondary = _ref11.secondary,
    secondary = _ref11$secondary === void 0 ? false : _ref11$secondary;
  return React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks: useTweaks,
  TweaksPanel: TweaksPanel,
  TweakSection: TweakSection,
  TweakRow: TweakRow,
  TweakSlider: TweakSlider,
  TweakToggle: TweakToggle,
  TweakRadio: TweakRadio,
  TweakSelect: TweakSelect,
  TweakText: TweakText,
  TweakNumber: TweakNumber,
  TweakColor: TweakColor,
  TweakButton: TweakButton
});
;
/* SectionWindowExport.jsx */
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var NSW = window.NEXOSDesignSystem_0519e6;
function SectionWindowExport(_ref) {
  var id = _ref.id,
    onClose = _ref.onClose,
    onOpen = _ref.onOpen,
    onDonate = _ref.onDonate,
    variant = _ref.variant,
    lang = _ref.lang;
  var DriveLinkButton = NSW.DriveLinkButton,
    Button = NSW.Button;
  var d = window.nexosContent(lang);
  var u = d.ui;
  var x = window.NEXOS_FIXTURE;
  var v = id ? d.ventanas[id] : null;
  var dark = variant === 'grafica';
  React.useEffect(function () {
    if (!id) return;
    function k(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', k);
    var prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return function () {
      document.removeEventListener('keydown', k);
      document.body.style.overflow = prev;
    };
  }, [id, onClose]);
  if (!v) return null;
  var otras = Object.keys(d.ventanas).filter(function (k) {
    return k !== id;
  });
  var headBg = dark ? 'var(--nexos-coral)' : 'var(--ink)';
  return React.createElement("div", {
    className: "sw-scrim",
    onClick: function onClick(e) {
      if (e.target === e.currentTarget) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      background: 'rgba(17,53,76,.55)',
      backdropFilter: 'blur(10px) saturate(140%)',
      WebkitBackdropFilter: 'blur(10px) saturate(140%)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: 'clamp(10px,2.5vh,30px) 16px',
      overflow: 'auto'
    }
  }, React.createElement("div", {
    className: "sw-panel",
    style: {
      width: 'min(1240px,100%)',
      minHeight: 'min(880px, 92vh)',
      display: 'flex',
      flexDirection: 'column',
      background: '#fff',
      borderRadius: 24,
      overflow: 'hidden',
      boxShadow: '0 40px 100px rgba(17,53,76,.42)'
    }
  }, React.createElement("div", {
    style: {
      background: headBg,
      color: '#fff',
      padding: '30px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: 1.6,
      textTransform: 'uppercase',
      color: dark ? 'rgba(255,255,255,.8)' : 'var(--blue-lt)'
    }
  }, v.eyebrow), React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      letterSpacing: '-1.2px',
      fontSize: 'clamp(30px,4vw,52px)',
      margin: '10px 0 0',
      lineHeight: 1.02
    }
  }, v.titulo)), React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      background: 'rgba(255,255,255,.16)',
      border: '1px solid rgba(255,255,255,.45)',
      color: '#fff',
      width: 38,
      height: 38,
      borderRadius: 999,
      fontSize: 19,
      cursor: 'pointer',
      flexShrink: 0
    }
  }, "\xD7")), React.createElement("div", {
    className: "sw-body",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.42fr) minmax(0,1fr)',
      gap: 0,
      flex: 1
    }
  }, React.createElement("div", {
    style: {
      padding: '36px 40px 44px'
    }
  }, (id === 'quienes' && x.mision ? [x.mision].concat((v.cuerpo || []).slice(1)) : v.cuerpo || []).map(function (p, i) {
    return React.createElement("p", {
      key: i,
      style: {
        fontSize: 17,
        lineHeight: 1.8,
        color: 'var(--ink)',
        maxWidth: 640,
        margin: i ? '20px 0 0' : 0
      },
      dangerouslySetInnerHTML: {
        __html: p
      }
    });
  }), id === 'quienes' ? React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '28px auto 0',
      padding: '0 24px'
    }
  }, React.createElement("a", {
    href: "https://somosnexos.substack.com",
    target: "_blank",
    rel: "noopener",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--nexos-coral)',
      color: '#fff',
      fontWeight: 800,
      fontSize: 15,
      padding: '13px 24px',
      borderRadius: 999,
      textDecoration: 'none'
    }
  }, u.boletinQuienes, " \u2192")) : null, v.datos ? React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, v.datos.map(function (r) {
    return React.createElement("div", {
      key: r.k,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 14,
        padding: '12px 0',
        borderTop: '1px dashed var(--line)',
        fontSize: 14
      }
    }, React.createElement("span", {
      style: {
        color: 'var(--muted)'
      }
    }, r.k), React.createElement("span", {
      style: {
        fontWeight: 700
      }
    }, r.v));
  })) : null, v.formas ? React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))',
      gap: 10,
      marginTop: 22
    }
  }, v.formas.map(function (r) {
    return React.createElement("div", {
      key: r.titulo,
      style: {
        border: '1px solid var(--line)',
        borderLeft: '3px solid var(--accent)',
        borderRadius: 12,
        padding: '13px 15px'
      }
    }, React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 14.5
      }
    }, r.titulo), React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--muted)',
        marginTop: 5,
        lineHeight: 1.5
      }
    }, r.detalle));
  })) : null, v.items ? React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, v.items.map(function (it, i) {
    return React.createElement(SWFaq, {
      key: i,
      q: it.q,
      a: it.a,
      open: i === 0
    });
  })) : null, id === 'evidencia' ? React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12,
      marginTop: 22
    }
  }, x.enlaceFacturas ? React.createElement(DriveLinkButton, {
    tone: "blue",
    href: x.enlaceFacturas
  }, "\uD83D\uDCC4 Ver facturas de compras") : null, x.enlaceFotos ? React.createElement(DriveLinkButton, {
    tone: "coral",
    href: x.enlaceFotos
  }, "\uD83D\uDCF7 Ver fotos de las donaciones") : null) : null, v.formas ? React.createElement(Button, {
    variant: "quietBlue",
    href: "https://instagram.com/somos.nexosve",
    target: "_blank",
    style: {
      marginTop: 18
    }
  }, "Escribirnos por Instagram") : null), React.createElement("aside", {
    style: {
      background: 'var(--soft)',
      borderLeft: '1px solid var(--line)',
      padding: '28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, v.foto ? React.createElement("img", {
    src: v.foto,
    alt: "",
    style: {
      width: '100%',
      height: 280,
      objectFit: 'cover',
      borderRadius: 16,
      display: 'block'
    }
  }) : null, v.galeria ? React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, v.galeria.map(function (g) {
    return React.createElement("img", {
      key: g,
      src: g,
      alt: "",
      style: {
        width: '100%',
        height: 96,
        objectFit: 'cover',
        borderRadius: 10,
        display: 'block'
      }
    });
  })) : null, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, [['Recaudado', '≈ US$ ' + x.totalUSD, 'var(--accent)'], ['Ejecutado', '≈ US$ ' + x.totalEgresos, 'var(--blue)']].map(function (s) {
    return React.createElement("div", {
      key: s[0],
      style: {
        background: '#fff',
        border: '1px solid var(--line)',
        borderRadius: 12,
        padding: '11px 12px'
      }
    }, React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 800,
        letterSpacing: .8,
        textTransform: 'uppercase',
        color: 'var(--muted)'
      }
    }, s[0]), React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16,
        color: s[2],
        marginTop: 5,
        letterSpacing: '-.4px'
      }
    }, s[1]));
  })), React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 12,
      padding: '6px 12px 10px'
    }
  }, d.ficha.map(function (r) {
    return React.createElement("div", {
      key: r.k,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 10,
        padding: '8px 0',
        borderTop: '1px solid var(--line)',
        fontSize: 12.5
      }
    }, React.createElement("span", {
      style: {
        color: 'var(--muted)'
      }
    }, r.k), React.createElement("span", {
      style: {
        fontWeight: 700
      }
    }, r.v));
  })), React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'grid',
      gap: 10
    }
  }, React.createElement("div", {
    style: {
      background: 'var(--peach)',
      border: '1px solid var(--accent)',
      borderRadius: 10,
      padding: '9px 11px',
      fontSize: 11.5,
      lineHeight: 1.5
    }
  }, "En el asunto: ", React.createElement("b", {
    style: {
      color: 'var(--accent-text)'
    }
  }, "tu nombre o un \u201Cgracias\u201D"), " \uD83D\uDC99"), React.createElement("button", {
    onClick: function onClick() {
      onClose();
      if (onDonate) onDonate();
    },
    style: {
      background: 'var(--accent)',
      color: '#fff',
      border: 'none',
      borderRadius: 999,
      padding: '14px',
      fontSize: 15,
      fontWeight: 800,
      cursor: 'pointer',
      boxShadow: 'var(--shadow-cta)'
    }
  }, "\uD83D\uDC99 Donar ahora")), React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)',
      paddingTop: 12
    }
  }, React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: .9,
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginBottom: 8
    }
  }, "Otras ventanas"), React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6
    }
  }, otras.map(function (k) {
    return React.createElement("button", {
      key: k,
      onClick: function onClick() {
        onOpen(k);
      },
      style: {
        background: 'none',
        border: 'none',
        padding: 0,
        textAlign: 'left',
        cursor: 'pointer',
        fontSize: 13,
        fontWeight: 700,
        color: 'var(--blue)'
      }
    }, d.ventanas[k].titulo, " \u2192");
  }), React.createElement("a", {
    href: "https://somosnexos.substack.com",
    target: "_blank",
    rel: "noopener",
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--blue)',
      textDecoration: 'none'
    }
  }, (d.nav.find(function (n) {
    return n.id === 'historias';
  }) || {}).label, " \u2197")))))));
}
function SWFaq(_ref2) {
  var q = _ref2.q,
    a = _ref2.a,
    open = _ref2.open;
  var _React$useState = React.useState(!!open),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    o = _React$useState2[0],
    setO = _React$useState2[1];
  return React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--line)'
    }
  }, React.createElement("button", {
    onClick: function onClick() {
      setO(!o);
    },
    style: {
      width: '100%',
      background: 'none',
      border: 'none',
      padding: '15px 0',
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      textAlign: 'left',
      cursor: 'pointer'
    }
  }, React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      flex: 1,
      color: 'var(--ink)'
    }
  }, q), React.createElement("span", {
    style: {
      color: 'var(--accent)',
      fontWeight: 800,
      fontSize: 19
    }
  }, o ? '–' : '+')), o ? React.createElement("p", {
    style: {
      margin: '0 0 16px',
      fontSize: 14,
      lineHeight: 1.7,
      color: 'var(--muted)'
    }
  }, a) : null);
}
Object.assign(window, {
  SectionWindowExport: SectionWindowExport
});
;
/* SectionPageExport.jsx */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var NSP = window.NEXOSDesignSystem_0519e6;
function SectionPageExport(_ref) {
  var id = _ref.id,
    onClose = _ref.onClose,
    onOpen = _ref.onOpen,
    onDonate = _ref.onDonate,
    lang = _ref.lang;
  var DriveLinkButton = NSP.DriveLinkButton,
    Button = NSP.Button;
  var d = window.nexosContent(lang);
  var u = d.ui;
  var x = window.NEXOS_FIXTURE;
  var v = id ? d.ventanas[id] : null;
  var scroller = React.useRef(null);
  React.useEffect(function () {
    if (!id) return;
    function k(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', k);
    var prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (scroller.current) scroller.current.scrollTop = 0;
    return function () {
      document.removeEventListener('keydown', k);
      document.body.style.overflow = prev;
    };
  }, [id, onClose]);
  if (!v) return null;
  var otras = Object.keys(d.ventanas).filter(function (k) {
    return k !== id && k !== 'aliados';
  });
  var col = {
    maxWidth: 720,
    margin: '0 auto',
    padding: '0 24px'
  };
  return React.createElement("div", {
    className: "sp-root",
    ref: scroller,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      background: '#fff',
      overflow: 'auto'
    }
  }, React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 3,
      background: 'rgba(255,255,255,.94)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--line)'
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '0 24px',
      height: 60,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, React.createElement("a", {
    href: "#top",
    onClick: onClose,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      textDecoration: 'none'
    }
  }, React.createElement("img", {
    src: "img/3711202f3b.png",
    alt: "",
    style: {
      height: 24
    }
  }), React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--muted)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, v.titulo)), React.createElement("button", {
    onClick: onClose,
    style: {
      marginLeft: 'auto',
      background: 'none',
      border: '1px solid var(--line)',
      borderRadius: 999,
      padding: '8px 16px',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink)',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, u.volver))), v.foto ? React.createElement("div", {
    style: {
      position: 'relative',
      height: 'clamp(240px,38vh,380px)'
    }
  }, React.createElement("img", {
    src: v.foto,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(17,53,76,.28), rgba(17,53,76,.82))'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '0 0 28px'
    }
  }, React.createElement("div", {
    style: col
  }, React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: 1.6,
      textTransform: 'uppercase',
      color: '#F4B044'
    }
  }, v.eyebrow), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      letterSpacing: '-1.8px',
      fontSize: 'clamp(32px,5vw,58px)',
      color: '#fff',
      margin: '10px 0 0',
      lineHeight: 1.02
    }
  }, v.titulo), React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'rgba(255,255,255,.7)',
      marginTop: 10
    }
  }, u.fotoPor, d.credito)))) : null, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, col), {}, {
      padding: 'clamp(30px,5vw,52px) 24px 0'
    })
  }, (id === 'quienes' && (lang === 'EN' ? x.misionEn : x.mision) ? [lang === 'EN' ? x.misionEn : x.mision].concat((v.cuerpo || []).slice(1)) : v.cuerpo || []).map(function (p, i) {
    return React.createElement("p", {
      key: i,
      style: {
        fontSize: 18,
        lineHeight: 1.85,
        color: 'var(--ink)',
        margin: i ? '22px 0 0' : 0
      },
      dangerouslySetInnerHTML: {
        __html: p
      }
    });
  })), id === 'quienes' ? React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '28px auto 0',
      padding: '0 24px'
    }
  }, React.createElement("a", {
    href: "https://somosnexos.substack.com",
    target: "_blank",
    rel: "noopener",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--nexos-coral)',
      color: '#fff',
      fontWeight: 800,
      fontSize: 15,
      padding: '13px 24px',
      borderRadius: 999,
      textDecoration: 'none'
    }
  }, u.boletinQuienes, " \u2192")) : null, v.datos ? React.createElement("div", {
    style: _objectSpread(_objectSpread({}, col), {}, {
      marginTop: 36
    })
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '18px 40px',
      padding: '20px 0',
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)'
    }
  }, v.datos.map(function (r) {
    return React.createElement("div", {
      key: r.k
    }, React.createElement("div", {
      style: {
        fontSize: 10.5,
        fontWeight: 800,
        letterSpacing: .9,
        textTransform: 'uppercase',
        color: 'var(--muted)'
      }
    }, r.k), React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 15.5,
        marginTop: 5
      }
    }, r.v));
  }))) : null, v.formas ? React.createElement("div", {
    style: _objectSpread(_objectSpread({}, col), {}, {
      marginTop: 34
    })
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 12
    }
  }, v.formas.map(function (r) {
    return React.createElement("div", {
      key: r.titulo,
      style: {
        borderTop: '2px solid var(--accent)',
        paddingTop: 12
      }
    }, React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 15.5
      }
    }, r.titulo), React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--muted)',
        marginTop: 5,
        lineHeight: 1.6
      }
    }, r.detalle));
  })), React.createElement(Button, {
    variant: "quietBlue",
    href: "https://instagram.com/somos.nexosve",
    target: "_blank",
    style: {
      marginTop: 22
    }
  }, u.escribirInstagram)) : null, v.items ? React.createElement("div", {
    style: _objectSpread(_objectSpread({}, col), {}, {
      marginTop: 30
    })
  }, v.items.map(function (it, i) {
    return React.createElement(SPFaq, {
      key: i,
      q: it.q,
      a: it.a,
      open: i === 0
    });
  })) : null, id === 'evidencia' ? React.createElement("div", {
    style: _objectSpread(_objectSpread({}, col), {}, {
      marginTop: 30,
      display: 'grid',
      gap: 12
    })
  }, x.enlaceFacturas ? React.createElement(DriveLinkButton, {
    tone: "blue",
    href: x.enlaceFacturas
  }, u.verFacturas) : null, x.enlaceFotos ? React.createElement(DriveLinkButton, {
    tone: "coral",
    href: x.enlaceFotos
  }, u.verFotos) : null) : null, React.createElement("div", {
    style: {
      marginTop: 'clamp(40px,6vw,64px)',
      background: 'var(--peach)',
      padding: 'clamp(30px,4vw,46px) 0'
    }
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, col), {}, {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 20,
      alignItems: 'center',
      justifyContent: 'space-between'
    })
  }, React.createElement("div", {
    style: {
      maxWidth: 400
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: '-.6px'
    }
  }, u.cadaAporte), React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink)',
      marginTop: 8,
      lineHeight: 1.6
    }
  }, u.cadaAporteSub[0], React.createElement("b", {
    style: {
      color: 'var(--accent)'
    }
  }, u.cadaAporteSub[1]), u.cadaAporteSub[2])), React.createElement("button", {
    onClick: function onClick() {
      onClose();
      if (onDonate) onDonate();
    },
    style: {
      background: 'var(--accent)',
      color: '#fff',
      border: 'none',
      borderRadius: 999,
      padding: '16px 30px',
      fontSize: 16.5,
      fontWeight: 800,
      cursor: 'pointer',
      boxShadow: 'var(--shadow-cta)',
      whiteSpace: 'nowrap'
    }
  }, u.donarAhora))), React.createElement("div", {
    style: _objectSpread(_objectSpread({}, col), {}, {
      padding: 'clamp(34px,5vw,52px) 24px clamp(50px,7vw,80px)'
    })
  }, React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 800,
      letterSpacing: .9,
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, u.seguirLeyendo), React.createElement("div", {
    style: {
      display: 'grid',
      gap: 0,
      marginTop: 12
    }
  }, otras.map(function (k) {
    return React.createElement("button", {
      key: k,
      onClick: function onClick() {
        onOpen(k);
      },
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        background: 'none',
        border: 'none',
        borderTop: '1px solid var(--line)',
        padding: '18px 0',
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 19,
        color: 'var(--ink)',
        letterSpacing: '-.4px'
      }
    }, d.ventanas[k].titulo), React.createElement("span", {
      style: {
        color: 'var(--accent)',
        fontWeight: 800
      }
    }, "\u2192"));
  }), React.createElement("a", {
    href: "https://somosnexos.substack.com",
    target: "_blank",
    rel: "noopener",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      borderTop: '1px solid var(--line)',
      padding: '18px 0',
      textDecoration: 'none'
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--ink)',
      letterSpacing: '-.4px'
    }
  }, (d.nav.find(function (n) {
    return n.id === 'historias';
  }) || {}).label), React.createElement("span", {
    style: {
      color: 'var(--accent)',
      fontWeight: 800
    }
  }, "\u2197")))));
}
function SPFaq(_ref2) {
  var q = _ref2.q,
    a = _ref2.a,
    open = _ref2.open;
  var _React$useState = React.useState(!!open),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    o = _React$useState2[0],
    setO = _React$useState2[1];
  return React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)'
    }
  }, React.createElement("button", {
    onClick: function onClick() {
      setO(!o);
    },
    style: {
      width: '100%',
      background: 'none',
      border: 'none',
      padding: '18px 0',
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      textAlign: 'left',
      cursor: 'pointer'
    }
  }, React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 17,
      flex: 1,
      color: 'var(--ink)'
    }
  }, q), React.createElement("span", {
    style: {
      color: 'var(--accent)',
      fontWeight: 800,
      fontSize: 21
    }
  }, o ? '–' : '+')), o ? React.createElement("p", {
    style: {
      margin: '0 0 20px',
      fontSize: 15.5,
      lineHeight: 1.75,
      color: 'var(--muted)'
    }
  }, a) : null);
}
Object.assign(window, {
  SectionPageExport: SectionPageExport
});
;
/* LightboxExport.jsx */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function LightboxExport(_ref) {
  var index = _ref.index,
    fotos = _ref.fotos,
    onClose = _ref.onClose,
    onIndex = _ref.onIndex;
  React.useEffect(function () {
    if (index == null) return;
    function k(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onIndex((index + 1) % fotos.length);
      if (e.key === 'ArrowLeft') onIndex((index - 1 + fotos.length) % fotos.length);
    }
    document.addEventListener('keydown', k);
    var prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return function () {
      document.removeEventListener('keydown', k);
      document.body.style.overflow = prev;
    };
  }, [index, fotos.length, onClose, onIndex]);
  if (index == null) return null;
  var nav = {
    background: 'rgba(255,255,255,.14)',
    border: '1px solid rgba(255,255,255,.4)',
    color: '#fff',
    borderRadius: 999,
    width: 44,
    height: 44,
    fontSize: 17,
    cursor: 'pointer',
    flexShrink: 0
  };
  return React.createElement("div", {
    className: "lb-root",
    onClick: function onClick(e) {
      if (e.target === e.currentTarget) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      background: '#0c0e16',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '16px 20px',
      color: 'rgba(255,255,255,.75)',
      fontSize: 12.5
    }
  }, React.createElement("span", null, index + 1, " / ", fotos.length), React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, "Foto: ", fotos[index].credito), React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: _objectSpread(_objectSpread({}, nav), {}, {
      width: 38,
      height: 38,
      fontSize: 19
    })
  }, "\xD7")), React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '0 16px 26px'
    }
  }, React.createElement("button", {
    onClick: function onClick() {
      onIndex((index - 1 + fotos.length) % fotos.length);
    },
    "aria-label": "Anterior",
    style: nav
  }, "\u2190"), React.createElement("img", {
    className: "lb-img",
    src: fotos[index].src,
    alt: "",
    style: {
      flex: 1,
      minWidth: 0,
      maxHeight: '100%',
      objectFit: 'contain',
      borderRadius: 10,
      display: 'block',
      margin: '0 auto'
    }
  }), React.createElement("button", {
    onClick: function onClick() {
      onIndex((index + 1) % fotos.length);
    },
    "aria-label": "Siguiente",
    style: nav
  }, "\u2192")));
}
Object.assign(window, {
  LightboxExport: LightboxExport
});
;
/* ProyectosExport.jsx */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var NSPR = window.NEXOSDesignSystem_0519e6;
var PR_UI = {
  ES: {
    eyebrow: 'Proyectos',
    titulo: 'Lo que tu ayuda está construyendo',
    lead: 'Cada proyecto muestra cuánto necesita, cuánto llevamos y en qué se usa cada dólar.',
    verProyecto: 'Ver proyecto →',
    todos: '← Todos los proyectos',
    de: 'de',
    meta: 'meta',
    volver: '← Volver',
    llevamos: 'Llevamos recaudado',
    deMeta: 'de una meta de',
    avance: 'Avance',
    falta: 'Falta',
    actualizado: 'Actualizado',
    donarProyecto: 'Donar a este proyecto',
    buscaNombre: '¿Ya donaste? Busca tu nombre →',
    estRecien: 'Recién empezamos',
    estAbierta: 'Recaudación abierta',
    estMeta: 'Meta alcanzada',
    loQuePaso: 'Lo que pasó',
    procesoTit: 'El proceso, paso a paso',
    procesoSub: 'Haz click en cada etapa para ver en qué consiste.',
    etapa: 'Etapa',
    deN: 'de',
    hecho: 'Hecho',
    aqui: 'Estamos aquí',
    proximo: 'Próximo',
    quien: 'Quién',
    veras: 'Lo que vas a ver',
    fotosTit: 'Fotos del proyecto',
    fotosSub: 'Toca una foto para verla en grande.',
    pronto: 'Muy pronto',
    prontoTxt: 'Estamos tomando las fotos de esta etapa. Las vas a ver aquí.',
    cerrar: 'Cerrar',
    anterior: 'Foto anterior',
    siguiente: 'Foto siguiente',
    repartoTit: 'Progreso',
    repartoSub: 'Vamos de lo más urgente a lo menos urgente.',
    presupuestados: 'presupuestados',
    donar: 'Donar',
    enCurso: 'En curso',
    cubierto: 'Cubierto',
    cubriendo: 'Cubriéndose',
    pendiente: 'Pendiente',
    kitsTit: '¿Qué necesita cada músico?',
    kitsSub: 'Elige un instrumento y mira qué incluye su kit.',
    kitCuesta: 'Un kit cuesta',
    porMusico: 'por músico, precio de referencia',
    incluye: 'Incluye',
    aportarKit: 'Aportar a este kit',
    cualquierMonto: 'Cualquier monto suma. No necesitas cubrir el kit completo.',
    kitsNota: 'Precios de referencia calculados con el listado de los músicos de la orquesta (medias de mercado).',
    aportarTit: '¿Cómo aportar?',
    enlacePronto: 'Enlace disponible pronto',
    aliados: 'Aliados',
    beneficiarios: 'Beneficiarios',
    junto: 'Junto a',
    invertido: 'Ya invertido',
    verCompras: 'Ver en qué →',
    comprasTit: 'Lo que ya compramos',
    comprasSub: 'Cada compra sale de nuestra planilla de gastos y tiene su factura.',
    total: 'Total invertido',
    verFacturas: 'Ver facturas →',
    enCursoEy: 'En curso',
    ahoraTit: 'Lo que estamos haciendo ahora',
    todosLink: 'Todos los proyectos',
    conoce: 'Conoce el proyecto →',
    invertidos: 'invertidos',
    cerradosEy: 'Donde empezamos',
    cumplimosTit: 'Lo que ya hicimos',
    comprasConFactura: 'compras con factura',
    miraTodo: 'Mira todo lo que hicimos →',
    recorridoTit: 'Nuestro recorrido',
    loQueViene: 'Lo que viene',
    proximoProy: 'El próximo proyecto',
    empiezaAporte: 'Empieza con tu aporte',
    pagEy: 'Proyectos',
    pagTit1: 'Cada donación',
    pagTit2: 'se convierte en ',
    pagTit3: 'un proyecto',
    pagLead: 'Identificamos necesidades, desarrollamos la propuesta y la llevamos a la acción. Cada proyecto tiene sus avances y cuentas visibles.',
    sumateTit: 'Súmate a lo que viene',
    sumateTxt: 'Tu aporte va al fondo de NEXOS y lo invertimos en los proyectos en curso.',
    filtroTodos: 'Todos',
    porCategoria: 'En qué se invirtió',
    compras: 'compras',
    conFacturaCorto: 'cada una con su factura',
    verDetalle: 'Ver el detalle en Transparencia →',
    fotosTitZ: 'Así se vio',
    fotosSubZ: 'Fotos de nuestro equipo en terreno. Toca una para verla en grande.',
    resumenEy: 'Resumen',
    hicimosTit: 'Lo que hicimos',
    hicimosSub: 'Haz click en cada categoría para ver el detalle.',
    categoriasMas: function categoriasMas(n) {
      return '+ ' + n + ' categorías más';
    },
    despuesEy: 'Proyectos actuales',
    despuesTit: 'Nuestro apoyo en Zona Cero fue prioridad los primeros meses, pero las necesidades ahora son muchas más. Revisa nuestros proyectos actuales:',
    graciasTit: '¡Gracias a todos los que donaron!',
    graciasTxt: 'Sus aportes hicieron posible este proyecto y siguen construyendo los que vienen.'
  },
  EN: {
    eyebrow: 'Projects',
    titulo: 'What your help is building',
    lead: 'Each project shows what it needs, how far we are and where every dollar goes.',
    verProyecto: 'See project →',
    todos: '← All projects',
    de: 'of',
    meta: 'goal',
    volver: '← Back',
    llevamos: 'Raised so far',
    deMeta: 'of a goal of',
    avance: 'Progress',
    falta: 'To go',
    actualizado: 'Updated',
    donarProyecto: 'Donate to this project',
    buscaNombre: 'Already donated? Find your name →',
    estRecien: 'Just getting started',
    estAbierta: 'Fundraising open',
    estMeta: 'Goal reached',
    loQuePaso: 'What happened',
    procesoTit: 'The process, step by step',
    procesoSub: 'Click each stage to see what it involves.',
    etapa: 'Stage',
    deN: 'of',
    hecho: 'Done',
    aqui: 'We are here',
    proximo: 'Next',
    quien: 'Who',
    veras: 'What you will see',
    fotosTit: 'Project photos',
    fotosSub: 'Tap a photo to enlarge it.',
    pronto: 'Coming soon',
    prontoTxt: 'We are taking the photos for this stage. You will see them here.',
    cerrar: 'Close',
    anterior: 'Previous photo',
    siguiente: 'Next photo',
    repartoTit: 'Progress',
    repartoSub: 'We go from the most urgent to the least urgent.',
    presupuestados: 'budgeted',
    donar: 'Donate',
    enCurso: 'In progress',
    cubierto: 'Covered',
    cubriendo: 'In progress',
    pendiente: 'Pending',
    kitsTit: 'What does each musician need?',
    kitsSub: 'Pick an instrument to see what its kit includes.',
    kitCuesta: 'A kit costs',
    porMusico: 'per musician, reference price',
    incluye: 'Includes',
    aportarKit: 'Give to this kit',
    cualquierMonto: 'Any amount helps. You don’t need to cover a whole kit.',
    kitsNota: 'Reference prices based on the orchestra musicians’ own list (market averages).',
    aportarTit: 'How to give',
    enlacePronto: 'Link coming soon',
    aliados: 'Partners',
    beneficiarios: 'Beneficiaries',
    junto: 'With',
    invertido: 'Already invested',
    verCompras: 'See what →',
    comprasTit: 'What we have already bought',
    comprasSub: 'Every purchase comes from our expense sheet and has its invoice.',
    total: 'Total invested',
    verFacturas: 'See invoices →',
    enCursoEy: 'In progress',
    ahoraTit: 'What we are doing right now',
    todosLink: 'All projects',
    conoce: 'See the project →',
    invertidos: 'invested',
    cerradosEy: 'Where we started',
    cumplimosTit: 'What we have already done',
    comprasConFactura: 'purchases with invoice',
    miraTodo: 'See everything we did →',
    recorridoTit: 'Our journey',
    loQueViene: 'What’s next',
    proximoProy: 'The next project',
    empiezaAporte: 'Starts with your donation',
    pagEy: 'Projects',
    pagTit1: 'Every donation',
    pagTit2: 'becomes ',
    pagTit3: 'a project',
    pagLead: 'We identify needs, develop the proposal and put it into action. Every project has its progress and accounts in plain sight.',
    sumateTit: 'Join what’s next',
    sumateTxt: 'Your donation goes to the NEXOS fund and we invest it in the projects in progress.',
    filtroTodos: 'All',
    porCategoria: 'Where it was invested',
    compras: 'purchases',
    conFacturaCorto: 'each with its invoice',
    verDetalle: 'See the detail in Transparency →',
    fotosTitZ: 'How it looked',
    fotosSubZ: 'Photos by our team on the ground. Tap one to enlarge it.',
    resumenEy: 'Summary',
    hicimosTit: 'What we did',
    hicimosSub: 'Click each category to see the details.',
    categoriasMas: function categoriasMas(n) {
      return '+ ' + n + ' more categories';
    },
    despuesEy: 'Current projects',
    despuesTit: 'Our support in Zona Cero was the priority in the first months, but the needs are now much greater. See our current projects:',
    graciasTit: 'Thank you to everyone who donated!',
    graciasTxt: 'Your donations made this project possible and keep building the ones to come.'
  }
};
function prCat(nombre, lang) {
  if (lang !== 'EN') return nombre;
  var f = window.NEXOS_FIXTURE;
  var r = (f && f.egresosRaw || []).filter(function (c) {
    return c.categoria === nombre;
  })[0];
  return r && r.categoriaEN || nombre;
}
function prFmt(n, lang) {
  var v = Math.round(Number(n) || 0);
  return lang === 'EN' ? v.toLocaleString('en-US') : String(v).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
var PR = {
  wrap: {
    maxWidth: 1180,
    margin: '0 auto',
    padding: '0 24px'
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    color: 'var(--muted)'
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(24px,3vw,32px)',
    fontWeight: 700,
    letterSpacing: '-.6px',
    lineHeight: 1.15,
    margin: 0,
    color: 'var(--ink)',
    textWrap: 'balance'
  },
  sub: {
    fontSize: 16,
    lineHeight: 1.6,
    color: 'var(--muted)',
    margin: '8px 0 0',
    maxWidth: 660
  },
  chip: {
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 700,
    borderRadius: 999,
    padding: '5px 11px'
  },
  card: {
    background: '#fff',
    border: '1px solid var(--line)',
    borderRadius: 22
  },
  pill: function pill(on) {
    return {
      border: '1.5px solid ' + (on ? 'var(--blue)' : 'var(--line)'),
      background: on ? 'var(--blue)' : '#fff',
      color: on ? '#fff' : 'var(--ink)',
      borderRadius: 999,
      padding: '0 18px',
      minHeight: 44,
      fontSize: 15,
      fontWeight: 700,
      cursor: 'pointer',
      fontFamily: 'inherit'
    };
  },
  ghost: {
    border: '1.5px solid var(--blue)',
    color: 'var(--blue)',
    background: '#fff',
    fontWeight: 700,
    borderRadius: 999,
    padding: '0 20px',
    minHeight: 44,
    fontSize: 14,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    alignSelf: 'flex-start'
  },
  coral: {
    background: 'var(--accent)',
    color: '#fff',
    fontWeight: 800,
    borderRadius: 999,
    padding: '0 24px',
    minHeight: 46,
    fontSize: 15,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
    boxShadow: 'var(--shadow-cta)'
  }
};
var PR_ST = {
  hecho: {
    bg: 'var(--ink)',
    fg: '#fff'
  },
  curso: {
    bg: 'color-mix(in oklab, var(--blue-lt) 30%, white)',
    fg: 'var(--blue)'
  },
  prox: {
    bg: '#eef0f5',
    fg: '#4a5170'
  }
};
function PrBar(_ref) {
  var pct = _ref.pct,
    h = _ref.h,
    color = _ref.color;
  return React.createElement("div", {
    style: {
      height: h || 10,
      borderRadius: 999,
      background: 'color-mix(in oklab, var(--blue-lt) 30%, white)',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      height: '100%',
      width: Math.max(0, Math.min(100, pct)) + '%',
      background: color || 'var(--blue)',
      borderRadius: 999,
      transition: 'width .4s'
    }
  }));
}
var PR_TAG = {
  curso: {
    background: 'var(--ink)',
    color: 'var(--amber)'
  },
  pronto: {
    background: 'var(--ink)',
    color: 'var(--amber)'
  },
  cerrado: {
    background: 'var(--blue-lt)',
    color: 'var(--ink)'
  }
};
function prPresupuesto(p) {
  return p.gastos.reduce(function (a, g) {
    return a + g.monto;
  }, 0) || p.meta || 0;
}
function prTag(p) {
  if (p.tipo === 'pronto' && p.ubicacion) return p.ubicacion;
  return [p.estado, p.tipo !== 'cerrado' ? p.ubicacion : ''].filter(Boolean).join(' · ');
}
function ProyectoCard(_ref2) {
  var p = _ref2.p,
    lang = _ref2.lang,
    onOpen = _ref2.onOpen;
  var u = PR_UI[lang === 'EN' ? 'EN' : 'ES'];
  var pres = prPresupuesto(p);
  var pct = pres ? p.gastado / pres * 100 : 0;
  return React.createElement("a", {
    href: '#p-' + p.id,
    onClick: function onClick(e) {
      e.preventDefault();
      onOpen(p.id);
    },
    className: "opener",
    style: {
      background: '#fff',
      border: '1px solid var(--line-strong)',
      borderRadius: 20,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
      color: 'var(--ink)'
    }
  }, p.foto ? React.createElement("img", {
    src: p.foto,
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '16/9',
      objectFit: 'cover',
      display: 'block'
    }
  }) : React.createElement("div", {
    style: {
      aspectRatio: '16/9',
      background: 'var(--steel-2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 40,
      color: 'var(--ink)',
      letterSpacing: 2
    }
  }, p.nombre.split(' ').map(function (w) {
    return w[0];
  }).join('').slice(0, 3).toUpperCase()), React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, React.createElement("span", {
    style: _objectSpread(_objectSpread(_objectSpread({}, PR.chip), PR_TAG[p.tipo]), {}, {
      alignSelf: 'flex-start'
    })
  }, prTag(p)), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 700,
      lineHeight: 1.15
    }
  }, p.nombre), p.tarjeta || p.resumen || p.lema ? React.createElement("div", {
    style: {
      fontSize: 16,
      color: 'var(--muted)',
      lineHeight: 1.55
    }
  }, p.tarjeta || p.resumen || p.lema) : null, pres ? React.createElement(PrBar, {
    pct: pct,
    h: 10,
    color: "var(--accent)"
  }) : null, p.gastado ? React.createElement("span", {
    style: {
      fontSize: 15,
      fontVariantNumeric: 'tabular-nums'
    }
  }, React.createElement("b", null, "US$ ", prFmt(p.gastado, lang)), " ", u.invertidos, pres ? ' ' + u.de + ' US$ ' + prFmt(pres, lang) : '') : null, React.createElement("span", {
    style: {
      marginTop: 'auto',
      paddingTop: 4,
      fontWeight: 700,
      fontSize: 15
    }
  }, u.conoce)));
}
function ZonaCerradaCard(_ref3) {
  var p = _ref3.p,
    lang = _ref3.lang,
    onOpen = _ref3.onOpen,
    grande = _ref3.grande;
  var u = PR_UI[lang === 'EN' ? 'EN' : 'ES'];
  return React.createElement("a", {
    href: '#p-' + p.id,
    onClick: function onClick(e) {
      e.preventDefault();
      onOpen(p.id);
    },
    className: "opener",
    style: {
      background: 'var(--ink)',
      color: '#fff',
      borderRadius: 22,
      overflow: 'hidden',
      textDecoration: 'none',
      display: 'flex',
      flexWrap: 'wrap'
    }
  }, grande && p.foto ? React.createElement("img", {
    src: p.foto,
    alt: "",
    style: {
      flex: '1 1 380px',
      minWidth: 0,
      maxWidth: '100%',
      aspectRatio: '16/10',
      objectFit: 'cover'
    }
  }) : null, React.createElement("div", {
    style: {
      flex: '1 1 380px',
      minWidth: 0,
      padding: grande ? 'clamp(24px,4vw,36px)' : 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, React.createElement("span", {
    style: _objectSpread(_objectSpread(_objectSpread({}, PR.chip), PR_TAG.cerrado), {}, {
      alignSelf: 'flex-start'
    })
  }, [p.estado, p.ubicacion].filter(Boolean).join(' · ')), React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: grande ? 34 : 24,
      lineHeight: 1.1
    }
  }, p.nombre), React.createElement("span", {
    style: {
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--on-ink-soft)'
    }
  }, grande ? [p.lema, p.resumen].filter(Boolean).join(' ') : p.hito || p.lema), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px 32px'
    }
  }, React.createElement("div", null, React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: grande ? 30 : 24,
      color: 'var(--amber)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "US$ ", prFmt(p.gastado, lang)), React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--on-ink-soft)'
    }
  }, u.invertidos)), grande && p.compras.length ? React.createElement("div", null, React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      color: 'var(--amber)'
    }
  }, prFmt(p.compras.length, lang)), React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--on-ink-soft)'
    }
  }, u.comprasConFactura)) : null), React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700
    }
  }, u.miraTodo)));
}
function ProyectosSection(_ref4) {
  var lang = _ref4.lang,
    onOpen = _ref4.onOpen;
  var u = PR_UI[lang === 'EN' ? 'EN' : 'ES'];
  var activos = window.nexosProyectos(lang).filter(function (p) {
    return p.tipo !== 'cerrado';
  });
  if (!activos.length) return null;
  return React.createElement("section", {
    id: "proyectos-inicio",
    style: {
      padding: 'clamp(56px,8vw,80px) 0',
      background: 'var(--steel-1)'
    }
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, PR.wrap), {}, {
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    })
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 12
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, PR.eyebrow), {}, {
      color: 'var(--accent-text)'
    })
  }, u.enCursoEy), React.createElement("h2", {
    style: _objectSpread(_objectSpread({}, PR.h2), {}, {
      fontSize: 'clamp(28px,4vw,38px)',
      marginTop: 10
    })
  }, u.ahoraTit)), React.createElement("a", {
    href: "#proyectos",
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--ink)'
    }
  }, u.todosLink + (activos.length > 3 ? ' (' + activos.length + ')' : '') + ' →')), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
      gap: 20
    }
  }, activos.slice(0, 3).map(function (p) {
    return React.createElement(ProyectoCard, {
      key: p.id,
      p: p,
      lang: lang,
      onOpen: onOpen
    });
  }))));
}
function ProyectosPagina(_ref5) {
  var lang = _ref5.lang,
    onOpen = _ref5.onOpen,
    onDonate = _ref5.onDonate;
  var u = PR_UI[lang === 'EN' ? 'EN' : 'ES'];
  var todos = window.nexosProyectos(lang);
  var activos = todos.filter(function (p) {
    return p.tipo !== 'cerrado';
  });
  var cerrados = todos.filter(function (p) {
    return p.tipo === 'cerrado';
  });
  var _React$useState = React.useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    filtro = _React$useState2[0],
    setFiltro = _React$useState2[1];
  var estados = [];
  activos.forEach(function (p) {
    if (estados.indexOf(p.estado) === -1) estados.push(p.estado);
  });
  var vista = filtro ? activos.filter(function (p) {
    return p.estado === filtro;
  }) : activos;
  var hitos = cerrados.concat(activos);
  return React.createElement(React.Fragment, null, React.createElement("header", {
    style: {
      background: 'var(--ink)',
      color: '#fff'
    }
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, PR.wrap), {}, {
      paddingTop: 'clamp(48px,8vw,72px)',
      paddingBottom: 'clamp(44px,7vw,64px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      alignItems: 'flex-start'
    })
  }, React.createElement("span", {
    style: _objectSpread(_objectSpread({}, PR.eyebrow), {}, {
      color: 'var(--amber)'
    })
  }, u.pagEy), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(32px,5vw,46px)',
      lineHeight: 1.08,
      letterSpacing: '-1px',
      margin: 0,
      maxWidth: 860,
      fontWeight: 700
    }
  }, u.pagTit1, React.createElement("br", null), u.pagTit2, React.createElement("span", {
    style: {
      color: 'var(--amber)',
      whiteSpace: 'nowrap'
    }
  }, u.pagTit3)), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--on-ink-soft)',
      maxWidth: 640
    }
  }, u.pagLead))), activos.length ? React.createElement("section", {
    style: {
      background: 'var(--steel-1)',
      padding: 'clamp(48px,7vw,64px) 0'
    }
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, PR.wrap), {}, {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    })
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 16
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, PR.eyebrow), {}, {
      color: 'var(--accent-text)'
    })
  }, u.enCursoEy), React.createElement("h2", {
    style: _objectSpread(_objectSpread({}, PR.h2), {}, {
      fontSize: 'clamp(26px,3.6vw,34px)',
      marginTop: 10
    })
  }, u.ahoraTit)), activos.length > 3 && estados.length > 1 ? React.createElement("div", {
    role: "group",
    "aria-label": u.filtroTodos,
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, [''].concat(estados).map(function (e) {
    return React.createElement("button", {
      key: e || 'todos',
      type: "button",
      "aria-pressed": filtro === e,
      onClick: function onClick() {
        setFiltro(e);
      },
      style: PR.pill(filtro === e)
    }, e || u.filtroTodos);
  })) : null), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
      gap: 20
    }
  }, vista.map(function (p) {
    return React.createElement(ProyectoCard, {
      key: p.id,
      p: p,
      lang: lang,
      onOpen: onOpen
    });
  })))) : null, cerrados.length ? React.createElement("section", {
    style: _objectSpread(_objectSpread({}, PR.wrap), {}, {
      padding: 'clamp(48px,7vw,64px) 24px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    })
  }, React.createElement("div", null, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, PR.eyebrow), {}, {
      color: 'var(--accent-text)'
    })
  }, u.cerradosEy), React.createElement("h2", {
    style: _objectSpread(_objectSpread({}, PR.h2), {}, {
      fontSize: 'clamp(26px,3.6vw,34px)',
      marginTop: 10
    })
  }, u.cumplimosTit)), cerrados.length === 1 ? React.createElement(ZonaCerradaCard, {
    p: cerrados[0],
    lang: lang,
    onOpen: onOpen,
    grande: true
  }) : React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
      gap: 16
    }
  }, cerrados.map(function (p) {
    return React.createElement(ZonaCerradaCard, {
      key: p.id,
      p: p,
      lang: lang,
      onOpen: onOpen
    });
  }))) : null, React.createElement("section", {
    style: _objectSpread(_objectSpread({}, PR.wrap), {}, {
      padding: '32px 24px clamp(56px,8vw,72px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    })
  }, React.createElement("h2", {
    style: _objectSpread(_objectSpread({}, PR.h2), {}, {
      fontSize: 28
    })
  }, u.recorridoTit), React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      rowGap: 28
    }
  }, hitos.concat([null]).map(function (p, i) {
    var color = !p ? null : p.tipo === 'cerrado' ? 'var(--ink)' : p.tipo === 'curso' ? 'var(--accent)' : 'var(--amber)';
    return React.createElement("li", {
      key: p ? p.id : 'next',
      style: {
        padding: '20px 16px 0 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        position: 'relative',
        borderTop: '3px solid var(--line-strong)'
      }
    }, React.createElement("span", {
      style: {
        position: 'absolute',
        top: -10,
        left: 0,
        width: 16,
        height: 16,
        borderRadius: '50%',
        boxSizing: 'border-box',
        background: color || '#fff',
        border: color ? 0 : '3px dashed var(--blue-lt)'
      }
    }), React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: 'var(--muted)'
      }
    }, p ? p.fecha || p.estado : u.loQueViene), React.createElement("b", {
      style: {
        fontSize: 17
      }
    }, p ? p.nombre : u.proximoProy), React.createElement("span", {
      style: {
        fontSize: 15,
        color: 'var(--muted)'
      }
    }, p ? p.hito || p.lema : u.empiezaAporte));
  }))), React.createElement("section", {
    style: {
      background: 'var(--warm)',
      borderTop: '1px solid var(--line)'
    }
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, PR.wrap), {}, {
      padding: 'clamp(40px,6vw,52px) 24px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 24,
      alignItems: 'center',
      justifyContent: 'space-between'
    })
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      maxWidth: 660
    }
  }, React.createElement("h2", {
    style: _objectSpread(_objectSpread({}, PR.h2), {}, {
      fontSize: 30
    })
  }, u.sumateTit), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--muted)'
    }
  }, u.sumateTxt)), React.createElement("button", {
    onClick: onDonate,
    style: _objectSpread(_objectSpread({}, PR.coral), {}, {
      minHeight: 54,
      padding: '0 34px',
      fontSize: 16,
      border: 0,
      cursor: 'pointer'
    })
  }, u.donar))));
}
function ProyectoPage(_ref6) {
  var id = _ref6.id,
    lang = _ref6.lang,
    onClose = _ref6.onClose,
    onDonate = _ref6.onDonate;
  var L = lang === 'EN' ? 'EN' : 'ES';
  var u = PR_UI[L];
  var scroller = React.useRef(null);
  var _React$useState3 = React.useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    fase = _React$useState4[0],
    setFase = _React$useState4[1];
  var _React$useState5 = React.useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    lb = _React$useState6[0],
    setLb = _React$useState6[1];
  var _React$useState7 = React.useState(0),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    kit = _React$useState8[0],
    setKit = _React$useState8[1];
  var carrusel = React.useRef(null);
  var _React$useState9 = React.useState(false),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    pausaF = _React$useState0[0],
    setPausaF = _React$useState0[1];
  var reanudarF = React.useRef(null);
  function moverF(dir) {
    var el = carrusel.current;
    if (!el) return;
    var max = el.scrollWidth - el.clientWidth - 4;
    if (dir > 0 && el.scrollLeft >= max) el.scrollTo({
      left: 0,
      behavior: 'smooth'
    });else if (dir < 0 && el.scrollLeft <= 4) el.scrollTo({
      left: el.scrollWidth,
      behavior: 'smooth'
    });else el.scrollBy({
      left: dir * Math.round(el.clientWidth * .7),
      behavior: 'smooth'
    });
  }
  React.useEffect(function () {
    if (pausaF || lb !== null) return;
    try {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    } catch (e) {}
    var t = setInterval(function () {
      moverF(1);
    }, 5000);
    return function () {
      clearInterval(t);
    };
  }, [pausaF, lb, id]);
  React.useEffect(function () {
    return function () {
      clearTimeout(reanudarF.current);
    };
  }, []);
  function pausarF() {
    clearTimeout(reanudarF.current);
    setPausaF(true);
  }
  function soltarF(ms) {
    clearTimeout(reanudarF.current);
    reanudarF.current = setTimeout(function () {
      setPausaF(false);
    }, ms || 0);
  }
  React.useEffect(function () {
    if (!id) return;
    setFase(null);
    setLb(null);
    if (carrusel.current) carrusel.current.scrollLeft = 0;
    setKit(0);
    function k(e) {
      if (e.key === 'Escape') {
        if (lb !== null) setLb(null);else onClose();
      }
    }
    document.addEventListener('keydown', k);
    window.scrollTo(0, 0);
    return function () {
      document.removeEventListener('keydown', k);
    };
  }, [id]);
  if (!id) return null;
  var p = window.nexosProyectos(lang).filter(function (x) {
    return x.id === id;
  })[0];
  if (!p) return null;
  var pres = p.gastos.reduce(function (a, g) {
    return a + g.monto;
  }, 0) || p.meta || 0;
  var inv = p.gastado || 0;
  var pct = pres ? inv / pres * 100 : 0;
  var cerrado = p.tipo === 'cerrado';
  var eyebrow = [cerrado ? p.estado : '', p.ubicacion, p.periodo, !cerrado && p.aliados.length ? u.junto + ' ' + p.aliados.map(function (a) {
    return a.nombre;
  }).join(', ') : ''].filter(Boolean).join(' · ');
  var nE = p.etapas.length;
  var activas = cerrado ? [] : p.etapasActivas.map(function (n) {
    return Math.min(Math.max(n - 1, 0), Math.max(nE - 1, 0));
  });
  var ultima = cerrado ? nE : Math.max.apply(null, activas.concat([0]));
  var actual = cerrado ? 0 : Math.min.apply(null, activas.length ? activas : [0]);
  var selF = fase === null ? actual : fase;
  var etapaInfo = function etapaInfo(i) {
    return activas.indexOf(i) > -1 ? ['curso', activas.length > 1 ? u.enCurso : u.aqui] : i < ultima ? ['hecho', u.hecho] : ['prox', u.proximo];
  };
  var act = p.etapas[selF];
  var resto = inv;
  var gastos = p.gastos.map(function (g) {
    var cub = Math.max(0, Math.min(g.monto, resto));
    resto -= cub;
    var st = cub >= g.monto && g.monto > 0 ? ['hecho', u.cubierto] : cub > 0 ? ['curso', u.cubriendo] : ['prox', u.pendiente];
    return Object.assign({}, g, {
      cub: cub,
      st: st
    });
  });
  var fotosTab = p.fotos;
  var irABuscador = function irABuscador(e) {
    e.preventDefault();
    location.hash = 'transparencia';
    setTimeout(function () {
      var el = document.getElementById('reporte');
      if (el) el.scrollIntoView({
        behavior: 'smooth'
      });
    }, 150);
  };
  var tile = {
    background: 'color-mix(in oklab, var(--blue-lt) 16%, white)',
    borderRadius: 12,
    padding: '12px 14px'
  };
  return React.createElement("div", {
    className: "sp-root",
    ref: scroller,
    "aria-label": p.nombre,
    style: {
      background: '#fff'
    }
  }, React.createElement("div", {
    style: {
      background: 'var(--ink)'
    }
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, PR.wrap), {}, {
      paddingTop: 18
    })
  }, React.createElement("a", {
    href: "#proyectos",
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: '#fff'
    }
  }, u.todos))), React.createElement("header", {
    style: {
      background: 'var(--ink)',
      color: '#fff'
    }
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, PR.wrap), {}, {
      padding: 'clamp(28px,5vw,48px) 24px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 32,
      alignItems: 'flex-start'
    })
  }, React.createElement("div", {
    style: {
      flex: '999 1 480px',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, eyebrow ? React.createElement("span", {
    style: _objectSpread(_objectSpread({}, PR.eyebrow), {}, {
      color: 'var(--amber)'
    })
  }, eyebrow) : null, React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      letterSpacing: '-1.6px',
      fontSize: 'clamp(38px,6vw,64px)',
      margin: 0,
      lineHeight: 1.02,
      color: '#fff'
    }
  }, p.nombre), p.lema ? React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'clamp(19px,2.4vw,24px)',
      lineHeight: 1.3,
      fontWeight: 700,
      color: 'var(--amber)'
    }
  }, p.lema) : null, p.resumen ? React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.65,
      maxWidth: 600,
      color: 'var(--on-ink-soft)'
    }
  }, p.resumen) : null), cerrado && p.foto ? React.createElement("img", {
    src: p.foto,
    alt: "",
    style: {
      flex: '1 1 360px',
      minWidth: 0,
      maxWidth: '100%',
      aspectRatio: '4/3',
      objectFit: 'cover',
      borderRadius: 22
    }
  }) : pres || inv ? React.createElement("div", {
    style: {
      flex: '1 1 320px',
      minWidth: 0,
      background: '#fff',
      color: 'var(--ink)',
      borderRadius: 22,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      boxShadow: '0 10px 30px rgba(17,53,76,.08)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 10,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, p.estado ? React.createElement("span", {
    style: _objectSpread(_objectSpread({}, PR.chip), PR_TAG[p.tipo])
  }, p.estado) : React.createElement("span", null), p.actualizado ? React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--muted)'
    }
  }, u.actualizado, " ", p.actualizado) : null), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--muted)'
    }
  }, u.invertido), React.createElement("span", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      color: 'var(--ink)',
      fontVariantNumeric: 'tabular-nums',
      lineHeight: 1.1
    }
  }, "US$ ", prFmt(inv, lang)), pres ? React.createElement("span", {
    style: {
      fontSize: 15
    }
  }, u.de, " ", React.createElement("b", null, "US$ ", prFmt(pres, lang)), " ", u.presupuestados) : null), pres ? React.createElement(PrBar, {
    pct: pct,
    h: 12,
    color: "var(--accent)"
  }) : null, inv ? React.createElement("a", {
    href: "#transparencia",
    onClick: function onClick(e) {
      e.preventDefault();
      window.nexosVerCuentas(p.id);
    },
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, u.verCompras) : null, React.createElement("button", {
    onClick: onDonate,
    style: PR.coral
  }, u.donar), React.createElement("a", {
    href: "#reporte",
    onClick: irABuscador,
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, u.buscaNombre)) : null)), p.historia.length || p.cifras.length ? React.createElement("section", {
    style: _objectSpread(_objectSpread({}, PR.wrap), {}, {
      padding: 'clamp(40px,6vw,56px) 24px 12px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '32px 48px',
      alignItems: 'center'
    })
  }, React.createElement("div", {
    style: {
      flex: p.historia.length ? '1 1 380px' : '1 1 100%',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, React.createElement("span", {
    style: PR.eyebrow
  }, cerrado ? u.resumenEy : u.loQuePaso), p.historia.map(function (t, i) {
    return React.createElement("p", {
      key: i,
      style: {
        margin: 0,
        fontSize: 19,
        lineHeight: 1.7,
        color: 'var(--ink)'
      }
    }, t);
  }), p.destacado ? React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.65,
      fontWeight: 700,
      color: 'var(--accent-text)'
    }
  }, p.destacado) : null), p.cifras.length ? React.createElement("div", {
    style: {
      flex: p.historia.length ? '1 1 440px' : '1 1 100%',
      minWidth: 0,
      display: 'grid',
      gridTemplateColumns: p.historia.length ? 'repeat(2,minmax(0,1fr))' : 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 12
    }
  }, p.cifras.map(function (c, i) {
    return React.createElement("div", {
      key: i,
      style: {
        background: 'color-mix(in oklab, var(--blue-lt) 16%, white)',
        borderRadius: 18,
        padding: 22,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        minWidth: 0
      }
    }, React.createElement("b", {
      style: {
        fontSize: c.n.length > 6 ? 'clamp(28px,3vw,36px)' : 46,
        lineHeight: 1,
        fontWeight: 800,
        color: 'var(--blue)',
        fontVariantNumeric: 'tabular-nums',
        whiteSpace: 'nowrap'
      }
    }, c.n), React.createElement("span", {
      style: {
        fontSize: 14,
        lineHeight: 1.45,
        color: 'var(--ink)'
      }
    }, c.texto));
  })) : null) : null, nE ? React.createElement("section", {
    style: _objectSpread(_objectSpread({}, PR.wrap), {}, {
      padding: 'clamp(40px,6vw,56px) 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    })
  }, React.createElement("div", null, React.createElement("h2", {
    style: PR.h2
  }, cerrado ? u.hicimosTit : u.procesoTit), React.createElement("p", {
    style: PR.sub
  }, cerrado ? u.hicimosSub : u.procesoSub)), React.createElement("div", {
    style: {
      overflowX: 'auto',
      padding: '12px 8px 8px'
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      gap: 8,
      minWidth: Math.max(nE * 128, 320)
    }
  }, nE > 1 ? React.createElement("div", {
    style: {
      position: 'absolute',
      left: 50 / nE + '%',
      width: (nE - 1) * 100 / nE + '%',
      top: 25,
      height: 4,
      background: 'var(--line)',
      borderRadius: 999
    }
  }) : null, nE > 1 ? React.createElement("div", {
    style: {
      position: 'absolute',
      left: 50 / nE + '%',
      width: Math.min(ultima, nE - 1) * 100 / nE + '%',
      top: 25,
      height: 4,
      background: 'var(--blue)',
      borderRadius: 999
    }
  }) : null, p.etapas.map(function (e, i) {
    var st = etapaInfo(i)[0];
    var on = i === selF;
    return React.createElement("button", {
      key: i,
      type: "button",
      "aria-pressed": on,
      onClick: function onClick() {
        setFase(i);
      },
      style: {
        flex: '1 1 0',
        minWidth: 120,
        border: 0,
        background: 'none',
        padding: 0,
        fontFamily: 'inherit',
        color: 'var(--ink)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        textAlign: 'center',
        position: 'relative'
      }
    }, React.createElement("span", {
      style: {
        width: 52,
        height: 52,
        borderRadius: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 800,
        fontSize: 18,
        boxSizing: 'border-box',
        background: st === 'hecho' ? 'var(--ink)' : st === 'curso' ? 'var(--blue)' : '#fff',
        color: st === 'prox' ? 'var(--muted)' : '#fff',
        border: st === 'prox' ? '2px solid var(--line)' : '0',
        boxShadow: on ? '0 0 0 5px var(--amber)' : 'none'
      }
    }, cerrado ? '' : i + 1), React.createElement("b", {
      style: {
        fontSize: 15
      }
    }, e.titulo), React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: st === 'curso' ? 'var(--blue)' : 'var(--muted)'
      }
    }, cerrado && e.cuando ? e.cuando : etapaInfo(i)[1]));
  }))), act ? React.createElement("div", {
    style: {
      border: '1px solid var(--line)',
      borderRadius: 22,
      padding: 28,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 28,
      background: 'var(--soft)'
    }
  }, React.createElement("div", {
    style: {
      flex: '2 1 420px',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, cerrado ? null : React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--muted)'
    }
  }, u.etapa.toUpperCase(), " ", selF + 1, " ", u.deN.toUpperCase(), " ", nE), React.createElement("span", {
    style: _objectSpread(_objectSpread({}, PR.chip), {}, {
      background: PR_ST[etapaInfo(selF)[0]].bg,
      color: PR_ST[etapaInfo(selF)[0]].fg
    })
  }, etapaInfo(selF)[1])), act.cuando ? React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--accent-text)'
    }
  }, act.cuando) : null, React.createElement("b", {
    style: {
      fontSize: 24
    }
  }, act.titulo), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.65
    }
  }, act.texto))) : null) : null, p.fotos.length ? React.createElement("section", {
    style: _objectSpread(_objectSpread({}, PR.wrap), {}, {
      padding: '12px 24px clamp(40px,6vw,56px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    })
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: '14px 24px'
    }
  }, React.createElement("div", null, React.createElement("h2", {
    style: PR.h2
  }, cerrado ? u.fotosTitZ : u.fotosTit), React.createElement("p", {
    style: PR.sub
  }, p.fotosSub || (cerrado ? u.fotosSubZ : u.fotosSub))), fotosTab.length > 1 ? React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, React.createElement("button", {
    onClick: function onClick() {
      moverF(-1);
    },
    "aria-label": u.anterior,
    className: "strip-nav"
  }, "\u2190"), React.createElement("button", {
    onClick: function onClick() {
      moverF(1);
    },
    "aria-label": u.siguiente,
    className: "strip-nav"
  }, "\u2192")) : null), fotosTab.length ? React.createElement("div", {
    ref: carrusel,
    className: "strip",
    onMouseEnter: pausarF,
    onMouseLeave: function onMouseLeave() {
      soltarF(0);
    },
    onFocus: pausarF,
    onBlur: function onBlur() {
      soltarF(0);
    },
    onTouchStart: function onTouchStart() {
      pausarF();
      soltarF(8000);
    }
  }, fotosTab.map(function (f, i) {
    return React.createElement("button", {
      key: f.src,
      onClick: function onClick() {
        setLb(i);
      },
      className: "zoomable strip-item",
      "aria-label": f.pie,
      style: {
        border: 0,
        padding: 0,
        background: 'none',
        cursor: 'zoom-in',
        textAlign: 'left',
        fontFamily: 'inherit',
        color: 'var(--ink)',
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, React.createElement("img", {
      src: f.src,
      alt: f.pie,
      loading: "lazy",
      style: {
        width: '100%',
        aspectRatio: '4/3',
        objectFit: 'cover',
        borderRadius: 16,
        display: 'block'
      }
    }), React.createElement("span", {
      style: {
        fontSize: 14,
        lineHeight: 1.4
      }
    }, f.pie));
  })) : React.createElement("div", {
    style: {
      border: '1.5px dashed var(--blue-lt)',
      background: 'var(--soft)',
      borderRadius: 18,
      padding: '40px 24px',
      textAlign: 'center'
    }
  }, React.createElement("b", {
    style: {
      fontSize: 18
    }
  }, u.pronto), React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--muted)',
      marginTop: 6
    }
  }, u.prontoTxt)), lb !== null && fotosTab[lb] ? React.createElement("div", {
    className: "lb-root",
    role: "dialog",
    "aria-modal": "true",
    onClick: function onClick(e) {
      if (e.target === e.currentTarget) setLb(null);
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      background: 'rgba(17,53,76,.9)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14,
      padding: 24
    }
  }, React.createElement("img", {
    className: "lb-img",
    src: fotosTab[lb].src,
    alt: fotosTab[lb].pie,
    style: {
      maxWidth: '100%',
      maxHeight: '74vh',
      objectFit: 'contain',
      borderRadius: 12
    }
  }), React.createElement("span", {
    style: {
      color: '#fff',
      fontSize: 15,
      textAlign: 'center'
    }
  }, fotosTab[lb].pie, " \xB7 ", lb + 1, " / ", fotosTab.length), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, React.createElement("button", {
    "aria-label": u.anterior,
    onClick: function onClick() {
      setLb((lb - 1 + fotosTab.length) % fotosTab.length);
    },
    style: PR.pill(false)
  }, "\u2190"), React.createElement("button", {
    onClick: function onClick() {
      setLb(null);
    },
    style: PR.pill(false)
  }, u.cerrar), React.createElement("button", {
    "aria-label": u.siguiente,
    onClick: function onClick() {
      setLb((lb + 1) % fotosTab.length);
    },
    style: PR.pill(false)
  }, "\u2192"))) : null) : null, p.citas.length ? p.citas.map(function (c, i) {
    return React.createElement("section", {
      key: i,
      style: {
        background: 'var(--ink)',
        color: '#fff'
      }
    }, React.createElement("div", {
      style: _objectSpread(_objectSpread({}, PR.wrap), {}, {
        padding: 'clamp(44px,7vw,64px) 24px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 40,
        alignItems: 'center'
      })
    }, c.src ? React.createElement("img", {
      src: c.src,
      alt: "",
      style: {
        flex: '1 1 280px',
        minWidth: 0,
        maxWidth: '100%',
        aspectRatio: '4/5',
        objectFit: 'cover',
        borderRadius: 22
      }
    }) : null, React.createElement("div", {
      style: {
        flex: '1 1 420px',
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(24px,3.4vw,36px)',
        lineHeight: 1.3,
        fontWeight: 700
      }
    }, c.frase), c.pie ? React.createElement("span", {
      style: {
        fontSize: 15,
        color: 'var(--on-ink-soft)'
      }
    }, c.pie) : null)));
  }) : null, gastos.length ? React.createElement("section", {
    style: {
      background: 'var(--soft)'
    }
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, PR.wrap), {}, {
      padding: 'clamp(40px,6vw,56px) 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    })
  }, React.createElement("div", null, React.createElement("h2", {
    style: PR.h2
  }, u.repartoTit), React.createElement("p", {
    style: PR.sub
  }, u.repartoSub)), React.createElement("div", {
    style: _objectSpread(_objectSpread({}, PR.card), {}, {
      padding: '8px 26px'
    })
  }, gastos.map(function (g, i) {
    return React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) auto',
        gap: '8px 16px',
        padding: '18px 0',
        borderBottom: i < gastos.length - 1 ? '1px solid var(--line)' : '0',
        alignItems: 'center'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        minWidth: 0
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        alignItems: 'center'
      }
    }, React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--muted)',
        fontWeight: 700
      }
    }, i + 1), React.createElement("b", {
      style: {
        fontSize: 17
      }
    }, g.titulo), React.createElement("span", {
      style: _objectSpread(_objectSpread({}, PR.chip), {}, {
        background: PR_ST[g.st[0]].bg,
        color: PR_ST[g.st[0]].fg
      })
    }, g.st[1])), g.texto ? React.createElement("span", {
      style: {
        fontSize: 14,
        lineHeight: 1.5,
        color: 'var(--muted)'
      }
    }, g.texto) : null), React.createElement("span", {
      style: {
        fontSize: 15,
        textAlign: 'right',
        fontVariantNumeric: 'tabular-nums'
      }
    }, React.createElement("b", {
      style: {
        color: 'var(--blue)'
      }
    }, "US$ ", prFmt(g.cub, lang)), " ", u.de, " US$ ", prFmt(g.monto, lang)), React.createElement("div", {
      style: {
        gridColumn: '1 / -1'
      }
    }, React.createElement(PrBar, {
      pct: g.monto ? g.cub / g.monto * 100 : 0,
      h: 10
    })));
  })), p.notaPresupuesto ? React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--muted)'
    }
  }, p.notaPresupuesto) : null)) : null, p.kits.length ? React.createElement("section", {
    style: _objectSpread(_objectSpread({}, PR.wrap), {}, {
      padding: 'clamp(40px,6vw,56px) 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    })
  }, React.createElement("div", null, React.createElement("h2", {
    style: PR.h2
  }, u.kitsTit), React.createElement("p", {
    style: PR.sub
  }, u.kitsSub)), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, p.kits.map(function (k, i) {
    return React.createElement("button", {
      key: i,
      "aria-pressed": i === kit,
      onClick: function onClick() {
        setKit(i);
      },
      style: PR.pill(i === kit)
    }, k.titulo);
  })), p.kits[kit] ? React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      borderRadius: 22,
      overflow: 'hidden',
      border: '1px solid var(--line)'
    }
  }, React.createElement("div", {
    style: {
      flex: '1 1 280px',
      minWidth: 0,
      background: 'var(--ink)',
      color: '#fff',
      padding: 30,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, React.createElement("span", {
    style: _objectSpread(_objectSpread({}, PR.eyebrow), {}, {
      color: 'var(--blue-lt)'
    })
  }, u.kitCuesta), React.createElement("span", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "US$ ", p.kits[kit].precio), React.createElement("span", {
    style: {
      fontSize: 15
    }
  }, p.kits[kit].instrumentos), React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,.72)'
    }
  }, u.porMusico)), React.createElement("div", {
    style: {
      flex: '2 1 380px',
      minWidth: 0,
      padding: 30,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      justifyContent: 'center'
    }
  }, React.createElement("b", {
    style: {
      fontSize: 16
    }
  }, u.incluye), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.6
    }
  }, p.kits[kit].texto), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14,
      alignItems: 'center',
      paddingTop: 4
    }
  }, React.createElement("button", {
    onClick: onDonate,
    style: PR.coral
  }, u.donar)))) : null, React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--muted)'
    }
  }, u.kitsNota)) : null, p.aportes.length ? React.createElement("section", {
    style: {
      background: 'var(--peach)',
      borderTop: '1px solid var(--line)'
    }
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, PR.wrap), {}, {
      padding: 'clamp(40px,6vw,52px) 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    })
  }, React.createElement("h2", {
    style: PR.h2
  }, u.aportarTit), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 16
    }
  }, p.aportes.map(function (a, i) {
    var esDonar = a.enlace.toLowerCase() === 'donar';
    return React.createElement("div", {
      key: i,
      style: _objectSpread(_objectSpread({}, PR.card), {}, {
        borderRadius: 18,
        padding: 22,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      })
    }, React.createElement("b", {
      style: {
        fontSize: 17
      }
    }, a.titulo), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        lineHeight: 1.55,
        color: 'var(--muted)'
      }
    }, a.texto), React.createElement("div", {
      style: {
        marginTop: 'auto'
      }
    }, esDonar ? React.createElement("button", {
      onClick: onDonate,
      style: PR.coral
    }, a.boton || u.donar) : a.enlace ? React.createElement("a", {
      href: a.enlace,
      target: "_blank",
      rel: "noopener",
      style: PR.ghost
    }, (a.boton || a.enlace) + ' →') : React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--muted)'
      }
    }, u.enlacePronto)));
  })))) : null, p.aliados.length || p.beneficiarios.length ? React.createElement("section", {
    style: _objectSpread(_objectSpread({}, PR.wrap), {}, {
      padding: '44px 24px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '24px 40px'
    })
  }, [[u.aliados, p.aliados], [u.beneficiarios, p.beneficiarios]].filter(function (g) {
    return g[1].length;
  }).map(function (g) {
    return React.createElement("div", {
      key: g[0],
      style: {
        flex: '1 1 320px',
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, React.createElement("span", {
      style: PR.eyebrow
    }, g[0]), g[1].map(function (o, i) {
      var inner = React.createElement(React.Fragment, null, o.logo ? React.createElement("img", {
        src: o.logo,
        alt: "",
        style: {
          width: 72,
          height: 72,
          objectFit: 'cover',
          borderRadius: 14,
          flex: 'none'
        }
      }) : React.createElement("span", {
        style: {
          width: 72,
          height: 72,
          borderRadius: 14,
          flex: 'none',
          border: '1px solid var(--line)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 24,
          color: 'var(--muted)'
        }
      }, o.nombre.charAt(0)));
      var nombre = o.enlace ? React.createElement("a", {
        href: o.enlace,
        target: "_blank",
        rel: "noopener",
        style: {
          fontSize: 17,
          lineHeight: 1.35,
          fontWeight: 700,
          color: 'var(--ink)',
          textDecoration: 'none'
        }
      }, o.nombre, " \u2197") : React.createElement("b", {
        style: {
          fontSize: 17,
          lineHeight: 1.35,
          color: 'var(--ink)'
        }
      }, o.nombre);
      return React.createElement("div", {
        key: i,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 16
        }
      }, inner, React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          minWidth: 0
        }
      }, nombre, o.instagram ? React.createElement("a", {
        href: 'https://www.instagram.com/' + o.instagram + '/',
        target: "_blank",
        rel: "noopener",
        style: {
          fontSize: 14,
          fontWeight: 700
        }
      }, "@", o.instagram) : null));
    }));
  })) : null, inv ? React.createElement("section", {
    id: "compras",
    style: _objectSpread(_objectSpread({}, PR.wrap), {}, {
      padding: '12px 24px clamp(40px,6vw,56px)'
    })
  }, React.createElement("div", {
    style: {
      background: 'var(--steel-1)',
      borderRadius: 22,
      padding: 'clamp(22px,4vw,30px)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '18px 32px',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0
    }
  }, React.createElement("h2", {
    style: PR.h2
  }, u.comprasTit), React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'var(--muted)'
    }
  }, React.createElement("b", {
    style: {
      color: 'var(--ink)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "US$ ", prFmt(inv, lang)), p.compras.length ? ' · ' + prFmt(p.compras.length, lang) + ' ' + u.compras : '', " \xB7 ", u.conFacturaCorto)), React.createElement("a", {
    href: "#transparencia",
    onClick: function onClick(e) {
      e.preventDefault();
      window.nexosVerCuentas(p.id);
    },
    style: _objectSpread(_objectSpread({}, PR.ghost), {}, {
      background: '#fff',
      borderColor: 'var(--ink)',
      color: 'var(--ink)',
      textDecoration: 'none'
    })
  }, u.verDetalle), p.porCategoria.length > 1 ? React.createElement("div", {
    style: {
      flexBasis: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, p.porCategoria.slice(0, 3).map(function (c) {
    return React.createElement("div", {
      key: c.categoria,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12,
        fontSize: 15
      }
    }, React.createElement("span", null, prCat(c.categoria, lang)), React.createElement("b", {
      style: {
        fontVariantNumeric: 'tabular-nums'
      }
    }, "US$ ", prFmt(c.total, lang))), React.createElement(PrBar, {
      pct: inv ? c.total / inv * 100 : 0,
      h: 10
    }));
  }), p.porCategoria.length > 3 ? React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--muted)'
    }
  }, u.categoriasMas(p.porCategoria.length - 3)) : null) : null)) : null, cerrado ? function () {
    var otros = window.nexosProyectos(lang).filter(function (o) {
      return o.tipo !== 'cerrado';
    });
    return React.createElement(React.Fragment, null, otros.length ? React.createElement("section", {
      style: _objectSpread(_objectSpread({}, PR.wrap), {}, {
        padding: '8px 24px clamp(44px,7vw,64px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      })
    }, React.createElement("div", null, React.createElement("div", {
      style: _objectSpread(_objectSpread({}, PR.eyebrow), {}, {
        color: 'var(--accent-text)'
      })
    }, u.despuesEy), React.createElement("h2", {
      style: _objectSpread(_objectSpread({}, PR.h2), {}, {
        fontSize: 'clamp(20px,2.4vw,26px)',
        lineHeight: 1.3,
        marginTop: 10,
        maxWidth: 820
      })
    }, u.despuesTit)), React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
        gap: 16
      }
    }, otros.map(function (o) {
      return React.createElement("a", {
        key: o.id,
        href: '#p-' + o.id,
        style: {
          border: '1px solid var(--line-strong)',
          borderRadius: 18,
          padding: 22,
          textDecoration: 'none',
          color: 'var(--ink)',
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }
      }, React.createElement("span", {
        style: _objectSpread(_objectSpread(_objectSpread({}, PR.chip), PR_TAG[o.tipo]), {}, {
          alignSelf: 'flex-start'
        })
      }, o.estado), React.createElement("b", {
        style: {
          fontFamily: 'var(--font-display)',
          fontSize: 22
        }
      }, o.nombre), React.createElement("span", {
        style: {
          fontSize: 15,
          color: 'var(--muted)'
        }
      }, o.lema), React.createElement("span", {
        style: {
          fontWeight: 700,
          fontSize: 15
        }
      }, u.conoce));
    }))) : null, React.createElement("section", {
      style: {
        background: 'var(--warm)',
        borderTop: '1px solid var(--line)'
      }
    }, React.createElement("div", {
      style: _objectSpread(_objectSpread({}, PR.wrap), {}, {
        padding: 'clamp(40px,6vw,52px) 24px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'space-between'
      })
    }, React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        maxWidth: 660
      }
    }, React.createElement("h2", {
      style: _objectSpread(_objectSpread({}, PR.h2), {}, {
        fontSize: 30
      })
    }, u.graciasTit), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 16,
        lineHeight: 1.6,
        color: 'var(--muted)'
      }
    }, u.graciasTxt)), React.createElement("button", {
      onClick: onDonate,
      style: _objectSpread(_objectSpread({}, PR.coral), {}, {
        minHeight: 54,
        padding: '0 34px',
        fontSize: 16,
        border: 0,
        cursor: 'pointer'
      })
    }, u.donar))));
  }() : null);
}
window.ProyectosSection = ProyectosSection;
window.ProyectosPagina = ProyectosPagina;
window.ZonaCerradaCard = ZonaCerradaCard;
window.prCat = prCat;
window.prFmt = prFmt;
window.nexosVerCuentas = function (id) {
  window.__nxAbrir = id;
  location.hash = 'transparencia';
  setTimeout(function () {
    var el = document.getElementById('cuentas-' + id);
    if (el) el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    window.__nxAbrir = null;
  }, 450);
};
window.ProyectoPage = ProyectoPage;
;
/* EditorialLandingExport.jsx */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var NS = window.NEXOSDesignSystem_0519e6;
var Button = NS.Button,
  Card = NS.Card,
  Notice = NS.Notice,
  StatCard = NS.StatCard,
  CurrencyCard = NS.CurrencyCard,
  DonationsTable = NS.DonationsTable,
  ExpenseCategory = NS.ExpenseCategory,
  EmptyState = NS.EmptyState,
  SearchInput = NS.SearchInput,
  FilterSelect = NS.FilterSelect,
  DonateModal = NS.DonateModal,
  PaymentMethod = NS.PaymentMethod,
  DriveLinkButton = NS.DriveLinkButton,
  StepCard = NS.StepCard,
  CopyButton = NS.CopyButton;
var TWEAK_DEFAULTS = {
  "palette": ["#E0680E", "#11354C", "#11354C", "#FFFFFF"],
  "portada": "Sobrio",
  "subventana": "Página",
  "overlay": "Navy",
  "winHeader": "Navy"
};
var A = {
  wrap: {
    maxWidth: 1180,
    margin: '0 auto',
    padding: '0 24px'
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    color: 'var(--accent-text)'
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(28px,4vw,44px)',
    fontWeight: 700,
    letterSpacing: '-1px',
    lineHeight: 1.05,
    margin: '10px 0 0',
    color: 'var(--ink)'
  },
  lead: {
    fontSize: 17,
    lineHeight: 1.7,
    color: 'var(--muted)',
    maxWidth: 620,
    margin: '14px 0 0'
  }
};
function NavBar(_ref) {
  var onOpen = _ref.onOpen,
    onDonate = _ref.onDonate,
    lang = _ref.lang,
    setLang = _ref.setLang,
    forceSolid = _ref.forceSolid;
  var d = window.nexosContent(lang);
  var u = d.ui;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    scrolled = _React$useState2[0],
    setScrolled = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    menu = _React$useState4[0],
    setMenu = _React$useState4[1];
  var solid = forceSolid || scrolled;
  var navActual = function () {
    var h = (location.hash || '').replace('#', '');
    return h.indexOf('p-') === 0 ? 'proyectos' : ['proyectos', 'transparencia', 'nosotros'].indexOf(h) > -1 ? h : 'inicio';
  }();
  React.useEffect(function () {
    var el = document.getElementById('scroller') || window;
    function onScroll() {
      var y = el === window ? window.scrollY : el.scrollTop;
      setScrolled(y > 40);
    }
    el.addEventListener('scroll', onScroll);
    return function () {
      el.removeEventListener('scroll', onScroll);
    };
  }, []);
  React.useEffect(function () {
    document.body.style.overflow = menu ? 'hidden' : '';
    return function () {
      document.body.style.overflow = '';
    };
  }, [menu]);
  return React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 25,
      background: solid ? 'rgba(255,255,255,.92)' : 'transparent',
      backdropFilter: solid ? 'saturate(180%) blur(14px)' : 'none',
      borderBottom: '1px solid ' + (solid ? 'var(--line)' : 'transparent'),
      transition: 'background .2s, border-color .2s'
    }
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, A.wrap), {}, {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      height: 70
    })
  }, React.createElement("a", {
    href: "#inicio",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      textDecoration: 'none'
    }
  }, React.createElement("img", {
    src: solid ? 'logo-nexos.svg' : 'logo-nexos-blanco.svg',
    alt: "NEXOS",
    style: {
      height: 34,
      width: 'auto',
      display: 'block'
    }
  })), React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 20,
      marginLeft: 'auto',
      alignItems: 'center',
      flexWrap: 'nowrap'
    },
    className: "navlinks"
  }, d.nav.map(function (n) {
    return React.createElement("a", {
      key: n.id,
      href: n.href || '#' + n.id,
      target: n.href ? '_blank' : undefined,
      rel: n.href ? 'noopener' : undefined,
      onClick: n.id === 'quienes' || n.id === 'aliados' || n.id === 'faq' ? function (e) {
        e.preventDefault();
        onOpen(n.id);
      } : undefined,
      style: {
        fontSize: 13.5,
        fontWeight: 600,
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        color: solid ? 'var(--ink)' : 'rgba(255,255,255,.86)',
        borderBottom: n.id === navActual ? '2px solid ' + (solid ? 'var(--accent)' : '#fff') : '2px solid transparent',
        paddingBottom: 2
      }
    }, n.label);
  })), React.createElement("button", {
    className: "menubtn",
    "aria-label": u.menu,
    onClick: function onClick() {
      setMenu(!menu);
    },
    style: {
      display: 'none',
      background: 'none',
      border: '1px solid ' + (solid ? 'var(--line)' : 'rgba(255,255,255,.4)'),
      color: solid ? 'var(--ink)' : '#fff',
      borderRadius: 999,
      width: 40,
      height: 38,
      marginLeft: 'auto',
      fontSize: 15,
      cursor: 'pointer',
      lineHeight: 1
    }
  }, menu ? '×' : '☰'), React.createElement("button", {
    onClick: function onClick() {
      setLang(lang === 'ES' ? 'EN' : 'ES');
    },
    "aria-label": lang === 'ES' ? 'Switch to English' : 'Cambiar a español',
    style: {
      background: 'none',
      border: '1px solid ' + (solid ? 'var(--line)' : 'rgba(255,255,255,.4)'),
      color: solid ? 'var(--ink)' : '#fff',
      borderRadius: 999,
      padding: '7px 12px',
      fontSize: 12,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, lang === 'ES' ? 'EN' : 'ES'), React.createElement(Button, {
    variant: "primarySmall",
    onClick: onDonate,
    style: {
      fontSize: 13.5,
      padding: '11px 20px'
    }
  }, u.donar)), menu ? React.createElement("div", {
    style: {
      background: '#fff',
      borderTop: '1px solid var(--line)',
      boxShadow: '0 20px 40px rgba(17,53,76,.12)'
    }
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, A.wrap), {}, {
      display: 'grid',
      padding: '8px 24px 16px'
    })
  }, d.nav.map(function (n) {
    var isWin = ['quienes', 'aliados', 'faq'].indexOf(n.id) > -1;
    return React.createElement("a", {
      key: n.id,
      href: n.href || '#' + n.id,
      target: n.href ? '_blank' : undefined,
      rel: n.href ? 'noopener' : undefined,
      onClick: function onClick(e) {
        if (isWin) {
          e.preventDefault();
          onOpen(n.id);
        }
        setMenu(false);
      },
      style: {
        padding: '14px 0',
        borderBottom: '1px solid var(--line)',
        fontSize: 16,
        fontWeight: 700,
        color: 'var(--ink)',
        textDecoration: 'none'
      }
    }, n.label);
  }))) : null);
}
function Hero(_ref2) {
  var onDonate = _ref2.onDonate,
    onOpen = _ref2.onOpen,
    scrimBase = _ref2.scrimBase,
    lang = _ref2.lang;
  var d = window.nexosContent(lang);
  var u = d.ui;
  var x = window.NEXOS_FIXTURE;
  return React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 'clamp(560px,78vh,760px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      marginTop: -70,
      paddingTop: 70
    }
  }, React.createElement("img", {
    src: "img/f4926bd7c6.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 32%'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, color-mix(in oklab, ' + scrimBase + ' 62%, transparent) 0%, color-mix(in oklab, ' + scrimBase + ' 28%, transparent) 34%, color-mix(in oklab, ' + scrimBase + ' 88%, transparent) 100%) '
    }
  }), React.createElement("div", {
    style: _objectSpread(_objectSpread({}, A.wrap), {}, {
      position: 'relative',
      paddingBottom: 34,
      paddingTop: 60
    })
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, A.eyebrow), {}, {
      color: '#F4B044'
    })
  }, d.hero.eyebrow), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(36px,6.4vw,72px)',
      fontWeight: 800,
      lineHeight: 1.02,
      letterSpacing: '-2px',
      color: '#fff',
      margin: '12px 0 0',
      maxWidth: 900,
      textWrap: 'balance'
    }
  }, d.hero.titulo), React.createElement("p", {
    style: {
      fontSize: 'clamp(15px,1.6vw,19px)',
      lineHeight: 1.65,
      color: 'rgba(255,255,255,.85)',
      maxWidth: 620,
      margin: '18px 0 0'
    }
  }, d.hero.bajada), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      margin: '28px 0 0',
      alignItems: 'center'
    }
  }, React.createElement(Button, {
    variant: "primary",
    onClick: onDonate,
    style: {
      width: 'auto',
      padding: '16px 30px',
      fontSize: 17,
      whiteSpace: 'nowrap'
    }
  }, u.donarAhora), React.createElement("button", {
    onClick: function onClick() {
      onOpen('quienes');
    },
    style: {
      background: 'rgba(255,255,255,.12)',
      border: '1px solid rgba(255,255,255,.42)',
      color: '#fff',
      borderRadius: 999,
      padding: '15px 26px',
      fontSize: 15,
      fontWeight: 700,
      cursor: 'pointer',
      backdropFilter: 'blur(6px)'
    }
  }, u.quienesLink)), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '26px 46px',
      margin: '40px 0 0',
      paddingTop: 24,
      borderTop: '1px solid rgba(255,255,255,.22)'
    }
  }, [[u.recaudado, '≈ US$ ' + x.totalUSD], [u.ejecutado, '≈ US$ ' + x.totalEgresos], [u.donaciones, x.totalDonaciones]].map(function (p) {
    return React.createElement("div", {
      key: p[0]
    }, React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(22px,2.6vw,32px)',
        fontWeight: 700,
        color: '#fff',
        lineHeight: 1
      }
    }, p[1]), React.createElement("div", {
      style: {
        fontSize: 11.5,
        letterSpacing: .6,
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,.62)',
        marginTop: 6
      }
    }, p[0]));
  }), React.createElement("div", {
    style: {
      marginLeft: 'auto',
      fontSize: 11,
      color: 'rgba(255,255,255,.5)',
      alignSelf: 'flex-end'
    }
  }, d.hero.credito))));
}
function HeroSobrio(_ref3) {
  var onDonate = _ref3.onDonate,
    onOpen = _ref3.onOpen,
    lang = _ref3.lang;
  var d = window.nexosContent(lang);
  var u = d.ui;
  var x = window.NEXOS_FIXTURE;
  return React.createElement("section", {
    style: {
      background: 'var(--nexos-blue)'
    }
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, A.wrap), {}, {
      maxWidth: 900,
      paddingTop: 'clamp(56px,9vw,110px)',
      paddingBottom: 'clamp(40px,6vw,72px)'
    })
  }, React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(30px,4.4vw,52px)',
      fontWeight: 700,
      lineHeight: 1.08,
      letterSpacing: '-1.6px',
      color: '#fff',
      margin: 0,
      maxWidth: 760,
      textWrap: 'balance'
    }
  }, d.hero.titulo), React.createElement("p", {
    style: {
      fontSize: 'clamp(15px,1.6vw,18px)',
      lineHeight: 1.7,
      color: 'rgba(255,255,255,.82)',
      maxWidth: 560,
      margin: '20px 0 0'
    }
  }, d.hero.bajada), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      margin: '30px 0 0',
      flexWrap: 'wrap'
    }
  }, React.createElement(Button, {
    variant: "primary",
    onClick: onDonate,
    style: {
      width: 'auto',
      padding: '15px 28px',
      fontSize: 16,
      whiteSpace: 'nowrap'
    }
  }, u.donarAhora), React.createElement("button", {
    onClick: function onClick() {
      onOpen('quienes');
    },
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      color: '#fff',
      fontSize: 15,
      fontWeight: 700,
      cursor: 'pointer',
      textDecoration: 'underline'
    }
  }, u.quienesLink)), React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'rgba(255,255,255,.68)',
      margin: '26px 0 0'
    }
  }, x ? u.recaudado + ' ≈ US$ ' + x.totalUSD + ' · ' + u.ejecutado + ' ≈ US$ ' + x.totalEgresos + ' · ' + u.actualizado + ' ' + x.actualizado : '')));
}
function HeroCentrado(_ref4) {
  var onDonate = _ref4.onDonate,
    onOpen = _ref4.onOpen,
    lang = _ref4.lang;
  var d = window.nexosContent(lang);
  var u = d.ui;
  var x = window.NEXOS_FIXTURE;
  return React.createElement("section", {
    style: {
      background: 'transparent',
      borderBottom: '1px solid var(--line)'
    }
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, A.wrap), {}, {
      maxWidth: 860,
      textAlign: 'center',
      paddingTop: 'clamp(58px,9vw,116px)',
      paddingBottom: 'clamp(40px,6vw,70px)'
    })
  }, React.createElement("img", {
    src: "img/3711202f3b.png",
    alt: "",
    style: {
      height: 64,
      margin: '0 auto',
      display: 'block'
    }
  }), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(32px,5vw,58px)',
      fontWeight: 800,
      lineHeight: 1.04,
      letterSpacing: '-2px',
      color: 'var(--ink)',
      margin: '26px 0 0',
      textWrap: 'balance'
    },
    dangerouslySetInnerHTML: {
      __html: d.hero.tituloHtml
    }
  }), React.createElement("p", {
    style: {
      fontSize: 'clamp(15px,1.6vw,18px)',
      lineHeight: 1.7,
      color: 'var(--muted)',
      maxWidth: 560,
      margin: '20px auto 0'
    }
  }, d.hero.bajada), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      margin: '30px 0 0',
      flexWrap: 'wrap'
    }
  }, React.createElement(Button, {
    variant: "primary",
    onClick: onDonate,
    style: {
      width: 'auto',
      padding: '15px 28px',
      fontSize: 16,
      whiteSpace: 'nowrap'
    }
  }, u.donarAhora), React.createElement("button", {
    onClick: function onClick() {
      onOpen('quienes');
    },
    style: {
      background: 'none',
      border: '1px solid var(--line)',
      color: 'var(--ink)',
      borderRadius: 999,
      padding: '14px 24px',
      fontSize: 15,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, u.quienesLink)), React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--muted)',
      margin: '24px 0 0'
    }
  }, u.actualizado, " ", x.actualizado)));
}
function HeroMinimal(_ref5) {
  var onDonate = _ref5.onDonate,
    onOpen = _ref5.onOpen,
    lang = _ref5.lang;
  var d = window.nexosContent(lang);
  var u = d.ui;
  var x = window.NEXOS_FIXTURE;
  return React.createElement("section", {
    style: {
      background: 'transparent',
      borderBottom: '1px solid var(--line)'
    }
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, A.wrap), {}, {
      paddingTop: 'clamp(64px,10vw,132px)',
      paddingBottom: 'clamp(38px,5vw,60px)',
      maxWidth: 1000
    })
  }, React.createElement("div", {
    style: A.eyebrow
  }, d.hero.eyebrow), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(38px,7vw,84px)',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: '-2.6px',
      color: 'var(--ink)',
      margin: '18px 0 0',
      textWrap: 'balance'
    },
    dangerouslySetInnerHTML: {
      __html: d.hero.tituloHtml
    }
  }), React.createElement("p", {
    style: {
      fontSize: 'clamp(16px,1.8vw,20px)',
      lineHeight: 1.65,
      color: 'var(--muted)',
      maxWidth: 620,
      margin: '26px 0 0'
    }
  }, d.hero.bajada), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      margin: '34px 0 0',
      alignItems: 'center'
    }
  }, React.createElement(Button, {
    variant: "primary",
    onClick: onDonate,
    style: {
      width: 'auto',
      padding: '16px 30px',
      fontSize: 17,
      whiteSpace: 'nowrap'
    }
  }, u.donarAhora), React.createElement("button", {
    onClick: function onClick() {
      onOpen('quienes');
    },
    style: {
      background: 'none',
      border: '1px solid var(--line)',
      color: 'var(--ink)',
      borderRadius: 999,
      padding: '15px 26px',
      fontSize: 15,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, u.quienesLink))), React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)'
    }
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, A.wrap), {}, {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px 56px',
      padding: '22px 26px'
    })
  }, [[u.recaudado, '≈ US$ ' + x.totalUSD], [u.ejecutado, '≈ US$ ' + x.totalEgresos], [u.donaciones, x.totalDonaciones]].map(function (p) {
    return React.createElement("div", {
      key: p[0]
    }, React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(20px,2.2vw,27px)',
        fontWeight: 700,
        color: 'var(--ink)',
        letterSpacing: '-.8px'
      }
    }, p[1]), React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: .8,
        textTransform: 'uppercase',
        color: 'var(--muted)',
        marginTop: 6
      }
    }, p[0]));
  }), React.createElement("div", {
    style: {
      marginLeft: 'auto',
      alignSelf: 'flex-end',
      fontSize: 11.5,
      color: 'var(--muted)'
    }
  }, u.actualizado, " ", x.actualizado))));
}
var NX_ALIADOS = [{
  nombre: 'Uno a Uno',
  logo: ''
}, {
  nombre: 'La Vida Boheme',
  logo: 'proyectos/volver-a-sonar/logo-la-vida-boheme.png'
}, {
  nombre: 'Eposak',
  logo: ''
}, {
  nombre: 'Sinfónica Gran Mariscal de Ayacucho',
  logo: 'proyectos/volver-a-sonar/logo-orquesta.png'
}, {
  nombre: 'Reverse Lab',
  logo: ''
}];
function PhotoStrip(_ref6) {
  var onZoom = _ref6.onZoom,
    lang = _ref6.lang;
  var d = window.nexosContent(lang);
  var u = d.ui;
  var ref = React.useRef(null);
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    pausa = _React$useState6[0],
    setPausa = _React$useState6[1];
  var reanudar = React.useRef(null);
  function nudge(dir) {
    var el = ref.current;
    if (!el) return;
    var max = el.scrollWidth - el.clientWidth - 4;
    if (dir > 0 && el.scrollLeft >= max) el.scrollTo({
      left: 0,
      behavior: 'smooth'
    });else if (dir < 0 && el.scrollLeft <= 4) el.scrollTo({
      left: el.scrollWidth,
      behavior: 'smooth'
    });else el.scrollBy({
      left: dir * Math.round(el.clientWidth * .7),
      behavior: 'smooth'
    });
  }
  React.useEffect(function () {
    if (pausa) return;
    try {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    } catch (e) {}
    var t = setInterval(function () {
      nudge(1);
    }, 5000);
    return function () {
      clearInterval(t);
    };
  }, [pausa]);
  function pausar() {
    clearTimeout(reanudar.current);
    setPausa(true);
  }
  function soltar(ms) {
    clearTimeout(reanudar.current);
    reanudar.current = setTimeout(function () {
      setPausa(false);
    }, ms || 0);
  }
  React.useEffect(function () {
    return function () {
      clearTimeout(reanudar.current);
    };
  }, []);
  return React.createElement("div", {
    style: {
      marginTop: 'clamp(34px,5vw,56px)'
    },
    onMouseEnter: pausar,
    onMouseLeave: function onMouseLeave() {
      soltar(0);
    },
    onFocus: pausar,
    onBlur: function onBlur() {
      soltar(0);
    },
    onTouchStart: function onTouchStart() {
      pausar();
      soltar(8000);
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 14,
      marginBottom: 16
    }
  }, React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: 1.2,
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, u.enTerreno), React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--muted)'
    }
  }, u.fotosPor), React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 8
    }
  }, React.createElement("button", {
    onClick: function onClick() {
      nudge(-1);
    },
    "aria-label": u.anterior,
    className: "strip-nav"
  }, "\u2190"), React.createElement("button", {
    onClick: function onClick() {
      nudge(1);
    },
    "aria-label": u.siguiente,
    className: "strip-nav"
  }, "\u2192"))), React.createElement("div", {
    ref: ref,
    className: "strip"
  }, d.fotos.map(function (p, i) {
    return React.createElement("figure", {
      key: p.src,
      className: "strip-item",
      style: {
        margin: 0,
        position: 'relative'
      }
    }, React.createElement("button", {
      onClick: function onClick() {
        onZoom(i);
      },
      className: "zoomable",
      "aria-label": u.ampliar,
      style: {
        display: 'block',
        width: '100%',
        height: 300,
        padding: 0,
        border: 'none',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        cursor: 'zoom-in',
        background: 'none'
      }
    }, React.createElement("img", {
      src: p.src,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    })), React.createElement("figcaption", {
      style: {
        position: 'absolute',
        left: 10,
        bottom: 10,
        fontSize: 11,
        color: '#fff',
        background: 'rgba(17,53,76,.55)',
        padding: '4px 9px',
        borderRadius: 999
      }
    }, p.credito));
  })));
}
function FaqRow(_ref7) {
  var q = _ref7.q,
    a = _ref7.a,
    open = _ref7.open;
  var _React$useState7 = React.useState(!!open),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    o = _React$useState8[0],
    setO = _React$useState8[1];
  return React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)'
    }
  }, React.createElement("button", {
    onClick: function onClick() {
      setO(!o);
    },
    "aria-expanded": o,
    style: {
      width: '100%',
      background: 'none',
      border: 'none',
      padding: '16px 0',
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      textAlign: 'left',
      cursor: 'pointer'
    }
  }, React.createElement("span", {
    style: {
      color: 'var(--accent)',
      fontWeight: 800,
      transform: 'rotate(' + (o ? 90 : 0) + 'deg)',
      transition: 'transform .15s'
    }
  }, "\u25B8"), React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      flex: 1,
      color: 'var(--ink)'
    }
  }, q)), o ? React.createElement("p", {
    style: {
      margin: '0 0 16px 28px',
      fontSize: 14,
      lineHeight: 1.7,
      color: 'var(--muted)'
    }
  }, a) : null);
}
function ProyectoCuentas(_ref8) {
  var p = _ref8.p,
    lang = _ref8.lang,
    total = _ref8.total,
    abierto = _ref8.abierto,
    onOpen = _ref8.onOpen;
  var _React$useState9 = React.useState(!!abierto),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    o = _React$useState0[0],
    setO = _React$useState0[1];
  var en = lang === 'EN';
  var f = window.NEXOS_FIXTURE || {};
  var info = function info(cat) {
    return (f.egresosRaw || []).filter(function (c) {
      return c.categoria === cat;
    })[0] || {};
  };
  var tag = {
    cerrado: {
      background: 'var(--blue-lt)',
      color: 'var(--ink)'
    },
    curso: {
      background: 'var(--ink)',
      color: 'var(--amber)'
    },
    pronto: {
      background: 'var(--ink)',
      color: 'var(--amber)'
    }
  }[p.tipo];
  var pct = total ? p.gastado / total * 100 : 0;
  var pctTxt = (pct >= 10 ? Math.round(pct) : Math.round(pct * 10) / 10).toString().replace('.', en ? '.' : ',') + '%';
  return React.createElement("div", {
    id: 'cuentas-' + p.id,
    style: {
      border: '1px solid var(--line-strong)',
      borderRadius: 18,
      background: '#fff',
      scrollMarginTop: 90
    }
  }, React.createElement("button", {
    type: "button",
    "aria-expanded": o,
    onClick: function onClick() {
      setO(!o);
    },
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      padding: '20px 22px',
      background: 'none',
      border: 0,
      font: 'inherit',
      color: 'inherit',
      textAlign: 'left',
      cursor: 'pointer'
    }
  }, React.createElement("span", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      minWidth: 0
    }
  }, React.createElement("span", {
    style: {
      color: 'var(--accent)',
      fontWeight: 800,
      transform: 'rotate(' + (o ? 90 : 0) + 'deg)',
      transition: 'transform .15s',
      marginTop: 4
    }
  }, "\u25B8"), React.createElement("span", {
    style: {
      minWidth: 0
    }
  }, React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 21,
      marginRight: 10
    }
  }, p.nombre), React.createElement("span", {
    style: _objectSpread({
      display: 'inline-block',
      fontSize: 11,
      fontWeight: 700,
      borderRadius: 999,
      padding: '3px 10px',
      verticalAlign: 'middle'
    }, tag)
  }, p.estado), React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 15,
      color: 'var(--muted)',
      marginTop: 4
    }
  }, p.lema, p.compras.length ? ' · ' + window.prFmt(p.compras.length, lang) + (en ? ' purchases' : ' compras') : ''))), React.createElement("span", {
    style: {
      textAlign: 'right',
      whiteSpace: 'nowrap',
      fontVariantNumeric: 'tabular-nums'
    }
  }, React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22
    }
  }, "US$ ", window.prFmt(p.gastado, lang)), React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      color: 'var(--muted)'
    }
  }, pctTxt, en ? ' of total invested' : ' de lo invertido'))), o ? React.createElement("div", {
    style: {
      padding: '0 22px 20px'
    }
  }, p.porCategoria.length ? p.porCategoria.map(function (c) {
    var inf = info(c.categoria);
    var dec = function dec(n) {
      return (Number(n) || 0).toLocaleString(en ? 'en-US' : 'es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    };
    var items = p.compras.filter(function (it) {
      return (it.categoria || '') === c.categoria || !it.categoria && c.categoria === (en ? 'Other' : 'Otros');
    }).map(function (it) {
      return {
        concepto: it.concepto,
        monto: dec(it.monto)
      };
    });
    return React.createElement(ExpenseCategory, {
      key: c.categoria,
      name: en ? inf.categoriaEN || c.categoria : c.categoria,
      description: en ? inf.descripcionEN || inf.descripcion || '' : inf.descripcion || '',
      total: window.prFmt(c.total, lang),
      pct: p.gastado ? String(Math.round(c.total / p.gastado * 1000) / 10).replace('.', en ? '.' : ',') : 0,
      items: items
    });
  }) : React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      color: 'var(--muted)'
    }
  }, en ? 'No purchases yet.' : 'Todavía no hay compras.'), React.createElement("a", {
    href: '#p-' + p.id,
    onClick: function onClick(e) {
      e.preventDefault();
      onOpen(p.id);
    },
    style: {
      display: 'inline-block',
      marginTop: 12,
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, en ? 'See the project and its invoices →' : 'Ver el proyecto y sus facturas →')) : null);
}
function Section(_ref9) {
  var id = _ref9.id,
    eyebrow = _ref9.eyebrow,
    titulo = _ref9.titulo,
    lead = _ref9.lead,
    leadWide = _ref9.leadWide,
    children = _ref9.children,
    tone = _ref9.tone;
  var solid = tone === 'coral' ? 'var(--nexos-coral)' : null;
  var light = !!solid;
  return React.createElement("section", {
    id: id,
    style: {
      padding: 'clamp(56px,8vw,96px) 0',
      background: solid || '#fff'
    }
  }, React.createElement("div", {
    style: A.wrap
  }, eyebrow ? React.createElement("div", {
    style: _objectSpread(_objectSpread({}, A.eyebrow), {}, {
      color: light ? 'rgba(255,255,255,.75)' : A.eyebrow.color
    })
  }, eyebrow) : null, titulo ? React.createElement("h2", {
    style: _objectSpread(_objectSpread({}, A.h2), {}, {
      color: light ? '#fff' : A.h2.color
    })
  }, titulo) : null, lead ? React.createElement("p", {
    style: _objectSpread(_objectSpread({}, leadWide ? _objectSpread(_objectSpread({}, A.lead), {}, {
      maxWidth: 'none',
      whiteSpace: 'nowrap',
      overflowX: 'auto'
    }) : A.lead), {}, {
      color: light ? 'rgba(255,255,255,.85)' : A.lead.color
    })
  }, lead) : null, React.createElement("div", {
    style: {
      marginTop: 34
    }
  }, children)));
}
var NEXOS_EMPTY = {
  actualizado: '',
  totalUSD: '0,00',
  totalEgresos: '0,00',
  saldo: '0,00',
  totalDonaciones: 0,
  notaTasas: '',
  porMoneda: [],
  metodos: [],
  movimientos: [],
  egresos: [],
  metodosDonacion: [],
  enlaceFacturas: '',
  enlaceFotos: ''
};
function EditorialLandingExport() {
  var loadingData = !window.NEXOS_FIXTURE;
  var x = window.NEXOS_FIXTURE || NEXOS_EMPTY;
  var _React$useState1 = React.useState(function () {
      try {
        return localStorage.getItem('nexos.lang') === 'EN' ? 'EN' : 'ES';
      } catch (e) {
        return 'ES';
      }
    }),
    _React$useState10 = _slicedToArray(_React$useState1, 2),
    lang = _React$useState10[0],
    setLang = _React$useState10[1];
  React.useEffect(function () {
    try {
      localStorage.setItem('nexos.lang', lang);
    } catch (e) {}
    document.documentElement.lang = lang === 'EN' ? 'en' : 'es';
  }, [lang]);
  var d = window.nexosContent(lang);
  var u = d.ui;
  var P = lang === 'EN' ? {
    miraUso: 'See how your help was used →',
    verTransparencia: 'See everything in Transparency →',
    cargando: 'Loading live figures…',
    buscarLead: 'Type at least 3 letters to see your donations.',
    verGastos: 'See expenses, receipts and photos in Transparency →',
    transpLead: 'Every dollar received, every purchase with its receipt and every delivery with its photo.',
    escribenos: 'Write to us on Instagram →',
    evidenciaTit: 'Receipts and photos'
  } : {
    miraUso: 'Mira en qué se usó tu ayuda →',
    verTransparencia: 'Ver todo en Transparencia →',
    cargando: 'Cargando cifras en vivo…',
    buscarLead: 'Escribe al menos 3 letras y mira tus aportes.',
    verGastos: 'Ver gastos, facturas y fotos en Transparencia →',
    transpLead: 'Cada dólar recibido, cada compra con su factura y cada entrega con su foto.',
    escribenos: 'Escríbenos por Instagram →',
    evidenciaTit: 'Facturas y fotos'
  };
  var _window$useTweaks = window.useTweaks(TWEAK_DEFAULTS),
    _window$useTweaks2 = _slicedToArray(_window$useTweaks, 2),
    t = _window$useTweaks2[0],
    setTweak = _window$useTweaks2[1];
  var pal = t.palette || TWEAK_DEFAULTS.palette;
  React.useEffect(function () {
    var r = document.documentElement.style;
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
  var scrimBase = t.overlay === 'Coral' ? pal[0] : t.overlay === 'Negro' ? '#0c0c0e' : pal[2];
  var _React$useState11 = React.useState(null),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    drawer = _React$useState12[0],
    setDrawer = _React$useState12[1];
  var _React$useState13 = React.useState(function () {
      var h = (location.hash || '').match(/^#p-([\w-]+)$/);
      return h ? h[1] : null;
    }),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    proyecto = _React$useState14[0],
    setProyectoState = _React$useState14[1];
  var setProyecto = function setProyecto(id) {
    setProyectoState(id);
    try {
      history.replaceState(null, '', id ? '#p-' + id : location.pathname + location.search);
    } catch (e) {}
  };
  var PAGINAS = ['inicio', 'proyectos', 'transparencia', 'nosotros'];
  var paginaDeHash = function paginaDeHash() {
    var h = (location.hash || '').replace('#', '');
    return h.indexOf('p-') === 0 ? 'proyectos' : PAGINAS.indexOf(h) > -1 ? h : 'inicio';
  };
  var _React$useState15 = React.useState(paginaDeHash),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    pagina = _React$useState16[0],
    setPagina = _React$useState16[1];
  React.useEffect(function () {
    function onHash() {
      var h = (location.hash || '').match(/^#p-([\w-]+)$/);
      setProyectoState(h ? h[1] : null);
      if (!h) {
        setPagina(paginaDeHash());
        window.scrollTo(0, 0);
      }
    }
    window.addEventListener('hashchange', onHash);
    return function () {
      window.removeEventListener('hashchange', onHash);
    };
  }, []);
  var _React$useState17 = React.useState(false),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    donar = _React$useState18[0],
    setDonar = _React$useState18[1];
  var _React$useState19 = React.useState(null),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    zoom = _React$useState20[0],
    setZoom = _React$useState20[1];
  var _React$useState21 = React.useState(''),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    q = _React$useState22[0],
    setQ = _React$useState22[1];
  var _React$useState23 = React.useState(''),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    met = _React$useState24[0],
    setMet = _React$useState24[1];
  var busca = q.trim();
  var listos = busca.length >= 3;
  var encontrados = listos ? x.movimientos.filter(function (m) {
    if (m.donante.toLowerCase().indexOf(busca.toLowerCase()) === -1) return false;
    if (met && m.metodo !== met) return false;
    return true;
  }) : [];
  var TOPE = 25;
  var rows = encontrados.slice(0, TOPE);
  Object.assign(P, lang === 'EN' ? {
    heroTitulo: 'Create Nexos. Transform realities. <span style="color:var(--amber)">Build community.</span>',
    heroBajada: 'Social and environmental impact projects in Venezuela  •  We are the bridge between those who want to help and real needs',
    conoceProyectos: 'See the projects →',
    comoEy: 'How it works',
    comoTit: 'Impact projects funded together',
    pasos: [['Give from wherever you are', 'Pesos, bolívares, euros, dollars or crypto. It all goes into one fund.'], ['We turn it into projects', 'We work directly with communities, identify needs and carry out solutions.'], ['We publish everything', 'Total transparency. You can search every donation received and see where each dollar was invested.']],
    cuentasEy: 'Clear accounts',
    cuentasTit: 'Since June 24',
    recibimos: 'We received',
    invertimos: 'We invested',
    disponible: 'Available',
    enDonaciones: function enDonaciones(n) {
      return 'in ' + n + ' donations';
    },
    enCompras: function enCompras(n) {
      return 'in ' + n + ' purchases with invoice';
    },
    paraProyectos: 'for the projects in progress',
    verCadaGasto: 'See every expense →',
    empezamosEy: 'Where we started',
    cierreTit: 'The next project starts with you',
    cierreTxt: 'Tap Donate, choose the payment method and copy the details.',
    transpTit: 'Every dollar, <span style="color:var(--amber)">in plain sight</span>',
    transpLead2: '',
    porProyEy: 'By project',
    porProyTit: 'Where it was invested',
    pruebasEy: 'The proof',
    pruebasTxt: 'Every invoice and every photo, sorted by date in open folders. Check them whenever you want.',
    verFacturas: 'See invoices ↗',
    verFotos: 'See photos ↗',
    buscarTit: 'Donated? Find your name',
    buscarSub: 'Thank you for helping, donations are the engine of our work.',
    misionHtml: 'We are <span style="color:var(--amber)">the bridge</span> between those who want to help and the real needs of our country.',
    nosotrosEy: 'About us',
    misionTxt: 'Direct, human and transparent aid.',
    quienesEy: 'Who we are',
    quienesTit: 'From the emergency to projects',
    quienesTxt: 'We are a group of organized civilians who, after the earthquake, decided to form a group dedicated to humanitarian aid. At first we focused on the emergency in the zona cero, but the will stayed over time and we have been transforming to keep supporting those who need it, creating impact and growing together.',
    pilares: [['Our purpose', 'To build a better country through social and environmental impact projects.'], ['How we do it', 'Absolute transparency, collaborative networks and direct contact with communities.']],
    aliadosTit: 'Partners',
    conQuienEy: 'Who we work with',
    puenteTit: 'Be part of it. Every bit of help counts.',
    puenteTxt: 'Donate, share or write to us on IG @somos.nexosve',
    faqNuevas: [{
      q: 'Which project does my donation go to?',
      a: 'To the common NEXOS fund. From there we invest it in the projects in progress, starting with the most urgent.'
    }, {
      q: 'What is the available fund?',
      a: 'What we received and haven’t invested yet. It goes to the projects in progress and the ones coming next.'
    }]
  } : {
    heroTitulo: 'Crear Nexos. Transformar realidades. <span style="color:var(--amber)">Construir comunidad.</span>',
    heroBajada: 'Proyectos de Impacto Social y Ambiental en Venezuela  •  Somos el puente entre quienes quieren ayudar y las necesidades reales',
    conoceProyectos: 'Conoce los proyectos →',
    comoEy: 'Cómo funciona',
    comoTit: 'Proyectos de impacto financiados en colectivo',
    pasos: [['Donas desde donde estés', 'Pesos, bolívares, euros, dólares o cripto. Todo llega a un mismo fondo.'], ['Lo convertimos en proyectos', 'Trabajamos directo con las comunidades, identificamos necesidades y llevamos a cabo soluciones.'], ['Publicamos todo', 'Transparencia absoluta. Puedes buscar todas las donaciones recibidas y en qué se ha invertido cada dólar.']],
    cuentasEy: 'Las cuentas, claras',
    cuentasTit: 'Desde el 24 de junio',
    recibimos: 'Recibimos',
    invertimos: 'Invertimos',
    disponible: 'Disponible',
    enDonaciones: function enDonaciones(n) {
      return 'en ' + n + ' donaciones';
    },
    enCompras: function enCompras(n) {
      return 'en ' + n + ' compras con factura';
    },
    paraProyectos: 'para los proyectos en curso',
    verCadaGasto: 'Ver cada gasto →',
    empezamosEy: 'Donde empezamos',
    cierreTit: 'El próximo proyecto empieza con tu aporte',
    cierreTxt: 'Toca Donar, elige el medio de pago y copia los datos.',
    transpTit: 'Cada dólar, <span style="color:var(--amber)">a la vista</span>',
    porProyEy: 'Por proyecto',
    porProyTit: 'En qué se invirtió',
    pruebasEy: 'Las pruebas',
    pruebasTxt: 'Cada factura y cada foto, ordenadas por fecha en carpetas abiertas. Revísalas cuando quieras.',
    verFacturas: 'Ver facturas ↗',
    verFotos: 'Ver fotos ↗',
    buscarTit: '¿Donaste? Busca tu nombre',
    buscarSub: 'Gracias por ayudar, las donaciones son el motor de nuestra acción.',
    misionHtml: 'Somos <span style="color:var(--amber)">el puente</span> entre los que quieren ayudar y las necesidades reales de nuestro país.',
    nosotrosEy: 'Nosotros',
    misionTxt: 'Ayuda directa, humana y transparente.',
    quienesEy: 'Quiénes somos',
    quienesTit: 'De la emergencia a los proyectos',
    quienesTxt: 'Somos un grupo de civiles organizados que, a raíz del terremoto, decidimos formar una agrupación dedicada a la ayuda humanitaria. En principio nos enfocamos en atender la emergencia en la zona cero, pero la voluntad se mantuvo en el tiempo y nos hemos ido transformando para seguir apoyando a quienes lo necesitan, generando impacto y creciendo juntos.',
    pilares: [['Nuestro propósito', 'Construir un mejor país a través de proyectos de impacto social y ambiental.'], ['Cómo lo hacemos', 'Transparencia absoluta, redes colaborativas y contacto directo con las comunidades.']],
    aliadosTit: 'Aliados',
    conQuienEy: 'Con quién trabajamos',
    puenteTit: 'Sé parte. Toda ayuda suma.',
    puenteTxt: 'Dona, comparte o escríbenos en IG @somos.nexosve',
    faqNuevas: [{
      q: '¿A qué proyecto va mi donación?',
      a: 'Al fondo común de NEXOS. Desde ahí la invertimos en los proyectos en curso, empezando por lo más urgente.'
    }, {
      q: '¿Qué es el fondo disponible?',
      a: 'Lo que recibimos y todavía no se invirtió. Se usa en los proyectos en curso y en los que vienen.'
    }]
  });
  P.transpLead = lang === 'EN' ? 'You can search every donation received and the expenses categorized by project.' : 'Puedes buscar todas las donaciones recibidas y los gastos categorizados por proyecto.';
  P.evidenciaTit = lang === 'EN' ? 'Invoices and photos' : 'Facturas y fotos';
  var proyectosTodos = loadingData ? [] : window.nexosProyectos(lang);
  var cerrado = proyectosTodos.filter(function (p) {
    return p.tipo === 'cerrado';
  })[0];
  var proyectosOrden = proyectosTodos.slice().sort(function (a, b) {
    return b.gastado - a.gastado;
  });
  var totalProyectos = proyectosOrden.reduce(function (a, p) {
    return a + (p.gastado || 0);
  }, 0);
  var nCompras = proyectosOrden.reduce(function (a, p) {
    return a + p.compras.length;
  }, 0);
  var colorTipo = {
    cerrado: 'var(--ink)',
    curso: 'var(--accent)',
    pronto: 'var(--amber)'
  };
  function cuentas(conReparto) {
    if (loadingData) return React.createElement("div", {
      style: {
        color: 'var(--muted)',
        fontSize: 14
      }
    }, P.cargando);
    var tile = {
      borderRadius: 18,
      padding: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    };
    var num = {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(26px,3vw,32px)',
      fontWeight: 700,
      fontVariantNumeric: 'tabular-nums'
    };
    return React.createElement(React.Fragment, null, React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))',
        gap: 16
      }
    }, React.createElement("div", {
      style: _objectSpread(_objectSpread({}, tile), {}, {
        background: 'var(--steel-1)'
      })
    }, React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: 'var(--muted)'
      }
    }, P.recibimos), React.createElement("b", {
      style: num
    }, "US$ ", x.totalUSD), React.createElement("span", {
      style: {
        fontSize: 14,
        color: 'var(--muted)'
      }
    }, P.enDonaciones(window.prFmt(x.totalDonaciones, lang)))), React.createElement("div", {
      style: _objectSpread(_objectSpread({}, tile), {}, {
        background: 'var(--steel-1)'
      })
    }, React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: 'var(--muted)'
      }
    }, P.invertimos), React.createElement("b", {
      style: num
    }, "US$ ", x.totalEgresos), React.createElement("span", {
      style: {
        fontSize: 14,
        color: 'var(--muted)'
      }
    }, nCompras ? P.enCompras(window.prFmt(nCompras, lang)) : '')), React.createElement("div", {
      style: _objectSpread(_objectSpread({}, tile), {}, {
        background: 'var(--ink)',
        color: '#fff'
      })
    }, React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: 'var(--amber)'
      }
    }, P.disponible), React.createElement("b", {
      style: num
    }, "US$ ", x.saldo), React.createElement("span", {
      style: {
        fontSize: 14,
        color: 'var(--on-ink-soft)'
      }
    }, P.paraProyectos))), conReparto && totalProyectos ? React.createElement(React.Fragment, null, React.createElement("div", {
      "aria-hidden": "true",
      style: {
        display: 'flex',
        height: 14,
        borderRadius: 999,
        overflow: 'hidden',
        gap: 3,
        marginTop: 22
      }
    }, proyectosOrden.filter(function (p) {
      return p.gastado > 0;
    }).map(function (p) {
      return React.createElement("div", {
        key: p.id,
        style: {
          flex: p.gastado,
          minWidth: 8,
          background: colorTipo[p.tipo]
        }
      });
    })), React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px 24px',
        fontSize: 14,
        alignItems: 'center',
        marginTop: 12
      }
    }, proyectosOrden.filter(function (p) {
      return p.gastado > 0;
    }).map(function (p) {
      return React.createElement("span", {
        key: p.id
      }, React.createElement("span", {
        style: {
          display: 'inline-block',
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: colorTipo[p.tipo],
          marginRight: 6
        }
      }), p.nombre, " \xB7 US$ ", window.prFmt(p.gastado, lang));
    }), React.createElement("a", {
      href: "#transparencia",
      style: {
        marginLeft: 'auto',
        fontWeight: 700,
        color: 'var(--ink)'
      }
    }, P.verCadaGasto))) : null);
  }
  function buscador(id, lead, tinted) {
    return React.createElement("section", {
      id: id,
      style: {
        background: tinted ? 'var(--steel-1)' : '#fff',
        padding: 'clamp(48px,7vw,60px) 0'
      }
    }, React.createElement("div", {
      style: A.wrap
    }, React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 28,
        fontWeight: 700,
        margin: 0,
        color: 'var(--ink)'
      }
    }, P.buscarTit), React.createElement("p", {
      style: {
        fontSize: 15,
        color: 'var(--muted)',
        margin: '6px 0 18px'
      }
    }, P.buscarSub), React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        marginBottom: 14
      }
    }, React.createElement(SearchInput, {
      placeholder: u.buscar,
      value: q,
      onChange: function onChange(e) {
        setQ(e.target.value);
      }
    }), React.createElement(FilterSelect, {
      placeholder: u.todosMetodos,
      options: x.metodos,
      value: met,
      onChange: function onChange(e) {
        setMet(e.target.value);
      }
    })), !listos ? React.createElement(EmptyState, null, u.vacio) : encontrados.length === 0 ? React.createElement(EmptyState, null, u.sinResultados) : React.createElement(React.Fragment, null, React.createElement(Card, {
      pad: "6px 8px"
    }, React.createElement(DonationsTable, {
      rows: rows
    })), React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--muted)',
        marginTop: 12,
        textAlign: 'center'
      }
    }, encontrados.length > TOPE ? u.mostrando(TOPE, encontrados.length) : u.resultados(encontrados.length)))));
  }
  function cierre(titulo, texto) {
    return React.createElement("section", {
      style: {
        background: 'var(--warm)',
        borderTop: '1px solid var(--line)'
      }
    }, React.createElement("div", {
      style: _objectSpread(_objectSpread({}, A.wrap), {}, {
        padding: 'clamp(40px,6vw,56px) 24px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'space-between'
      })
    }, React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        maxWidth: 660
      }
    }, React.createElement("h2", {
      style: _objectSpread(_objectSpread({}, A.h2), {}, {
        fontSize: 'clamp(24px,3vw,32px)',
        margin: 0
      })
    }, titulo), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 16,
        lineHeight: 1.6,
        color: 'var(--muted)'
      }
    }, texto)), React.createElement(Button, {
      variant: "primary",
      onClick: function onClick() {
        setDonar(true);
      },
      style: {
        width: 'auto',
        padding: '16px 34px',
        fontSize: 16,
        whiteSpace: 'nowrap'
      }
    }, u.donar)));
  }
  var boletin = React.createElement("section", {
    id: "historias",
    style: {
      background: 'var(--nexos-blue)',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      overflow: 'hidden',
      borderBottom: '1px solid rgba(255,255,255,.2)',
      padding: '16px 0'
    }
  }, React.createElement("div", {
    className: "nx-marquee",
    style: {
      display: 'flex',
      gap: 40,
      whiteSpace: 'nowrap',
      width: 'max-content',
      fontSize: 16,
      fontWeight: 700,
      color: '#fff'
    }
  }, [0, 1, 2, 3].map(function (k) {
    return u.boletinCinta.map(function (t, i) {
      return React.createElement(React.Fragment, {
        key: k + '-' + i
      }, React.createElement("span", null, t), React.createElement("span", {
        style: {
          color: 'var(--amber)'
        }
      }, "\u25CF"));
    });
  }))), React.createElement("div", {
    style: _objectSpread(_objectSpread({}, A.wrap), {}, {
      padding: 'clamp(48px,7vw,84px) 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'flex-start'
    })
  }, React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: 1.6,
      textTransform: 'uppercase',
      color: 'var(--amber)'
    }
  }, u.boletinEyebrow), React.createElement("h2", {
    style: _objectSpread(_objectSpread({}, A.h2), {}, {
      color: '#fff',
      margin: 0,
      maxWidth: 720,
      textWrap: 'balance'
    })
  }, u.boletinTitulo), React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--on-ink-soft)',
      margin: 0,
      maxWidth: 560
    }
  }, u.boletinTexto), React.createElement("a", {
    href: "https://somosnexos.substack.com",
    target: "_blank",
    rel: "noopener",
    style: {
      display: 'inline-block',
      marginTop: 8,
      background: 'var(--amber)',
      color: 'var(--ink)',
      fontWeight: 800,
      fontSize: 15,
      padding: '14px 26px',
      borderRadius: 999,
      textDecoration: 'none'
    }
  }, u.boletinBoton)));
  return React.createElement("div", {
    id: "top",
    style: {
      background: '#fff'
    }
  }, React.createElement(NavBar, {
    onOpen: setDrawer,
    onDonate: function onDonate() {
      setDonar(true);
    },
    lang: lang,
    setLang: setLang,
    forceSolid: t.portada !== 'Foto'
  }), proyecto ? React.createElement(ProyectoPage, {
    lang: lang,
    id: proyecto,
    onClose: function onClose() {
      setProyecto(null);
    },
    onDonate: function onDonate() {
      setDonar(true);
    }
  }) : null, !proyecto && pagina === 'inicio' ? React.createElement(React.Fragment, null, React.createElement("section", {
    style: {
      background: 'var(--ink)',
      color: '#fff'
    }
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, A.wrap), {}, {
      paddingTop: 'clamp(52px,8vw,64px)',
      paddingBottom: 'clamp(52px,8vw,64px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      alignItems: 'flex-start'
    })
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, A.eyebrow), {}, {
      color: 'var(--amber)'
    })
  }, d.hero.eyebrow), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(34px,5.6vw,56px)',
      fontWeight: 800,
      lineHeight: 1.04,
      letterSpacing: '-1.6px',
      color: '#fff',
      margin: 0,
      maxWidth: 860,
      textWrap: 'balance'
    },
    dangerouslySetInnerHTML: {
      __html: P.heroTitulo
    }
  }), React.createElement("p", {
    style: {
      fontSize: 'clamp(16px,1.7vw,18px)',
      lineHeight: 1.6,
      color: 'var(--on-ink-soft)',
      maxWidth: 640,
      margin: 0
    }
  }, P.heroBajada), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '14px 22px',
      alignItems: 'center'
    }
  }, React.createElement(Button, {
    variant: "primary",
    onClick: function onClick() {
      setDonar(true);
    },
    style: {
      width: 'auto',
      padding: '16px 30px',
      fontSize: 17,
      whiteSpace: 'nowrap'
    }
  }, u.donar), React.createElement("a", {
    href: "#proyectos",
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: '#fff'
    }
  }, P.conoceProyectos)))), React.createElement("section", {
    style: {
      padding: 'clamp(56px,8vw,80px) 0 clamp(48px,7vw,64px)'
    }
  }, React.createElement("div", {
    style: A.wrap
  }, React.createElement("div", {
    style: A.eyebrow
  }, P.comoEy), React.createElement("h2", {
    style: A.h2
  }, P.comoTit), React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: '30px 0 0',
      padding: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 18
    }
  }, P.pasos.map(function (s, i) {
    var c = ['var(--accent)', 'var(--blue-lt)', 'var(--ink)'][i];
    return React.createElement("li", {
      key: i,
      style: {
        borderTop: '4px solid ' + c,
        paddingTop: 18,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, React.createElement("b", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 15,
        color: i === 0 ? 'var(--accent-text)' : i === 1 ? 'var(--muted)' : 'var(--ink)'
      }
    }, '0' + (i + 1)), React.createElement("b", {
      style: {
        fontSize: 20
      }
    }, s[0]), React.createElement("span", {
      style: {
        fontSize: 16,
        lineHeight: 1.6,
        color: 'var(--muted)'
      }
    }, s[1]));
  })))), React.createElement(ProyectosSection, {
    lang: lang,
    onOpen: setProyecto
  }), React.createElement("section", {
    style: {
      padding: 'clamp(56px,8vw,72px) 0'
    }
  }, React.createElement("div", {
    style: A.wrap
  }, React.createElement("div", {
    style: A.eyebrow
  }, P.cuentasEy), React.createElement("h2", {
    style: A.h2
  }, P.cuentasTit), React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, cuentas(true)))), cerrado ? React.createElement("section", {
    style: {
      background: 'var(--ink)',
      padding: 'clamp(48px,7vw,64px) 0'
    }
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, A.wrap), {}, {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    })
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, A.eyebrow), {}, {
      color: 'var(--amber)'
    })
  }, P.empezamosEy), React.createElement(window.ZonaCerradaCard, {
    p: cerrado,
    lang: lang,
    onOpen: setProyecto,
    grande: true
  }))) : null, buscador('reporte', P.buscarLead, false), boletin, cierre(P.cierreTit, P.cierreTxt)) : null, !proyecto && pagina === 'proyectos' ? React.createElement(ProyectosPagina, {
    lang: lang,
    onOpen: setProyecto,
    onDonate: function onDonate() {
      setDonar(true);
    }
  }) : null, !proyecto && pagina === 'transparencia' ? React.createElement(React.Fragment, null, React.createElement("section", {
    style: {
      background: 'var(--ink)',
      color: '#fff'
    }
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, A.wrap), {}, {
      paddingTop: 'clamp(48px,8vw,64px)',
      paddingBottom: 'clamp(44px,7vw,56px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      alignItems: 'flex-start'
    })
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, A.eyebrow), {}, {
      color: 'var(--amber)'
    })
  }, d.ventanas.evidencia.titulo), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(32px,5vw,52px)',
      fontWeight: 700,
      lineHeight: 1.06,
      letterSpacing: '-1.4px',
      margin: 0,
      maxWidth: 860
    },
    dangerouslySetInnerHTML: {
      __html: P.transpTit
    }
  }), React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--on-ink-soft)',
      maxWidth: 680,
      margin: 0
    }
  }, P.transpLead))), React.createElement("section", {
    id: "cifras",
    style: {
      padding: 'clamp(44px,7vw,56px) 0 clamp(36px,6vw,48px)'
    }
  }, React.createElement("div", {
    style: A.wrap
  }, cuentas(false), !loadingData && x.porMoneda.length ? React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))',
      gap: 14,
      marginTop: 22
    }
  }, x.porMoneda.map(function (m) {
    return React.createElement(CurrencyCard, _extends({
      key: m.moneda
    }, m));
  })) : null, !loadingData && x.notaTasas ? React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--muted)',
      margin: '16px 0 0',
      lineHeight: 1.6
    }
  }, x.notaTasas) : null)), buscador('reporte', u.reporteLead, true), React.createElement("section", {
    id: "por-proyecto",
    style: {
      padding: 'clamp(56px,8vw,64px) 0'
    }
  }, React.createElement("div", {
    style: A.wrap
  }, React.createElement("div", {
    style: A.eyebrow
  }, P.porProyEy), React.createElement("h2", {
    style: A.h2
  }, P.porProyTit), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 26
    }
  }, loadingData ? React.createElement("div", {
    style: {
      color: 'var(--muted)',
      fontSize: 14
    }
  }, P.cargando) : proyectosOrden.map(function (p, i) {
    return React.createElement(ProyectoCuentas, {
      key: p.id,
      p: p,
      lang: lang,
      total: totalProyectos,
      abierto: window.__nxAbrir ? window.__nxAbrir === p.id : i === 0,
      onOpen: setProyecto
    });
  })))), React.createElement("section", {
    id: "evidencia",
    style: {
      background: 'var(--ink)',
      color: '#fff'
    }
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, A.wrap), {}, {
      padding: 'clamp(48px,7vw,60px) 24px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '24px 48px',
      alignItems: 'center',
      justifyContent: 'space-between'
    })
  }, React.createElement("div", {
    style: {
      flex: '1 1 440px',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, A.eyebrow), {}, {
      color: 'var(--amber)'
    })
  }, P.pruebasEy), React.createElement("h2", {
    style: _objectSpread(_objectSpread({}, A.h2), {}, {
      color: '#fff',
      margin: 0
    })
  }, P.evidenciaTit), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.7,
      color: 'var(--on-ink-soft)'
    }
  }, P.pruebasTxt)), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12
    }
  }, x.enlaceFacturas ? React.createElement("a", {
    href: x.enlaceFacturas,
    target: "_blank",
    rel: "noopener",
    style: {
      background: 'var(--amber)',
      color: 'var(--ink)',
      fontWeight: 800,
      borderRadius: 999,
      padding: '0 26px',
      minHeight: 50,
      display: 'inline-flex',
      alignItems: 'center',
      textDecoration: 'none'
    }
  }, P.verFacturas) : null, x.enlaceFotos ? React.createElement("a", {
    href: x.enlaceFotos,
    target: "_blank",
    rel: "noopener",
    style: {
      border: '2px solid var(--blue-lt)',
      color: '#fff',
      fontWeight: 800,
      borderRadius: 999,
      padding: '0 26px',
      minHeight: 50,
      display: 'inline-flex',
      alignItems: 'center',
      textDecoration: 'none',
      boxSizing: 'border-box'
    }
  }, P.verFotos) : null)))) : null, !proyecto && pagina === 'nosotros' ? React.createElement(React.Fragment, null, React.createElement("section", {
    style: {
      background: 'var(--ink)',
      color: '#fff'
    }
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, A.wrap), {}, {
      paddingTop: 'clamp(48px,8vw,64px)',
      paddingBottom: 'clamp(48px,8vw,64px)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 44,
      alignItems: 'center'
    })
  }, React.createElement("div", {
    style: {
      flex: '1 1 460px',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, React.createElement("div", {
    style: _objectSpread(_objectSpread({}, A.eyebrow), {}, {
      color: 'var(--amber)'
    })
  }, P.nosotrosEy), React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(24px,3.4vw,34px)',
      lineHeight: 1.3,
      fontWeight: 700,
      letterSpacing: '-.4px',
      margin: 0
    },
    dangerouslySetInnerHTML: {
      __html: P.misionHtml
    }
  }), React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.7,
      color: 'var(--on-ink-soft)',
      margin: 0
    }
  }, P.misionTxt)), d.fotos[0] ? React.createElement("img", {
    src: d.fotos[0].src,
    alt: "",
    style: {
      flex: '1 1 320px',
      minWidth: 0,
      maxWidth: '100%',
      aspectRatio: '4/5',
      objectFit: 'cover',
      borderRadius: 22
    }
  }) : null)), React.createElement("section", {
    style: {
      padding: 'clamp(56px,8vw,72px) 0'
    }
  }, React.createElement("div", {
    style: A.wrap
  }, React.createElement("div", {
    style: A.eyebrow
  }, P.quienesEy), React.createElement("h2", {
    style: A.h2
  }, P.quienesTit), React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.75,
      color: 'var(--ink)',
      margin: '18px 0 0',
      maxWidth: 820
    }
  }, P.quienesTxt), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 20,
      marginTop: 28
    }
  }, P.pilares.map(function (h, i) {
    var dark = i === 0;
    return React.createElement("div", {
      key: i,
      style: {
        background: dark ? 'var(--ink)' : 'var(--steel-1)',
        color: dark ? '#fff' : 'var(--ink)',
        borderRadius: 20,
        padding: 28,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 800,
        letterSpacing: 1.2,
        textTransform: 'uppercase',
        color: dark ? 'var(--amber)' : 'var(--accent-text)'
      }
    }, h[0]), React.createElement("b", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 21,
        lineHeight: 1.35
      }
    }, h[1]));
  })), React.createElement(PhotoStrip, {
    onZoom: setZoom,
    lang: lang
  }))), React.createElement("section", {
    id: "aliados",
    style: {
      background: 'var(--steel-1)',
      padding: 'clamp(48px,7vw,60px) 0'
    }
  }, React.createElement("div", {
    style: A.wrap
  }, React.createElement("h2", {
    style: A.h2
  }, P.aliadosTit), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))',
      gap: 14,
      marginTop: 24
    }
  }, NX_ALIADOS.map(function (a) {
    return React.createElement("div", {
      key: a.nombre,
      style: {
        background: '#fff',
        borderRadius: 16,
        padding: 20,
        minHeight: 96,
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, a.logo ? React.createElement("img", {
      src: a.logo,
      alt: "",
      style: {
        width: 52,
        height: 52,
        objectFit: 'contain',
        borderRadius: 10,
        flexShrink: 0
      }
    }) : null, React.createElement("b", {
      style: {
        fontSize: 16,
        lineHeight: 1.35
      }
    }, a.nombre));
  })))), React.createElement(Section, {
    id: "faq",
    titulo: d.ventanas.faq.titulo
  }, React.createElement("div", {
    style: {
      maxWidth: 820
    }
  }, P.faqNuevas.concat(d.ventanas.faq.items || []).map(function (it, i) {
    return React.createElement(FaqRow, {
      key: i,
      q: it.q,
      a: it.a,
      open: i === 0
    });
  }))), boletin, cierre(P.puenteTit, P.puenteTxt)) : null, React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      color: 'rgba(255,255,255,.7)',
      padding: '54px 0 40px'
    }
  }, React.createElement("div", {
    style: A.wrap
  }, React.createElement("img", {
    src: "logo-nexos-blanco.svg",
    alt: "NEXOS",
    style: {
      height: 40,
      width: 'auto',
      display: 'block'
    }
  }), React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.7,
      margin: '14px 0 0',
      maxWidth: 460
    }
  }, lang === 'EN' && x.taglineEn ? x.taglineEn : x.tagline), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '18px 26px',
      margin: '30px 0 0',
      paddingTop: 24,
      borderTop: '1px solid rgba(255,255,255,.16)'
    }
  }, d.nav.map(function (n) {
    return React.createElement("a", {
      key: n.id,
      href: '#' + n.id,
      style: {
        color: 'rgba(255,255,255,.7)',
        textDecoration: 'none',
        fontSize: 13.5
      }
    }, n.label);
  }), React.createElement("a", {
    href: "https://somosnexos.substack.com",
    target: "_blank",
    rel: "noopener",
    style: {
      color: 'rgba(255,255,255,.7)',
      textDecoration: 'none',
      fontSize: 13.5
    }
  }, lang === 'EN' ? 'Stories ↗' : 'Historias ↗'), React.createElement("a", {
    href: "https://instagram.com/somos.nexosve",
    style: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: 13.5,
      fontWeight: 700,
      marginLeft: 'auto'
    }
  }, "@somos.nexosve"), React.createElement("a", {
    href: "https://www.instagram.com/isiselinor/",
    style: {
      color: 'inherit',
      textDecoration: 'none',
      fontSize: 12
    }
  }, u.creditoSistema)))), React.createElement("div", {
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 30,
      padding: 12,
      display: 'none',
      background: 'rgba(255,255,255,.94)',
      borderTop: '1px solid var(--line)',
      backdropFilter: 'blur(10px)'
    },
    className: "mobile-cta"
  }, React.createElement(Button, {
    variant: "primary",
    onClick: function onClick() {
      setDonar(true);
    },
    style: {
      width: '100%'
    }
  }, u.donarAhora)), React.createElement(LightboxExport, {
    index: zoom,
    fotos: d.fotos,
    onClose: function onClose() {
      setZoom(null);
    },
    onIndex: setZoom
  }), t.subventana === 'Página' ? React.createElement(SectionPageExport, {
    lang: lang,
    id: drawer,
    onClose: function onClose() {
      setDrawer(null);
    },
    onOpen: setDrawer,
    onDonate: function onDonate() {
      setDonar(true);
    }
  }) : React.createElement(SectionWindowExport, {
    lang: lang,
    variant: t.winHeader === 'Coral' ? 'grafica' : 'editorial',
    id: drawer,
    onClose: function onClose() {
      setDrawer(null);
    },
    onOpen: setDrawer,
    onDonate: function onDonate() {
      setDonar(true);
    }
  }), React.createElement(DonateModal, {
    open: donar,
    onClose: function onClose() {
      setDonar(false);
    },
    notice: React.createElement("span", null, u.avisoModal[0], React.createElement("b", {
      style: {
        color: 'var(--accent)'
      }
    }, u.avisoModal[1]), u.avisoModal[2])
  }, x.metodosDonacion.map(function (m) {
    return React.createElement(PaymentMethod, {
      key: m.metodo,
      name: m.metodo,
      fields: m.campos
    });
  })), React.createElement(window.TweaksPanel, null, React.createElement(window.TweakSection, {
    label: "Paleta"
  }), React.createElement(window.TweakColor, {
    label: "Colores de marca",
    value: pal,
    options: [["#E0680E", "#11354C", "#11354C", "#FFFFFF"], ["#E0680E", "#11354C", "#141c33", "#fde7e0"], ["#d2542f", "#23407f", "#211a16", "#f4e4d6"], ["#E0680E", "#12306b", "#0e1a33", "#e8eef9"], ["#f04e28", "#0b2a6b", "#101014", "#ffede6"]],
    onChange: function onChange(v) {
      setTweak('palette', v);
    }
  }), React.createElement(window.TweakSection, {
    label: "Portada"
  }), React.createElement(window.TweakSelect, {
    label: "Encabezado",
    value: t.portada,
    options: ['Sobrio', 'Centrado', 'Titular', 'Foto'],
    onChange: function onChange(v) {
      setTweak('portada', v);
    }
  }), t.portada === 'Foto' ? React.createElement(window.TweakRadio, {
    label: "Tono del degradado",
    value: t.overlay,
    options: ['Navy', 'Coral', 'Negro'],
    onChange: function onChange(v) {
      setTweak('overlay', v);
    }
  }) : null, React.createElement(window.TweakSection, {
    label: "Sub-ventanas"
  }), React.createElement(window.TweakRadio, {
    label: "Formato",
    value: t.subventana,
    options: ['Página', 'Dos columnas'],
    onChange: function onChange(v) {
      setTweak('subventana', v);
    }
  }), t.subventana === 'Dos columnas' ? React.createElement(window.TweakRadio, {
    label: "Cabecera",
    value: t.winHeader,
    options: ['Navy', 'Coral'],
    onChange: function onChange(v) {
      setTweak('winHeader', v);
    }
  }) : null));
}
Object.assign(window, {
  EditorialLandingExport: EditorialLandingExport
});
;
/* main.jsx */
var nexosRoot = ReactDOM.createRoot(document.getElementById('root'));
window.__nexosRender = function () {
  nexosRoot.render(React.createElement(EditorialLandingExport, {
    key: Date.now()
  }));
};
window.__nexosRender();