<template>
  <div id="app">
    <!-- 1 router link属性配置 -->
    <!--<router-link to="/home" tag="button" replace>Home</router-link>-->
    <!--<router-link to="/about" tag="button" replace>About</router-link>-->

    <!--<router-link to="/home" tag="button" replace active-class="active">Home</router-link>-->
    <!--<router-link to="/about" tag="button" replace active-class="active">About</router-link>-->

    <!-- 2 路由代码跳转 -->
    <!--<button @click="homeClick">Home</button>-->
    <!--<button @click="aboutClick">About</button>-->

    <!-- 3 router动态配置 -->
    <router-link to="/home"  >Home</router-link>
    <router-link to="/about" >About</router-link>
    <router-link to="/user/test" >User</router-link>

    <!--
      4 router参数传递
      (1) params: path 路径上面传入参数
      (2) query:  query关键字传递参数
     -->
    <!--<router-link :to="/user/ + userId" >User</router-link>-->
    <!--<router-link :to="{path: '/userInfo', query:{name: 'Jack', age: 25}}">UserInfo</router-link>-->
    <button @click="userClick">User</button>
    <button @click="userInfoClick">UserInfo</button>

    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: "xxxxx"
      }
    },
    methods: {
      homeClick() {
        // 通过代码方式修改路由
        // this.$router.push("/home")
        this.$router.replace("/home")
      },
      aboutClick() {
        // this.$router.push("/about")
        this.$router.replace("/about")
      },
      userClick() {
        this.$router.push("/user/"+this.userId)
      },
      userInfoClick() {
        this.$router.push({
          path: '/userInfo',
          query: {
            name: 'Lack',
            age: 30
          }
        })
      }
    }
  }
</script>

<style scoped>
  .router-link-active {
    color: red
  }
  .active {
    color: crimson;
  }
</style>
