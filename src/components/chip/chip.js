import { classMap } from "lit/directives/class-map.js";
import { LitElement, html, css } from "lit";

const CHIP_SIZES = ["sm", "md", "lg"];

/**
 * @tag tt-chip
 * @summary A chip component.
 *
 * @attr {string} size - One of: sm | md | lg. Default: `md`.
 *
 * @cssprop [--tt-chip-background-color=var(--color-neutral-lightest)] - The background color.
 * @cssprop [--tt-chip-border-radius=var(--space-md)] - The roundness of the corners.
 * @cssprop [--tt-chip-border=var(--color-neutral-dark)] - The border width, style, and color.
 * @cssprop [--tt-chip-padding-x=var(--space-sm)] - The inner side spacing.
 * @cssprop [--tt-chip-padding-y=var(--space-xxs)] - The inner vertical spacing.
 *
 */
export class TTChip extends LitElement {
  static properties = {
    size: { type: String, reflect: true },
  };

  static styles = css`
    :host {
      --tt-chip-background-color: var(--color-neutral-lightest);
      --tt-chip-border-radius: var(--space-md);
      --tt-chip-border: 1px solid var(--color-neutral-dark);
      --tt-chip-padding-x: var(--space-sm);
      --tt-chip-padding-y: var(--space-xxs);
    }

    .tt-chip {
      background-color: var(--tt-chip-background-color);
      border-radius: var(--tt-chip-border-radius);
      border: var(--tt-chip-border);
      font-size: var(--space-sm);
      padding: var(--tt-chip-padding-y) var(--tt-chip-padding-x);
    }

    .tt-chip--sm {
      --tt-chip-padding-x: var(--space-xs);
      --tt-chip-padding-y: var(--space-xxs);

      font-size: 0.75rem; /* 12px */
    }

    .tt-chip--lg {
      --tt-chip-padding-x: var(--space-sm);
      font-size: var(--font-size-base);
    }
  `;

  constructor() {
    super();
    this.size = "md";
  }

  render() {
    const size = CHIP_SIZES.includes(this.size) ? this.size : "md";
    const classes = classMap({
      [`tt-chip--${size}`]: size !== "md",
    });

    return html` <span class="tt-chip ${classes}"><slot></slot></span> `;
  }
}

customElements.define("tt-chip", TTChip);
