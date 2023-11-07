import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login.vue'
import Test from '@/views/test.vue'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/test',
        name: 'test',
        component: Test
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
