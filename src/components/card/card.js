import { LitElement, html } from "lit";
import styles from "./card.css";

/**
 * @tag tt-card
 * @summary A card component.
 *
 * @cssprop [--tt-card-background=none] - The background color.
 * @cssprop [--tt-card-padding-x=var(--space-sm)] - The inside side spacing.
 * @cssprop [--tt-card-padding-y=var(--space-sm)] - The inside vertical spacing.
 * @cssprop [--tt-card-border-width=1px] - The width of the border.
 * @cssprop [--tt-card-border=var(--tt-card-border-width) solid var(--color-neutral)] - The border width, style, and color.
 * @cssprop [--tt-card-border-radius=var(--space-xxs)] - The roundness of the corners.
 *
 */

export class TTCard extends LitElement {
  static styles = [styles];

  constructor() {
    super();
  }

  render() {
    return html`
      <article class="tt-card">
        <slot name="header" class="tt-card__header"></slot>
        <slot name="media" class="tt-card__media"></slot>
        <slot class="tt-card__body"></slot>
        <footer class="tt-card__footer"><slot name="footer"></slot></footer>
      </article>
    `;
  }
}

customElements.define("tt-card", TTCard);
