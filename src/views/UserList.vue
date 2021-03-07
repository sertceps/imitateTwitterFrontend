<template>
  <div>
    <van-nav-bar
      title="张三"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      :border="false"
    />
    <div class="navigator">
      <van-button plain type="info">关注者</van-button>
      <van-button plain type="info">正在关注</van-button>
    </div>
    <div class="user-card">
      <div class="avatar">
        <van-image
          round
          lazy-load
          width="50"
          height="50"
          src="/src/public/images/avatar.jpg"
        />
      </div>
      <div class="content">
        <div class="ribbon">
          <span>张三</span>
          <van-button round plain type="info">关注</van-button>
        </div>
        <div class="description">
          <span> 一个帅字贯穿一生 </span>
        </div>
      </div>
    </div>

    <fixed-bottom></fixed-bottom>
  </div>
</template>

<script>
import FixedBottom from "../components/FixedBottom.vue";
export default {
  components: {
    FixedBottom,
  },
  methods: {
    onClickLeft: function () {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.navigator {
  display: flex;
}
.navigator button {
  width: 50%;
  border: none;
}
.user-card {
  display: flex;
  min-height: 70px;
  /* background: skyblue; */
  padding: 10px 15px;
  border-bottom: 1px solid #eef1f3;
}
.user-card .avatar {
  width: 20%;
  /* background: springgreen; */
  margin-right: 10px;
}
.content {
  width: 80%;
}
.ribbon {
  display: flex;
  justify-content: space-between;
}
.ribbon button {
  min-width: 60px;
  height: 30px;
}
</style>