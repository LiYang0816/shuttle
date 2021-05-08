<template>
  <div class="diGui">
    <div class="btn" @click="jieCheng(10)">点击</div>
    <div>{{ useDiGui }}</div>
    <div class="time">
      <el-date-picker
        v-model="tiemr"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions"
        :unlink-panels="false"
        :default-time="['00:00:00', '00:00:00']"
      >
      </el-date-picker>
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
      pickerOptions: {
        onPick: ({
          maxDate,
          minDate
        }) => {
          // console.log(maxDate,minDate, ' maxDate,minDate');
          this.pickerMinDate = minDate;
          this.pickerMaxDate = maxDate;
        },
        disabledDate: (time) => {
          // console.log(time, 'time');
          let endTime = new Date() - 8.64e6;
          if (this.pickerMinDate && this.pickerMaxDate) { // 只点了一次 此时有 最小值 没最大值
            let maxTime = new Date();
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
    }
  },
  components: {},
  mounted () {
    this.longestPalindrome('sabccbs');
    console.log(this, 'this');
    this.findLengthOfLCIS([4, 3, 5, 7, 6, 2, 1, 8, 9, 10]);
  },
  methods: {
    jieCheng (val) {
      if (val <= 0) return;
      this.useDiGui = this.useDiGui * val;
      this.jieCheng(val - 1);
      return this.useDiGui;
    },
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
    }
  }
}
</script>

<style lang="less" scoped>
</style>