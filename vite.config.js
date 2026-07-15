import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    ViteImageOptimizer({
      jpg: { quality: 78 },
      jpeg: { quality: 78 },
      png: { quality: 80 },
      webp: { quality: 78 },
    }),
  ],
  server: {
    proxy: {
      "/ghl": {
        target: "https://services.leadconnectorhq.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ghl/, ""),
      },
    },
  },
});
