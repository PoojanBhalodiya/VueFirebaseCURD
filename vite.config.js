import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "prompt",
      base: "/",
      srcDir: "src",
      strategies: "generateSW",
      manifest: "./dist/manifest.webmanifest",
    }),
    vue(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    port: 8082,
  },
});
