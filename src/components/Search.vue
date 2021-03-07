<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    />
    <div>
      <div v-for="item in res" :key="item._id" class="card">
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
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      value: "",
      res: null,
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "QQ", icon: "qq" },
        { name: "复制链接", icon: "link" },
      ],
    };
  },
  methods: {
    onSelect: function () {
      this.showShare = false;
    },
    onSearch: async function (params) {
      const { data } = await this.axios.get("/search/tweets/?q=" + this.value);
      if (data.length === 0) {
        this.$toast({
          duration: 800,
          message: "无结果",
        });
      }
      this.res = data;
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