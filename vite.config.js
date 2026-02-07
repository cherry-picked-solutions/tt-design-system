import { defineConfig } from "vite";
import path from "node:path";
// import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve("src/components"),
    },
  },
});
