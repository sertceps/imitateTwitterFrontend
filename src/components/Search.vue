<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      value: "",
    };
  },
};
</script>

<style>
</style>