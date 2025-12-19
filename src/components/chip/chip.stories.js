import { html, nothing } from "lit";
import "./chip";

export default {
  title: "Components/Chip",
  component: "tt-chip",
  render: (args) => html`
    <tt-chip variant=${args.variant || nothing} size=${args.size || nothing}>
      ${args.label}
    </tt-chip>
  `,
  args: {
    label: "Chip",
    variant: "",
    size: "",
  },
};

export const Default = {};

export const Small = {
  args: {
    size: "sm",
  },
};

export const Large = {
  args: {
    size: "lg",
  },
};
