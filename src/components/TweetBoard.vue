<template>
  <div>
    <van-nav-bar
      title="未发布的推文"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    >
      <template #right>
        <van-button type="info" size="small" round @click="onSubmit"
          >发布</van-button
        >
      </template>
    </van-nav-bar>

    <van-field
      class="t-field"
      v-model="text"
      rows="3"
      autosize
      type="textarea"
      maxlength="140"
      placeholder="有什么新鲜事"
      show-word-limit
    />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      text: "",
    };
  },
  methods: {
    onClickLeft: function () {
      this.$router.go(-1);
    },
    onSubmit: async function () {
      try {
        await this.axios.post("/tweets", {
          content: {
            text: this.text,
          },
        });
        this.$router.push("/home");
        this.$notify({ type: "primary", message: "你的推文已发送 查看" });
      } catch (err) {
        this.$dialog.alert({
          title: "提示",
          message: err.response.data.message,
          theme: "round-button",
        });
      }
    },
  },
};
</script>

<style scoped>
.van-button {
  min-width: 48px;
}
.t-field {
  font-size: 16px;
}
</style>