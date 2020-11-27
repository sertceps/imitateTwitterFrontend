<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="userid"
      name="用户ID"
      label="用户ID"
      placeholder="用户ID"
      :rules="[{ required: true, message: '请填写用户ID' }]"
    />
    <van-field
      v-model="password"
      autocomplete="on"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div class="buttons" style="margin: 16px">
      <van-button round block type="info" native-type="submit">
        登录
      </van-button>
      <van-button
        round
        block
        type="default"
        native-type="register"
        to="/register"
      >
        注册
      </van-button>
    </div>
  </van-form>
</template>
<script>
export default {
  data: function () {
    return {
      userid: null,
      password: null,
    };
  },
  methods: {
    onSubmit: function () {
      void (async () => {
        try {
          const { data } = await this.axios.post("/login", {
            userid: this.userid,
            password: this.password,
          });
          sessionStorage["vue-app-token"] = data.token;
          this.$dialog.alert({
            title: "提示",
            message: "登录成功",
            theme: "round-button",
          });
          this.$router.push("/");
        } catch (err) {
          this.$dialog.alert({
            title: "提示",
            message: err.response.data.message,
            theme: "round-button",
          });
        }
      })();
    },
  },
};
</script>

<style scoped>
.van-form {
  margin-top: 50%;
}
.van-button {
  margin: 10px auto;
}
</style>>