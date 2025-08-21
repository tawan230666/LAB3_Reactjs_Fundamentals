import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // สำหรับ Vercel/Netlify/Firebase ต้องเป็น '/'
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})
