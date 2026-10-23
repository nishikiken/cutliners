import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Relative base for 100% compatibility with any GitHub Pages directory or domain
  plugins: [
    react(),
    tailwindcss(),
  ],
})
