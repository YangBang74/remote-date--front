import { createRouter, createWebHistory } from 'vue-router'
import { HomePage, AboutPage } from '@/pages'
import DefaultLayout from '@/app/layout/default.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        { path: '', component: HomePage },
        { path: 'about', component: AboutPage },
      ],
    },
  ],
})

export default router
