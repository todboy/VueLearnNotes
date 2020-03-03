import Vue from 'vue'
import VueRouter from 'vue-router'

const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')
const Home = () => import('views/home/Home')
const Profile = () => import('views/profile/Profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
