import {
  component_styles_default
} from "./chunk.GGESTEP5.js";
import {
  r
} from "./chunk.YWXV2CS2.js";

// src/components/animated-image/animated-image.styles.ts
var animated_image_styles_default = r`
  ${component_styles_default}

  :host {
    --control-box-size: 2.5rem;
    --icon-size: calc(var(--control-box-size) * 0.625);
    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: none;
    background-color: rgb(var(--sl-color-neutral-1000) / 50%);
    border-radius: var(--sl-border-radius-circle);
    color: rgb(var(--sl-color-neutral-0));
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
    transform: scale(1);
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }
`;

export {
  animated_image_styles_default
};
