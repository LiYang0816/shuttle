<template>
  <div class="computed">
    <div v-if="test % 2 == 1">
      <div>{{ test }}</div>
      <div>{{ oldStr }}{{ newStr }}</div>
      <div>{{ oldStr }}{{ newStr }}</div>
      <div>{{ oldStr }}{{ newStr }}</div>
      <div>{{ oldStr }}{{ newStr }}</div>
      <div>{{ oldStr }}{{ newStr }}</div>
      <div>{{ oldStr }}{{ newStr }}</div>
      <div>{{ oldStr }}{{ newStr }}</div>
    </div>
    <el-button @click="getTime">点击</el-button>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      test: 1,
      str: '现在是',
      oldStr: Date.now()
    }
  },
  computed: {
    newStr: function () {
      return this.str + Date.now();
    }
  },
  mounted () {
  },
  methods: {
    getTime () {
      this.test++;
      console.log('%c%s', 'color:red', '哈哈' + this.test);
    }
  }
}
</script>

<style scoped>
</style>