import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    assetsInclude: ["/src/assets/document/resume-zhafran.pdf"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/"), // Set root directory as alias
    },
  },
});
