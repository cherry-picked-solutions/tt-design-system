import { html, nothing } from "lit";
import "./menu";

export default {
  title: "Components/Menu",
  component: "tt-menu",
  render: (args) => html`<tt-menu>Hello world ${args}</tt-menu>`,
};

export const Default = {};
