import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from 'views/index/Index'
import Data from 'views/data/Data'
import Position from 'views/position/Position'
import Scan from 'views/scan/Scan'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/data',
    component: Data
  },
  {
    path: '/position',
    component: Position
  },
  {
    path: '/scan',
    component: Scan
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
