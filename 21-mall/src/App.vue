<template>
  <div id="app">
    <router-view/>
    <MainTabBar/>
  </div>
</template>

<script>
  import MainTabBar from 'content/mainTabbar/MainTabBar'

  export default {
    name: "app",
    components: {
      MainTabBar
    }
  }
</script>

<style scoped>
  @import "./assets/css/base.css";

</style>
