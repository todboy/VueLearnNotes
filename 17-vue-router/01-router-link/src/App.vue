<template>
  <div id="app">
    <!-- 1 router link属性配置 -->
    <!--<router-link to="/home" tag="button" replace>Home</router-link>-->
    <!--<router-link to="about" tag="button" replace>About</router-link>-->

    <!--<router-link to="/home" tag="button" replace active-class="active">Home</router-link>-->
    <!--<router-link to="about" tag="button" replace active-class="active">About</router-link>-->

    <!-- 2 路由代码跳转 -->
    <button @click="homeClick">Home</button>
    <button @click="aboutClick">About</button>

    <!-- 3 router动态配置 -->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      homeClick() {
        // 通过代码方式修改路由
        // this.$router.push("/home")
        this.$router.replace("/home")
      },
      aboutClick() {
        // this.$router.push("/about")
        this.$router.replace("/about")
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
