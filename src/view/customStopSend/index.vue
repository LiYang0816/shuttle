<template>
  <div class="customStopSend" v-title="'自定义停发区域'">
    <div class="query">
      <el-form
        ref="form"
        inline
        label-width="60px"
        label-position="left"
        :model="form"
        @submit.native.prevent
      >
        <el-form-item label="网点" v-if="'分公司'">
          <el-input v-model="form.orgName"></el-input>
        </el-form-item>
        <el-form-item label="三段码">
          <el-input
            ref="oneCode"
            v-model="form.oneCode"
            style="width: 80px; margin-right: 20px"
            @input="inputLengthFocus('form', 'oneCode', 'oneCode', 'twoCode')"
          ></el-input>
          <el-input
            ref="twoCode"
            v-model="form.twoCode"
            style="width: 80px; margin-right: 20px"
            :disabled="!(form.oneCode.length === 3)"
            @input="inputLengthFocus('form', 'twoCode', 'oneCode', 'threeCode')"
          ></el-input>
          <el-input
            ref="threeCode"
            v-model="form.threeCode"
            style="width: 80px; margin-right: 20px"
            :disabled="!(form.twoCode.length === 3)"
            @input="
              inputLengthFocus('form', 'threeCode', 'twoCode', 'threeCode')
            "
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            size="small"
            icon="el-icon-search"
            @click="queryForm"
            >查 询</el-button
          >
          <el-button size="small" @click="resetForm">重 置</el-button>
        </el-form-item>
      </el-form>
      <el-button type="primary" size="small" @click="addStopSend"
        >新 增<i class="el-icon-plus el-icon--right"></i
      ></el-button>
    </div>
    <div class="tab">
      <el-table :data="tableData">
        <el-table-column prop="index" label="序号" width="80">
        </el-table-column>
        <el-table-column prop="index" label="网点编码"> </el-table-column>
        <el-table-column prop="index" label="网点名称"> </el-table-column>
        <el-table-column prop="index" label="禁用三段码"> </el-table-column>
        <el-table-column prop="index" label="禁用配置"> </el-table-column>
        <el-table-column prop="index" label="禁用提示语"> </el-table-column>
        <el-table-column prop="index" label="创建人"> </el-table-column>
        <el-table-column prop="index" label="最后修改时间"> </el-table-column>
        <el-table-column prop="index" label="最后修改人"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="editTab(scope.row)"
              >编辑</el-button
            >
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      ref="dialog"
      :title="dTitle"
      :visible.sync="dialogVisible"
      width="35%"
    >
      <el-form
        ref="dForm"
        :model="dForm"
        v-if="dialogVisible"
        label-position="right"
        label-width="60px"
      >
        <el-form-item label="网点" v-if="'分公司'">
          <el-input v-model="dForm.orgName" style="width: 280px"></el-input>
        </el-form-item>
        <el-form-item label="三段码">
          <el-input
            ref="dOneCode"
            v-model="dForm.oneCode"
            style="width: 80px; margin-right: 20px"
            @input="
              inputLengthFocus('dForm', 'oneCode', 'dOneCode', 'dTwoCode')
            "
          ></el-input>
          <el-input
            ref="dTwoCode"
            v-model="dForm.twoCode"
            style="width: 80px; margin-right: 20px"
            :disabled="!(dForm.oneCode.length === 3)"
            @input="
              inputLengthFocus('dForm', 'twoCode', 'dOneCode', 'dThreeCode')
            "
          ></el-input>
          <el-input
            ref="dThreeCode"
            v-model="dForm.threeCode"
            style="width: 80px; margin-right: 20px"
            :disabled="!(dForm.twoCode.length === 3)"
            @input="
              inputLengthFocus('dForm', 'threeCode', 'dTwoCode', 'dThreeCode')
            "
          ></el-input>
        </el-form-item>
        <div class="dialog-dForm-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      form: {
        orgName: '',
        oneCode: '',
        twoCode: '',
        threeCode: ''
      },
      dTitle: '',
      dialogVisible: false,
      dForm: {
        orgName: '',
        oneCode: '',
        twoCode: '',
        threeCode: ''
      },
      tableData: []
    }
  },
  components: {},
  mounted () { },
  methods: {
    inputLengthFocus (form, code, blurRef, foucsRef) {
      if (this[form][code].length > 3) {
        this[form][code] = this[form][code].slice(0, 3);
      }
      if (this[form][code].length === 3) {
        this.$nextTick(() => {
          this.$refs[foucsRef].focus();
        });
      }
      if (this[form][code].length === 0) {
        this.$refs[blurRef].focus();
      }
    },
    // 编辑
    editTab (row) {
      console.log(row);
      this.dTitle = '编辑';
      this.dialogVisible = true;
    },
    // 新增
    addStopSend () {
      this.dTitle = '新增';
      this.dialogVisible = true;

    },
    // 重置查询
    resetForm () {
      this.form = {
        orgName: '',
        oneCode: '',
        twoCode: '',
        threeCode: ''
      };
    },
    // 查询
    queryForm () {

    }
  }
}
</script>

<style lang="less" scoped>
.customStopSend {
  width: 100%;
  height: 100%;
  padding: 30px;
  background-color: #fff;
  .query {
    width: 100%;
  }
  .tab {
    width: 100%;
  }
  .el-dialog__wrapper {
    .el-dialog {
      .el-dialog__body {
        .dialog-dForm-footer {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>