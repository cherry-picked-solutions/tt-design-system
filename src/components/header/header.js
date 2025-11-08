import { LitElement, css, html } from "lit";

export class TTHeader extends LitElement {
  static styles = css`
    :host {
      container-type: inline-size;
      container-name: header;
      display: block;
    }

    /* @container (min-width: 768px) { */
    @container (min-width: 500px) {
      .tt-header {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(3, 1fr);
        column-gap: var(--space-md);
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
    this.title = "<Project title>";
    this.primaryNav = [
      { label: "One", href: "javascript:void(0);" },
      { label: "Two", href: "javascript:void(0);" },
      { label: "Three", href: "javascript:void(0);" },
    ];
  }

  render() {
    return html`
      <header class="tt-header">
        <div class="tt-header__start"><slot name="start"></slot></div>
        <div class="tt-header__center"><slot name="center"></slot></div>
        <div class="tt-header__end"><slot name="end"></slot></div>
        <slot></slot>
      </header>
    `;
  }
}

customElements.define("tt-header", TTHeader);
