<template>
  <!-- <div class="lyyDialog"> -->
  <el-dialog
    :title="dialogTitle"
    :visible.sync="dialogShow"
    width="30%"
    :before-close="dialogFormVisible"
    :destroy-on-close="true"
    @open="openDialog"
  >
    <el-form
      :model="checkRow"
      label-width="80px"
      ref="dialogForm"
      v-if="dialogShow"
    >
      <!-- :rules="rules" -->
      <!-- <el-form-item label="切换" style="width: 300px">
          <el-radio-group v-model="radio">
            <el-radio :label="3">来来来</el-radio>
            <el-radio :label="6">去去去</el-radio>
          </el-radio-group>
        </el-form-item> -->
      <el-form-item label="名称" required style="width: 400px">
        <el-input v-model="checkRow.createman" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="标题" style="width: 300px">
        <el-input v-model="checkRow.title" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible">确 定</el-button>
    </div>
  </el-dialog>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'lyyDialog',
  props: ['dialogVisible', 'dialogTitle', 'checkRow'],
  data () {
    return {
      form: {
        createman: '',
        title: ''
      },
      dialogShow: false,
      cache: {},
      // rules: {

      // },
      radio: ''
    }
  },
  mounted () {
  },
  methods: {
    dialogFormVisible () {
      console.log(this.form, this.checkRow, '1')
      // this.$refs.dialogForm.resetFields();
      this.dialogShow = false;
      this.$emit('falseShow');
    },
    openDialog () {
      // this.form = { ...this.checkRow };
    }
  },
  watch: {
    dialogVisible: function () {
      // this.form = this.checkRow;
      this.dialogShow = this.dialogVisible;
    }
  }
}
</script>

<style scoped>
</style>