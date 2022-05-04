<template>
  <div class="custom-tree">
    <el-tree
      :props="treeProps"
      :load="loadNode"
      node-key="id"
      @node-click="nodeClick"
      :data="treeData"
      default-expand-all
    >
      <span
        class="custom-tree-node"
        slot-scope="{ node, data }"
      >
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use
            v-if="data.isLeaf == 0"
            xlink:href='#icon-a-jiagouliuchengbeifen2'
          ></use>
          <use
            v-else
            xlink:href='#icon-jiagouliucheng'
          ></use>
        </svg>
        <span>{{ node.label }}</span>
      </span>
    </el-tree>
  </div>
</template>

<script>

export default {
  name: '',
  props: ['treeProps', 'treeData', 'defaultExpandAll'],
  data () {
    return {
    };
  },

  created () { },

  mounted () {

  },

  methods: {
    // 查询树节点
    loadNode (node, resolve) {
      this.$emit('loadTreeData', node, resolve)
    },
    // 点击节点
    nodeClick (data, node, event) {
      // console.log(event, 'event');
      // console.log(data, 'data');
      if (node.isLeaf) {
        // 查询左侧
        this.$emit('getTableDataByDepartment', data.id)
      }
    }
  },

  watch: {},

  computed: {},

  components: {},
}

</script>
<style scoped>
.custom-tree >>> .el-tree-node > .el-tree-node__content {
  height: 36px;
}
.custom-tree >>> .el-tree-node.is-current > .el-tree-node__content .custom-tree-node span{
  color: #1E6AE5;
}

.custom-tree >>> .el-tree-node > .el-tree-node__content .custom-tree-node span {
  margin-left: 8px;
  color: #555555;
}
</style>
