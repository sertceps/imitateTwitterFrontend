<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="userid"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
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
import axios from "axios";
export default {
  data: function () {
    return {
      userid: "",
      password: "",
    };
  },
  props: {
    currentComponent: String,
  },
  methods: {
    onSubmit: function () {
      void (async () => {
        const res = await axios.post("http://localhost:3000/login", {
          userid: this.userid,
          password: this.password,
        });
        console.log(res);
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