export default {
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

}
