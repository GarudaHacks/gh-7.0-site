import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    copyPublicDir: true,
  },
  publicDir: 'public',
  server: {
    port: 3000,
    open: true,
  },
})
