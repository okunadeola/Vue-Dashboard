import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth.vue'
import Notfound from '../views/Notfound.vue'
import Dashboard from '../views/Dashboard.vue'
import Home from '../views/Dview/Home.vue'
import Products from '../views/Dview/Products.vue'
import Product from '../views/Dview/Product.vue'
import User from '../views/Dview/User.vue'
import Sales from '../views/Dview/Sales.vue'
// import store from '../router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '/dashboard/overview',
        name: 'home',
        component: Home
      },
      {
        path: '/dashboard/products',
        name: 'products',
        component: Products
      },
      {
        path: '/dashboard/sales',
        name: 'sales',
        component: Sales
      },
      {
        path: '/dashboard/user',
        name: 'user',
        component: User
      },
      {
        path: '/dashboard/singleproduct/:id',
        name: 'product',
        component: Product
      },
    ],
    // beforeEnter: (to, from, next) => {
    //   if (store.state.isAuthenticated === false) {
    //     console.log(store.state.isAuthenticated);
    //     next("/Login")
    //   } else {
    //     next()
    //   }
    // }


  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Notfound',
    component: Notfound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
