import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/journal/news',
    name: 'journal_news',
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
  {
    path: '/honorary/foreign/editorial/members',
    name: 'honorary_foreign_editorial_members',
    component: () => import('../views/editorial/HonoraryForeignEditorialMembers.vue')
  },
  {
    path: '/make/document',
    name: 'make_document',
    component: () => import('../views/documents/MakeDocuments.vue')
  },
  {
    path: '/simple/document',
    name: 'simple_document',
    component: () => import('../views/documents/SimpleDocuments.vue')
  },
  {
    path: '/copyright/document',
    name: 'copyright_document',
    component: () => import('../views/documents/CopyrightDoc.vue')
  },
  {
    path: '/conference',
    name: 'conference',
    component: () => import('../views/conference/ConferenceView.vue')
  },
  {
    path: '/ilmiy/schools',
    name: 'ilmiy_schools',
    component: () => import('../views/ilmiy/IlmiyMaktablarim.vue')
  },
  {
    path: '/by/magazine/:id',
    name: 'by_magazine',
    component: () => import('../views/journal/JournalByMagazine.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
