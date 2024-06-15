import { createApp } from 'vue';
import '@/assets/styles/index.scss';
import './mock' // 引入mock数据
import App from './App.vue';
// import Router from './router';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// import locale from 'element-plus/lib/locale/lang/zh-cn'

const app = createApp(App);
// app.use(Router);
app.use(ElementPlus);
// 使用element-plus 并且设置全局的大小
// app.use(ElementPlus, {
//     locale: locale,
//     // 支持 large、default、small
//     size: Cookies.get('size') || 'default'
// })
app.use(router);
app.mount('#app');
