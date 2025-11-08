import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: [
    '**/*.exe',
    '**/*.rpm',
    '**/*.deb',
    '**/*.gz',
    '**/*.zip'
  ],

  plugins: [
    tailwindcss(),
    react()
  ],

  preview: {
    host: true,
    port: 5796
  }
})