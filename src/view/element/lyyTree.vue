<template>
  <div class="tree">
    <el-tree
      ref="tree"
      :data="data"
      show-checkbox
      node-key="label"
      :default-checked-keys="theNode"
      :props="defaultProps"
      @check="getNode"
    ></el-tree>
    <!-- :default-expanded-keys="[2, 3]" -->
  </div>
</template>

<script>
export default {
  name: 'LyyTree',
  props: ['chooseNodeId'],
  data () {
    return {
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      theNode: []
    }
  },
  components: {},
  mounted () {
    this.setNodes(1);
  },
  methods: {
    getNode (msg, node) {
      console.log(msg, node, '选中的值');
    },
    setNodes (val) {
      if (val == 1) {
        this.$refs.tree.setCheckedKeys(['三级 1-1-2', '二级 3-2']);
      } else {
        this.$refs.tree.setCheckedKeys(['三级 1-1-2', '二级 2-1', '二级 3-2']);
      }
    }
  },
  watch: {
    chooseNodeId: function () {
      console.log(this.chooseNodeId, '观察');
      if (this.chooseNodeId == '1') {
        this.setNodes(this.chooseNodeId);
      } else {
        this.setNodes(this.chooseNodeId);
      }
    }
  }
}
</script>

<style scoped>
</style>