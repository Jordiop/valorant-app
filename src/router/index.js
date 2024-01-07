import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Weapons from '../views/Weapons.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/weapons',
      name: 'weapons',
      component: Weapons
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
