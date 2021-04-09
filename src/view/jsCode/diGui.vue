<template>
  <div class="diGui">
    <div class="btn" @click="jieCheng(10)">点击</div>
    <div>{{ useDiGui }}</div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'diGui',
  data () {
    return {
      useDiGui: 1
    }
  },
  components: {},
  mounted () {
    this.longestPalindrome('sabccbs')
  },
  methods: {
    jieCheng (val) {
      if (val <= 0) return;
      this.useDiGui = this.useDiGui * val;
      this.jieCheng(val - 1);
      return this.useDiGui;
    },
    longestPalindrome (s) {
      if (s.length === 1) return s;
      let maxRes = 0, maxStr = '';
      for (let i = 0; i < s.length; i++) {
        let str1 = this.palindrome(s, i, i);
        let str2 = this.palindrome(s, i, i + 1);
        if (str1.length > maxRes) {
          maxStr = str1;
          maxRes = str1.length;
        }
        if (str2.length > maxRes) {
          maxStr = str2;
          maxRes = str2.length;
        }
      }
      return maxStr;
    },
    palindrome (s, l, r) {
      while (l >= 0 && r < s.length && s[l] === s[r]) {
        l--;
        r++;
      }
      return s.slice(l + 1, r);
    }
  }
}
</script>

<style lang="less" scoped>
</style>