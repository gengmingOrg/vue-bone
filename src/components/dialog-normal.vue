
<template>
  <div class="">
    <el-dialog
      :visible="visible"  
      :width="configure.width"
      :close-on-click-modal="false"
      append-to-body
      custom-class="custom-dialog"
     :show-close="true"
    >
      <img :src="closeImg" alt="" class="close-img"  @click="close">
      <slot />
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          type="primary"
          @click="confirm"
        >确 定</el-button>
        <el-button @click="close">取 消</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>
import closeImg from "../views/img/50-close.png"
export default {
  name: 'custom-dialog',
  props: {
    configure: {
      type: Object,
      default () {
        return {
          title: '提示',
          width: '40%',
        }
      }
    },
    visible: {
      type: Boolean,
      required: true,
    }
  },
  data () {
    return {
      closeImg
    };
  },

  created () { },

  mounted () { },

  methods: {
    close () {
      this.$emit('close')
    },
    confirm () {
      this.$emit('confirm')
    }
  },

  watch: {},

  computed: {},

  components: {
  },
}

</script>
<style scoped>
</style>

<style>

.custom-dialog .close-img {
  position: absolute;
  width: 20px;
  top: 14px;
  right: 18px;
  z-index: 1004;
  cursor: pointer;
}

.custom-dialog .el-dialog__body {
  padding: 0;
}
.custom-dialog .el-dialog__headerbtn {
  top: 6px;
}

.custom-dialog .el-dialog__header {
  background-color: #f8f8f8;
  display: none;
}
.custom-dialog .el-dialog__footer {
  padding: 10px 24px 10px 0;
  border-top: 1px solid #0000001a;
}

</style>