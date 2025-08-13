import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // สำหรับ GitHub Pages ถ้า deploy ที่นั่นให้แก้เป็น '/<repository-name>/'
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // ปิด source map สำหรับ production
  }
})
