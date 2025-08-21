import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // สำคัญสำหรับ Vercel
  build: { outDir: 'dist', assetsDir: 'assets', sourcemap: false }
})
