import { createWebHistory, createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/components/layout'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login.vue')
    },
    {
        path: '/',
        name: 'home',
        component: Layout,
        children: [
            {
                hidden: false,
                path: '/home',
                component: () => import('@/views/home.vue'),
                name: 'homeIndex',
                meta: {
                    title: '业务流程发布管理',
                    icon: '',
                    noCache: true
                }
            }
        ]
    },
    {
        path: '/show',
        name: 'show',
        component: () => import('@/views/show.vue'),
        meta: { title: '测试展示' }
    },
    // {
    //     path: '/about',
    //     name: 'about',
    //     component: () => import('../views/AboutView.vue')
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
