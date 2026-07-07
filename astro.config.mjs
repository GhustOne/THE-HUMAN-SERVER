// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from "node:url";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({ 
  integrations: [sitemap()],
    site: 'https://thehumanserver.com',
    vite: {
    resolve: {
      alias: {
        "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
        "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
        "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
      },
    },
  },
});