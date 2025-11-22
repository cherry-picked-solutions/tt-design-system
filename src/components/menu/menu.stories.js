import { html, nothing } from "lit";
import "./menu";
import "../menu-item/menu-item";

export default {
  title: "Components/Menu",
  component: "tt-menu",
  render: (args) =>
    html`<tt-menu>
      <tt-menu-item href="javascript:void(0)">Menu item 1</tt-menu-item>
      <tt-menu-item href="javascript:void(0)">Menu item 2</tt-menu-item>
      <tt-menu-item href="javascript:void(0)">Menu item 3</tt-menu-item>
      <tt-menu-item href="javascript:void(0)">Menu item 4</tt-menu-item>
      <tt-menu-item href="javascript:void(0)">Menu item 5</tt-menu-item>
    </tt-menu>`,
};

export const Default = {};
