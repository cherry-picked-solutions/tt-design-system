import { LitElement, html } from "lit";
import styles from "./header.css";

/**
 * @tag tt-header
 * @summary A header component with three columns.
 *
 * @property {number} containerMaxWidth - The header containers max width, optional.
 *
 * @cssprop [--tt-header-background=none] - The header background.
 * @cssprop [--tt-header-padding-x=0] - The header's horizontal padding.
 * @cssprop [--tt-header-padding-y=0] - The header's vertical padding.
 * @cssprop [--tt-header-column-gap=var(--space-md)] - The spacing between columns.
 * @cssprop [--tt-header-border=1px solid var(--color-neutral)] - The bottom border width, style, and color.
 *
 * @slot start - The first column.
 * @slot center - The middle column.
 * @slot end - The last column.
 */
export class TTHeader extends LitElement {
  static properties = {
    containerMaxWidth: {
      type: Number,
      attribute: "container-max-width",
    },
  };

  static styles = [styles];

  constructor() {
    super();
    this.containerMaxWidth = null;
  }

  render() {
    // Set CSS custom property for max-width
    if (this.containerMaxWidth) {
      this.style.setProperty(
        "--container-max-width",
        `${this.containerMaxWidth}px`,
      );
    }

    return html`
      <header class="tt-header">
        <div class="tt-header__inner">
          <div class="tt-header__start"><slot name="start"></slot></div>
          <div class="tt-header__center"><slot name="center"></slot></div>
          <div class="tt-header__end"><slot name="end"></slot></div>
          <slot></slot>
        </div>
      </header>
    `;
  }
}

customElements.define("tt-header", TTHeader);
