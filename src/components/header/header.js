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
      container-type: inline-size;
      container-name: header;
      display: block;
    }

    .tt-header__inner {
      max-width: var(--container-max-width);
      margin-inline: auto;
    }

    .tt-header {
      background-color: var(--tt-header-background, none);
      padding: var(--tt-header-padding-y, 0) var(--tt-header-padding-x, 0);
    }

    @container (min-width: 768px) {
      .tt-header__inner {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(3, 1fr);
        column-gap: var(--tt-header-column-gap, var(--space-md));
      }

      .tt-header__center {
        justify-self: center;
      }

      .tt-header__end {
        justify-self: end;
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
