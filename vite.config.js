import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/cutliners/', // Exactly matches GitHub Pages repo https://nishikiken.github.io/cutliners/
  plugins: [
    react(),
    tailwindcss(),
  ],
})
