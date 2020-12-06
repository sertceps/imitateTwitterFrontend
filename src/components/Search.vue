<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    />
    <div>
      <p>{{ res }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      value: "",
      res: null,
    };
  },
  methods: {
    onSearch: async function (params) {
      const { data } = await this.axios.get("/search/tweets/?q=" + this.value);
      this.res = data;
    },
  },
};
</script>

<style>
</style>