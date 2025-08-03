import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // or your IP directly like "192.168.1.5"
    port: 5173,       // or any other port you're using
  },
})
