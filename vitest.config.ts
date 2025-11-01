import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@array": path.resolve(__dirname, "./src/array/index.js"),
      "@function": path.resolve(__dirname, "./src/function/index.js"),
      "@predicate": path.resolve(__dirname, "./src/predicate/index.ts"),
    },
  },
});