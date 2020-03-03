import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { request } from "./network/request";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 1默认get请求
// axios({
//   url: "http://123.207.32.32:8000/home/multidata"
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url: "http://123.207.32.32:8000/home/multidata",
//   method: 'get'
// }).then(res => {
//   console.log(res)
// })

// 2传递参数
// axios({
//   url: "http://123.207.32.32:8000/home/data",
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })

// 3发送并发请求
// axios.all([axios({
//   url: "http://123.207.32.32:8000/home/multidata"
// }), axios({
//   url: "http://123.207.32.32:8000/home/data",
//   params: {
//     type: 'pop',
//     page: 1
//   }
// })]).then(axios.spread((result1, result2) => {
//   console.log(result1)
//   console.log(result2)
// }))

// 4 使用全局的axios及对应的配置进行网络请求
// axios.defaults.baseURL = "http://123.207.32.32:8000"
// axios.defaults.timeout = 5000
//
// axios.all([axios({
//   url: "/home/multidata"
// }), axios({
//   url: "/home/data",
//   params: {
//     type: 'pop',
//     page: 1
//   }
// })]).then(axios.spread((result1, result2) => {
//   console.log(result1)
//   console.log(result2)
// }))

// 5 创建对应的axios实例
// const instance = axios.create({
//   baseURL: "http://123.207.32.32:8000",
//   timeout: 5000
// })
//
// instance({
//   url: "/home/multidata"
// }).then(res => {
//   console.log(res)
// })

// 6 axios模块封装
// request({
//   url: "/xxx/xxx"
// }, res => {
//
// }, err => {
//
// })
