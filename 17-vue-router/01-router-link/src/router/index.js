import Vue from 'vue'
import Router from 'vue-router'

// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'

// 路由懒加载方式导入组件
const Home = () => import('@/components/Home')
const About = () => import('@/components/About')
const User = () => import('@/components/User')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/user/:id',
      component: User
    }
  ],
  mode: 'history',
  linkActiveClass: "active"
})
