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
      detailInfo: null,
      show: false,
    };
  },
  created: function () {
    this.getUerInfo();
  },
  methods: {
    getUerInfo: function () {
      (async () => {
        try {
          const { data } = await this.axios.get("/login");
          this.detailInfo = data.detail_info;
        } catch (err) {
          console.log(err);
        }
      })();
    },
  },
};
</script>

<style scoped>
</style>