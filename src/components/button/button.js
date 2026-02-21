import { classMap } from "lit/directives/class-map.js";
import { LitElement, html } from "lit";
import styles from "./button.css";

/**
 * @tag tt-button
 * @summary A custom button element.
 *
 * @property {string} variant - The visual style variant of the button. Can be "primary" or "secondary".
 * @property {string} size - The size of the button. Can be "small" or "large".
 * @property {'reset' | 'button' | 'submit'} type - The type of the button. Defaults to 'button'.
 * @attr {'reset' | 'button' | 'submit'} type - The type of the button. Defaults to 'button'.
 *
 * @cssprop [--tt-button-background=var(--color-neutral-darkest)] - Background color of the button.
 * @cssprop [--tt-button-background-active=var(--color-neutral-darker)] - Background color of the button on hover/focus.
 * @cssprop [--tt-button-text=var(--color-neutral-lightest)] - Text color of the button.
 * @cssprop [--tt-button-padding-x=var(--space-sm)] - Horizontal padding of the button.
 * @cssprop [--tt-button-padding-y=var(--space-xs)] - Vertical padding of the button.
 * @cssprop [--tt-button-radius=var(--space-xxs)] - Border radius of the button.
 * @cssprop [--tt-button-scale=1.025] - How big the large variant should scale.
 *
 */

export class TTButton extends LitElement {
  static styles = [styles];

  static properties = {
    variant: { type: String, reflect: true },
    size: { type: String, reflect: true },
    type: { type: String, reflect: true },
  };

  // Internal, default, state for the 'type' property.
  _type = "button";

  get type() {
    return this._type;
  }

  set type(value) {
    const validTypes = ["reset", "button", "submit"];
    const oldVal = this._type;
    if (validTypes.includes(value)) {
      this._type = value;
    } else {
      console.warn(
        `Invalid type "${value}" for tt-button. Defaulting to "button".`,
      );
      // Default to "button" if invalid.
      this._type = "button";
    }
    // Request an update to re-render the component.
    this.requestUpdate("type", oldVal);
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <button
        type=${this.type}
        class=${classMap({
          "tt-button--primary": this.variant === "primary",
          "tt-button--secondary": this.variant === "secondary",
          "tt-button--sm": this.size === "small",
          "tt-button--lg": this.size === "large",
        })}
      >
        <slot></slot>
      </button>
    `;
  }
}

customElements.define("tt-button", TTButton);
