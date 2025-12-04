import { LitElement, css, html } from "lit";

/**
 * @tag tt-header
 * @summary A header component with three columns.
 *
 * @property {number} containerMaxWidth - The header containers max width, optional.
 *
 * @cssProp --tt-header-background - The header background.
 * @cssProp --tt-header-padding-x - The header's horizontal padding.
 * @cssProp --tt-header-padding-y - The header's vertical padding.
 * @cssProp --tt-header-column-gap - The spacing between columns.
 * @cssProp --tt-header-border - The bottom border width, style, and color.
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

  static styles = css`
    :host {
      --tt-header-background: none;
      --tt-header-padding-x: 0;
      --tt-header-padding-y: 0;
      --tt-header-column-gap: var(--space-md);
      --tt-header-border: 1px solid var(--color-neutral);

      border-bottom: var(--tt-header-border);
      container-type: inline-size;
      container-name: header;
      display: block;
    }

    .tt-header__inner {
      display: grid;
      max-width: var(--container-max-width);
      margin-inline: auto;
      gap: var(--tt-header-column-gap);
    }

    .tt-header {
      background-color: var(--tt-header-background);
      padding: var(--tt-header-padding-y) var(--tt-header-padding-x);
    }

    @container (min-width: 768px) {
      .tt-header__inner {
        align-items: center;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-areas: "start center end"; // @TODO: Flip this for RTL.
        column-gap: var(--tt-header-column-gap);
      }

      .tt-header__center {
        justify-self: center;
        grid-area: center;
      }

      .tt-header__end {
        justify-self: end;
        grid-area: end;
      }
    }
  `;

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
