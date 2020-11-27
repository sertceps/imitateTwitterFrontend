<template>
  <!-- https://vant-contrib.gitee.io/vant/#/zh-CN/changelog -->
  <div>
    <!-- fixed top -->
    <fixed-top :detailInfo="detailInfo"></fixed-top>
    <!-- scrollable content -->
    <router-view></router-view>
    <!-- fixed bottom-->
    <div>
      <van-tabbar v-model="active">
        <van-tabbar-item
          name="home"
          icon="home-o"
          replace
          to="/home"
        ></van-tabbar-item>
        <van-tabbar-item icon="search" replace to="/search"></van-tabbar-item>
        <van-tabbar-item
          icon="bulb-o"
          replace
          to="/notifications"
        ></van-tabbar-item>
        <van-tabbar-item icon="envelop-o" to="/messages"></van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import FixedTop from "../components/FixedTop.vue";
import FixedBottom from "../components/FixedBootom.vue";
export default {
  name: "home",
  components: {
    FixedTop,
    FixedBottom,
  },
  data: function () {
    return {
      detailInfo: null,
      active: "home",
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