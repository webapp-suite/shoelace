// node_modules/@lit/reactive-element/css-tag.js
var t = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var e = Symbol();
var n = new Map();
var s = class {
  constructor(t4, n6) {
    if (this._$cssResult$ = true, n6 !== e)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t4;
  }
  get styleSheet() {
    let e5 = n.get(this.cssText);
    return t && e5 === void 0 && (n.set(this.cssText, e5 = new CSSStyleSheet()), e5.replaceSync(this.cssText)), e5;
  }
  toString() {
    return this.cssText;
  }
};
var o = (t4) => new s(typeof t4 == "string" ? t4 : t4 + "", e);
var r = (t4, ...n6) => {
  const o6 = t4.length === 1 ? t4[0] : n6.reduce((e5, n7, s6) => e5 + ((t5) => {
    if (t5._$cssResult$ === true)
      return t5.cssText;
    if (typeof t5 == "number")
      return t5;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n7) + t4[s6 + 1], t4[0]);
  return new s(o6, e);
};
var i = (e5, n6) => {
  t ? e5.adoptedStyleSheets = n6.map((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet) : n6.forEach((t4) => {
    const n7 = document.createElement("style"), s6 = window.litNonce;
    s6 !== void 0 && n7.setAttribute("nonce", s6), n7.textContent = t4.cssText, e5.appendChild(n7);
  });
};
var S = t ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
  let e5 = "";
  for (const n6 of t5.cssRules)
    e5 += n6.cssText;
  return o(e5);
})(t4) : t4;

