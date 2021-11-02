import {
  menu_item_styles_default
} from "./chunk.7BJ5BT53.js";
import {
  o
} from "./chunk.BX2YCKAV.js";
import {
  watch
} from "./chunk.BD26TKS4.js";
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

// src/components/menu-item/menu-item.ts
var SlMenuItem = class extends s {
  constructor() {
    super(...arguments);
    this.checked = false;
    this.value = "";
    this.disabled = false;
  }
  firstUpdated() {
    this.setAttribute("role", "menuitem");
  }
  handleCheckedChange() {
    this.setAttribute("aria-checked", String(this.checked));
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", String(this.disabled));
  }
  render() {
    return p`
      <div
        part="base"
        class=${o({
      "menu-item": true,
      "menu-item--checked": this.checked,
      "menu-item--disabled": this.disabled
    })}
      >
        <sl-icon
          part="checked-icon"
          class="menu-item__check"
          name="check"
          library="system"
          aria-hidden="true"
        ></sl-icon>

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix"></slot>
        </span>

        <span part="label" class="menu-item__label">
          <slot></slot>
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix"></slot>
        </span>
      </div>
    `;
  }
};
SlMenuItem.styles = menu_item_styles_default;
__decorateClass([
  i(".menu-item")
], SlMenuItem.prototype, "menuItem", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlMenuItem.prototype, "checked", 2);
__decorateClass([
  e()
], SlMenuItem.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlMenuItem.prototype, "disabled", 2);
__decorateClass([
  watch("checked")
], SlMenuItem.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled")
], SlMenuItem.prototype, "handleDisabledChange", 1);
SlMenuItem = __decorateClass([
  n("sl-menu-item")
], SlMenuItem);

export {
  SlMenuItem
};
