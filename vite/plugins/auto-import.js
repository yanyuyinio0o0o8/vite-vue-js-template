// 减少每一个页面都需要引用一些参数 
// 咧入这些常用的
import autoImport from 'unplugin-auto-import/vite'

export default function createAutoImport() {
  return autoImport({
      imports: [
          'vue',
          'vue-router',
        //   'pinia'
      ],
      dts: false
  })
}