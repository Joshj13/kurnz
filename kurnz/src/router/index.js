import { createRouter, createWebHistory } from 'vue-router'
import Catalog from '@/views/catalog.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: Catalog
    },
  
  ]
})

export default router
