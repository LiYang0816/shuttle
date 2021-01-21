<template>
  <div class="menu">
    <!-- 查询 -->
    <div class="search-box">
      <el-form
        ref="form"
        :model="form"
        :inline="true"
        class="demo-form-inline"
        @submit.native.prevent
      >
        <el-form-item label="名称" prop="userName">
          <el-input
            v-model.trim="form.userName"
            placeholder="请输入名称"
            clearable
            @keyup.enter.native="queryName"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="cqueryName">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="menu-table">
        <div class="top">
          <div class="top-left">
            <el-button
              class="cancel-manage"
              type="primary"
              size="medium"
              @click="addMenu"
              >新增菜单
            </el-button>
          </div>
        </div>
        <div class="manage-wrap">
          <div class="manage-table">
            <el-table
              :data="menuTable"
              ref="multipleTable"
              border
              style="width: 100%"
              stripe
              class="customer-table"
            >
              <el-table-column
                align="center"
                prop="id"
                label="ID"
                width="60"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="userName"
                label="名称"
                width="170"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="tag"
                width="100"
                label="类型"
              >
                <template slot-scope="scope">
                  <el-tag
                    size="small"
                    :class="
                      scope.row.tag == '目录'
                        ? 'primary-tags'
                        : scope.row.tag == '菜单'
                        ? 'success-tags'
                        : 'info-tags'
                    "
                    disable-transitions
                    >{{ scope.row.tag }}</el-tag
                  >
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                prop="nextMenu"
                label="上级菜单"
                width="170"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="menuURL"
                label="菜单URL"
                width="200"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="mark"
                label="授权标识"
                width="200"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="number"
                label="排序"
                width="170"
              ></el-table-column>
              <el-table-column align="center" prop="address" label="操作">
                <template slot-scope="scope">
                  <el-button
                    @click.native.stop="editRow(scope.row)"
                    type="text"
                    size="small"
                  >
                    编辑
                  </el-button>
                  |
                  <el-button
                    class="del-btn"
                    @click.native.stop="deleteRow(scope.row)"
                    type="text"
                    size="small"
                  >
                    删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="send-courier-footer">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageIndex"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
            ></el-pagination>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      :title="title"
      :visible.sync="menuDialogVisible"
      width="483px"
      @close="menuClose"
    >
      <el-form label-width="100px" :model="editForm" ref="editRowForm">
        <el-form-item label="菜单类型" prop="tag">
          <el-radio-group v-model="editForm.tag">
            <el-radio label="0">目录</el-radio>
            <el-radio label="1">菜单</el-radio>
            <el-radio label="2">按钮</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="目录名称"
          v-if="editForm.tag == '目录'"
          prop="userName"
          required
        >
          <el-input
            type="text"
            v-model="editForm.userName"
            style="width: 200px"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="菜单名称"
          prop="userName"
          v-else-if="editForm.tag == '菜单'"
          required
        >
          <el-input
            type="text"
            v-model="editForm.userName"
            style="width: 200px"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="按钮名称"
          prop="userName"
          v-else-if="editForm.tag == '按钮'"
          required
        >
          <el-input
            type="text"
            v-model="editForm.userName"
            style="width: 200px"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="上级菜单"
          prop="nextMenu"
          v-if="
            editForm.tag == '目录' ||
            editForm.tag == '按钮' ||
            editForm.tag == '菜单'
          "
        >
          <el-input
            type="text"
            v-model="editForm.nextMenu"
            maxlength="20"
            style="width: 200px"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="授权标识"
          prop="mark"
          v-if="editForm.tag == '按钮' || editForm.tag == '菜单'"
        >
          <el-input
            type="text"
            v-model="editForm.mark"
            maxlength="20"
            style="width: 200px"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="菜单路由"
          prop="menuURL"
          v-if="editForm.tag == '菜单'"
        >
          <el-input
            type="text"
            v-model="editForm.menuURL"
            style="width: 200px"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="排列编号"
          prop="number"
          v-if="editForm.tag == '目录' || editForm.tag == '菜单'"
        >
          <el-input
            type="number"
            v-model="editForm.number"
            style="width: 200px"
            min="0"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="菜单图标"
          prop="mark"
          class="desc"
          v-if="editForm.tag == '目录' || editForm.tag == '菜单'"
        >
          <el-input
            style="width: 200px"
            type="text"
            v-model="editForm.mark"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="menuClose">取消</el-button>
        <el-button type="primary" @click="menuSubmit('editRowForm')">
          确定
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        userName: ''
      }, // 查询表单 name
      menuTable: [{
        id: 1,
        tag: '目录',
        userName: '李杨',
        nextMenu: '',
        menuURL: '',
        number: 0,
        mark: ''
      },
      {
        id: 2,
        tag: '菜单',
        userName: '李杨666',
        nextMenu: '',
        menuURL: '',
        number: 0,
        mark: ''
      },
      {
        id: 3,
        tag: '按钮',
        userName: '李杨2233',
        nextMenu: '',
        menuURL: '',
        number: 0,
        mark: ''
      }], // 表格数据
      pageIndex: 1, // 表格当前页
      pageSize: 10, // 每页显示条数
      total: 0, // 总条数
      title: '', // 新增 || 编辑
      menuDialogVisible: false, // 编辑行弹框
      editForm: {
      }
    };
  },
  components: {},
  mounted () { },
  methods: {
    // 按下enter键查询名称
    queryName () {
      console.log('enter');
      if (this.form.userName != '') {
        this.pageIndex = 1;
        this.pageSize = 10;
        this.getTableData();
      } else {
        this.$message({
          message: '名称为空',
          type: 'error',
          duration: 3000
        });
      }
    },
    // 按下查询按钮查询名称
    cqueryName () {
      console.log('查询');
      // this.$refs.wayBill.focus(); // 让输入框获取焦点
      if (this.form.userName != '') {
        this.pageIndex = 1;
        this.pageSize = 10;
        this.getTableData();
      } else {
        this.$message({
          message: '名称为空',
          type: 'error',
          duration: 3000
        });
      }
    },
    // 改变表格显示的条数
    handleSizeChange (val) {
      this.pageSize = val;
      this.getTableData();
    },
    // 当前页数改变
    handleCurrentChange (val) {
      this.pageIndex = val;
      this.getTableData();
    },
    // 获取表格数据
    getTableData () {

    },
    // 新增菜单
    addMenu () {
      this.title = '新增菜单';
      this.menuDialogVisible = true;
      this.editForm = {};
    },
    // 编辑当前行
    editRow (row) {
      this.title = '编辑';
      this.menuDialogVisible = true;
      this.editForm = { ...row };
    },
    // 关闭新增|编辑
    menuClose () {
      this.$refs.editRowForm.resetFields();
      this.menuDialogVisible = false;
    },
    // 提交新增|编辑当前行
    menuSubmit () {
      this.$refs.editRowForm.resetFields();
      this.menuDialogVisible = false;
    },
    // 删除当前行
    deleteRow (row, tabData) {
      console.log(row, tabData);
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  .search-box /deep/ {
    width: 100%;
    height: 56px;
    line-height: 56px;
    background: #fff;
    padding: 0 20px;
    .el-form--inline .el-form-item__content {
      vertical-align: middle;
    }
  }
  .content {
    width: 100%;
    background: #fff;
    padding: 10px;
    margin-top: 10px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    .menu-table {
      // flex: 1;
      width: 100%;
      .top {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        .cancel-manage {
          height: 32px;
          line-height: 0;
          text-align: center;
          color: #fff;
        }
      }
      .manage-wrap {
        width: 100%;
        min-height: 614px;
        margin-top: 10px;
        border: 1px solid #dddee1;
        position: relative;
        .manage-table {
          width: calc(100% + 2px);
          .customer-table {
            margin-top: -1px;
            margin-left: -1px;
            .del-btn {
              color: #f56c6c;
              margin-left: 0;
            }
          }
          .primary-tags {
            color: #18899b;
            background: #e8f3f5;
          }
          .success-tags {
            color: #6dc442;
            background: #f0f9eb;
          }
          .info-tags {
            color: #919398;
            background: #f4f4f5;
          }
        }
        .send-courier-footer {
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          bottom: 0;
          /deep/ .el-input__inner {
            height: 28px !important;
          }
        }
      }
    }
  }
}
</style>
