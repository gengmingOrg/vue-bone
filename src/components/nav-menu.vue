<template>
  <div>
    <el-menu
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      :unique-opened="true"
      background-color="#0E4AB5"
      text-color="#fff"
      :collapse-transition="true"
      :default-openeds="openeds"
    >
      <!-- menu-trigger="click" mode="horizontal" -->
      <!-- <div
        class="nav-switch"
        @click="changeCollapse"
      >
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href='#icon-zhedie'></use>
        </svg>
      </div> -->
      <el-submenu
        :index="index+''"
        v-for="(nav, index) in navList"
        :key="index"
      >
        <template slot="title">
          <i
            class="iconfont"
            :class="nav.icon"
          ></i>
          <span>{{nav.title}}</span>
          <div class="triangle"></div>
        </template>
        <el-menu-item
          :index="child.router"
          v-for="child in nav.childs"
          :key="child.name"
          @click="handleSub(child.router)"
          popper-class=”asdc“
        >{{child.name}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: '',
  props: ['navList'],
  data () {
    return {
      isCollapse: true,
      openeds: ['0']
    };
  },

  created () {
    // this.handleOpen('0')
  },

  mounted () { },

  methods: {
    handleOpen (key, keyPath) {
      console.log('11');
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    handleSub (keyPath) {
      this.$emit('changePage', keyPath)
    },
    changeCollapse () {
      // this.isCollapse = !this.isCollapse
    }
  },

  watch: {},

  computed: {},

  components: {},
}

</script>
<style scoped>
</style>
<style>
.el-menu-vertical {
  height: 100vh;
}
.nav-switch {
  background-color: #0e4ab5;
  width: 100%;
  height: 42px;
  text-align: center;
  /* cursor: pointer; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
.el-menu-vertical .el-submenu .el-menu-item {
  min-width: 199px;
}
.el-menu-vertical.el-menu--collapse {
  width: 58px;
}
.el-menu-vertical.el-menu--collapse > .el-submenu > .el-submenu__title span {
  height: 40px;
  width: 40px;
  display: block;
  visibility: visible;
  white-space: break-spaces;
  overflow: hidden;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  margin-top: 10px;
}
.el-menu-vertical.el-menu--collapse .el-submenu {
  padding: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.el-menu-vertical.el-menu--collapse > .el-submenu > .el-submenu__title {
  height: 140px;
  /* overflow: hidden; */
  overflow: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.el-menu-vertical .el-submenu__title i {
  font-size: 30px;
  line-height: 30px;
  color: #fff;
}
.el-menu--popup {
  background-color: #fff !important;
}
.el-menu--popup .el-menu-item {
  background-color: #fff !important;
  color: #222222 !important;
}
.el-menu--collapse .el-menu .el-submenu,
.el-menu--popup {
  min-width: 126px !important;
}
.el-menu--vertical .el-menu-item:not(.is-disabled):focus,
.el-menu--vertical .el-menu-item:not(.is-disabled):hover {
  color: #1e6ae5 !important;
}
.el-menu--vertical .el-menu .el-menu-item.is-active,
.el-menu--vertical .el-menu .el-submenu.is-active > .el-submenu__title {
  color: #1e6ae5 !important;
}
.el-menu--vertical .el-menu-item:not(.is-disabled):focus,
.el-menu--vertical .el-menu-item:not(.is-disabled):hover {
  color: #1e6ae5 !important;
}

.el-menu-vertical .is-opened {
  position: relative;
}
.el-menu-vertical .triangle {
  display: none;
}
.el-menu-vertical .is-opened .triangle {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-left: 10px solid rgb(11, 59, 145);
  border-bottom: 10px solid transparent;
  left: 56px;
  top: 60px;
}
.el-menu--vertical .el-menu--popup-right-start {
  margin-left: 10px;
}
</style>