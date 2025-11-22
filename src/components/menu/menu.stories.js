import { html, nothing } from "lit";
import "./menu";

export default {
  title: "Components/Menu",
  component: "tt-menu",
  render: (args) => html`<tt-header>Hello world ${args}</tt-header>`,
};

export const Default = {};
