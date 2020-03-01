import * as types from './mutations.constant'
import Vue from "vue";

export default {
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
}
