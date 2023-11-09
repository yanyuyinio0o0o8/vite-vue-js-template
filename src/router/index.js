import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login.vue')
    },
    {
        path: '/show',
        name: 'show',
        component: () => import('@/views/show.vue')
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
