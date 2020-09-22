<template>
  <div class="testCss">
    <div>
      <div>
        <span>第一个div的第一个子div的第一个子span</span>
        <span>第一个div的第一个子div的第二个子span</span>
        <span>第一个div的第一个子div的第三个子span</span>
      </div>
      <div>
        <span>第一个div的第二个子div的第一个子span</span>
        <span>第一个div的第二个子div的第二个子span</span>
      </div>
    </div>
    <div>
      <span>第二个div的第一个子span</span>
      <span>第二个div的第二个子span</span>
    </div>
    <div>
      <span>第三个div的第一个子span</span>
      <span>第三个div的第二个子span</span>
    </div>
  </div>
</template>

<script>

</script>

<style  scoped>
div {
  display: flex;
  flex-direction: column;
  margin: 8px;
}
.testCss > div > div:nth-child(2) span:nth-child(2) {
  background-color: red;
}
</style>