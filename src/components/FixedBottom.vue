<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o" replace to="/home">
      </van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/search"></van-tabbar-item>
      <van-tabbar-item icon="bulb-o" replace to="/notifications">
      </van-tabbar-item>
      <van-tabbar-item icon="envelop-o" to="/messages"></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      active: "home",
    };
  },
};
</script>

<style>
</style>