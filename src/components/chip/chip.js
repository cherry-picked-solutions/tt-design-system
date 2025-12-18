import { classMap } from "lit/directives/class-map.js";
import { LitElement, html, css } from "lit";

const CHIP_SIZES = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"];

/**
 * @tag tt-chip
 * @summary A chip component.
 *
 * @attr {string} size - One of: xxs | xs | sm | md | lg | xl | xxl. Default: `md`.
 *
 * @cssprop [--tt-example=var(--token)]
 *
 */

export class TTChip extends LitElement {
  static properties = {
    variant: { type: String, reflect: true },
    size: { type: String, reflect: true },
  };

  static styles = css`
    :host {
      --tt-chip-background-color: var(--color-neutral);
      --tt-chip-border-radius: var(--space-md);
      --tt-chip-border: 1px solid var(--color-neutral-dark);
      --tt-chip-padding-x: var(--space-sm);
      --tt-chip-padding-y: var(--space-xxs);
    }

    .tt-chip {
      background-color: var(--tt-chip-background-color);
      border-radius: var(--tt-chip-border-radius);
      border: var(--tt-chip-border);
      padding: var(--tt-chip-padding-y) var(--tt-chip-padding-x);
    }

    .tt-chip--lg {
      border-radius: 1.5em;
      font-size: 1.1rem;
      padding: 0.5em 1em;
    }
  `;

  constructor() {
    super();
    this.size = "md";
  }

  render() {
    const size = CHIP_SIZES.includes(this.size) ? this.size : "md";
    const classes = classMap({
      "tt-chip--primary": this.variant === "primary",
      "tt-chip--secondary": this.variant === "secondary",
      [`tt-chip--${size}`]: size !== "md",
    });

    return html` <span class="tt-chip ${classes}"><slot></slot></span> `;
  }
}

customElements.define("tt-chip", TTChip);
