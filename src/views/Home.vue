<template>
  <!-- https://vant-contrib.gitee.io/vant/#/zh-CN/changelog -->
  <div>
    <!-- fixed top -->
    <fixed-top :detailInfo="detailInfo"></fixed-top>
    <!-- scrollable content -->
    <scrollable-content :storeId="storeId"></scrollable-content>

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
  data: function () {
    return {
      storeId: null,
      detailInfo: null,
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
          this.storeId = data._id;
          this.detailInfo = data.detail_info;
        } catch (err) {
          console.log(err);
        }
      })();
    },
  },
};
</script>

<style>
</style>