<template>
  <div class="cssSticky">
    <div class="cssTitle">
      <div>下面是列表数据</div>
      <div>数据</div>
    </div>
    <!-- <div class="cssScroll scroll-com"> -->
    <div
      ref="scroll"
      class="cssScroll scrollIndex scroll-com"
      @scroll="scrollFun"
    >
      <div class="y-head">
        <div>这里是表头</div>
      </div>
      <div class="listIndex" v-for="(item, index) in stickyList" :key="index">
        {{ item }}
      </div>
      <div>最后一条</div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      canScroll: false,
      stickyList: ['这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀']
    }
  },
  components: {},
  mounted () {
    window.addEventListener('scroll', this._historyScroll, true);
  },
  methods: {
    // 下滑时将列表头固定
    _historyScroll () {
      let el = document.getElementsByClassName('scroll-com')[0];
      let targetEl = document.getElementsByClassName('y-head')[0];
      if (el.scrollTop > 40) {
        targetEl.setAttribute('class', 'y-head header-fixed');
      } else {
        targetEl.setAttribute('class', 'y-head');
      }
    },
    scrollFun () {
      let el = this.$refs.scroll;
      if (el.scrollHeight - 100 < el.scrollTop + el.offsetHeight && el.scrollTop > 0) {
        this.canScroll = false;
        this.promiseFun();
        let tempT = setTimeout(() => {
          this.canScroll = true;
          clearTimeout(tempT);
        }, 300);
      }
    },
    // 下滑后，对列表赋新值后，滚动条滚动位置不变，新数据如：'变成新的数据'，无法看到，需将滚动条滚回顶部才能查看到。
    promiseFun () {
      this.stickyList = [...['变成新的数据', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '这里是数据呀', '新数据的结尾']]
    }
  }
}
</script>

<style lang="less" scoped>
.cssSticky {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  overflow: hidden;
  .cssTitle {
    width: 100%;
    height: 40px;
    margin: 10px;
    div {
      color: #aa11bb;
      font-size: 16px;
    }
  }
  // .cssScroll {
  //   width: 100%;
  //   flex: 1;
  //   overflow: scroll;
  .scrollIndex {
    width: 100%;
    flex: 1;
    overflow: scroll;
    .y-head {
      height: 40px;
      background-color: #fff;
      div {
        font-size: 14px;
        margin: 10px auto;
        color: #aabb11;
      }
    }
    .listIndex {
      width: 100%;
      height: 40px;
      margin: 0 10px;
    }
  }
  // }
}
.header-fixed {
  position: sticky;
  top: 0;
}
</style>