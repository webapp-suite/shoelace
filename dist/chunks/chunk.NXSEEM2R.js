import {
  badge_styles_default
} from "./chunk.VJMRLK2C.js";
import {
  o
} from "./chunk.BX2YCKAV.js";
import {
  e,
  n
} from "./chunk.POKKIWRQ.js";
import {
  p,
  s
} from "./chunk.YWXV2CS2.js";
import {
  __decorateClass
} from "./chunk.JHDFAWWC.js";

// src/components/badge/badge.ts
var SlBadge = class extends s {
  constructor() {
    super(...arguments);
    this.type = "primary";
    this.pill = false;
    this.pulse = false;
  }
  render() {
    return p`
      <span
        part="base"
        class=${o({
      badge: true,
      "badge--primary": this.type === "primary",
      "badge--success": this.type === "success",
      "badge--neutral": this.type === "neutral",
      "badge--warning": this.type === "warning",
      "badge--danger": this.type === "danger",
      "badge--pill": this.pill,
      "badge--pulse": this.pulse
    })}
        role="status"
      >
        <slot></slot>
      </span>
    `;
  }
};
SlBadge.styles = badge_styles_default;
__decorateClass([
  e({ reflect: true })
], SlBadge.prototype, "type", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlBadge.prototype, "pill", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlBadge.prototype, "pulse", 2);
SlBadge = __decorateClass([
  n("sl-badge")
], SlBadge);

export {
  SlBadge
};
