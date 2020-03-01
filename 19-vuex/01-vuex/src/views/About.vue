<template>
  <div class="about">
    <!-- state使用 -->
    <h2>State：{{$store.state.counter}}</h2>

    <!-- getters使用 -->
    <h2>Getters：{{$store.getters.mulCounter}}</h2>

    <!-- info对象响应式修改数据 -->
    <h2>{{$store.state.info}}</h2>
  </div>
</template>
