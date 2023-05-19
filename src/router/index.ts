import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '@/pages/Home.vue'

export const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
    ],
})
