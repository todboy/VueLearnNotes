import axios from 'axios'

// 5 拦截器使用
export function request(config) {
  // 5.1 创建axios实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  })

  // 5.2 axios的请求拦截器
  instance.interceptors.request.use(config => {
    console.log(config)
    // 比如config中的一些信息不符合服务器的要求
    // 比如每次发送网络请求是，都希望在界面中显示一个请求的图标（比如loading）
    // 比如网络请求前必须携带一些token信息
    return config
  }, err => {
    console.log(err)
    return err
  })

  // 5.3 axios的响应拦截器
  instance.interceptors.response.use(res => {
    console.log(res)
    return res.data
  }, err => {
    console.log(err)
    return err
  })

  // 5.4 发送网络请求
  return instance(config)
}


// 4 调用方式
// request({
//   url: "/xxx/xxx"
// }).then(res => {
//   console.log("xxxx")
// }).then(err => {
//   console.log("eeee")
// })
// 4 实现方式
export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  })

  // 发送网络请求
  return instance(config)
}


// 3 调用方式
// request({
//   url: "/xxx/xxx"
// }).then(res => {
//   console.log("xxxx")
// }).then(err => {
//   console.log("eeee")
// })
// 3 实现方式
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: "http://123.207.32.32:8000",
//       timeout: 5000
//     })
//
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }


// 2 调用方式
// request({
//   baseConfig: {url: "/xxx/xxx"},
//   success: function(res) {
//
//   },
//   fail: function(err){
//
//   }
// })
// 2 实现方式
// export function request(config) {
//   const instance = axios.create({
//     baseURL: "http://123.207.32.32:8000",
//     timeout: 5000
//   })
//
//   instance(config.baseConfig)
//     .then(res => {
//       config.success(res)
//     })
//     .catch(err => {
//       config.fail(err)
//     })
// }


// 1 调用方式
// request({
//   url: "/xxx/xxx"
// }, res => {
//
// }, err => {
//
// })
// 1 实现方式
// export function request(config, success, fail) {
//   const instance = axios.create({
//     baseURL: "http://123.207.32.32:8000",
//     timeout: 5000
//   })
//
//   instance(config)
//     .then(res => {
//       success(res)
//     })
//     .catch(err => {
//       fail(err)
//     })
// }
