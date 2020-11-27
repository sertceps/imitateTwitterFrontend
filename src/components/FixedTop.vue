
<template>
  <header>
    <van-nav-bar
      fixed
      style="border-bottom: 1px solid #c4cfd6"
      :border="false"
      title="主页"
    >
      <template #left>
        <van-image
          round
          lazy-load
          width="30"
          height="30"
          :src="detail.avatar_url"
        />
      </template>
    </van-nav-bar>

    <div class="place-holder"></div>
  </header>
  <!-- @click-left=""
    @click-right="" -->
</template>

<script>
// import img from ''
export default {
  props: ["detailInfo"],
  data: function () {
    return {
      detail: {
        avatar_url: "src/public/images/avatar.jpg",
        background_url: "/images/backgrounds/default.jpg",
        birthday: "2020-1-24T00:00:00.000Z",
      },
    };
  },
  watch: {
    detailInfo: function () {
      this.detail = this.detailInfo;
    },
  },
};
</script>

<style scoped>
.place-holder {
  height: 47px;
}
</style>