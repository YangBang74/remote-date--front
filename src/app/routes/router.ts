import { createRouter, createWebHistory } from 'vue-router'
import { HomePage } from '@/pages'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      children: [{ path: '', component: HomePage }],
    },
  ],
})

export default router