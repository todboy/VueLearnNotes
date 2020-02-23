import Vue from 'vue'
import Router from 'vue-router'

// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'

// 路由懒加载方式导入组件
const Home = () => import('@/components/Home')
const HomeNew = () => import("@/components/HomeNews")
const HomeMessage = () => import("@/components/HomeMessage")

const About = () => import('@/components/About')
const User = () => import('@/components/User')
const UserInfo = () => import('@/components/UserInfo')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      // 子路由，演示嵌套路由使用
      children: [
        {
          path: "",
          redirect: "new"
        },
        {
          path: "new",
          component: HomeNew
        },
        {
          path: "message",
          component: HomeMessage
        }
      ]
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/user/:id',
      component: User
    },
    {
      path: '/userInfo',
      component: UserInfo
    }
  ],
  mode: 'history',
  linkActiveClass: "active"
})
