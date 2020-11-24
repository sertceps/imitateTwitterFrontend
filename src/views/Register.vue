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
        name="个人ID"
        label="个人ID"
        placeholder="个人ID"
        :rules="[{ required: true, message: '请填写ID' }]"
      />
      <van-field
        name="邮箱"
        label="邮箱"
        placeholder="邮箱"
        type="email"
        :rules="[{ required: true, message: '请填写邮箱' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
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
      userid: "",
      password: "",
    };
  },
  methods: {
    onSubmit: function () {
      return console.log("submit");
    },
    onClickLeft: function () {
      this.$router.push("login");
    },
  },
};
</script>

<style scoped>
.van-form {
  margin-top: 50%;
}
</style>