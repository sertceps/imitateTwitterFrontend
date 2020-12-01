<template>
  <!-- https://vant-contrib.gitee.io/vant/#/zh-CN/changelog -->
  <div>
    <fixed-top></fixed-top>
    <!-- children components -->
    <router-view></router-view>
    <!-- fixed bottom-->
    <fixed-bottom></fixed-bottom>
  </div>
</template>

<script>
import FixedTop from "../components/FixedTop.vue";
import FixedBottom from "../components/FixedBottom.vue";
export default {
  name: "home",
  components: {
    FixedTop,
    FixedBottom,
  },
  data: function () {
    return {
      show: false,
    };
  },
  created: function () {},
  methods: {},
};
</script>

<style scoped>
</style>