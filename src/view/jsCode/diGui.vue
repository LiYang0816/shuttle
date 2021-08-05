<template>
  <div class="diGui">
    <!-- <div class="btn" @click="jieCheng(10)">点击</div>
    <div>{{ useDiGui }}</div>
    <div class="time">
      <el-date-picker
        v-model="tiemr"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions"
        value-format="yyyy-MM-dd HH:mm:ss"
        :unlink-panels="false"
        :default-time="defaultTime"
        @change="changePicker"
      >
      </el-date-picker>
    </div> -->
    <div class="main">
      <div class="m-body">主体</div>
      <div class="m-show">尾部</div>
    </div>
  </div>
</template>

<script>
import CDate from '@/utils/cDate';
/* eslint-disable */
export default {
  name: 'diGui',
  data () {
    return {
      useDiGui: 1,
      tiemr: [],
      pickerMinDate: '', // 时间最小值
      pickerMaxDate: '', // 时间最大值
      // pickerOptions: {
      //   onPick: ({
      //     maxDate,
      //     minDate
      //   }) => {
      //     this.pickerMinDate = minDate;
      //     this.pickerMaxDate = maxDate;
      //     // let newDate = new Date();
      //     // if (maxDate) {
      //     //   if (maxDate.getDate() === newDate.getDate()) {
      //     //     this.defaultTime = ['00:00:00', `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`];
      //     //   }
      //     //   console.log(this.defaultTime, 'this.defaultTime');
      //     // }
      //   },
      //   disabledDate: (time) => {
      //     let endTime = this.endTime;
      //     console.log(time, endTime, 'endTime');
      //     if (this.pickerMinDate && this.pickerMaxDate) {
      //       let maxTime = new Date(`${CDate.format(new Date(), 'Y-m-d')} 23:59:59`);
      //       return time.getTime() > maxTime.getTime();
      //     }
      //     if (this.pickerMinDate && !this.pickerMaxDate) { // 只点了一次 此时有 最小值 没最大值
      //       let minTime = new CDate(this.pickerMinDate).addDay(-7);
      //       let maxTime = new CDate(this.pickerMinDate).addDay(7);
      //       if (maxTime.getTime() > new Date().getTime()) {
      //         maxTime = new Date();
      //       }
      //       return time.getTime() > maxTime.getTime() || endTime < time.getTime() || time.getTime() < minTime.getTime();
      //     }
      //     return endTime < time.getTime();
      //     // return time.getTime() >= endTime;
      //   }
      // },
      pickerOptions: {
        onPick: ({
          maxDate,
          minDate
        }) => {
          this.pickerMinDate = minDate;
          this.pickerMaxDate = maxDate;
        },
        disabledDate: (time) => {
          let endTime = new Date() - 8.64e6;
          if (this.pickerMinDate && this.pickerMaxDate) { // 只点了一次 此时有 最小值 没最大值
            let maxTime = new Date(`${CDate.format(new Date(), 'Y-m-d')} 23:59:59`);
            return time.getTime() > maxTime.getTime();
          }
          if (this.pickerMinDate && !this.pickerMaxDate) { // 只点了一次 此时有 最小值 没最大值
            let minTime = new CDate(this.pickerMinDate).addDay(-7);
            let maxTime = new CDate(this.pickerMinDate).addDay(7);
            if (maxTime.getTime() > new Date().getTime()) {
              maxTime = new Date();
            }
            return time.getTime() > maxTime.getTime() || time.getTime() > endTime || time.getTime() < minTime.getTime();
          }

          return time.getTime() > endTime;
        }
      },
      defaultTime: ['00:00:00', '23:59:59'],
      endTime: new Date(`${CDate.format(new Date(), 'Y-m-d')} 23:59:59`) - 8.64e6
    }
  },
  components: {},
  mounted () {
    this.longestPalindrome('sabccbs');
    console.log(this, 'this');
    // this.findLengthOfLCIS([4, 3, 5, 7, 6, 2, 1, 8, 9, 10]);
    this.selectionSort([4, 3, 5, 7, 6, 2, 1, 8, 9, 10]);
    const cloneObj = {
      name: 'lyy',
      hobby: {
        game: {
          lol: '英雄联盟',
          dnf: '地下城与勇士'
        },
        read: {
          book: '剑来',
          movie: '夏洛特烦恼'
        }
      },
      say: function () {
        console.log(this.hobby.read.book, '!');
      }
    }
    const newObj = this.deepClone(cloneObj);
    cloneObj.hobby.read.book = "剑不来了";
    newObj.say();
  },
  methods: {
    jieCheng (val) {
      if (val <= 0) return;
      this.useDiGui = this.useDiGui * val;
      this.jieCheng(val - 1);
      return this.useDiGui;
    },
		// 最长回文子串
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
    },
    findLengthOfLCIS: function (nums) {
      // debugger
      if (nums.length === 0) return 0;
      const n = nums.length;
      let left = 0, right = 1;
      let globalMaxLen = 1, maxLen = 1; //  globalMaxLen 目前最长 ; maxLen 当前最长
      while (right < n) {
        if (nums[right] > nums[left]) maxLen++;
        else {
          maxLen = 1;
        }
        left++;
        right++;
        globalMaxLen = Math.max(globalMaxLen, maxLen);
      }
      return globalMaxLen;
    },
    changePicker (val) {
      console.log(val, 'val');
      if (val) {
        if (val[1].getDate() === new Date().getDate()) {
          this.tiemr[1] = `${CDate.format(new Date(), 'Y-m-d')} ${CDate.format(new Date(), 'H:m:s')}`
        }
      }
    },
    selectionSort (arr) {
      // 获取数组长度，确保每一项都被排序。
      // debugger
      let len = arr.length;
      // 遍历数组的每一项。
      for (let i = 0; i < len; i++) {
        // 从数组的当前项开始，因为左边部分的数组项已经被排序。
        let min = i;
        for (let j = i; j < len; j++) {
          if (arr[j] < arr[min]) {
            min = j;
          }
        }
        if (min !== i) {
          [arr[min], arr[i]] = [arr[i], arr[min]];
        }
      }
      return arr;
    },
    // 深拷贝
    deepClone (sourceObj) {
      const targetObj = sourceObj.constructor === Array ? [] : {}; // 判断入参是数组还是对象
      for (let keys in sourceObj) { // 遍历入参
        if (sourceObj.hasOwnProperty(keys)) { // 判断是否有该键
          if (sourceObj[keys] && typeof sourceObj[keys] === 'object') { // 有该键时，值是否为Object
            targetObj[keys] = sourceObj[keys].constructor === Array ? [] : {}; // 当为Object时，判断值是数组还是对象
            targetObj[keys] = this.deepClone(sourceObj[keys]); // 递归，重复以上操作
          } else {
            targetObj[keys] = sourceObj[keys]; // 否则，直接赋值
          }
        }
      }
      return targetObj; // 返回拷贝结果
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  width: 375px;
  height: 200px;
  background-color: #007aff;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  justify-content: center;
  align-items: center;
  // border-top: 1px solid #ffffff;
  // position: absolute;
  // overflow: hidden;
}
.m-body {
  // display: flex;
  flex-shrink: 0;
  margin-top: 150px;
  width: 150px;
  height: 50px;
  background-color: #4cd964;
  // border-bottom: 1px solid #007aff;
}
.m-show {
  // display: flex;
  flex-shrink: 0;
  margin-top: 50px;
  width: 150px;
  height: 50px;
  background-color: #4cd964;
}
</style>