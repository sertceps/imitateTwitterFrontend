<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar
      title="注册"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="userid"
        name="用户ID"
        label="用户ID"
        placeholder="用户ID"
        :rules="[{ required: true, message: '请填写ID' }]"
      />
      <van-field
        v-model="email"
        name="邮箱"
        label="邮箱"
        placeholder="邮箱"
        type="email"
        :rules="[{ required: true, message: '请填写邮箱' }]"
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
      <van-field
        v-model="username"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import FixedTop from "../components/FixedTop.vue";
export default {
  components: {
    FixedTop,
  },
  data: function () {
    return {
      userid: null,
      password: null,
      email: null,
      username: null,
    };
  },
  methods: {
    onSubmit: function () {
      (async () => {
        try {
          await this.axios.post("http://localhost:3000/users", {
            userid: this.userid,
            username: this.username,
            password: this.password,
            email: this.email,
          });
          this.$dialog.alert({
            title: "提示",
            message: "注册成功",
            theme: "round-button",
          });
        } catch (err) {
          this.$dialog.alert({
            title: "提示",
            message: err.response.data.message,
            theme: "round-button",
          });
        }
      })();
    },
    onClickLeft: function () {
      this.$router.push("login");
    },
  },
};
</script>

<style scoped>
.van-form {
  margin-top: 40%;
}
</style>