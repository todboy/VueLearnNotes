<template>
  <div>
    <TabBar>
      <TabBarItem path="/index">
        <img slot="icon" src="../assets/imgs/index.svg" />
        <img slot="icon-active" src="../assets/imgs/index-active.svg" />
        <span slot="title">首页</span>
      </TabBarItem>
      <TabBarItem path="/data" activeColor="red">
        <img slot="icon" src="../assets/imgs/data.svg" />
        <img slot="icon-active" src="../assets/imgs/data-active.svg" />
        <span slot="title">数据</span>
      </TabBarItem>
      <TabBarItem path="/position">
        <img slot="icon" src="../assets/imgs/position.svg" />
        <img slot="icon-active" src="../assets/imgs/position-active.svg" />
        <span slot="title">定位</span>
      </TabBarItem>
      <TabBarItem path="/scan">
        <img slot="icon" src="../assets/imgs/scan.svg" />
        <img slot="icon-active" src="../assets/imgs/scan-active.svg" />
        <span slot="title">扫描</span>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
  import TabBar from 'components/tabbar/TabBar'
  import TabBarItem from 'components/tabbar/TabBarItem'

  export default {
    name: "Home",
    components: {
      TabBar, TabBarItem
    }
  }
</script>

<style scoped>

</style>
