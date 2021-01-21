<template>
  <div class="sticky">
    <div class="sticky-index">我是粘性定位!</div>
    <div class="scroll">
      <p>滚动我</p>
      <p>来回滚动我</p>
      <p>来回滚动我</p>
      <p>滚动我</p>
      <p>来回滚动我</p>
      <p>滚动我</p>
      <p>来回滚动我</p>
      <p class="sticky-index">滚动我</p>
      <p>来回滚动我</p>
      <p>滚动我</p>
      <p>来回滚动我</p>
      <p>滚动我</p>
      <p>来回滚动我</p>
      <p>来回滚动我</p>
      <p>滚动我</p>
      <p>来回滚动我</p>
      <p>滚动我</p>
      <p>来回滚动我</p>
      <p>来回滚动我</p>
      <p>滚动我</p>
      <p>来回滚动我</p>
      <p>来回滚动我</p>
      <p>滚动我</p>
      <p>来回滚动我</p>
      <p>滚动我</p>
      <p>来回滚动我</p>
      <p>来回滚动我</p>
      <p>滚动我</p>
      <p>来回滚动我</p>
      <p>滚动我</p>
      <p>来回滚动我</p>
      <p>来回滚动我</p>
      <p>滚动我</p>
      <p>来回滚动我</p>
      <p>滚动我</p>
      <p>来回滚动我</p>
      <p>来回滚动我</p>
      <p>滚动我</p>
      <p>来回滚动我</p>
      <p>滚动我</p>
      <p>来回滚动我</p>
      <p>来回滚动我</p>
      <p>滚动我</p>
      <p>来回滚动我</p>
      <p>滚动我</p>
      <p>来回滚动我</p>
    </div>
    <div class="lineScale"></div>
    <div class="fixed" @click="toHomepage">我是固定!</div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  components: {},
  mounted () { },
  methods: {
    toHomepage () {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style scoped>
.sticky {
  padding: 0;
  margin: 0;
}
.sticky-index {
  position: sticky;
  top: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  background-color: #e3e3e3;
  z-index: 9;
}
.scroll {
  width: 100%;
  height: 600px;
  overflow: scroll;
}
.fixed {
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
}
.lineScale {
  width: 100%;
  height: 1px;
  background-color: red;
  transform: scaleY(0.5);
}
</style>