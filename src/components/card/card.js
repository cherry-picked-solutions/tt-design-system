import { LitElement, html, css } from "lit";

/**
 * @tag tt-card
 * @summary A card component.
 *
 * @cssprop [--tt-example=var(--token)] - A brief description.
 *
 */

export class TTCard extends LitElement {
  static properties = {};

  static styles = css`
    :host {
      --tt-card-background: none;
      --tt-card-padding-x: var(--space-sm);
      --tt-card-padding-y: var(--space-sm);
      --tt-card-border: 1px solid var(--color-neutral);
      --tt-card-border-radius: var(--space-xxs);
    }

    .tt-card {
      border: var(--tt-card-border);
      border-radius: var(--tt-card-border-radius);
    }

    .tt-card * {
      margin: 0;
    }

    .tt-card ::slotted(*) {
      padding: var(--tt-card-padding-y) var(--tt-card-padding-x);
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <article class="tt-card">
        <slot name="header" class="tt-card__header"></slot>
        <slot name="media" class="tt-card__media"></slot>
        <slot name="body" class="tt-card__body"></slot>
        <slot></slot>
        <footer class="tt-card__footer"><slot name="footer"></slot></footer>
      </article>
    `;
  }
}

customElements.define("tt-card", TTCard);
