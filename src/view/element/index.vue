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
    <el-button class="new-btn" @click="newBtn">新增</el-button>
    <el-form>
      <el-form-item>
        <el-cascader
          ref="destAddress"
          v-model="province"
          :options="provinceOptions"
          :props="props"
          @change="provinceChange"
        ></el-cascader>
      </el-form-item>
    </el-form>
    <lyyTree :chooseNodeId="chooseNodeId"></lyyTree>
    <el-button @click="giveValue">赋值</el-button>
    <el-select v-model="district" @change="chooseTest">
      <el-option
        v-for="item in districtOptions"
        :key="item.value"
        :label="item.label"
        :value="item"
        @change="chooseTest"
      >
      </el-option>
    </el-select>
    <!-- <el-cascader
      v-model="district"
      :options="districtOptions"
      :props="props"
      @change="chooseTest"
    ></el-cascader> -->
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
    <span>
      {{ String.fromCharCode(87) }}
      {{ String.fromCharCode(111) }}
    </span>
    <span style="margin: 0 10px">
      {{ String.fromCharCode(65) }}
      {{ String.fromCharCode(105) }}
    </span>
    <span>
      {{ String.fromCharCode(78) }}
      {{ String.fromCharCode(105) }}
    </span>
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

let timeOptionRange = '';
// let id = 0;
export default {
  components: {
    lyyTree,
    lyyDialog
  },
  data () {
    return {
      tableData: {
        list: [{
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
        }]
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
      cache: {},
      province: '',
      provinceOptions: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框'
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          }, {
            value: 'input',
            label: 'Input 输入框'
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器'
          }, {
            value: 'select',
            label: 'Select 选择器'
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            label: 'Switch 开关'
          }, {
            value: 'slider',
            label: 'Slider 滑块'
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            label: 'Upload 上传'
          }, {
            value: 'rate',
            label: 'Rate 评分'
          }, {
            value: 'form',
            label: 'Form 表单'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }, {
            value: 'progress',
            label: 'Progress 进度条'
          }, {
            value: 'tree',
            label: 'Tree 树形控件'
          }, {
            value: 'pagination',
            label: 'Pagination 分页'
          }, {
            value: 'badge',
            label: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }, {
            value: 'message',
            label: 'Message 消息提示'
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
          }, {
            value: 'notification',
            label: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            label: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            label: 'Popover 弹出框'
          }, {
            value: 'card',
            label: 'Card 卡片'
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '资源',
        children: [{
          value: 'axure',
          label: 'Axure Components'
        }, {
          value: 'sketch',
          label: 'Sketch Templates'
        }, {
          value: 'jiaohu',
          label: '组件交互文档'
        }]
      }],
      districtOptions: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      district: [],
      props: {
        // checkStrictly: true
        // label: 'name',
        // value: 'code',
        // children: 'datas',
        // lazy: true,
        // lazyLoad (node, resolve) {
        //   const { level, value } = node;
        //   console.log(value, 'level')
        //   // setTimeout(() => {
        //   const nodes = Array.from({ length: level + 1 })
        //     .map(item => ({
        //       value: id++,
        //       label: `${node, '00', item}+选项${id}`,
        //       leaf: level >= 2
        //     }));
        //   // 通过调用resolve将子节点数据返回，通知组件数据加载完成
        //   resolve(nodes);
        //   // }, 1000);
        // }
      },
      tryFreezelist: []
    }
  },
  computed: {
  },
  mounted () {
    // console.log('Element');
    let strCode = '汉字';
    var nuniCode = '\\u' + strCode.charCodeAt(0).toString(16);
    console.log(nuniCode, '汉字转Unicode编码');
    this.getDataFromServer();
    this.useLeeCode([2, 7, 11, 15], 9);
    this.tryFreeze();
    this.propertyTry();
    this.a__or__a();
  },
  methods: {
    getDataFromServer () { // 模仿调用接口
      // this.tableData.list = [
      //   {
      //     id: 1,
      //     title: "还珠格格",
      //     createman: "容嬷嬷",
      //     instructId: 1,
      //     levelId: 1,
      //     unitId: 1,
      //     createTime: "2020-08-30",
      //     endTime: "2021-08-31",
      //     receipt: 1,
      //     examine: 0,
      //     explain: "无",
      //     content: "无",
      //     isTrue: 1,
      //     levelName: "一般",
      //     instructName: "扎针",
      //     unitName: "大清朝"
      //   },
      //   {
      //     id: 2,
      //     title: "剑来",
      //     createman: "陈平安",
      //     instructId: 2,
      //     levelId: 3,
      //     unitId: 3,
      //     createTime: "2020-08-31",
      //     endTime: "2020-09-01",
      //     receipt: 0,
      //     examine: 1,
      //     explain: "无",
      //     content: "无",
      //     isTrue: 0,
      //     levelName: "紧急",
      //     instructName: "今天剑来吗",
      //     unitName: "浩然天下"
      //   },
      //   {
      //     id: 2,
      //     title: "明侦",
      //     createman: "芳心纵火犯",
      //     instructId: 2,
      //     levelId: 3,
      //     unitId: 3,
      //     createTime: "2020-11-4",
      //     endTime: "2022-11-01",
      //     receipt: 0,
      //     examine: 1,
      //     explain: "无",
      //     content: "无",
      //     isTrue: 0,
      //     levelName: "紧急",
      //     instructName: "姓甄的",
      //     unitName: "芒果TV"
      //   }
      // ]
      // console.log(this.tableData.list);
      // this.cache = this.tableData.list.map(item => ({ ...item })); //使用map将tabData.list数组拷贝给cache
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
      // console.log(this.cache, this.tableData.list[key - 1], '关闭');
      // })
      console.log('触发', key);
    },
    newBtn () {
      this.checkRow = {};
      this.dialogTitle = '新增';
      this.dialogVisible = true;
    },
    provinceChange (val) {
      this.$nextTick(function () {
        let address = this.$refs['destAddress'].presentText;
        let cityList = address.split('/');
        console.log(val, cityList[0].trim(), cityList[1].trim(), cityList[2].trim(), this.$refs['destAddress'].inputValue, 'val');
      })
    },
    chooseTest (val) {
      console.log(val, this.district, 'name');
    },
    giveValue () {
      // this.district = ['0'];
      this.province = ['zhinan', 'shejiyuanze'];
    },
    // 两数相加等于目标值
    useLeeCode (nums, target) {
      let numA = null;
      let numB = null;
      for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
          if (i != j) {
            let res = nums[i] + nums[j];
            if (res == target) {
              numA = i;
              numB = j;
              console.log(i, j, 'res');
              return [numA, numB];
            }
          }
        }
      }
    },
    tryFreeze () { // 冻住数组
      this.tryFreezelist = [{ a: 1 }, { a: 2 }, { a: 3 }];
      Object.freeze(this.tryFreezelist);
      this.tryFreezelistFor();
    },
    tryFreezelistFor () {
      let list = this.tryFreezelist;
      list.forEach(element => {
        console.log(element);
      });
    },
    propertyTry () {
      let fun = function (name) {
        this.name = name;
      }
      fun.prototype.age = 16; // 为fun函数的原型对象添加age属性，该属性fun无法访问，fun的实例对象可以访问
      let f1 = new fun('hh'); // f1为构造函数fun的实例对象，其继承了fun的属性和方法，并可以访问fun的原型对象的属性和方法
      console.log(f1, 'f1');
      console.log(f1.name, 'name');
      console.log(f1.age, 'age');
      console.log(f1.__proto__.age, 'f1_P_Age'); // f1.__proto__为对象f1的父构造函数fun的原型对象，即fun.prototype
      console.log(fun.name, 'funName');
      console.log(fun.age, 'funAge');
    },
    a__or__a () {
      var a = 1;
      console.log(a++, 'a++');
      console.log(++a, '++a');
      console.log(a, 'a');
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