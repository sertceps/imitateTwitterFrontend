<template>
  <!-- https://vant-contrib.gitee.io/vant/#/zh-CN/changelog -->
  <div>
    <!-- fixed top -->
    <fixed-top></fixed-top>
    <!-- scrollable content -->
    <scrollable-content></scrollable-content>

    <!-- fixed bottom-->
    <fixed-bottom></fixed-bottom>
  </div>
</template>

<script>
import FixedTop from "../components/FixedTop.vue";
import FixedBottom from "../components/FixedBootom.vue";
import ScrollableContent from "../components/ScrollableContent.vue";
export default {
  name: "home",
  components: {
    FixedTop,
    FixedBottom,
    ScrollableContent,
  },
};
</script>

<style>
</style>