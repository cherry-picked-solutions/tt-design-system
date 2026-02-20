// src/components/snippet/snippet.js
import { LitElement, html } from "lit";
import styles from "./snippet.css";

const LANG_ALIAS = {
  js: "javascript",
  ts: "typescript",
  py: "python",
  sh: "bash",
  rb: "ruby",
  kt: "kotlin",
};

export class TTSnippet extends LitElement {
  static styles = [styles];

  static properties = {
    language: { type: String, reflect: true },
    filename: { type: String, reflect: true },
    copy: { type: Boolean, reflect: true },
    linenumbers: { type: Boolean, reflect: true },
    wrap: { type: Boolean, reflect: true },
    highlightLines: { type: String, attribute: "highlight-lines" },
    code: { type: String },
    _copyStatus: { state: true },
  };

  constructor() {
    super();
    this.language = "";
    this.filename = "";
    this.copy = true;
    this.linenumbers = false; // follow-up feature
    this.wrap = false;
    this.highlightLines = "";
    this.code = "";
    this._copyStatus = "";
    this._highlighted = false;
  }

  firstUpdated() {
    // Capture slot content (MDX/story friendly)
    const slot = this.renderRoot.querySelector("slot");
    if (slot) {
      const assigned = slot.assignedNodes({ flatten: true });
      if (assigned.length) {
        this.code = assigned
          .map((n) => n.textContent)
          .join("")
          .replace(/^\n+|\n+$/g, "");
      }
    }
    // Lazy highlight on first user focus
    this.addEventListener("focusin", () => this._ensureHighlight());
  }

  _mapLanguage(lang) {
    if (!lang) return "";
    return LANG_ALIAS[lang] || lang;
  }

  async _ensureHighlight() {
    if (this._highlighted) return;
    try {
      const PrismModule = await import("prismjs");
      const Prism = PrismModule.default || window.Prism;
      const requested = this._mapLanguage(this.language) || "javascript";
      if (requested && !Prism.languages[requested]) {
        try {
          // dynamic import of language component
          await import(`prismjs/components/prism-${requested}.js`);
        } catch (e) {
          // ignore: some languages have different names or aren't available
        }
      }
      const codeEl = this.renderRoot.querySelector("code");
      if (codeEl) {
        const grammar = Prism.languages[requested] || Prism.languages.plain;
        codeEl.innerHTML = Prism.highlight(this.code, grammar, requested);
        this._highlighted = true;
      }
    } catch (err) {
      // Graceful fallback: keep plain text
    }
  }

  async _onCopy() {
    const text = this.code || this._getTextContent();
    try {
      await navigator.clipboard.writeText(text);
      this._copyStatus = "Copied";
      this.dispatchEvent(new CustomEvent("copy", { detail: { text } }));
      setTimeout(() => (this._copyStatus = ""), 2000);
    } catch {
      // fallback for older browsers
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        this._copyStatus = "Copied";
      } catch {
        this._copyStatus = "Copy failed";
      } finally {
        ta.remove();
        setTimeout(() => (this._copyStatus = ""), 2000);
      }
    }
  }

  _getTextContent() {
    const codeEl = this.renderRoot.querySelector("code");
    return codeEl ? codeEl.textContent : this.code || "";
  }

  _escapeHtml(str) {
    return str
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  renderHeader() {
    if (!this.filename && !this.copy) return null;
    return html`
      <div class="tt-snippet__header" part="header">
        <div class="tt-snippet__meta">${this.filename || this.language}</div>
        ${this.copy
          ? html`
              <div class="tt-snippet__controls">
                <button
                  class="tt-snippet__copy"
                  @click=${this._onCopy}
                  title="Copy code"
                  aria-label="Copy code"
                >
                  Copy
                </button>
                <span class="tt-snippet__copy-status" aria-live="polite"
                  >${this._copyStatus}</span
                >
              </div>
            `
          : null}
      </div>
    `;
  }

  render() {
    const langAttr = this.language ? this._mapLanguage(this.language) : "";
    return html`
      <div
        class="tt-snippet"
        role="region"
        aria-label="${this.filename || this.language || "Code snippet"}"
      >
        ${this.renderHeader()}
        <pre
          class="${this.linenumbers ? "tt-snippet--linenumbers" : ""} ${this
            .wrap
            ? "tt-snippet--wrap"
            : ""}"
          part="pre"
        >
          <code part="code" class="language-${langAttr}" lang="${langAttr}">
            ${this.code ? this._escapeHtml(this.code) : html` <slot></slot> `}
          </code>
        </pre>
      </div>
    `;
  }
}

customElements.define("tt-snippet", TTSnippet);
