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
    <div>{{ english }}</div>
    <div>{{ newEnglish }}</div>
    <el-button @click="changeEnglish">改变</el-button>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      test: 1,
      str: '现在是',
      oldStr: Date.now(),
      english: "asd asdad asd 'asdasd' aasd 'asdqe' adasd asd asdad asd 'asdasd' aasd 'asdqe' adasd asd asdad asd 'asdasd' aasd 'asdqe' adasd ",
      newEnglish: ""
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
    },
    changeEnglish () {
      this.newEnglish = this.changeFun(this.english);
    },
    // 将单引号的左引号置换为`
    changeFun (ag) {
      let arrEnglist = [];
      let reg = /^'/;
      arrEnglist = ag.split(' ');
      for (let i in arrEnglist) {
        if (reg.test(arrEnglist[i])) {
          arrEnglist[i] = arrEnglist[i].replace(reg, '`');
        }
      }
      return arrEnglist.toString().replace(/,/g, ' ');
    }
  }
}
</script>

<style scoped>
</style>