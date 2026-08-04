import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // para desarrollo local. Antes de publicar en GitHub Pages, cambia esto a "/afi-cafe/"
});
