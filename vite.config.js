import { defineConfig } from "vite";
import path from "node:path";
import litCss from "vite-plugin-lit-css";

export default defineConfig({
  plugins: [
    litCss({
      exclude: "./src/assets/styles/global/index.css",
    }),
  ],
  resolve: {
    alias: {
      "@components": path.resolve("src/components"),
    },
  },
});
