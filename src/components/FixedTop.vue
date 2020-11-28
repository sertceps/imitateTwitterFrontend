
<template>
  <header>
    <!-- 顶部导航栏 -->
    <van-nav-bar
      fixed
      style="border-bottom: 1px solid rgb(205, 214, 221)"
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
          @click="showPopup"
        />
      </template>
    </van-nav-bar>
    <div class="place-holder"></div>
    <!-- 左侧弹出层 -->
    <van-popup
      v-model="show"
      position="left"
      :style="{ width: '75%', height: '100%' }"
      get-container="body"
      closeable
    >
      <van-cell
        title="账号信息"
        size="large"
        :border="false"
        style="border-bottom: 1px solid #c4cfd6"
      />

      <div class="info-container">
        <van-image
          round
          lazy-load
          width="40"
          height="40"
          :src="detail.avatar_url"
        />
        <a class="user-link" href="">
          <span>张三</span>
          <span>@zhangsan</span>
        </a>
        <a href="">14 正在关注 </a>
        <a href="">15 关注者</a>
      </div>
      <van-cell title="个人资料" is-link size="large" />
      <van-cell title="设置" is-link size="large" />
      <van-cell title="退出" size="large" />
    </van-popup>
  </header>
</template>

<script>
export default {
  props: ["detailInfo"],
  data: function () {
    return {
      detail: {
        avatar_url: "src/public/images/avatar.jpg",
        background_url: "/images/backgrounds/default.jpg",
        birthday: "2020-1-24T00:00:00.000Z",
      },
      show: false,
    };
  },
  watch: {
    detailInfo: function () {
      this.detail = this.detailInfo;
    },
  },
  methods: {
    showPopup: function () {
      this.show = true;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.place-holder {
  height: 47px;
}
.info-container {
  padding: 9px 0;
  padding-left: 14px;
  border-bottom: 1px solid #ebeef0;
}
.info-container .user-link {
  display: flex;
  flex-direction: column;
}
</style>