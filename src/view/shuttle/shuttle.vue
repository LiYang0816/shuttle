<template>
  <div id="shuttle">
    <header class="header">
      <span class="headerMsg">{{ headerMsg }}</span>
      <span class="programName">{{ programName }}</span>
    </header>
    <main class="main">
      <div class="main-content">
        <div v-if="choose">
          <span @click="changeChoose">{{ mainMsg.music }}</span>
          <div>
            <span>{{ chooseTip }}</span>
          </div>
          <div class="shuttle">
            <div class="goRight flex-col">
              <div class="shuttle-winner er-shuttle">
                <span>胜者组</span>
              </div>
              <el-checkbox
                v-model="item.i"
                :label="item.msg"
                border
                v-for="(item, index) in Winner"
                :key="index"
                class="checkBtn"
                name="item.msg"
                @change="leftCheck(item)"
              ></el-checkbox>
            </div>
            <div class="goBtn">
              <el-button
                type="primary"
                class="gotoBtn"
                icon="el-icon-arrow-left"
                @click="goLeft"
                >Winner</el-button
              >
              <el-button type="primary" class="gotoBtn" @click="goRight">
                Loser
                <i class="el-icon-arrow-right"></i>
              </el-button>
            </div>
            <div class="goLeft flex-col">
              <div class="shuttle-loser er-shuttle">
                <span>失败组</span>
              </div>
              <el-checkbox
                v-model="item.i"
                :label="item.msg"
                border
                v-for="(item, index) in Loser"
                :key="index"
                class="checkBtn"
                name="item.msg"
                @change="rightCheck(item)"
              ></el-checkbox>
            </div>
          </div>
        </div>
        <div v-else>
          <span @click="changeChoose">{{ mainMsg.dance }}</span>
          <div>
            <span>{{ chooseTip }}</span>
          </div>
        </div>
      </div>
      <div style="width: 500px; font-size: 20px; text-align: left">
        文字效果 <strong> 加粗 </strong> <em> 斜体 </em> <del> 删除线 </del>
        <ins>下划线</ins>
      </div>
      <div style="width: 500px; font-size: 20px; text-align: left">
        字符实体
        <span>{{ space }}</span>
        空格
      </div>
    </main>
    <img src="@/assets/icon_fanhui.svg" alt="" />
    <footer class="footer">
      <span @click="goButtonRouter">{{ footerMsg }}</span>
    </footer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      headerMsg: '这里是',
      footerMsg: '最后',
      choose: false,
      mainMsg: {
        music: '唱',
        dance: '跳'
      },
      chooseTip: '',
      programName: '',
      Winner: [{
        i: false,
        msg: "Uzi"
      }, {
        i: false,
        msg: "Rookie"
      }, {
        i: false,
        msg: "Ming"
      }, {
        i: false,
        msg: "Mlxg"
      }, {
        i: false,
        msg: "Letme"
      }],
      Loser: [{
        i: false,
        msg: "The shy"
      }, {
        i: false,
        msg: "Jakelove"
      }, {
        i: false,
        msg: "Xiao hu"
      }, {
        i: false,
        msg: "Clearlove"
      }, {
        i: false,
        msg: "Script"
      }],
      checkLeftList: [],
      checkRightList: [],
      space: '&nbsp;'
    }

  },
  created () {
    this.changeChoose();
  },
  mounted () {
    console.log('shuttle');
  },
  methods: {
    changeChoose () {
      this.choose = !this.choose;
      const chooseTip = '原来你喜欢';
      if (this.choose) {
        this.chooseTip = chooseTip + this.mainMsg.music;
        this.programName = "China good 声音"
      } else {
        this.chooseTip = chooseTip + this.mainMsg.dance;
        this.programName = "China have 嘻哈"
      }
    },
    goRight () {
      console.log("左侧选中的值的长度", this.checkLeftList.length)
      if (this.checkLeftList.length > 0) {
        this.checkLeftList.forEach(ele => {
          console.log("左穿右穿梭值", ele);
          this.Loser.push({
            i: false,
            msg: ele
          })
          this.Winner.forEach((elem, i) => {
            if (elem.i == true && elem.msg == ele) {
              this.Winner.splice(i, 1)
            }
            console.log(elem, i, "参数")
          })
        });
        this.checkLeftList = [];
      }

    },
    goLeft () {
      console.log("右侧选中的值的长度", this.checkLeftList.length)
      if (this.checkRightList.length > 0) {
        this.checkRightList.forEach(ele => {
          console.log("右穿左穿梭值", ele);
          this.Winner.push({
            i: false,
            msg: ele
          })
          this.Loser.forEach((elem, i) => {
            if (elem.i == true && elem.msg == ele) {
              this.Loser.splice(i, 1)
            }
            console.log(elem, i, "参数")
          })
        });
        this.initCheck();
        console.log(this.checkRightList, "msgmsgmsg")
      }
    },
    initCheck () {
      this.checkRightList = [];
      this.checkLeftList = [];
    },
    leftCheck (v) {
      if (v.i && !this.checkLeftList.includes(v.msg)) {
        this.checkLeftList.push(v.msg);
      }
      else {
        if (this.checkLeftList.includes(v.msg)) {
          this.checkLeftList.splice(this.checkLeftList.indexOf(v.msg), 1);
        }
      }
      console.log("左侧选中的值", this.checkLeftList);

    },
    rightCheck (v) {
      if (v.i && !this.checkRightList.includes(v.msg)) {
        this.checkRightList.push(v.msg);
      }
      else {
        if (this.checkRightList.includes(v.msg)) {
          this.checkRightList.splice(this.checkRightList.indexOf(v.msg), 1);
        }
      }
      console.log("右侧选中的值", this.checkRightList);
    },
    goButtonRouter () {
      this.$router.push({
        path: '/button'
      })
    }
  }

}
</script>
<style  scoped>
.header {
  width: 100%;
  height: 115px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #edaa35;
  font-size: 24px;
  font-weight: 700;
}

.header .headerMsg {
  width: 30px;
  color: #edaa35;
  font-size: 24px;
}

.header .programName {
  color: rgba(216, 39, 22, 0.952);
  font-size: 42px;
}
.shuttle {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.shuttle-winner {
  color: #ee2c2c;
}
.shuttle-loser {
  color: #363636;
}
.er-shuttle {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-weight: 700;
}
.main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.main-content {
  width: 100%;
}
.checkBtn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 110px;
  height: 40px;
  margin-left: 0 !important;
  margin-right: 0;
}

.flex-col {
  display: flex;
  flex-direction: column;
  height: 500px;
}

.goBtn {
  display: flex;
  flex-direction: column;
  height: 325px;
}

.gotoBtn {
  width: 150px;
  height: 40px;
  margin-left: 0 !important;
  margin-bottom: 10px;
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