import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import AdminView from '../views/AdminView.vue'
import ProductsView from '../views/ProductsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/views/AboutView.vue',
    name: 'about',
    component: AboutView
  },
  {
    path: '/views/ContactView.vue',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/views/AdminView.vue',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/views/ProductsView.vue',
    name: 'products',
    component: ProductsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
