import { LitElement, css, html } from "lit";

export class TTHeader extends LitElement {
  static properties = {
    title: { type: String },
    logo: { type: String },
    primaryNav: { type: Array },
  };

  static styles = css``;

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
      <header>
        <div slot="first">${this.title} ${this.logo}</div>
        <div slot="second">
          <nav>
            <ul>
              ${this.primaryNav.map(
                (navLink) =>
                  html`<li><a href=${navLink.href}>${navLink.label}</a></li>`,
              )}
            </ul>
          </nav>
        </div>
        <div slot="third">CTA's</div>
        <slot></slot>
      </header>
    `;
  }
}

customElements.define("tt-header", TTHeader);
