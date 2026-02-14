import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Netlify & local: '/'. GitHub Pages: set VITE_BASE_PATH='/valentine-sp/' in workflow
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
})
