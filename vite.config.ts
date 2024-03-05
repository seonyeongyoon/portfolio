import { resolve } from 'node:path';
import { env } from 'node:process';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isDev = env.NODE_ENV === 'development';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName: isDev
        ? '[name]_[local]__[hash:base64:5]'
        : '[hash:base64:4]',
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  // 빌드 시, 청크 파일 생성 매뉴얼 구성
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          reactRouter: ['react-router-dom'],
          animations: ['framer-motion'],
          extra: ['zustand', '@tanstack/react-query'],
        },
      },
    },
  },
})
