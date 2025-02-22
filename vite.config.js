import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import svgr from 'vite-plugin-svgr';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react', // Emotion의 `css` prop 활성화
    }),
    svgr({
      include: '**/*.svg',
      exportAsDefault: true, // React 컴포넌트로 불러오도록 설정
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
