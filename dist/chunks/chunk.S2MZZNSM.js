import {
  tab_styles_default
} from "./chunk.XOEYEW66.js";
import {
  o
} from "./chunk.BX2YCKAV.js";
import {
  emit
} from "./chunk.I4TE3TJV.js";
import {
  e,
  i,
  n
} from "./chunk.POKKIWRQ.js";
import {
  p,
  s
} from "./chunk.YWXV2CS2.js";
import {
  __decorateClass
} from "./chunk.JHDFAWWC.js";

// src/components/tab/tab.ts
var id = 0;
var SlTab = class extends s {
  constructor() {
    super(...arguments);
    this.componentId = `tab-${++id}`;
    this.panel = "";
    this.active = false;
    this.closable = false;
    this.disabled = false;
  }
  focus(options) {
    this.tab.focus(options);
  }
  blur() {
    this.tab.blur();
  }
  handleCloseClick() {
    emit(this, "sl-close");
  }
  render() {
    this.id = this.id || this.componentId;
    return p`
      <div
        part="base"
        class=${o({
      tab: true,
      "tab--active": this.active,
      "tab--closable": this.closable,
      "tab--disabled": this.disabled
    })}
        role="tab"
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-selected=${this.active ? "true" : "false"}
        tabindex=${this.disabled || !this.active ? "-1" : "0"}
      >
        <slot></slot>
        ${this.closable ? p`
              <sl-icon-button
                name="x"
                library="system"
                exportparts="base:close-button"
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
                aria-hidden="true"
              ></sl-icon-button>
            ` : ""}
      </div>
    `;
  }
};
SlTab.styles = tab_styles_default;
__decorateClass([
  i(".tab")
], SlTab.prototype, "tab", 2);
__decorateClass([
  e()
], SlTab.prototype, "panel", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlTab.prototype, "active", 2);
__decorateClass([
  e({ type: Boolean })
], SlTab.prototype, "closable", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlTab.prototype, "disabled", 2);
SlTab = __decorateClass([
  n("sl-tab")
], SlTab);

export {
  SlTab
};
