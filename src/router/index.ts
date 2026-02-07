import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Checkout from '../views/Checkout.vue'

const routes = [
  { path: '/', component: ProductList },
  { path: '/products/:id', component: ProductDetail },
  { path: '/checkout', component: Checkout }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
