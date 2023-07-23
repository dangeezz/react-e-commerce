import { URL, fileURLToPath } from "node:url";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svg from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svg(), react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
