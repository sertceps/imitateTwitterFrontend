<template>
  <div>
    <van-image
      width="100%"
      height="120px"
      :src="detailInfo.background_url"
      fit="cover"
    />
    <div class="text">
      <van-image width="78" :src="detailInfo.avatar_url" round />
      <div class="info">
        <span> {{ username }} </span>
        <span> @{{ userid }} </span>
        <span> {{ detailInfo.description }}</span>
        <span> {{ detailInfo.location }}{{ detailInfo.birthday }}</span>
        <span> {{ followingCount }} 正在关注 {{ followersCount }} 关注者 </span>
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
  beforeCreate: async function () {
    this.$store.commit("initializeCertificate");
    const { data } = await this.axios.get(
      "/users/" + this.$store.state.loginInfo.userid
    );
    this.detailInfo = { ...this.detailInfo, ...data.detail_info };
    this.username = data.username;
    this.followingCount = data.following_count;
    this.followersCount = data.followers_count;
  },
  data: function () {
    return {
      userid: this.$store.state.loginInfo.userid,
      username: "username",
      detailInfo: {
        avatar_url: "/src/public/images/avatar.jpg",
        background_url: "/src/public/images/background.jpg",
        description: "",
        location: "",
        website: "",
        birthday: "",
      },
      followingCount: 0,
      followersCount: 0,
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