// node_modules/@lit/reactive-element/reactive-element.js
var s2;
var e2 = window.reactiveElementPolyfillSupport;
var r2 = { toAttribute(t4, i4) {
  switch (i4) {
    case Boolean:
      t4 = t4 ? "" : null;
      break;
    case Object:
    case Array:
      t4 = t4 == null ? t4 : JSON.stringify(t4);
  }
  return t4;
}, fromAttribute(t4, i4) {
  let s6 = t4;
  switch (i4) {
    case Boolean:
      s6 = t4 !== null;
      break;
    case Number:
      s6 = t4 === null ? null : Number(t4);
      break;
    case Object:
    case Array:
      try {
        s6 = JSON.parse(t4);
      } catch (t5) {
        s6 = null;
      }
  }
  return s6;
} };
var h = (t4, i4) => i4 !== t4 && (i4 == i4 || t4 == t4);
var o2 = { attribute: true, type: String, converter: r2, reflect: false, hasChanged: h };
var n2 = class extends HTMLElement {
  constructor() {
    super(), this._$Et = new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
  }
  static addInitializer(t4) {
    var i4;
    (i4 = this.l) !== null && i4 !== void 0 || (this.l = []), this.l.push(t4);
  }
  static get observedAttributes() {
    this.finalize();
    const t4 = [];
    return this.elementProperties.forEach((i4, s6) => {
      const e5 = this._$Eh(s6, i4);
      e5 !== void 0 && (this._$Eu.set(e5, s6), t4.push(e5));
    }), t4;
  }
  static createProperty(t4, i4 = o2) {
    if (i4.state && (i4.attribute = false), this.finalize(), this.elementProperties.set(t4, i4), !i4.noAccessor && !this.prototype.hasOwnProperty(t4)) {
      const s6 = typeof t4 == "symbol" ? Symbol() : "__" + t4, e5 = this.getPropertyDescriptor(t4, s6, i4);
      e5 !== void 0 && Object.defineProperty(this.prototype, t4, e5);
    }
  }
  static getPropertyDescriptor(t4, i4, s6) {
    return { get() {
      return this[i4];
    }, set(e5) {
      const r5 = this[t4];
      this[i4] = e5, this.requestUpdate(t4, r5, s6);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t4) {
    return this.elementProperties.get(t4) || o2;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return false;
    this.finalized = true;
    const t4 = Object.getPrototypeOf(this);
    if (t4.finalize(), this.elementProperties = new Map(t4.elementProperties), this._$Eu = new Map(), this.hasOwnProperty("properties")) {
      const t5 = this.properties, i4 = [...Object.getOwnPropertyNames(t5), ...Object.getOwnPropertySymbols(t5)];
      for (const s6 of i4)
        this.createProperty(s6, t5[s6]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i4) {
    const s6 = [];
    if (Array.isArray(i4)) {
      const e5 = new Set(i4.flat(1 / 0).reverse());
      for (const i5 of e5)
        s6.unshift(S(i5));
    } else
      i4 !== void 0 && s6.push(S(i4));
    return s6;
  }
  static _$Eh(t4, i4) {
    const s6 = i4.attribute;
    return s6 === false ? void 0 : typeof s6 == "string" ? s6 : typeof t4 == "string" ? t4.toLowerCase() : void 0;
  }
  o() {
    var t4;
    this._$Ev = new Promise((t5) => this.enableUpdating = t5), this._$AL = new Map(), this._$Ep(), this.requestUpdate(), (t4 = this.constructor.l) === null || t4 === void 0 || t4.forEach((t5) => t5(this));
  }
  addController(t4) {
    var i4, s6;
    ((i4 = this._$Em) !== null && i4 !== void 0 ? i4 : this._$Em = []).push(t4), this.renderRoot !== void 0 && this.isConnected && ((s6 = t4.hostConnected) === null || s6 === void 0 || s6.call(t4));
  }
  removeController(t4) {
    var i4;
    (i4 = this._$Em) === null || i4 === void 0 || i4.splice(this._$Em.indexOf(t4) >>> 0, 1);
  }
  _$Ep() {
    this.constructor.elementProperties.forEach((t4, i4) => {
      this.hasOwnProperty(i4) && (this._$Et.set(i4, this[i4]), delete this[i4]);
    });
  }
  createRenderRoot() {
    var t4;
    const s6 = (t4 = this.shadowRoot) !== null && t4 !== void 0 ? t4 : this.attachShadow(this.constructor.shadowRootOptions);
    return i(s6, this.constructor.elementStyles), s6;
  }
  connectedCallback() {
    var t4;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t4 = this._$Em) === null || t4 === void 0 || t4.forEach((t5) => {
      var i4;
      return (i4 = t5.hostConnected) === null || i4 === void 0 ? void 0 : i4.call(t5);
    });
  }
  enableUpdating(t4) {
  }
  disconnectedCallback() {
    var t4;
    (t4 = this._$Em) === null || t4 === void 0 || t4.forEach((t5) => {
      var i4;
      return (i4 = t5.hostDisconnected) === null || i4 === void 0 ? void 0 : i4.call(t5);
    });
  }
  attributeChangedCallback(t4, i4, s6) {
    this._$AK(t4, s6);
  }
  _$Eg(t4, i4, s6 = o2) {
    var e5, h4;
    const n6 = this.constructor._$Eh(t4, s6);
    if (n6 !== void 0 && s6.reflect === true) {
      const o6 = ((h4 = (e5 = s6.converter) === null || e5 === void 0 ? void 0 : e5.toAttribute) !== null && h4 !== void 0 ? h4 : r2.toAttribute)(i4, s6.type);
      this._$Ei = t4, o6 == null ? this.removeAttribute(n6) : this.setAttribute(n6, o6), this._$Ei = null;
    }
  }
  _$AK(t4, i4) {
    var s6, e5, h4;
    const o6 = this.constructor, n6 = o6._$Eu.get(t4);
    if (n6 !== void 0 && this._$Ei !== n6) {
      const t5 = o6.getPropertyOptions(n6), l4 = t5.converter, a3 = (h4 = (e5 = (s6 = l4) === null || s6 === void 0 ? void 0 : s6.fromAttribute) !== null && e5 !== void 0 ? e5 : typeof l4 == "function" ? l4 : null) !== null && h4 !== void 0 ? h4 : r2.fromAttribute;
      this._$Ei = n6, this[n6] = a3(i4, t5.type), this._$Ei = null;
    }
  }
  requestUpdate(t4, i4, s6) {
    let e5 = true;
    t4 !== void 0 && (((s6 = s6 || this.constructor.getPropertyOptions(t4)).hasChanged || h)(this[t4], i4) ? (this._$AL.has(t4) || this._$AL.set(t4, i4), s6.reflect === true && this._$Ei !== t4 && (this._$ES === void 0 && (this._$ES = new Map()), this._$ES.set(t4, s6))) : e5 = false), !this.isUpdatePending && e5 && (this._$Ev = this._$EC());
  }
  async _$EC() {
    this.isUpdatePending = true;
    try {
      await this._$Ev;
    } catch (t5) {
      Promise.reject(t5);
    }
    const t4 = this.scheduleUpdate();
    return t4 != null && await t4, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t4;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Et && (this._$Et.forEach((t5, i5) => this[i5] = t5), this._$Et = void 0);
    let i4 = false;
    const s6 = this._$AL;
    try {
      i4 = this.shouldUpdate(s6), i4 ? (this.willUpdate(s6), (t4 = this._$Em) === null || t4 === void 0 || t4.forEach((t5) => {
        var i5;
        return (i5 = t5.hostUpdate) === null || i5 === void 0 ? void 0 : i5.call(t5);
      }), this.update(s6)) : this._$EU();
    } catch (t5) {
      throw i4 = false, this._$EU(), t5;
    }
    i4 && this._$AE(s6);
  }
  willUpdate(t4) {
  }
  _$AE(t4) {
    var i4;
    (i4 = this._$Em) === null || i4 === void 0 || i4.forEach((t5) => {
      var i5;
      return (i5 = t5.hostUpdated) === null || i5 === void 0 ? void 0 : i5.call(t5);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
  }
  _$EU() {
    this._$AL = new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Ev;
  }
  shouldUpdate(t4) {
    return true;
  }
  update(t4) {
    this._$ES !== void 0 && (this._$ES.forEach((t5, i4) => this._$Eg(i4, this[i4], t5)), this._$ES = void 0), this._$EU();
  }
  updated(t4) {
  }
  firstUpdated(t4) {
  }
};
n2.finalized = true, n2.elementProperties = new Map(), n2.elementStyles = [], n2.shadowRootOptions = { mode: "open" }, e2 == null || e2({ ReactiveElement: n2 }), ((s2 = globalThis.reactiveElementVersions) !== null && s2 !== void 0 ? s2 : globalThis.reactiveElementVersions = []).push("1.0.1");

// node_modules/lit-element/node_modules/lit-html/lit-html.js
var t2;
var i2 = globalThis.trustedTypes;
var s3 = i2 ? i2.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
var e3 = `lit$${(Math.random() + "").slice(9)}$`;
var o3 = "?" + e3;
var n3 = `<${o3}>`;
var l = document;
var h2 = (t4 = "") => l.createComment(t4);
var r3 = (t4) => t4 === null || typeof t4 != "object" && typeof t4 != "function";
var d = Array.isArray;
var u = (t4) => {
  var i4;
  return d(t4) || typeof ((i4 = t4) === null || i4 === void 0 ? void 0 : i4[Symbol.iterator]) == "function";
};
var c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var v = /-->/g;
var a = />/g;
var f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
var _ = /'/g;
var m = /"/g;
var g = /^(?:script|style|textarea)$/i;
var $ = (t4) => (i4, ...s6) => ({ _$litType$: t4, strings: i4, values: s6 });
var p = $(1);
var y = $(2);
var b = Symbol.for("lit-noChange");
var T = Symbol.for("lit-nothing");
var x = new WeakMap();
var w = (t4, i4, s6) => {
  var e5, o6;
  const n6 = (e5 = s6 == null ? void 0 : s6.renderBefore) !== null && e5 !== void 0 ? e5 : i4;
  let l4 = n6._$litPart$;
  if (l4 === void 0) {
    const t5 = (o6 = s6 == null ? void 0 : s6.renderBefore) !== null && o6 !== void 0 ? o6 : null;
    n6._$litPart$ = l4 = new N(i4.insertBefore(h2(), t5), t5, void 0, s6 != null ? s6 : {});
  }
  return l4._$AI(t4), l4;
};
var A = l.createTreeWalker(l, 129, null, false);
var C = (t4, i4) => {
  const o6 = t4.length - 1, l4 = [];
  let h4, r5 = i4 === 2 ? "<svg>" : "", d3 = c;
  for (let i5 = 0; i5 < o6; i5++) {
    const s6 = t4[i5];
    let o7, u4, $3 = -1, p3 = 0;
    for (; p3 < s6.length && (d3.lastIndex = p3, u4 = d3.exec(s6), u4 !== null); )
      p3 = d3.lastIndex, d3 === c ? u4[1] === "!--" ? d3 = v : u4[1] !== void 0 ? d3 = a : u4[2] !== void 0 ? (g.test(u4[2]) && (h4 = RegExp("</" + u4[2], "g")), d3 = f) : u4[3] !== void 0 && (d3 = f) : d3 === f ? u4[0] === ">" ? (d3 = h4 != null ? h4 : c, $3 = -1) : u4[1] === void 0 ? $3 = -2 : ($3 = d3.lastIndex - u4[2].length, o7 = u4[1], d3 = u4[3] === void 0 ? f : u4[3] === '"' ? m : _) : d3 === m || d3 === _ ? d3 = f : d3 === v || d3 === a ? d3 = c : (d3 = f, h4 = void 0);
    const y3 = d3 === f && t4[i5 + 1].startsWith("/>") ? " " : "";
    r5 += d3 === c ? s6 + n3 : $3 >= 0 ? (l4.push(o7), s6.slice(0, $3) + "$lit$" + s6.slice($3) + e3 + y3) : s6 + e3 + ($3 === -2 ? (l4.push(void 0), i5) : y3);
  }
  const u3 = r5 + (t4[o6] || "<?>") + (i4 === 2 ? "</svg>" : "");
  return [s3 !== void 0 ? s3.createHTML(u3) : u3, l4];
};
var P = class {
  constructor({ strings: t4, _$litType$: s6 }, n6) {
    let l4;
    this.parts = [];
    let r5 = 0, d3 = 0;
    const u3 = t4.length - 1, c3 = this.parts, [v3, a3] = C(t4, s6);
    if (this.el = P.createElement(v3, n6), A.currentNode = this.el.content, s6 === 2) {
      const t5 = this.el.content, i4 = t5.firstChild;
      i4.remove(), t5.append(...i4.childNodes);
    }
    for (; (l4 = A.nextNode()) !== null && c3.length < u3; ) {
      if (l4.nodeType === 1) {
        if (l4.hasAttributes()) {
          const t5 = [];
          for (const i4 of l4.getAttributeNames())
            if (i4.endsWith("$lit$") || i4.startsWith(e3)) {
              const s7 = a3[d3++];
              if (t5.push(i4), s7 !== void 0) {
                const t6 = l4.getAttribute(s7.toLowerCase() + "$lit$").split(e3), i5 = /([.?@])?(.*)/.exec(s7);
                c3.push({ type: 1, index: r5, name: i5[2], strings: t6, ctor: i5[1] === "." ? M : i5[1] === "?" ? k : i5[1] === "@" ? H : S2 });
              } else
                c3.push({ type: 6, index: r5 });
            }
          for (const i4 of t5)
            l4.removeAttribute(i4);
        }
        if (g.test(l4.tagName)) {
          const t5 = l4.textContent.split(e3), s7 = t5.length - 1;
          if (s7 > 0) {
            l4.textContent = i2 ? i2.emptyScript : "";
            for (let i4 = 0; i4 < s7; i4++)
              l4.append(t5[i4], h2()), A.nextNode(), c3.push({ type: 2, index: ++r5 });
            l4.append(t5[s7], h2());
          }
        }
      } else if (l4.nodeType === 8)
        if (l4.data === o3)
          c3.push({ type: 2, index: r5 });
        else {
          let t5 = -1;
          for (; (t5 = l4.data.indexOf(e3, t5 + 1)) !== -1; )
            c3.push({ type: 7, index: r5 }), t5 += e3.length - 1;
        }
      r5++;
    }
  }
  static createElement(t4, i4) {
    const s6 = l.createElement("template");
    return s6.innerHTML = t4, s6;
  }
};
function V(t4, i4, s6 = t4, e5) {
  var o6, n6, l4, h4;
  if (i4 === b)
    return i4;
  let d3 = e5 !== void 0 ? (o6 = s6._$Cl) === null || o6 === void 0 ? void 0 : o6[e5] : s6._$Cu;
  const u3 = r3(i4) ? void 0 : i4._$litDirective$;
  return (d3 == null ? void 0 : d3.constructor) !== u3 && ((n6 = d3 == null ? void 0 : d3._$AO) === null || n6 === void 0 || n6.call(d3, false), u3 === void 0 ? d3 = void 0 : (d3 = new u3(t4), d3._$AT(t4, s6, e5)), e5 !== void 0 ? ((l4 = (h4 = s6)._$Cl) !== null && l4 !== void 0 ? l4 : h4._$Cl = [])[e5] = d3 : s6._$Cu = d3), d3 !== void 0 && (i4 = V(t4, d3._$AS(t4, i4.values), d3, e5)), i4;
}
var E = class {
  constructor(t4, i4) {
    this.v = [], this._$AN = void 0, this._$AD = t4, this._$AM = i4;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(t4) {
    var i4;
    const { el: { content: s6 }, parts: e5 } = this._$AD, o6 = ((i4 = t4 == null ? void 0 : t4.creationScope) !== null && i4 !== void 0 ? i4 : l).importNode(s6, true);
    A.currentNode = o6;
    let n6 = A.nextNode(), h4 = 0, r5 = 0, d3 = e5[0];
    for (; d3 !== void 0; ) {
      if (h4 === d3.index) {
        let i5;
        d3.type === 2 ? i5 = new N(n6, n6.nextSibling, this, t4) : d3.type === 1 ? i5 = new d3.ctor(n6, d3.name, d3.strings, this, t4) : d3.type === 6 && (i5 = new I(n6, this, t4)), this.v.push(i5), d3 = e5[++r5];
      }
      h4 !== (d3 == null ? void 0 : d3.index) && (n6 = A.nextNode(), h4++);
    }
    return o6;
  }
  m(t4) {
    let i4 = 0;
    for (const s6 of this.v)
      s6 !== void 0 && (s6.strings !== void 0 ? (s6._$AI(t4, s6, i4), i4 += s6.strings.length - 2) : s6._$AI(t4[i4])), i4++;
  }
};
var N = class {
  constructor(t4, i4, s6, e5) {
    var o6;
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t4, this._$AB = i4, this._$AM = s6, this.options = e5, this._$Cg = (o6 = e5 == null ? void 0 : e5.isConnected) === null || o6 === void 0 || o6;
  }
  get _$AU() {
    var t4, i4;
    return (i4 = (t4 = this._$AM) === null || t4 === void 0 ? void 0 : t4._$AU) !== null && i4 !== void 0 ? i4 : this._$Cg;
  }
  get parentNode() {
    let t4 = this._$AA.parentNode;
    const i4 = this._$AM;
    return i4 !== void 0 && t4.nodeType === 11 && (t4 = i4.parentNode), t4;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t4, i4 = this) {
    t4 = V(this, t4, i4), r3(t4) ? t4 === T || t4 == null || t4 === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : t4 !== this._$AH && t4 !== b && this.$(t4) : t4._$litType$ !== void 0 ? this.T(t4) : t4.nodeType !== void 0 ? this.S(t4) : u(t4) ? this.M(t4) : this.$(t4);
  }
  A(t4, i4 = this._$AB) {
    return this._$AA.parentNode.insertBefore(t4, i4);
  }
  S(t4) {
    this._$AH !== t4 && (this._$AR(), this._$AH = this.A(t4));
  }
  $(t4) {
    this._$AH !== T && r3(this._$AH) ? this._$AA.nextSibling.data = t4 : this.S(l.createTextNode(t4)), this._$AH = t4;
  }
  T(t4) {
    var i4;
    const { values: s6, _$litType$: e5 } = t4, o6 = typeof e5 == "number" ? this._$AC(t4) : (e5.el === void 0 && (e5.el = P.createElement(e5.h, this.options)), e5);
    if (((i4 = this._$AH) === null || i4 === void 0 ? void 0 : i4._$AD) === o6)
      this._$AH.m(s6);
    else {
      const t5 = new E(o6, this), i5 = t5.p(this.options);
      t5.m(s6), this.S(i5), this._$AH = t5;
    }
  }
  _$AC(t4) {
    let i4 = x.get(t4.strings);
    return i4 === void 0 && x.set(t4.strings, i4 = new P(t4)), i4;
  }
  M(t4) {
    d(this._$AH) || (this._$AH = [], this._$AR());
    const i4 = this._$AH;
    let s6, e5 = 0;
    for (const o6 of t4)
      e5 === i4.length ? i4.push(s6 = new N(this.A(h2()), this.A(h2()), this, this.options)) : s6 = i4[e5], s6._$AI(o6), e5++;
    e5 < i4.length && (this._$AR(s6 && s6._$AB.nextSibling, e5), i4.length = e5);
  }
  _$AR(t4 = this._$AA.nextSibling, i4) {
    var s6;
    for ((s6 = this._$AP) === null || s6 === void 0 || s6.call(this, false, true, i4); t4 && t4 !== this._$AB; ) {
      const i5 = t4.nextSibling;
      t4.remove(), t4 = i5;
    }
  }
  setConnected(t4) {
    var i4;
    this._$AM === void 0 && (this._$Cg = t4, (i4 = this._$AP) === null || i4 === void 0 || i4.call(this, t4));
  }
};
var S2 = class {
  constructor(t4, i4, s6, e5, o6) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t4, this.name = i4, this._$AM = e5, this.options = o6, s6.length > 2 || s6[0] !== "" || s6[1] !== "" ? (this._$AH = Array(s6.length - 1).fill(new String()), this.strings = s6) : this._$AH = T;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t4, i4 = this, s6, e5) {
    const o6 = this.strings;
    let n6 = false;
    if (o6 === void 0)
      t4 = V(this, t4, i4, 0), n6 = !r3(t4) || t4 !== this._$AH && t4 !== b, n6 && (this._$AH = t4);
    else {
      const e6 = t4;
      let l4, h4;
      for (t4 = o6[0], l4 = 0; l4 < o6.length - 1; l4++)
        h4 = V(this, e6[s6 + l4], i4, l4), h4 === b && (h4 = this._$AH[l4]), n6 || (n6 = !r3(h4) || h4 !== this._$AH[l4]), h4 === T ? t4 = T : t4 !== T && (t4 += (h4 != null ? h4 : "") + o6[l4 + 1]), this._$AH[l4] = h4;
    }
    n6 && !e5 && this.k(t4);
  }
  k(t4) {
    t4 === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 != null ? t4 : "");
  }
};
var M = class extends S2 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  k(t4) {
    this.element[this.name] = t4 === T ? void 0 : t4;
  }
};
var k = class extends S2 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  k(t4) {
    t4 && t4 !== T ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name);
  }
};
var H = class extends S2 {
  constructor(t4, i4, s6, e5, o6) {
    super(t4, i4, s6, e5, o6), this.type = 5;
  }
  _$AI(t4, i4 = this) {
    var s6;
    if ((t4 = (s6 = V(this, t4, i4, 0)) !== null && s6 !== void 0 ? s6 : T) === b)
      return;
    const e5 = this._$AH, o6 = t4 === T && e5 !== T || t4.capture !== e5.capture || t4.once !== e5.once || t4.passive !== e5.passive, n6 = t4 !== T && (e5 === T || o6);
    o6 && this.element.removeEventListener(this.name, this, e5), n6 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
  }
  handleEvent(t4) {
    var i4, s6;
    typeof this._$AH == "function" ? this._$AH.call((s6 = (i4 = this.options) === null || i4 === void 0 ? void 0 : i4.host) !== null && s6 !== void 0 ? s6 : this.element, t4) : this._$AH.handleEvent(t4);
  }
};
var I = class {
  constructor(t4, i4, s6) {
    this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = i4, this.options = s6;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t4) {
    V(this, t4);
  }
};
var R = window.litHtmlPolyfillSupport;
R == null || R(P, N), ((t2 = globalThis.litHtmlVersions) !== null && t2 !== void 0 ? t2 : globalThis.litHtmlVersions = []).push("2.0.1");

// node_modules/lit-element/lit-element.js
var l2;
var o4;
var s4 = class extends n2 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
  }
  createRenderRoot() {
    var t4, e5;
    const i4 = super.createRenderRoot();
    return (t4 = (e5 = this.renderOptions).renderBefore) !== null && t4 !== void 0 || (e5.renderBefore = i4.firstChild), i4;
  }
  update(t4) {
    const i4 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Dt = w(i4, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t4;
    super.connectedCallback(), (t4 = this._$Dt) === null || t4 === void 0 || t4.setConnected(true);
  }
  disconnectedCallback() {
    var t4;
    super.disconnectedCallback(), (t4 = this._$Dt) === null || t4 === void 0 || t4.setConnected(false);
  }
  render() {
    return b;
  }
};
s4.finalized = true, s4._$litElement$ = true, (l2 = globalThis.litElementHydrateSupport) === null || l2 === void 0 || l2.call(globalThis, { LitElement: s4 });
var n4 = globalThis.litElementPolyfillSupport;
n4 == null || n4({ LitElement: s4 });
((o4 = globalThis.litElementVersions) !== null && o4 !== void 0 ? o4 : globalThis.litElementVersions = []).push("3.0.1");

