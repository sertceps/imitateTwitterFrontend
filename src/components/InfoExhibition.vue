<template>
  <div>
    <van-image
      width="100%"
      height="120px"
      src="/src/public/images/background.jpg"
      fit="cover"
    />
    <div class="text">
      <van-image width="78" src="/src/public/images/avatar.jpg" round />
      <div class="info">
        <span> 张三 </span>
        <span> @zhangsan </span>
        <span> Description </span>
        <span> location birthday </span>
        <span> following followers </span>
      </div>
    </div>
    <div class="buttons">
      <van-button plain type="default" :to="tweets">推文</van-button>
      <van-button plain type="default" :to="with_replay">推文和回复</van-button>
      <van-button plain type="default" :to="media">媒体</van-button>
      <van-button plain type="default" :to="likes">喜欢</van-button>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreated: function () {
    this.$store.commit("initializeCertificate");
  },
  data: function () {
    return {
      tweets: "/userid",
      media: "/userid/media",
      with_replay: "/userid/with_replies",
      likes: "/userid/likes",
    };
  },
};
</script>

<style scoped>
.text {
  padding: 9px 14px;
  padding-bottom: 0;
}
.text .van-image {
  position: relative;
  border: 2px solid #fff;
  transform: translateY(-50%);
}
.text .info {
  display: flex;
  flex-direction: column;
  transform: translateY(-40%);
}
.buttons {
  display: flex;
  justify-content: space-around;
}
.buttons .van-button {
  border: none;
  border-radius: 0;
  flex-grow: 1;
}
.buttons .van-button:focus {
  border-bottom: 1px solid #1989fa;
}
</style>