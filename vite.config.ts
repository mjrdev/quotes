import { fileURLToPath, URL } from 'node:url'
/** @type {import('vite').UserConfig} */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      // @ts-ignore
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    base: '/quotes',
    origin: '/quotes',
    port: 3000
  },
  base: "/quotes",
})
