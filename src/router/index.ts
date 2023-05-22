import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '@/pages/Home.vue'
import Nav from '@/pages/Nav.vue'
import Version from '@/pages/Version.vue'
import Eslint from '@/pages/Eslint.vue'

export const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav,
    },
    {
      path: '/version',
      name: 'Version',
      component: Version,
    },
    {
      path: '/eslint',
      name: 'Eslint',
      component: Eslint,
    },
  ],
})
