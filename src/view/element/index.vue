<template>
  <div id="element" ref="element">
    <el-table :data="tableData.list" style="width:100%;" @row-click="rowClick">
      <el-table-column prop="createman" label="创建人" align="center"></el-table-column>
      <el-table-column prop="title" label="标题" align="center"></el-table-column>
      <el-table-column prop="createTime" label="任务开始时间" align="center"></el-table-column>
      <el-table-column prop="endTime" label="任务结束时间" align="center"></el-table-column>
      <el-table-column prop="levelName" label="任务等级" align="center"></el-table-column>
      <el-table-column prop="instructName" label="任务指令" align="center"></el-table-column>
      <el-table-column prop="unitName" label="指定单位" align="center"></el-table-column>
      <el-table-column label="任务状态" align="center">
        <!-- 通过插槽来动态渲染数据，判断examine的类型来代表不同的结果 -->
        <template slot-scope="scope">
          <span v-if="scope.row.examine == 1">是</span>
          <span v-else>否</span>
        </template>
      </el-table-column>
      <el-table-column label="是否发布" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.isTrue == 1">否</span>
          <span v-else>是</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <i class="el-icon-edit" v-if="scope.row.isTrue == 1" @click.stop="openDialog('1')"></i>
          <i class="el-icon-arrow-left" v-else @click.stop="openDialog('2')"></i>
          <i class="el-icon-delete"></i>
        </template>
      </el-table-column>
    </el-table>
    <lyyDialog :dialogVisible="dialogVisible" :dialogTitle="dialogTitle" @falseShow="closeDialog"></lyyDialog>
    <lyyTree :chooseNodeId="chooseNodeId"></lyyTree>
    <!-- <el-button type="success" round @click="testNum">哈哈</el-button> -->
    <div class="footer">
      <div>
        <span @click="gotoUpLv">Return</span>
      </div>
      <div>
        <span @click="gotoShuttle">GoShuttle</span>
      </div>
    </div>
  </div>
</template>
<script>
import lyyTree from './lyyTree'
import lyyDialog from './lyyDialog'
export default {
  components: {
    lyyTree,
    lyyDialog
  },
  data () {
    return {
      tableData: {
        list: []
      },
      chooseNodeId: '',
      dialogVisible: false,
      dialogTitle: '',
      // num: 1
    }
  },
  computed: {
    // newNum: function () {
    //   return this.num;
    // }
  },
  mounted () {
    this.getDataFromServer();
    // console.log(this, 'this');
  },
  methods: {
    // testNum () {
    //   this.newNum = 2;
    //   console.log(this.newNum, 'newNum');
    // },
    getDataFromServer () { // 模仿调用接口
      setTimeout(() => {
        this.tableData.list = [
          {
            id: 1,
            title: "还珠格格",
            createman: "容嬷嬷",
            instructId: 1,
            levelId: 1,
            unitId: 1,
            createTime: "2020-08-30",
            endTime: "2021-08-31",
            receipt: 1,
            examine: 0,
            explain: "无",
            content: "无",
            isTrue: 1,
            levelName: "一般",
            instructName: "扎针",
            unitName: "大清朝"
          },
          {
            id: 2,
            title: "剑来",
            createman: "陈平安",
            instructId: 2,
            levelId: 3,
            unitId: 3,
            createTime: "2020-08-31",
            endTime: "2020-09-01",
            receipt: 0,
            examine: 1,
            explain: "无",
            content: "无",
            isTrue: 0,
            levelName: "紧急",
            instructName: "今天剑来吗",
            unitName: "浩然天下"
          }
        ]
        // console.log(this.tableData.list);
      }, 1000)
    },
    gotoShuttle () {
      this.$router.push({
        path: '/'
      });
    },
    gotoUpLv () {
      this.$router.go(-1);
    },
    rowClick (row) {
      if (row.id == '1') {
        this.chooseNodeId = '1';
      } else {
        this.chooseNodeId = '2';
      }
    },
    openDialog (val) {
      if (val == 1) {
        this.dialogTitle = '新增';
      } else {
        this.dialogTitle = '修改';
      }

      this.dialogVisible = true;
      console.log(this.dialogVisible, 'open');
    },
    closeDialog () {
      this.dialogVisible = false;
      console.log('触发');
    }
  }
}
</script>
<style scoped>
#element {
  width: 100%;
  height: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
}
.footer div {
  width: 80px;
  height: 30px;
  position: relative;
}
</style>