<template>
  <div class="lyyDialog">
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogShow"
      width="30%"
      :before-close="dialogFormVisible"
      @open="openDialog"
    >
      <el-form
        :model="checkRow"
        label-width="80px"
        ref="dialogForm"
        :rules="rules"
      >
        <el-form-item
          label="名称"
          required
          prop="createman"
          style="width: 400px"
        >
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
  </div>
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
      rules: {

      }
    }
  },
  mounted () {
  },
  methods: {
    dialogFormVisible () {
      console.log(this.checkRow, '1')
      this.$refs.dialogForm.resetFields();
      this.dialogShow = false;
      this.$emit('falseShow', this.checkRow.id);
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