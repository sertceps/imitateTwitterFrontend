<template>
  <div>
    <div v-for="item in tweets.list" :key="item._id" class="card">
      <div class="avatar">
        <van-image
          round
          lazy-load
          width="46"
          height="46"
          src="/src/public/images/avatar.jpg"
        />
      </div>
      <div class="container">
        <router-link tag="div" :to="'/status/' + item._id">
          <div class="content">
            <span class="info">张三 @zhangsan</span>
            <p>
              {{ item.content.text }}
            </p>
            <div class="image-box"></div>
          </div>
        </router-link>
        <div class="interaction">
          <router-link to="/compose/tweet">
            <van-icon name="comment-o" size="20" />
          </router-link>
          <router-link to="/compose/tweet">
            <van-icon name="exchange" size="20" />
          </router-link>
          <van-icon name="like-o" size="20" />
          <van-icon name="share-o" size="20" @click="showShare = true" />
        </div>
      </div>
    </div>
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
    />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      tweets: { list: [] },
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "QQ", icon: "qq" },
        { name: "复制链接", icon: "link" },
      ],
    };
  },
  watch: {
    $route(to, from) {
      this.dynamicRender(to.path);
    },
  },
  created: async function () {
    const userid = this.$route.params.userid;
    if (!userid) {
      console.log("is home page");
    }
    // const res = await this.axios.get("/users/" + this.$route.params.userid);
    this.dynamicRender(this.$route.path);
  },
  methods: {
    onSelect: function (option) {
      this.showShare = false;
    },
    requestTweets: async function (url) {
      try {
        const { data } = await this.axios.get(url);
        this.tweets = data;
      } catch (err) {
        console.log(err);
      }
    },
    // 监听路由还是 按钮传参？
    dynamicRender: async function (path) {
      const res = await this.axios.get("/users/a");
      let url = null;
      if (path.match(/replies$/)) {
        url = `/tweets/users/${res.data._id}`;
      } else if (path.match(/media$/)) {
        url = `/tweets/users/${res.data._id}`;
      } else if (path.match(/likes$/)) {
        url = "/liked";
      } else {
        url = `/tweets/users/${res.data._id}`;
      }
      await this.requestTweets(url);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.card {
  padding: 0 14px;
  padding-top: 9px;
  padding-bottom: 9px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eef1f3;
  min-height: 80px;
}
.card .avatar {
  padding-right: 9px;
}
.card .container {
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.interaction {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  /* padding: 0 5px; */
}
</style>