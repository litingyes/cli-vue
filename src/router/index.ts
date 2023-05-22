import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '@/components/Home.vue'
import Nav from '@/components/Nav.vue'
import Version from '@/components/Version.vue'
import Eslint from '@/components/Eslint.vue'

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
