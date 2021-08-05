<template>
  <ul class="flex">
    <ScrollNum
			class="scroll-num"
      v-for="(num, idx) of numArr"
      :key="idx"
      as="li"
      :i="num"
      :delay="idx + 1"
    />
  </ul>
</template>

<script>
import ScrollNum from './components/index.vue'

export default {
  name: 'App',
  components: { ScrollNum },
  data: () => ({ num: 19980816 }),
  computed: {
    numArr () {
      const str = Array.from(String(this.num));
			const nums =	str.map(i => Number(i))
      return nums;
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
	position: relative;
}
.scroll-num{
	position: absolute;
}
</style>

