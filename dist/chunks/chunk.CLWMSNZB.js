import {
  tab_panel_styles_default
} from "./chunk.CE2DFEMO.js";
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

// src/components/tab-panel/tab-panel.ts
var id = 0;
var SlTabPanel = class extends s {
  constructor() {
    super(...arguments);
    this.componentId = `tab-panel-${++id}`;
    this.name = "";
    this.active = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.id = this.id || this.componentId;
  }
  render() {
    this.style.display = this.active ? "block" : "none";
    return p`
      <div
        part="base"
        class="tab-panel"
        role="tabpanel"
        aria-selected=${this.active ? "true" : "false"}
        aria-hidden=${this.active ? "false" : "true"}
      >
        <slot></slot>
      </div>
    `;
  }
};
SlTabPanel.styles = tab_panel_styles_default;
__decorateClass([
  e()
], SlTabPanel.prototype, "name", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlTabPanel.prototype, "active", 2);
SlTabPanel = __decorateClass([
  n("sl-tab-panel")
], SlTabPanel);

export {
  SlTabPanel
};
