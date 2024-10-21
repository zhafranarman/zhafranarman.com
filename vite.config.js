import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    assetsInclude: [
      "**/*.pdf",
      "**/*.md", // Include markdown files as assets
    ],
  },
  resolve: {
    alias: {},
  },
});
