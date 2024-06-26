import { createRouter, createWebHistory,createWebHashHistory, RouteRecordRaw } from 'vue-router';
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';
import Layout from '@/components/layout/index.vue';
// import { usePermissStore } from '../store/permiss';

// const routes:Array<RouteRecordRaw> = [
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home.vue'),
        children: [
            {
                // hidden: false,
                path: '/show',
                name: 'show',
                component: () => import('@/views/show.vue'),
                meta: {
                    title: '测试展示',
                    icon: '',
                        noCache: true
                    }
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login.vue')
    },
    // {
    //     path: '/about',
    //     name: 'about',
    //     component: () => import('../views/AboutView.vue')
    // }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    console.log(to)
    next();
    // NProgress.start();
    // const role = localStorage.getItem('vuems_name');
    // const permiss = usePermissStore();

    // if (!role && to.meta.noAuth !== true) {
    //     next('/login');
    // } else if (typeof to.meta.permiss == 'string' && !permiss.key.includes(to.meta.permiss)) {
    //     // 如果没有权限，则进入403
    //     next('/403');
    // } else {
    //     next();
    // }
});

router.afterEach(() => {
    // NProgress.done();
});

export default router;
