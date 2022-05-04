<template>
  <div class="table-com">
    <el-table
      :data="data"
      stripe
      style="width: 100%"
      empty-text="暂无数据"
      border
      :height="height"
      @selection-change="handleSelectionChange"
      v-loading="loading"
    >
      <el-table-column
        type="selection"
        align="center"
        width="62"
        v-if="isShowCheck"
      >
      </el-table-column>
      <el-table-column
        type="index"
        label="序号"
        width="62"
        align="center"
        v-if="isShowIndex"
      >
      </el-table-column>
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        v-for="item in title"
        :key="item.prop"
        :show-overflow-tooltip="true"
      >
      </el-table-column>
      <!-- 可能有一些操作 -->
      <slot />
    </el-table>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    //  标题和属性
    title: {
      type: Array,
      required: true
    },
    //  表格数据
    data: {
      type: Array,
      required: true
    },
    isShowIndex: {
      type: Boolean,
      default: true
    },
    isShowCheck: {
      type: Boolean,
      default: true
    },
    height: {
      type: String,
      default(){
        return 'calc(100vh - 230px)'
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      multipleSelection:[],
    }
  },

  created () { },

  mounted () { },

  methods: {
    handleSelectionChange(val){
      // console.log(val);
      this.multipleSelection = val
    }
  },

  watch: {},

  computed: {},

  components: {}
}
</script>
<style scoped>
.table-com >>> .el-table th.el-table__cell {
  background-color: #f7f7f7;
}
.table-com >>> .el-table thead {
  color: #101317;
}
.table-com >>> .el-table thead th {
  height: 40px;
  padding: 8px 0px;
}
.table-com >>> .el-table td {
  padding: 3.5px 0;
}
</style>
