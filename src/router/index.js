import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'MainAdmin',
    component: () => import(/* webpackChunkName: "about" */ '../views/MainAdmin.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue')
  },
  {
    path: '/product/:id',
    name: 'Product',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import(/* webpackChunkName: "about" */ '../views/Categories.vue')
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import(/* webpackChunkName: "about" */ '../views/Orders.vue')
  },
  {
    path: '/pages',
    name: 'Pages',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pages.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "about" */ '../views/Settings.vue')
  },
  {
    path: '/users',
    name: 'MainAdmin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Users.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
