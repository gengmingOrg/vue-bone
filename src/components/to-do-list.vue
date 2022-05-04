<template>
  <div class="to-do-list">
    <p class="title">
      待办列表
    </p>
    <div class="to-do-list__contant">
      <p class="tips">
        <i class="iconfont icon-a-ViewTree16shuxingzhedie"></i>
        共有{{dataList.length}}条待{{active == 1? '未处理': '已处理'}}信息，请及时查看
        <i class="iconfont icon-guanbi"></i>
      </p>
      <!-- 筛选 -->
      <ul class="tab">
        <li
          :class="[active == 1?'active':'']"
          @click="changeSelect(1)"
        >待处理</li>
        <!-- <li
          :class="[active == 2?'active':'']"
          @click="changeSelect(2)"
        >处理中</li> -->
        <li
          :class="[active == 3?'active':'']"
          @click="changeSelect(3)"
        >已处理</li>
      </ul>
      <div class="list-container">
        <ul class="list">
          <li
            v-for="(todo, index) in dataList"
            :key="index"
          >
            <div class="list-name">
              <span>{{todo.eventName}}</span>
              <svg
                class="icon"
                aria-hidden="true"
              >
                <use
                  xlink:href='#icon-a-gantanhao_iconcopy3'
                  v-if="todo.eventGradeCode == '01'"
                ></use>
                <use
                  xlink:href='#icon-a-gantanhao_iconcopy32'
                  v-if="todo.eventGradeCode == '02'"
                ></use>
                <use
                  xlink:href='#icon-a-gantanhao_iconcopy31'
                  v-if="todo.eventGradeCode == '03'"
                ></use>
              </svg>
            </div>
            <p>
              <i class="iconfont icon-zuobiao"></i>
              {{todo.happenAddress}}
            </p>
            <p>
              <i class="iconfont icon-yuanyin"></i>
              {{todo.eventTypeName}}
            </p>
            <p>
              <i class="iconfont icon-shijian"></i>
              {{todo.happenTime}}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  props: [''],
  inject: ["context"],
  data () {
    return {
      count: 37,
      active: 1,
      toDoList: [],
      dataList: [],
    };
  },

  created () { },

  mounted () {
    this.getData()
  },

  methods: {
    changeSelect (val) {
      this.active = val
    },
    getData () {
      let url = `/api/nvwa/traffic/emergency/statistics/handingEventList`;
      this.context
        .getPlugin("http")
        .get(url)
        .then((value) => {
          let { code, data, msg } = value.data;
          if (code == 'SUCCESS') {
            // console.log(data);
            this.toDoList = [...data]
            // this.dataList = [...data]
            this.dataList = data.filter(item => {
              if (item.eventStatus == this.active) {
                return item
              }
            })
          } else {
            this.$message({
              message: '查询列表失败',
              type: 'error'
            });
          }
        });
    }
  },

  watch: {
    active (val) {
      this.dataList = this.toDoList.filter(item => {
        if (item.eventStatus == val) {
          return item
        }
      })
    }
  },

  computed: {

  },

  components: {},
}

</script>
<style scoped>
@import "../style/to-do-list.css";
</style>
<style>
.list::-webkit-scrollbar {
  width: 10px;
  height: 1px;
}
/* //滑块部分 */
.list::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #666666;
  height: 80px;
  width: 6px;
}
/* //轨道部分 */
.list::-webkit-scrollbar-track {
  display: none;
}
</style>