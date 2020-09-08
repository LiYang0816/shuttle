<template>
  <div class="test">{{test}}</div>
</template>

<script>
export default {
  data () {
    return {
      test: '',
      count: 0
    }
  },
  components: {},
  mounted () {
    this.count = 2;
    this.getData();
    this.count = 1;
  },
  methods: {
    getData () {
      this.test = this.count;
    }
  }
}
</script>

<style>
</style>