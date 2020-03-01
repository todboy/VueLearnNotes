export default {
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
}
