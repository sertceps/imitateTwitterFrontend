<template>
  <div>
    <van-nav-bar
      title="推文"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="card">
      <div class="strip">
        <van-image
          round
          lazy-load
          width="46"
          height="46"
          src="/src/public/images/avatar.jpg"
        />
        <div class="userid">
          <span>张三</span>
          <span>@zhangsan</span>
        </div>
      </div>
      <div class="text">
        <p>推文内容</p>
        <p>下午 10:10 2020 年 12 月 4 日</p>
      </div>
      <van-divider />
      <div class="ribbon">
        <div>1 转推 17 喜欢数</div>
        <van-divider />
        <div class="interaction">
          <van-icon name="comment-o" size="20" />
          <van-icon name="exchange" size="20" />
          <van-icon name="like-o" size="20" />
          <van-icon name="share-o" size="20" />
        </div>
      </div>
    </div>
    <van-divider />
    <comment-render></comment-render>
    <fixed-bottom></fixed-bottom>
  </div>
</template>

<script>
import FixedBottom from "../components/FixedBottom.vue";
import CommentRender from "../components/Content.vue";
export default {
  components: {
    FixedBottom,
    CommentRender,
  },
  methods: {
    onClickLeft: function () {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.card {
  padding: 9px 14px 0 14px;
}
.strip {
  display: flex;
}
.userid {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 9px;
}
.interaction {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  padding: 0 16px;
}
</style>