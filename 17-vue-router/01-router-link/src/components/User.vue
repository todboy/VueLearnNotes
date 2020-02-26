<template>
  <div>
    <p>用户模块: {{$route.params.id}}</p>
    <p>{{userId}}</p>
  </div>
</template>

<script>
  export default {
    name: "User",
    data() {
      return {

      }
    },
    computed: {
      userId() {
        return this.$route.params.id
      }
    }
  }
</script>

<style scoped>

</style>
