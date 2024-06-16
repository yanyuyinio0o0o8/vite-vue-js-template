import { defineConfig } from 'vite';
// import path from 'path';
import createVitePlugins from './vite/plugins';

import { fileURLToPath, URL } from 'url';

// import vue from '@vitejs/plugin-vue';
// import vueJsx from '@vitejs/plugin-vue-jsx';
// import VueSetupExtend from 'vite-plugin-vue-setup-extend';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: createVitePlugins(),
  resolve: {
    // https://cn.vitejs.dev/config/#resolve-alias
    alias: {
      // 设置路径
      // '~': path.resolve(__dirname, './'),
      // 设置别名
      // '@': path.resolve(__dirname, './src'),
      '~': fileURLToPath(new URL('./', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    // https://cn.vitejs.dev/config/#resolve-extensions
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  server: {
    port: 8089,
    host: true,
    open: false,
    proxy: {}
  },
	build: {
		sourcemap: true
	}
})
