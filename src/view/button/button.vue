<template>
  <div id="button">
    <div class="drag">
      <span id="drag-ele" draggable="true" @dragstart="whenDragStart($event)">别拽我</span>
    </div>
    <div class="box" @drop.prevent="eleDrop($event)" @dragover="dragOverPrevent($event)">{{canTry}}</div>
    <footer class="footer">
      <div>
        <span @click="gotoUpLv">Return</span>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      canTry: '放进来吧'
    }
  },
  mounted () {

  },
  methods: {
    whenDragStart (e) {
      console.log(e, '拖动开始事件')
      e.dataTransfer.setData("Text", e.target.id);
    },
    eleDrop (e) {
      e.preventDefault();
      let dropData = e.dataTransfer.getData("Text");
      e.target.appendChild(document.getElementById(dropData));
      this.canTry = '';
    },
    dragOverPrevent (e) {
      e.preventDefault();
    },
    gotoUpLv () {
      this.$router.go(-1);
    }
  }
}
</script>
<style scoped>
#button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.drag {
  width: 50px;
  height: 30px;
}
.box {
  width: 500px;
  height: 300px;
  border: 1px solid #ff4500;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
}
</style>