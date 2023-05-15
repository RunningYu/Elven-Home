import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// vite.config.ts
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [vue(), UnoCSS()],
})
