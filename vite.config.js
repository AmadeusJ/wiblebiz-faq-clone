import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react', // Emotion의 `css` prop 활성화
    }),
  ],
  publicDir: 'public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 절대 경로 설정
    },
  },
  server: {
    port: 5173,
    host: true,
    open: true,
  },
})
