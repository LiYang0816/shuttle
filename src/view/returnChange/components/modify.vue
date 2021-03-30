<template>
  <div class="modify">
    <div class="smartAnaly">智能解析</div>
    <van-field
      v-model="message"
      rows="2"
      autosize
      type="textarea"
      placeholder="输入顺序：地址、姓名、电话均用空格隔开"
      show-word-limit
    />
  </div>
</template>

<script>
export default {
  name: 'modify',
  data () {
    return {}
  },
  components: {},
  mounted () { },
  methods: {}
}
</script>

<style scoped>
.smartAnaly {
}
</style>