// node_modules/lit/node_modules/lit-html/lit-html.js
var t3;
var i3 = globalThis.trustedTypes;
var s5 = i3 ? i3.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
var e4 = `lit$${(Math.random() + "").slice(9)}$`;
var o5 = "?" + e4;
var n5 = `<${o5}>`;
var l3 = document;
var h3 = (t4 = "") => l3.createComment(t4);
var r4 = (t4) => t4 === null || typeof t4 != "object" && typeof t4 != "function";
var d2 = Array.isArray;
var u2 = (t4) => {
  var i4;
  return d2(t4) || typeof ((i4 = t4) === null || i4 === void 0 ? void 0 : i4[Symbol.iterator]) == "function";
};
var c2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var v2 = /-->/g;
var a2 = />/g;
var f2 = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
var _2 = /'/g;
var m2 = /"/g;
var g2 = /^(?:script|style|textarea)$/i;
var $2 = (t4) => (i4, ...s6) => ({ _$litType$: t4, strings: i4, values: s6 });
var p2 = $2(1);
var y2 = $2(2);
var b2 = Symbol.for("lit-noChange");
var T2 = Symbol.for("lit-nothing");
var x2 = new WeakMap();
var A2 = l3.createTreeWalker(l3, 129, null, false);
var C2 = (t4, i4) => {
  const o6 = t4.length - 1, l4 = [];
  let h4, r5 = i4 === 2 ? "<svg>" : "", d3 = c2;
  for (let i5 = 0; i5 < o6; i5++) {
    const s6 = t4[i5];
    let o7, u4, $3 = -1, p3 = 0;
    for (; p3 < s6.length && (d3.lastIndex = p3, u4 = d3.exec(s6), u4 !== null); )
      p3 = d3.lastIndex, d3 === c2 ? u4[1] === "!--" ? d3 = v2 : u4[1] !== void 0 ? d3 = a2 : u4[2] !== void 0 ? (g2.test(u4[2]) && (h4 = RegExp("</" + u4[2], "g")), d3 = f2) : u4[3] !== void 0 && (d3 = f2) : d3 === f2 ? u4[0] === ">" ? (d3 = h4 != null ? h4 : c2, $3 = -1) : u4[1] === void 0 ? $3 = -2 : ($3 = d3.lastIndex - u4[2].length, o7 = u4[1], d3 = u4[3] === void 0 ? f2 : u4[3] === '"' ? m2 : _2) : d3 === m2 || d3 === _2 ? d3 = f2 : d3 === v2 || d3 === a2 ? d3 = c2 : (d3 = f2, h4 = void 0);
    const y3 = d3 === f2 && t4[i5 + 1].startsWith("/>") ? " " : "";
    r5 += d3 === c2 ? s6 + n5 : $3 >= 0 ? (l4.push(o7), s6.slice(0, $3) + "$lit$" + s6.slice($3) + e4 + y3) : s6 + e4 + ($3 === -2 ? (l4.push(void 0), i5) : y3);
  }
  const u3 = r5 + (t4[o6] || "<?>") + (i4 === 2 ? "</svg>" : "");
  return [s5 !== void 0 ? s5.createHTML(u3) : u3, l4];
};
var P2 = class {
  constructor({ strings: t4, _$litType$: s6 }, n6) {
    let l4;
    this.parts = [];
    let r5 = 0, d3 = 0;
    const u3 = t4.length - 1, c3 = this.parts, [v3, a3] = C2(t4, s6);
    if (this.el = P2.createElement(v3, n6), A2.currentNode = this.el.content, s6 === 2) {
      const t5 = this.el.content, i4 = t5.firstChild;
      i4.remove(), t5.append(...i4.childNodes);
    }
    for (; (l4 = A2.nextNode()) !== null && c3.length < u3; ) {
      if (l4.nodeType === 1) {
        if (l4.hasAttributes()) {
          const t5 = [];
          for (const i4 of l4.getAttributeNames())
            if (i4.endsWith("$lit$") || i4.startsWith(e4)) {
              const s7 = a3[d3++];
              if (t5.push(i4), s7 !== void 0) {
                const t6 = l4.getAttribute(s7.toLowerCase() + "$lit$").split(e4), i5 = /([.?@])?(.*)/.exec(s7);
                c3.push({ type: 1, index: r5, name: i5[2], strings: t6, ctor: i5[1] === "." ? M2 : i5[1] === "?" ? k2 : i5[1] === "@" ? H2 : S3 });
              } else
                c3.push({ type: 6, index: r5 });
            }
          for (const i4 of t5)
            l4.removeAttribute(i4);
        }
        if (g2.test(l4.tagName)) {
          const t5 = l4.textContent.split(e4), s7 = t5.length - 1;
          if (s7 > 0) {
            l4.textContent = i3 ? i3.emptyScript : "";
            for (let i4 = 0; i4 < s7; i4++)
              l4.append(t5[i4], h3()), A2.nextNode(), c3.push({ type: 2, index: ++r5 });
            l4.append(t5[s7], h3());
          }
        }
      } else if (l4.nodeType === 8)
        if (l4.data === o5)
          c3.push({ type: 2, index: r5 });
        else {
          let t5 = -1;
          for (; (t5 = l4.data.indexOf(e4, t5 + 1)) !== -1; )
            c3.push({ type: 7, index: r5 }), t5 += e4.length - 1;
        }
      r5++;
    }
  }
  static createElement(t4, i4) {
    const s6 = l3.createElement("template");
    return s6.innerHTML = t4, s6;
  }
};
function V2(t4, i4, s6 = t4, e5) {
  var o6, n6, l4, h4;
  if (i4 === b2)
    return i4;
  let d3 = e5 !== void 0 ? (o6 = s6._$Cl) === null || o6 === void 0 ? void 0 : o6[e5] : s6._$Cu;
  const u3 = r4(i4) ? void 0 : i4._$litDirective$;
  return (d3 == null ? void 0 : d3.constructor) !== u3 && ((n6 = d3 == null ? void 0 : d3._$AO) === null || n6 === void 0 || n6.call(d3, false), u3 === void 0 ? d3 = void 0 : (d3 = new u3(t4), d3._$AT(t4, s6, e5)), e5 !== void 0 ? ((l4 = (h4 = s6)._$Cl) !== null && l4 !== void 0 ? l4 : h4._$Cl = [])[e5] = d3 : s6._$Cu = d3), d3 !== void 0 && (i4 = V2(t4, d3._$AS(t4, i4.values), d3, e5)), i4;
}
var E2 = class {
  constructor(t4, i4) {
    this.v = [], this._$AN = void 0, this._$AD = t4, this._$AM = i4;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(t4) {
    var i4;
    const { el: { content: s6 }, parts: e5 } = this._$AD, o6 = ((i4 = t4 == null ? void 0 : t4.creationScope) !== null && i4 !== void 0 ? i4 : l3).importNode(s6, true);
    A2.currentNode = o6;
    let n6 = A2.nextNode(), h4 = 0, r5 = 0, d3 = e5[0];
    for (; d3 !== void 0; ) {
      if (h4 === d3.index) {
        let i5;
        d3.type === 2 ? i5 = new N2(n6, n6.nextSibling, this, t4) : d3.type === 1 ? i5 = new d3.ctor(n6, d3.name, d3.strings, this, t4) : d3.type === 6 && (i5 = new I2(n6, this, t4)), this.v.push(i5), d3 = e5[++r5];
      }
      h4 !== (d3 == null ? void 0 : d3.index) && (n6 = A2.nextNode(), h4++);
    }
    return o6;
  }
  m(t4) {
    let i4 = 0;
    for (const s6 of this.v)
      s6 !== void 0 && (s6.strings !== void 0 ? (s6._$AI(t4, s6, i4), i4 += s6.strings.length - 2) : s6._$AI(t4[i4])), i4++;
  }
};
var N2 = class {
  constructor(t4, i4, s6, e5) {
    var o6;
    this.type = 2, this._$AH = T2, this._$AN = void 0, this._$AA = t4, this._$AB = i4, this._$AM = s6, this.options = e5, this._$Cg = (o6 = e5 == null ? void 0 : e5.isConnected) === null || o6 === void 0 || o6;
  }
  get _$AU() {
    var t4, i4;
    return (i4 = (t4 = this._$AM) === null || t4 === void 0 ? void 0 : t4._$AU) !== null && i4 !== void 0 ? i4 : this._$Cg;
  }
  get parentNode() {
    let t4 = this._$AA.parentNode;
    const i4 = this._$AM;
    return i4 !== void 0 && t4.nodeType === 11 && (t4 = i4.parentNode), t4;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t4, i4 = this) {
    t4 = V2(this, t4, i4), r4(t4) ? t4 === T2 || t4 == null || t4 === "" ? (this._$AH !== T2 && this._$AR(), this._$AH = T2) : t4 !== this._$AH && t4 !== b2 && this.$(t4) : t4._$litType$ !== void 0 ? this.T(t4) : t4.nodeType !== void 0 ? this.S(t4) : u2(t4) ? this.M(t4) : this.$(t4);
  }
  A(t4, i4 = this._$AB) {
    return this._$AA.parentNode.insertBefore(t4, i4);
  }
  S(t4) {
    this._$AH !== t4 && (this._$AR(), this._$AH = this.A(t4));
  }
  $(t4) {
    this._$AH !== T2 && r4(this._$AH) ? this._$AA.nextSibling.data = t4 : this.S(l3.createTextNode(t4)), this._$AH = t4;
  }
  T(t4) {
    var i4;
    const { values: s6, _$litType$: e5 } = t4, o6 = typeof e5 == "number" ? this._$AC(t4) : (e5.el === void 0 && (e5.el = P2.createElement(e5.h, this.options)), e5);
    if (((i4 = this._$AH) === null || i4 === void 0 ? void 0 : i4._$AD) === o6)
      this._$AH.m(s6);
    else {
      const t5 = new E2(o6, this), i5 = t5.p(this.options);
      t5.m(s6), this.S(i5), this._$AH = t5;
    }
  }
  _$AC(t4) {
    let i4 = x2.get(t4.strings);
    return i4 === void 0 && x2.set(t4.strings, i4 = new P2(t4)), i4;
  }
  M(t4) {
    d2(this._$AH) || (this._$AH = [], this._$AR());
    const i4 = this._$AH;
    let s6, e5 = 0;
    for (const o6 of t4)
      e5 === i4.length ? i4.push(s6 = new N2(this.A(h3()), this.A(h3()), this, this.options)) : s6 = i4[e5], s6._$AI(o6), e5++;
    e5 < i4.length && (this._$AR(s6 && s6._$AB.nextSibling, e5), i4.length = e5);
  }
  _$AR(t4 = this._$AA.nextSibling, i4) {
    var s6;
    for ((s6 = this._$AP) === null || s6 === void 0 || s6.call(this, false, true, i4); t4 && t4 !== this._$AB; ) {
      const i5 = t4.nextSibling;
      t4.remove(), t4 = i5;
    }
  }
  setConnected(t4) {
    var i4;
    this._$AM === void 0 && (this._$Cg = t4, (i4 = this._$AP) === null || i4 === void 0 || i4.call(this, t4));
  }
};
var S3 = class {
  constructor(t4, i4, s6, e5, o6) {
    this.type = 1, this._$AH = T2, this._$AN = void 0, this.element = t4, this.name = i4, this._$AM = e5, this.options = o6, s6.length > 2 || s6[0] !== "" || s6[1] !== "" ? (this._$AH = Array(s6.length - 1).fill(new String()), this.strings = s6) : this._$AH = T2;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t4, i4 = this, s6, e5) {
    const o6 = this.strings;
    let n6 = false;
    if (o6 === void 0)
      t4 = V2(this, t4, i4, 0), n6 = !r4(t4) || t4 !== this._$AH && t4 !== b2, n6 && (this._$AH = t4);
    else {
      const e6 = t4;
      let l4, h4;
      for (t4 = o6[0], l4 = 0; l4 < o6.length - 1; l4++)
        h4 = V2(this, e6[s6 + l4], i4, l4), h4 === b2 && (h4 = this._$AH[l4]), n6 || (n6 = !r4(h4) || h4 !== this._$AH[l4]), h4 === T2 ? t4 = T2 : t4 !== T2 && (t4 += (h4 != null ? h4 : "") + o6[l4 + 1]), this._$AH[l4] = h4;
    }
    n6 && !e5 && this.k(t4);
  }
  k(t4) {
    t4 === T2 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 != null ? t4 : "");
  }
};
var M2 = class extends S3 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  k(t4) {
    this.element[this.name] = t4 === T2 ? void 0 : t4;
  }
};
var k2 = class extends S3 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  k(t4) {
    t4 && t4 !== T2 ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name);
  }
};
var H2 = class extends S3 {
  constructor(t4, i4, s6, e5, o6) {
    super(t4, i4, s6, e5, o6), this.type = 5;
  }
  _$AI(t4, i4 = this) {
    var s6;
    if ((t4 = (s6 = V2(this, t4, i4, 0)) !== null && s6 !== void 0 ? s6 : T2) === b2)
      return;
    const e5 = this._$AH, o6 = t4 === T2 && e5 !== T2 || t4.capture !== e5.capture || t4.once !== e5.once || t4.passive !== e5.passive, n6 = t4 !== T2 && (e5 === T2 || o6);
    o6 && this.element.removeEventListener(this.name, this, e5), n6 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
  }
  handleEvent(t4) {
    var i4, s6;
    typeof this._$AH == "function" ? this._$AH.call((s6 = (i4 = this.options) === null || i4 === void 0 ? void 0 : i4.host) !== null && s6 !== void 0 ? s6 : this.element, t4) : this._$AH.handleEvent(t4);
  }
};
var I2 = class {
  constructor(t4, i4, s6) {
    this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = i4, this.options = s6;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t4) {
    V2(this, t4);
  }
};
var R2 = window.litHtmlPolyfillSupport;
R2 == null || R2(P2, N2), ((t3 = globalThis.litHtmlVersions) !== null && t3 !== void 0 ? t3 : globalThis.litHtmlVersions = []).push("2.0.1");

export {
  o,
  r,
  b2 as b,
  T2 as T,
  p,
  s4 as s
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
