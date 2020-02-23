<template>
  <div>
    <p>个人信息查询</p>
    <p>Name：{{$route.query.name}}</p>
    <p>Age：{{$route.query.age}}</p>
  </div>
</template>

<script>
  export default {
    name: "UserInfo"
  }
</script>

<style scoped>

</style>
