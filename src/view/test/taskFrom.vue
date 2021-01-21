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
      <span>第三个div的第二个子span</span>``
    </div>
  </div>
</template>

<script>
let ajax = new XMLHttpRequest(); // 创建实例
ajax.open("GET", '', true); // 请求方法GET/POST/其他，''URL请求路径，异步true同步false
ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // 设置请求头
ajax.send(); // 传送接口参数
ajax.onreadystatechange = function () { // 接口响应回调
};
export default {

  data () {

  },
  methods: {

  }

}
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