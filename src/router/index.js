import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/journal/JournalNews.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/journal/JournalAbout.vue')
  },
  {
    path: '/requirments',
    name: 'requirments',
    component: () => import('../views/journal/JournalRequirments.vue')
  },
  {
    path: '/archive',
    name: 'archive',
    component: () => import('../views/journal/JournalArchive.vue')
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: () => import('../views/journal/JournalStatistics.vue')
  },
  {
    path: '/guide',
    name: 'guide',
    component: () => import('../views/author/AuthorGuide.vue')
  },
  {
    path: '/staff',
    name: 'staff',
    component: () => import('../views/editorial/EditorialStaff.vue')
  },
  {
    path: '/staff/foreign',
    name: 'staff_foreign',
    component: () => import('../views/editorial/ForeignStaff.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
