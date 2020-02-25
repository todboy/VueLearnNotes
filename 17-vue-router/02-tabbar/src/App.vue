<template>
  <div id="app">
    <router-view/>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import TabBar from 'components/MainTabBar'

  export default {
    name: "app",
    components: {
      TabBar
    }
  }
</script>

<style scoped>

</style>
