import {
  menu_label_styles_default
} from "./chunk.4KS3XTMO.js";
import {
  n
} from "./chunk.POKKIWRQ.js";
import {
  p,
  s
} from "./chunk.YWXV2CS2.js";
import {
  __decorateClass
} from "./chunk.JHDFAWWC.js";

// src/components/menu-label/menu-label.ts
var SlMenuLabel = class extends s {
  render() {
    return p`
      <div part="base" class="menu-label">
        <slot></slot>
      </div>
    `;
  }
};
SlMenuLabel.styles = menu_label_styles_default;
SlMenuLabel = __decorateClass([
  n("sl-menu-label")
], SlMenuLabel);

export {
  SlMenuLabel
};
