import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/chart': 'https://api.deezer.com'
    }
  },
  plugins: [react()],
})
