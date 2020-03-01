export default {
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
