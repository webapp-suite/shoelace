import {
  component_styles_default
} from "./chunk.GGESTEP5.js";
import {
  r
} from "./chunk.YWXV2CS2.js";

// src/components/skeleton/skeleton.styles.ts
var skeleton_styles_default = r`
  ${component_styles_default}

  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: rgb(var(--sl-color-neutral-200));
    --sheen-color: rgb(var(--sl-color-neutral-300));

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;

export {
  skeleton_styles_default
};
