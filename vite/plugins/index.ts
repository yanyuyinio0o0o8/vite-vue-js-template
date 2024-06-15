import createAutoImport from './auto-import'; // 引用插件
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';

// export default function createVitePlugins(viteEnv, isBuild = false) {
//   console.log('89890780', path.resolve(__dirname, './'));
//   console.log('89890780', path.resolve(__dirname, './src'));
//   const vitePlugins = [vue(), vueJsx(), createAutoImport()];
//   // isBuild && vitePlugins.push(...createCompression(viteEnv))
//   return vitePlugins;
// }
export default function createVitePlugins() {
  console.log('89890780', path.resolve(__dirname, './'));
  console.log('89890780', path.resolve(__dirname, './src'));
  const vitePlugins = [vue(), vueJsx(), createAutoImport()];
  // isBuild && vitePlugins.push(...createCompression(viteEnv))
  return vitePlugins;
}