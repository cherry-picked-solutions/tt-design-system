// We'll have to import the global stylesheet in downstream projects
import "../src/assets/styles/global/index.css";

// Custom elements manifest for
// import { setCustomElementsManifest } from "@storybook/web-components-vite";
// import customElements from "../custom-elements.json";

// setCustomElementsManifest(customElements);

/** @type { import('@storybook/web-components-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    docs: {
      toc: true, // Autogenerate table of contents.
      // Show source code by default.
      canvas: {
        sourceState: "shown",
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
