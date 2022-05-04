<template>
  <div class="auiliary-decision">
    <!-- 折叠面板 -->
    <Collapse
      class="auiliary-decision__left"
      @changeAlert="changeAlert"
    ></Collapse>

    <!-- 表格 -->
    <Table
      :data="tableData"
      :title="title"
    >
      <el-table-column
        fixed="right"
        label="操作"
        width="100"
      >
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row)"
            type="text"
            size="small"
          >查看</el-button>
        </template>
      </el-table-column>
    </Table>

    <!-- 分页 -->
    <Pagination
      :total="total"
      :currentPage="currentPage"
      @changeCurrentPage="changeCurrentPage"
    ></Pagination>

    <!-- 按钮 -->
    <Button @click="btnClick(1)">按钮</Button>
  </div>
</template>

<script>
import Collapse from "./collapse.vue"
import Table from "./table.vue";
import Pagination from './pagination.vue';
import Button from './button.vue';

export default {
  name: "",
  props: [""],
  data () {
    return {
      content: "",
      dialogVisible: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
      ],
      title: [
        {
          prop: "date",
          label: "时间",
        },
        {
          prop: "name",
          label: "姓名",
        },
      ],
      total: 50,
      currentPage: 1,
    };
  },

  created () { },

  mounted () { },

  methods: {
    // 修改弹出框内容
    changeAlert (type) {
      this.content = type;
      this.dialogVisible = true;
      // console.log(type);
    },
    handleClose (done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => { });
    },
    handleClick (row) {
      console.log();
    },
    changeCurrentPage(val){
      console.log(val, 'val');
    },
    // 按钮
    btnClick(val){
      console.log(val);
    }
  },

  watch: {},

  computed: {},

  components: {
    Collapse,
    Table,
    Pagination,
    Button,
  },
};
</script>
<style scoped>
@import "../style/index.min.css";
</style>