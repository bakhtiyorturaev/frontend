import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/NewsPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutPage.vue')
  },
  {
    path: '/requirments',
    name: 'requirments',
    component: () => import('../views/JournalRequirments.vue')
  },
  {
    path: '/guide',
    name: 'guide',
    component: () => import('../views/AuthorInstruction.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
