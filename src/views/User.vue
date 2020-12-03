<template>
  <div>
    <van-nav-bar
      title="张三"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <info-exhibition></info-exhibition>
    <router-view></router-view>
    <fixed-bottom></fixed-bottom>
  </div>
</template>

<script>
import FixedBottom from "../components/FixedBottom.vue";
import InfoExhibition from "../components/InfoExhibition.vue";
import TweetsRender from "../components/TweetsRender.vue";
export default {
  components: {
    FixedBottom,
    InfoExhibition,
  },
  methods: {
    onClickLeft: function () {
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
</style>