import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './mutations.constant'

Vue.use(Vuex)

const moudleA = {
  state: {
    name: "张三"
  },
  getters: {
    fullName(state) {
      return state.name + " xxx"
    },
    fullName2(state, getters) {
      return getters.fullName + "sss"
    },
    // 模块里面有第三个参数root，表示父级元素
    fullName3(state, getters, root) {
      return getters.fullName2 + root.counter
    }
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    asyncUpdateName(context) {
      console.log(context)
      setTimeout(() => {
        context.commit("updateName", "店小二")
      }, 1000)
    }
  }
}

export default new Vuex.Store({
  state: {
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
  },

  // ### 相当与计算属性，包含一个默认参数state
  getters: {
    mulCounter(state) {
      return state.counter * 2
    },
    // 过滤年龄大于20岁的数据
    filterStudent(state) {
      // return state.students.filter(s => {
      //  return s.age > 20
      // })
      return state.students.filter(s => s.age > 20)
    },
    // 可以传入2个参数，通过getters调用自身的计算属性
    filterStudentLength(state, getters) {
      // return state.students.filter(s => s.age > 20).length
      return getters.filterStudent.length
    },
    // 过滤年龄大于等于20岁的数据，传递参数
    paramsStudent(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age >= age)
      // }
      return (age) => {
        return state.students.filter(s => s.age >= age)
      }
    }
  },

  // ### 更新state里面的属性值，不允许包含异步操作，包含一个默认参数state
  mutations: {
    add(state) {
      state.counter++
    },
    sub(state) {
      state.counter--
    },

    // 1 普通方式提交时的处理
    // addCount(state, count) {
    //   state.counter += count
    // },
    // 2 payload方式提交时的处理
    addCount(state, payload) {
      console.log(payload)
      state.counter += payload.count
    },

    addStudent(state, student) {
      state.students.push(student)
    },

    // 1 常量定义方式
    // 2 响应式与非响应式区别
    [types.UPDATEINFO](state) {
      // 响应式
      // state.info.age = 30
      Vue.set(state.info, "add", "USA")
      // Vue.set(state.info, "age")

      // 非响应式
      // state.info['add'] = "USA"
      // delete state.info.age
    },
  },

  // ### 处理异步操作后，在提交mutation更新state的属性值
  // ### 包含一个默认参数context（上下文），context可以理解为store对象
  actions: {
    // 无参
    updateInfoActionWithoutParams(context) {
      setTimeout(() => {
        context.commit("updateInfo")
      }, 1000)
    },

    // 有参
    updateInfoActionWithParams(context, payload) {
      setTimeout(() => {
        context.commit("updateInfo")
        console.log(payload)
      }, 1000)
    },

    // 有参且回调
    // 方式一
    updateInfoActionWithCallback1(context, payload) {
      setTimeout(() => {
        context.commit("updateInfo")
        console.log(payload.message)
        payload.success()
      }, 1000)
    },
    // 方式二
    updateInfoActionWithCallback2(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit("updateInfo")
          console.log(payload)
          resolve("success")
        }, 1000)
      })
    }

  },

  // ### 模块
  modules: {
    a: moudleA
  }
})
