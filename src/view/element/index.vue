<template>
  <div id="element" ref="element">
    <el-table :data="tableData.list" style="width: 100%" @row-click="rowClick">
      <el-table-column
        prop="createman"
        label="创建人"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="createTime"
        label="任务开始时间"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="endTime"
        label="任务结束时间"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="levelName"
        label="任务等级"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="instructName"
        label="任务指令"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="unitName"
        label="指定单位"
        align="center"
      ></el-table-column>
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
          <i
            class="el-icon-edit icon-color-48B29B"
            v-if="scope.row.isTrue == 1"
            @click.stop="openDialog(scope.row)"
          ></i>
          <i
            class="el-icon-arrow-left icon-color-48B29B"
            v-else
            @click.stop="openDialog(scope.row)"
          ></i>
          |
          <i class="el-icon-delete icon-color-F56C6C"></i>
        </template>
      </el-table-column>
    </el-table>
    <lyy-dialog
      :dialogVisible="dialogVisible"
      :dialogTitle="dialogTitle"
      :checkRow="checkRow"
      @falseShow="closeDialog"
    ></lyy-dialog>
    <!-- <lyyTree :chooseNodeId="chooseNodeId"></lyyTree> -->
    <!-- <el-button type="success" round @click="testNum">哈哈</el-button> -->
    <!-- {{ bigSmall }}
    <div class="selectDate">
      <el-date-picker
        v-model="selectDate"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd"
        :picker-options="pickerOptions"
      >
      </el-date-picker>
    </div> -->
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
// import lyyTree from './lyyTree'
import lyyDialog from './lyyDialog'

let timeOptionRange = '';
export default {
  components: {
    // lyyTree,
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
      selectDate: "", // 选择的时间,
      pickerOptions: {
        disabledDate (time) {
          let secondNum = 60 * 60 * 24 * 7 * 1000;
          if (timeOptionRange) {
            return time.getTime() > timeOptionRange.getTime() + secondNum || time.getTime() < timeOptionRange.getTime() - secondNum;
          }
        }, onPick (time) {
          //当第一时间选中才设置禁用
          if (time.minDate && !time.maxDate) {
            timeOptionRange = time.minDate;
          }
          if (time.maxDate) {
            timeOptionRange = '';
          }
        }
      },
      bigSmall: '大小写',
      checkRow: {},
      cache: {}
    }
  },
  computed: {
  },
  mounted () {
    console.log('Element');
    this.getDataFromServer();
  },
  methods: {
    getDataFromServer () { // 模仿调用接口
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
        },
        {
          id: 2,
          title: "明侦",
          createman: "芳心纵火犯",
          instructId: 2,
          levelId: 3,
          unitId: 3,
          createTime: "2020-11-4",
          endTime: "2022-11-01",
          receipt: 0,
          examine: 1,
          explain: "无",
          content: "无",
          isTrue: 0,
          levelName: "紧急",
          instructName: "姓甄的",
          unitName: "芒果TV"
        }
      ]
      // console.log(this.tableData.list);
      this.cache = this.tableData.list.map(item => ({ ...item })); //使用map将tabData.list数组拷贝给cache
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
      this.dialogVisible = true;
      // this.$nextTick(() => {
      if (val.isTrue == 1) {
        this.dialogTitle = '新增';
        this.checkRow = {};
      } else {
        this.dialogTitle = '修改';
        this.checkRow = { ...val };
      }
      // })
    },
    closeDialog (key) {
      this.dialogVisible = false;
      // this.$nextTick(() => {
      //   this.tableData.list = this.cache.map(item => ({ ...item }));
      console.log(this.cache, this.tableData.list[key - 1], '关闭');
      // })
      // console.log('触发');
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
.el-date-editor /deep/ .el-range-separator {
  padding: 0;
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
.icon-color-48B29B {
  color: #48b29b;
}
.icon-color-F56C6C {
  color: #f56c6c;
}
</style>