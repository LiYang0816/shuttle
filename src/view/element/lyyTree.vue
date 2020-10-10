<template>
  <div class="tree">
    <el-tree
      ref="tree"
      :data="data"
      show-checkbox
      node-key="label"
      :default-checked-keys="theNode"
      :expand-on-click-node="false"
      :props="defaultProps"
      @check="getNode"
    >
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span class="tree-tag">
          <el-tag
            size="small"
            :class="
              node.label.includes('一级')
                ? 'primary-tags'
                : node.label.includes('二级')
                ? 'success-tags'
                : 'info-tags'
            "
            disable-transitions
          >
            {{ data.tags }}
          </el-tag>
        </span>
      </span>
    </el-tree>
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
        tags: '目录',
        list: [{
          id: 4,
          label: '二级 1-1',
          tags: '菜单',
          list: [{
            id: 9,
            label: '三级 1-1-1',
            tags: '按钮'
          }, {
            id: 10,
            label: '三级 1-1-2',
            tags: '按钮'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        tags: '目录',
        list: [{
          tags: '菜单',
          id: 5,
          label: '二级 2-1'
        }, {
          tags: '菜单',
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        tags: '目录',
        id: 3,
        label: '一级 3',
        list: [{
          tags: '菜单',
          id: 7,
          label: '二级 3-1'
        }, {
          tags: '菜单',
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'list',
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
.tree {
  width: 20%;
}
/* .tree-tag {
  margin-left: 30px;
} */
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
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
</style>