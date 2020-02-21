<template>
  <div>
    <p>这个是首页</p>

    <!-- 嵌套路由演示 -->
    <router-link to="/home/new">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>

</style>
