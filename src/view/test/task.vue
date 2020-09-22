<template>
  <div class="tesk">
    <!-- {{test}} -->
    <!-- <div class="tesk-steps">
      <van-steps direction="vertical" :active="0" v-if="list && list.length >0">
        <van-step v-for=" (item,ind) in list " :key="ind">
          <h3>{{item.haa}}</h3>
          <p>{{item.pdd}}</p>
        </van-step>
      </van-steps>
    </div>-->
    <div class="test-copy" :data-clipboard-text="test" @click="copyHello">hello world</div>
    <tFrom></tFrom>
    <tFrom></tFrom>
  </div>
</template>

<script>
import ClipboardJS from 'clipboard';
import tFrom from './taskFrom';

export default {
  data () {
    return {
      test: '857857857',
      count: 0,
      list: []
    }
  },
  components: {
    tFrom
  },
  mounted () {
    // this.count = 2;
    // this.getData();
    // this.count = 1;
    // this.getStepsData();
  },
  methods: {
    // getData () {
    // this.test = this.count;
    // },
    // getStepsData () {
    //   setTimeout(e => {
    //     this.list = [{
    //         haa: '【城市】物流状态1【城市】物流状态1',
    //         pdd: '2016-07-12 12:40'
    //       }];
    //     console.log(e, this.list, 'hh')
    //   }, 1000);
    // }
    copyHello () {
      const clipboard = new ClipboardJS(".test-copy");
      console.log(clipboard.on);
      clipboard.on('success', e => {
        this.$message({ type: 'success', message: '复制成功' })
        console.log(e, '信息');
        // 释放内存
        // clipboard.destroy()
      })
      clipboard.on('error', e => {
        console.log(e, '错误信息');
        // 不支持复制
        this.$message({ type: 'waning', message: '该浏览器不支持自动复制' })
        // 释放内存
        // clipboard.destroy()
      })

    }
  }
}
</script>

<style scoped>
.tesk {
  width: 100%;
  height: 100%;
  background: #f2f2f2;
  padding: 0 8px;
  /* margin: 0 8px; */
}
.test-copy {
  font-size: 24px;
}
/* .tesk-steps {
  width: 359px;
  border-radius: 6px;
  background: #ffffff;
}

.van-step--vertical /deep/ .van-step__line {
  left: -0.7rem;
  top: 1rem;
  width: 0.5px;
} */
</style>