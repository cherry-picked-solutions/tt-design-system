import { html, nothing } from "lit";
import "./button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Example/Button",
  tags: ["autodocs"],
  component: "tt-button",
  render: (args) =>
    html` <tt-button
      variant=${args.variant || nothing}
      size=${args.size || nothing}
      type=${args.type || nothing}
    >
      ${args.label}
    </tt-button>`,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
  args: {
    label: "Button",
    variant: "",
    type: "",
    size: "",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
  },
};

export const Large = {
  args: {
    size: "large",
  },
};

export const Small = {
  args: {
    size: "small",
  },
};
