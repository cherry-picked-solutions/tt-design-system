import { html } from "lit";
// import "../components/button/button.js";
import "@components/header/header.js";
import "@components/button/button.js";

export default {
  title: "Pages/Demo",
  component: "tt-component",
  render: (args) => html`
    <tt-header>
      <h1>Logo</h1>
    </tt-header>
    <main>
      <h2>Hello world</h2>
    </main>
  `,
  args: {},
};

export const Default = {};
