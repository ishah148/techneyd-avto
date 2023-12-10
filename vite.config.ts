// vite.config.js
import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  plugins: [injectHTML()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/scss/variables" as *;',
      },
    },
  },
});