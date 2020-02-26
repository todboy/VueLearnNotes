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
      // 元数据（描述数据的数据）
      meta: {
        title: "首页"
      },
      // 子路由，演示嵌套路由使用
      children: [
        // {
        //   path: "",
        //   redirect: "new"
        // },
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
      component: About,
      meta: {
        title: "关于"
      }
    },
    {
      path: '/user/:id',
      component: User,
      meta: {
        title: '用户'
      }
    },
    {
      path: '/userInfo',
      component: UserInfo,
      meta: {
        title: '档案'
      }
    }
  ],
  mode: 'history',
  linkActiveClass: "active"
})

