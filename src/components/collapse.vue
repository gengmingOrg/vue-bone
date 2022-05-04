<template>
  <el-collapse
    v-model="activeNames"
    accordion
    class="collapse"
  >
    <el-collapse-item
      :title="tab.title"
      :name="tab.name"
      v-for="tab in tabList"
      :key="tab.name"
    >
      <ul class="collapse-content">
        <li
          v-for="(img, index) in tab.inmgList"
          :key="index"
          @click="changeAlert(img.label)"
        >
          <svg
            class="icon fn48"
            aria-hidden="true"
            v-html='img.svg'
          ></svg>
          <p class="label">{{img.label}}</p>
        </li>
      </ul>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  name: "",
  props: ["tabList", "activeNames"],
  data () {
    return {
    };
  },

  created () { },

  mounted () { },

  methods: {
    changeAlert (type) {
      // console.log(type);
      this.$emit('changeAlert', type)
    }
  },

  watch: {},

  computed: {},

  components: {},
};
</script>
<style scoped>
.collapse .fn48 {
  font-size: 48px;
}
.collapse .collapse-content {
  display: flex;
  flex-wrap: wrap;
}
.collapse .collapse-content li {
  text-align: center;
  width: 33.3%;
  margin-bottom: 10px;
}
.collapse .collapse-content .label {
  font-size: 14px;
  color: #333;
  margin-top: 6px;
}
.collapse >>> .el-collapse-item__header {
  font-size: 18px;
  margin-left: 30px;
}
.collapse >>> .el-collapse-item__wrap {
  padding: 10px 5px;
}
.collapse >>> .el-collapse-item__arrow {
  position: absolute;
  left: 8px;
}
</style>
