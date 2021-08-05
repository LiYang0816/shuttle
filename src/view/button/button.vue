<template>
  <div id="button">
    <div class="drag-test">
      <div class="drag">
        <span id="drag-ele" draggable="true" @dragstart="whenDragStart($event)"
          >别拽我</span
        >
      </div>
      <div
        class="box"
        @drop.prevent="eleDrop($event)"
        @dragover="dragOverPrevent($event)"
      >
        {{ canTry }}
      </div>
    </div>
    <div class="checkerboard">
      <div
        class="piece"
        v-for="(item, index) in list"
        :key="index"
        @click="clickPlay(item)"
      >
        <span>{{ item.content }}</span>
      </div>
    </div>
    <van-dialog
      v-model="showWin"
      title="胜利"
      show-cancel-button
      @confirm="winthen"
    >
      <div>{{ whoWin }}棋胜利</div>
    </van-dialog>
    <van-button plain color="#7232dd" round @click="clickme">点我</van-button>
    <div>
      请输入 <input type="text" v-model="vmodel" @input="vmodelInput" />
    </div>
    <div class="footer">
      <div>
        <span @click="gotoUpLv">Return</span>
      </div>
      <div>
        <span @click="gotoNextLv">Go</span>
      </div>
    </div>
  </div>
</template>
<script>
import utils from '../../utils/index.js'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      canTry: '放进来吧',
      list: [],
      counts: 1,
      winner: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ],
      Xresult: [],
      Oresult: [],
      winToF: false,
      showWin: false,
      whoWin: '',
      vmodel: ''
    }

  },
  computed: {
  },
  mounted () {
    this.vmodel = this.$store.state.button.vmodel;
    this.list = this.$store.state.button.pieceList.map(obj => (
      { ...obj }
    )); // 深拷贝 
  },
  methods: {
    ...mapMutations({'SET_VMODEL':'button/SET_VMODEL'}),
    vmodelInput () {
      this.SET_VMODEL(this.vmodel);
      console.log(this.vmodel, '哈哈', this.$store.state.button.vmodel, '哈哈')
    },
    whenDragStart (e) {
      // console.log(e, '拖动开始事件')
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
    },
    gotoNextLv () {
      this.$router.push({
        path: '/element'
      });
    },
    clickPlay (ele) {
      if (ele.canClick && this.counts < 10 && !this.winToF) {
        if (this.counts % 2 != 0 && this.list[ele.id - 1].content == '') {
          this.list[ele.id - 1].content = 'X';
          // console.log(this.counts, "下X棋时");
          if (this.counts > 4 && this.list[ele.id - 1].content == 'X') {
            this.list.forEach((m, i) => {
              if (m.content == 'X' && !this.Xresult.includes(i)) {
                this.Xresult.push(i);
              }
            })
            this.winneResult('X');
          }
          this.counts++;
        } else if (this.counts % 2 == 0 && this.list[ele.id - 1].content == '') {
          this.list[ele.id - 1].content = 'O';
          // console.log(this.counts, "下O棋时");
          if (this.counts > 5 && this.list[ele.id - 1].content == 'O') {
            this.list.forEach((m, i) => {
              if (m.content == 'O' && !this.Oresult.includes(i)) {
                this.Oresult.push(i);
              }
            })
            this.winneResult('O');
          }
          this.counts++;
        }
      }
    },
    winneResult (query) {
      if (query == 'X') {
        if (this.Xresult.length < 4) {
          this.winner.forEach(arr => {
            if (arr.sort().toString() == this.Xresult.sort().toString()) {
              setTimeout(() => {
                // this.$toast('X棋赢了');
                this.whoWin = 'X';
                this.showWin = true;
              }, 100)
              this.winToF = true;
            }
          })
        } else {
          let newArr = utils.allSubSets(this.Xresult);
          newArr.forEach(ele => {
            if (ele.length == 3) {
              this.winner.forEach(arr => {
                if (arr.sort().toString() == ele.sort().toString()) {
                  setTimeout(() => {
                    // this.$toast('X棋赢了');
                    this.whoWin = 'X';
                    this.showWin = true;
                  }, 100)
                  this.winToF = true;
                }
              })
            }
          })
        }
      } else {
        if (this.Oresult.length < 4) {
          this.winner.forEach(arr => {
            if (arr.sort().toString() == this.Oresult.sort().toString()) {
              setTimeout(() => {
                // this.$toast('O棋赢了');
                this.whoWin = 'O';
                this.showWin = true;
              }, 0)
            }
          })
        } else {
          let newArr = utils.allSubSets(this.Oresult);
          newArr.forEach(ele => {
            if (ele.length == 3) {
              this.winner.forEach(arr => {
                if (arr.sort().toString() == ele.sort().toString()) {
                  setTimeout(() => {
                    // this.$toast('O棋赢了');
                    this.whoWin = 'O';
                    this.showWin = true;
                  }, 0)
                }
              })
            }
          })
        }
      }
    },
    winthen () {
      this.Xresult = [];
      this.Oresult = [];
      this.list = this.$store.state.button.pieceList.map(obj => (
        { ...obj }
      ));
      // console.log(this.$store.state.button.pieceList, 'this=------');
      this.winToF = false;
      this.counts = 1;
    },
    clickme () {
      this.$toast('哈哈');
    }
  }
}
</script>
<style scoped>
#button {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.drag-test {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.drag {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 30px;
}
.box {
  width: 300px;
  height: 300px;
  border: 1px solid #ff4500;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
}
.footer div {
  width: 80px;
  position: relative;
}
.checkerboard {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
}
.piece {
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
}
.piece:nth-child(3n-1) {
  border-right: none;
  border-left: none;
}
</style>