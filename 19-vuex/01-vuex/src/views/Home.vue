<template>
  <div class="home">
    <!-- state使用 -->
    <h2>{{$store.state.counter}}</h2>

    <!-- getters使用 -->
    <h2>{{$store.getters.mulCounter}}</h2>
    <h2>数组：{{$store.getters.filterStudent}}</h2>
    <h2>Length: {{$store.getters.filterStudentLength}}</h2>
    <h2>Params: {{$store.getters.paramsStudent(20)}}</h2>

    <!-- mutations使用 -->
    <button @click="add">Add</button>
    <button @click="sub">Sub</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">Add Student</button>

    <!-- actions使用 -->
    <!-- info对象响应式修改数据 -->
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <!-- modules使用 -->
    <h2>{{$store.state.a.name}}</h2>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="updateName">修改名称</button>
    <button @click="asyncUpdateName">异步修改名称</button>
  </div>
</template>

<script>
  import * as types from '../store/mutations.constant'

export default {
  name: 'Home',
  methods: {
    add() {
      this.$store.commit("add")
    },
    sub() {
      this.$store.commit("sub")
    },
    addCount(count) {
      // 1 普通方式提交
      // this.$store.commit("addCount", count)

      // 2 payload方式提交
      this.$store.commit({
        type: "addCount",
        count
      })
    },
    addStudent() {
      const student = {id: 6, name: "Tod", age: 29}
      this.$store.commit("addStudent", student)
    },
    updateInfo() {
      // 使用常量提交
      // this.$store.commit(types.UPDATEINFO)

      // 如果是异步操作，须使用dispatch提交到action进行处理；而commit是同步操作，提交到mutation
      // this.$store.dispatch("updateInfoActionWithoutParams")

      // 参数形式
      // this.$store.dispatch("updateInfoActionWithParams", "我是payload===xxxx")

      // 有参且回调
      // 方式一
      // this.$store.dispatch("updateInfoActionWithCallback1", {
      //   message: "我是payload===xxxx",
      //   success: () => {
      //     console.log("回调完成")
      //   }
      // })
      // 方式二
      this.$store.dispatch("updateInfoActionWithCallback2", "我是payload===xxxx")
        .then(res => {
          console.log("回调成功：", res)
        })
    },
    updateName() {
      this.$store.commit("updateName", "李氏")
    },
    asyncUpdateName() {
      this.$store.dispatch("asyncUpdateName")
    }
  }
}
</script>
