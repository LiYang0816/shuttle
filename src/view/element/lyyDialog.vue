<template>
  <div class="lyyDialog">
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogShow"
      width="30%"
      :before-close="handleClose"
    >
      <el-form :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'lyyDialog',
  props: ['dialogVisible', 'dialogTitle'],
  data () {
    return {
      form: {

      },
      dialogShow: false
    }
  },
  mounted () {
  },
  methods: {
    dialogFormVisible () {
      this.dialogShow = false;
      this.$emit('falseShow');
    },
    handleClose () {
      this.dialogShow = false;
    }
  },
  watch: {
    dialogVisible: function () {
      console.log('show');
      this.dialogShow = this.dialogVisible
    }
  }
}
</script>

<style scoped>
</style>