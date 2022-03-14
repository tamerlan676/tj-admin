import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Главная страница'
    }
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
    path: '/goods',
    name: 'Goods',
    component: () => import(/* webpackChunkName: "about" */ '../views/Goods.vue'),
    meta: {
      title: 'Товары'
    }
  },
  {
    path: '/good/:id/:page',
    name: 'GoodItem',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/GoodItem.vue'),
    meta: {
      title: 'Детали товара'
    }
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import(/* webpackChunkName: "about" */ '../views/Categories.vue'),
    meta: {
      title: 'Категории'
    }
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import(/* webpackChunkName: "about" */ '../views/Orders.vue'),
    meta: {
      title: 'Заказы'
    }
  },
  {
    path: '/order/:id',
    name: 'OrderDetails',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderDetails.vue'),
    meta: {
      title: 'Детали заказа'
    }
  },
  {
    path: '/order',
    name: 'OrderEmpty',
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderEmpty.vue'),
    meta: {
      title: 'Создание заказа'
    }
  },
  {
    path: '/pages',
    name: 'Pages',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pages.vue'),
    meta: {
      title: 'Страницы'
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "about" */ '../views/Settings.vue'),
    meta: {
      title: 'Настройки'
    }
  },
  {
    path: '/users',
    name: 'MainAdmin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Users.vue'),
    meta: {
      title: 'Пользователи'
    }
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
