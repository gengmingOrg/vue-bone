
<template>
  <div class="">
    <el-dialog
      :visible="visible"
      :width="configure.width"
      :close-on-click-modal="false"
      :show-close="true"
      @close="close"
      append-to-body
      custom-class="custom-dialog"
      :destroy-on-close="true"
    >
      <img
        :src="closeImg"
        alt=""
        class="close-img"
        @click="close"
      >
      <!-- <BillVA
        v-if="bill.definecode"
        :defineCode="bill.definecode"
        :billCode="bill.billcode"
        :dataState='bill.datastate'
        :showToolBar="bill.showToolBar"
        :initValues="bill.initValues"
      ></BillVA> -->
    </el-dialog>
  </div>

</template>

<script>
import closeImg from "../views/img/50-close.png"
// import BillMain from "@va/bill-main"
export default {
  name: 'custom-dialog',
  inject: ["context"],
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
    },
    billProps: {
      type: Object,
      required: true,
    }
  },
  data () {
    return {
      closeImg,
      bill: ''
    };
  },

  created () { },

  mounted () {
  },

  methods: {
    close (type = true) {
      if(type){
        this.$emit('close')
      }else {
        this.$emit('close', 'refresh')
      }
    },
    confirm () {
      this.$emit('confirm')
    }
  },

  watch: {
    billProps: {
      handler: function (val) {
        this.bill = Object.assign(val)
      },
      deep: true
    },
    visible(nval) {
      if(nval){
        this.$bus.$once("after-save", ()=>{
          // console.log('11111');
          this.close(false)
        });
      }
    }
  },

  computed: {},

  components: {
    // BillVA: BillMain.Bill.BillRoute
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
.custom-dialog .el-dialog__header {
  background-color: #f8f8f8;
  display: none;
}
.custom-dialog .el-dialog__footer {
  padding: 10px 24px 10px 0;
  border-top: 1px solid #0000001a;
}
.custom-dialog .el-dialog__body {
  padding: 0;
}
.custom-dialog .el-dialog__headerbtn {
  top: 6px;
}
.v-modal {
  z-index: 1000 !important;
}
.el-dialog__wrapper {
  z-index: 1001 !important;
}
</style>