import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      lintOnStart: true,
      cache: false,
      fix: true,
      // 指向 TypeScript 项目的 tsconfig.json 文件
      overrideConfig: {
        parserOptions: {
          project: './tsconfig.json',
        },
      },
    }),
  ],
})
