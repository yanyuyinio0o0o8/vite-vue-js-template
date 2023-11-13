import createAutoImport from './auto-import' // 引用插件
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
export default function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins = [vue(), vueJsx(), createAutoImport()];
  // isBuild && vitePlugins.push(...createCompression(viteEnv))
  return vitePlugins;
}