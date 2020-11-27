<template>
  <div>
    <div class="card" v-for="item in tweets.list" :key="item.id">
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
        <div class="content">
          <span class="info">张三 @zhangsan</span>
          <p>
            {{ item.content.text }}
          </p>
          <div class="image-box"></div>
        </div>
        <div class="interaction">
          <van-icon name="comment-o" size="20" />
          <van-icon name="exchange" size="20" />
          <van-icon name="like-o" size="20" />
          <van-icon name="share-o" size="20" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      tweets: { list: [] },
    };
  },
  watch: {},
  created: function () {
    (async (id) => {
      try {
        const res = await this.axios.get("/login");
        const { data } = await this.axios.get(`/tweets/users/${res.data._id}`);
        this.tweets = data;
      } catch (err) {
        console.log(err);
      }
    })();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.card {
  /* margin-top: 48px; */
  padding: 0 14px;
  padding-top: 9px;
  padding-bottom: 9px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #c4cfd6;
  min-height: 80px;
}
.card .avatar {
  padding-right: 9px;
}
.card .container {
  /* min-width: 80px; */
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