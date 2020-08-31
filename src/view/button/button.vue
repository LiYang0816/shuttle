<template>
  <div id="button">
    <div class="drag-test">
      <div class="drag">
        <span id="drag-ele" draggable="true" @dragstart="whenDragStart($event)">别拽我</span>
      </div>
      <div
        class="box"
        @drop.prevent="eleDrop($event)"
        @dragover="dragOverPrevent($event)"
      >{{canTry}}</div>
    </div>
    <div class="checkerboard">
      <div class="piece" v-for="(item,index) in list" :key="index" @click="clickPlay(item)">
        <span>{{item.content}}</span>
      </div>
    </div>
    <footer class="footer">
      <div>
        <span @click="gotoUpLv">Return</span>
      </div>
      <div>
        <span @click="gotoNextLv">Go</span>
      </div>
    </footer>
  </div>
</template>
<script>
import utils from '../../utils/index.js'
export default {
  data () {
    return {
      canTry: '放进来吧',
      list: [
        {
          id: 1,
          canClick: true,
          content: ''
        },
        {
          id: 2,
          canClick: true,
          content: ''
        },
        {
          id: 3,
          canClick: true,
          content: ''
        },
        {
          id: 4,
          canClick: true,
          content: ''
        },
        {
          id: 5,
          canClick: true,
          content: ''
        },
        {
          id: 6,
          canClick: true,
          content: ''
        },
        {
          id: 7,
          canClick: true,
          content: ''
        },
        {
          id: 8,
          canClick: true,
          content: ''
        },
        {
          id: 9,
          canClick: true,
          content: ''
        }],
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
      winToF: false
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
          console.log(this.counts, "下X棋时");
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
          console.log(this.counts, "下O棋时");
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
                alert('X棋赢了');
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
                    alert('X棋赢了');
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
                alert('O棋赢了');
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
                    alert('O棋赢了');
                  }, 0)
                }
              })
            }
          })
        }
      }
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
}
.footer div {
  width: 80px;
  height: 30px;
  position: relative;
}
.footer div span {
  position: fixed;
  bottom: 0;
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