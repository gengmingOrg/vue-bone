<template>
  <div>
    <ul class="nav-tabs">
      <li
        v-for="tab in tabList"
        :key="tab.name"
        :class="[tab.type == active ? 'active':'']"
        @click="changeTabs(tab.type)"
      >
        <span class="name">
          {{tab.name}}
          <span class="line"></span>
        </span>
      </li>
      <!-- 显示内容的地方 -->

    </ul>
    <slot />
  </div>
</template>

<script>

export default {
  name: '',
  props: {
    tabList: {
      type: Array,
      required: true,
    },
    active: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      // tabList: [
      //   {name: '预案总则', type: '1'},
      //   {name: '预警预防', type: '2'},
      //   {name: '组织机构职责', type: '3'},
      //   {name: '分级分类处理', type: '4'},
      //   {name: '应急处置卡', type: '5'},
      //   {name: '应急保障', type: '6'},
      //   {name: '后期处置', type: '7'},
      // ],
      // active: 1
    };
  },

  created () { },

  mounted () { },

  methods: {
    changeTabs (type) {
      // this.active = type
      this.$emit('changeTabs', type)
    }
  },

  watch: {},

  computed: {},

  components: {},
}

</script>
<style scoped>
.nav-tabs {
  display: flex;
  height: 40px;
  background: #f7f7f7;
  font-size: 14px;
  font-weight: 300;
  color: #101317;
  line-height: 40px;
  font-family: PingFangSC-Regular, PingFang SC;
}

.nav-tabs li {
  padding-left: 22px;
  padding-right: 42px;
  cursor: pointer;
}

.nav-tabs li.active {
  color: #1e6ae5;
}

.nav-tabs .name {
  position: relative;
}

.nav-tabs li.active .line {
  width: 30px;
  height: 2px;
  background-color: #1e6ae5;
  position: absolute;
  bottom: -9px;
  left: calc(50% - 15px);
}
</style>