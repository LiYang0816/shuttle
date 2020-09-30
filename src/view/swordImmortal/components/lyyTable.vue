<template>
  <div class="lyyTable">
    <div class="seal-title">{{ title }}</div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        prop="inscription"
        label="边款"
        align="center"
        v-if="
          tableData[0].inscription != undefined &&
          tableData[0].inscription != ''
        "
      >
      </el-table-column>
      <el-table-column
        prop="seal"
        label="印文"
        align="center"
        v-if="tableData[0].seal != undefined && tableData[0].seal != ''"
      >
      </el-table-column>
      <el-table-column
        prop="leftSeal"
        label="上印"
        align="center"
        v-if="tableData[0].leftSeal != undefined && tableData[0].leftSeal != ''"
      >
      </el-table-column>
      <el-table-column
        prop="rightSeal"
        label="下印"
        align="center"
        v-if="
          tableData[0].rightSeal != undefined && tableData[0].rightSeal != ''
        "
      >
      </el-table-column>
      <el-table-column
        prop="who"
        label="赠与"
        align="center"
        v-if="tableData[0].who != undefined && tableData[0].who != ''"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: '',
  props: ['seal', 'title'],
  data () {
    return {
      tableData: this.seal
    }
  },
  components: {},
  mounted () { },
  methods: {}
}
</script>

<style scoped>
.lyyTable {
  width: 100%;
  min-height: 300px;
}
.seal-title {
  font-size: 24px;
}
</style>