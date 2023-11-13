import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import createVitePlugins from './vite/plugins'

// https://vitejs.dev/config/
export default defineConfig({
  configureWebpack: {
    devtool: 'source-map'
  },
  plugins: createVitePlugins(),
  resolve: {
    // https://cn.vitejs.dev/config/#resolve-alias
    alias: {
      // 设置路径
      '~': path.resolve(__dirname, './'),
      // 设置别名
      '@': path.resolve(__dirname, './src'),
    },
    // https://cn.vitejs.dev/config/#resolve-extensions
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  server: {
    port: 8088,
    host: true,
    open: false,
    proxy: {}
  },
})
