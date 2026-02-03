import { html } from "lit";
// import "../components/button/button.js";
import "@components/button/button.js";

export default {
  title: "Pages/Demo",
  component: "tt-component",
  render: (args) => html`<tt-button>Button</tt-button>`,
  args: {},
};

export const Default = {};
