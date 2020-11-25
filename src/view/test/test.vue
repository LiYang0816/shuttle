<template>
  <div class="test">
    <!-- <span>{{ sliceStr }}</span>
    <div class="test-btn" @click="sliceStrBtn">slice点击</div>
    <span>{{ newSliceStr }}</span>
    <div class="test-btn split-btn" @click="splitStrBtn">split点击</div>
    <span>{{ newSplitStr }}</span>
    <span>{{ spliceArr }}</span>
    <div class="test-btn" @click="spliceArrBtn">splice点击</div>
    <span>{{ newSpliceArr }}</span> -->
    <div>
      <input type="text" v-model="inputValue" @input="inputGive" />
      <div @click="divClick">点击赋值</div>
    </div>
    <yCell
      v-model="inputValue"
      :cssError="cssError"
      :linkShow="cssError"
      @input="inputClick"
      requireShow
    >
    </yCell>
    <div @click="inputClick">赋值</div>
    <div>{{ oldList }}</div>
    <div>{{ shallowList }}</div>
    <div>{{ deepList }}</div>
    <div class="y-button" @click="shallowCopy">浅拷贝</div>
    <div class="y-button" @click="deepCopy">深拷贝</div>
  </div>
</template>

<script>
import yCell from './components/yCell'
import utils from '../../utils/index'

export default {
  name: '',
  data () {
    return {
      sliceStr: 'lyy最handsome',
      newSliceStr: '',
      spliceArr: ['lyy', '最', 'handsome'],
      newSpliceArr: [

      ],
      newSplitStr: [

      ],
      // newMusic: '爱在一季盛夏之后，只剩下残骸，一个人孤独的等待，等待着夜幕降下来',
      // newDrink: '不喝醉，我哭不出来',
      inputValue: '',
      inputInit: '',
      cssError: '',
      oldList: [{
        name: '',
        emotion: {
          happy: '',
          anger: '',
          sorrow: '',
          joy: ''
        }
      }],
      shallowList: [],
      deepList: []
    }
  },
  components: {
    yCell
  },
  mounted () {
    this.shallowList = this.oldList;
    this.deepList = utils.deepCopy(this.oldList)
  },
  methods: {
    // sliceStrBtn () {
    //   this.newSliceStr = this.sliceStr.slice(0, 3); // 原字符串不改变；返回值为裁剪掉的字符串，第二个参数为需要裁剪X个字符。
    // },
    // splitStrBtn () {
    //   this.newSplitStr = this.sliceStr.split(''); // 以''为分隔符，将字符串转为数组
    // },
    // spliceArrBtn () {
    //   this.newSpliceArr = this.spliceArr.splice(0, 1); // 改变数组,原数组变为裁剪后的剩余元素组成的数组；返回值为裁剪的元素组成的数组。
    // },
    inputGive () {
      console.log(this.inputValue, '赋值');
    },
    divClick () {
      this.inputValue = '赋值';
      console.log(this.inputValue, '点击'); // 直接赋值不会触发oninput()
    },
    inputClick () {
      // this.inputInit = '赋初值';
      console.log('123')
      if (this.inputValue == '') {
        this.cssError = true;
      } else {
        this.cssError = false;
      }
      // this.$toast({
      //   message:
      //     `<div style="height:22px;display:flex;justify-content: center;align-items: center;">
      //       <i class="van-icon van-icon-cross" style="font-size:16px;margin-right:5px"></i>
      //       <span>看吧是不是我说的那样！</span>
      //     </div>`,
      //   type: 'html',
      // });
    },
    shallowCopy () {
      this.shallowList[0].emotion.happy = '囍';
    },
    deepCopy () {
      this.deepList[0].emotion.happy = '囍';
      // console.log(this.deepList, '深');
    }

  }
}
</script>

<style scoped>
.test {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.test-btn {
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
}
.split-btn {
  position: relative;
}
.y-button {
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
}
</style>