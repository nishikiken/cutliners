import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Ensures relative asset paths so GitHub Pages at /cutliners/ works without 404s
  plugins: [
    react(),
    tailwindcss(),
  ],
})
