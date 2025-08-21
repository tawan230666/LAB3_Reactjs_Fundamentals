import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',   // ✅ ต้องเป็น '/' สำหรับ Netlify
})
