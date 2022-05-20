<template>
  <index />
  <!-- <Tree></Tree> -->
</template>

<script>
// import Tree from './components/tree.vue';
import index from "../../home-page/src/views/index.vue";
import "../../home-page/src/assets/iconfont/iconfont.js";
export default {
  name: "app",
  components: {
    index,
    // Tree,
  },
  inject: ["context"],
  data() {
    return {
      date: "2018R0003",
    };
  },
  props: ["config"],
  created() {
    // console.log(this.context.getId());
  },
};
</script>

<style scoped>
@import './base.css';
.app {
  font-family: PingFangSC-Regular, PingFang SC;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
  position: relative;
}
</style>
<style type="text/css">
@import "../../home-page/src/assets/iconfont/iconfont.css";
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
<style>
.scrollbar::-webkit-scrollbar {
  width: 10px;
  height: 1px;
}
/* //滑块部分 */
.scrollbar::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #666666;
  height: 80px;
  width: 6px;
}
/* //轨道部分 */
.scrollbar::-webkit-scrollbar-track { 
  display: none;
}

</style>