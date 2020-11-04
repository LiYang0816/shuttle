<template>
  <div class="myVant">
    <div class="testCalc">哈哈Calc</div>
    <div class="testAttr" title="停在这就能看到我">嘿嘿Attr</div>
    <div class="headImg">
      <van-uploader
        v-model="fileList"
        :after-read="afterRead"
        accept="image/*"
        max-count="1"
        :deletable="false"
      >
        <img src="../../assets/logo.png" />
      </van-uploader>
    </div>

    <div class="showText">{{ dateTime }}</div>
    <div class="action-sheet">
      <span @click="toShowAction">点我点我</span>
      <van-action-sheet v-model="show" title="选他选他">
        <div class="action-content">内容</div>
        <div class="action-button">
          <van-button @click="cancel">取消</van-button>
          <van-button type="primary" @click="confirm">确认</van-button>
        </div>
      </van-action-sheet>
    </div>
    <form ref="jsForm">
      上传<input type="file" :value="fileMsg" @change="getFromData($event)" />
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fileList: [],
      dateTime: new Date().getDate(),
      show: false,
      fileMsg: []
    }
  },
  components: {},
  mounted () { },
  methods: {
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file, 'file');
    },
    toShowAction () {
      this.show = true;
    },
    confirm () {
      this.show = false;
      this.$toast('你点确定干嘛呀');
    },
    cancel () {
      this.show = false;
      this.$toast('就你，你点取消了');
    },
    getFromData (e) {
      let form = e.target.files;
      console.log(form)

      let formData = new FormData();
      for (let i = 0; i < form.length; i++) {
        formData.append('attachment', form[i])
        console.log(form[i], '111')

      }
      console.log(formData)
    }
  }
}
</script>

<style scoped>
.myVant {
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.testCalc {
  background-color: #0ff000;
  width: calc(100% - 50px);
}

.testAttr {
  background-color: #0ff0f0;
}

.testAttr:hover::after {
  content: " (" attr(title) ")";
}

.headImg {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
}

.headImg img {
  width: 80px;
  height: 80px;
}

.action-content {
  width: 100%;
  height: 200px;
}

.action-button {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
