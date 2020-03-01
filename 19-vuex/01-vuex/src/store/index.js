import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

const state = {
  counter: 100,
  students: [
    {id: 1, name: "Tom", age: 10},
    {id: 2, name: "lili", age: 20},
    {id: 3, name: "Jack", age: 16},
    {id: 4, name: "Andy", age: 35},
    {id: 5, name: "Double", age: 42}
  ],
  info: {
    name: "Alan",
    age: 25,
    work: "IT"
  }
}

export default new Vuex.Store({
  state,
  // ### 相当与计算属性，包含一个默认参数state
  getters,
  // ### 更新state里面的属性值，不允许包含异步操作，包含一个默认参数state
  mutations,
  // ### 处理异步操作后，在提交mutation更新state的属性值
  // ### 包含一个默认参数context（上下文），context可以理解为store对象
  actions,
  // ### 模块
  modules: {
    a: moduleA
  }
})
