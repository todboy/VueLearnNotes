import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 前置守卫(或者叫前置钩子)（guard）
// 根据路由设置标题
router.beforeEach((to, from, next) => {
  // 路由发生改变修改页面的title
  document.title = to.matched[0].meta.title
  next();
})

// 后置钩子(hook)
router.afterEach((to, from) => {
  // console.log("-----end-----")
})
