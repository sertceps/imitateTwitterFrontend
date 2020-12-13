<template>
  <div>
    <van-nav-bar
      title="张三"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell-group>
      <van-cell title="用户名" label="自我介绍" />
    </van-cell-group>
    <fixed-bottom></fixed-bottom>
  </div>
</template>

<script>
import FixedBottom from "../components/FixedBottom.vue";
export default {
  components: {
    FixedBottom,
  },
  methods: {
    onClickLeft: function () {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>