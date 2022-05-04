
<template>
  <div class="">
    <el-dialog
      :visible="visible"  
      :title="title"
      :close-on-click-modal="false"
      append-to-body
      custom-class="custom-dialog-has-title"
      @close="close"
    >
      <slot />
      <!-- <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          type="primary"
          @click="close"
        >确 定</el-button>
      </span> -->
    </el-dialog>
  </div>

</template>

<script>
export default {
  name: 'custom-dialog-has-title',
  props: {
    configure: {
      type: Object,
      default () {
        return {}
      }
    },
    title: {
      type: String,
      default:'应急预案详情'
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
  data () {
    return {
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
.el-dialog.custom-dialog-has-title{
  width: 910px
}
.custom-dialog-has-title .el-dialog__body {
  padding: 0;
  height: 668px;
}
.custom-dialog-has-title .el-dialog__header {
  border-bottom: 1px solid #E8E8E8;
}
.custom-dialog-has-title .el-dialog__footer {
  padding: 10px 24px 10px 0;
  border-top: 1px solid #E8E8E8;
}

</style>