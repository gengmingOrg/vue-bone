<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="changeCurrentPage"
    :current-page="currentPage"
    :page-sizes="pageSizes"
    :page-size="pageSize"
    layout="prev, pager, next, total, sizes, jumper"
    :total="total"
  >
  </el-pagination>
</template>

<script>

export default {
  name: '',
  props: {
    // 每页大小
    pageSize: {
      type: Number,
      default: 10
    },
    //一共多少条
    total: {
      type: Number,
      required: true
    },
    // 当前位置
    currentPage: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      pageSizes: [10, 20, 30],
    };
  },

  created () { },

  mounted () {
    // console.log(this.total, 'total', this.pageSize);
  },

  methods: {
    // 改变页数大小
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
      this.$emit('handleSizeChange', val)
    },
    // 跳转页面
    changeCurrentPage (val) {
      // console.log(`当前页: ${val}`);
      this.$emit('changeCurrentPage', val)
    }
  },

  watch: {},

  computed: {},

  components: {},
}

</script>
<style scoped>
</style>