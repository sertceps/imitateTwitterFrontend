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
    <!-- 固定 发布按钮 -->
    <van-button
      block
      class="float-button"
      round
      type="info"
      to="/compose/tweet"
    >
      <van-icon name="plus" size="35" />
    </van-button>
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

<style scoped>
.float-button {
  position: fixed;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  bottom: 80px;
  right: 20px;
  box-shadow: rgba(101, 119, 134, 0.2) 0px 0px 8px,
    rgba(101, 119, 134, 0.25) 0px 1px 3px 1px;
}
</style>