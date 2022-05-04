<template>
  <div class="drawer" :class="className">
    <i
      class="iconfont icon-guanbi closed"
      :class="{ active: !drawer }"
      @click="closeDrawer"
      v-if="isShowClose"
    ></i>
    <el-drawer
      :modal="false"
      :wrapperClosable="false"
      :visible.sync="drawer"
      :direction="direction"
      :with-header="false"
      :size="size"
      v-loading="loading"
    >
      <slot />
    </el-drawer>
  </div>
</template>

<script>

export default {
  name: '',
  props: {
    drawer: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "100%"
    },
    className: {
      type: String,
    },
    isShowClose: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      direction: 'rtl',
    };
  },

  created () { },

  mounted () { },

  methods: {
    closeDrawer () {
      this.$emit('closeDrawer')
    }
  },

  watch: {},

  computed: {},

  components: {},
}

</script>
<style scoped>
.drawer .active {
  display: none;
}
.drawer .closed {
  position: fixed;
  top: 135px;
  left: 190px;
  z-index: 1000;
  cursor: pointer;
}
</style>
<style>
.drawer .el-drawer__wrapper {
  z-index: 999 !important;
  top: 70px
}
</style>