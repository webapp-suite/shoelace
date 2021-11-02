import {
  progress_bar_styles_default
} from "./chunk.6QBJXUO5.js";
import {
  i
} from "./chunk.VDXO5OZR.js";
import {
  l
} from "./chunk.ZXQA2JKR.js";
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

// src/components/progress-bar/progress-bar.ts
var SlProgressBar = class extends s {
  constructor() {
    super(...arguments);
    this.value = 0;
    this.indeterminate = false;
    this.label = "Progress";
  }
  render() {
    return p`
      <div
        part="base"
        class=${o({
      "progress-bar": true,
      "progress-bar--indeterminate": this.indeterminate
    })}
        role="progressbar"
        title=${l(this.title)}
        aria-label=${l(this.label)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${i({ width: this.value + "%" })}>
          ${!this.indeterminate ? p`
                <span part="label" class="progress-bar__label">
                  <slot></slot>
                </span>
              ` : ""}
        </div>
      </div>
    `;
  }
};
SlProgressBar.styles = progress_bar_styles_default;
__decorateClass([
  e({ type: Number, reflect: true })
], SlProgressBar.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlProgressBar.prototype, "indeterminate", 2);
__decorateClass([
  e()
], SlProgressBar.prototype, "label", 2);
SlProgressBar = __decorateClass([
  n("sl-progress-bar")
], SlProgressBar);

export {
  SlProgressBar
};
