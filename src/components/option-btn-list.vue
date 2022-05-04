<template>
  <div>

    <ul class="map-option">
      <li
        v-for="item in svglist"
        :key="item.icon"
        :title="item.title"
      >
        <svg
          class="icon f50"
          aria-hidden="true"
          v-html='item.icon'
          @click="openDialog(item.defineCode)"
          
        ></svg>
      </li>
    </ul>
    <Dialog
      :billProps="bill"
      :visible="visible"
      @close="closeDialog"
      v-if="visibleF"
    />
  </div>
</template>

<script>
import Dialog from '../components/dialog.vue';

export default {
  name: '',
  props: [''],
  data () {
    return {
      svglist: [
        {
          icon: '<use xlink:href="#icon-gonglujiaotong"></use>',
          defineCode: "NVWA_B_TF_EM_EVENT_REPORT_ROAD",
          title:"公路交通突发事件",
        },
        {
          icon: '<use xlink:href="#icon-gonglushuiyun"></use>',
          defineCode: "NVWA_B_GLSYGCSCAQSG",
          title:"公路水运工程生产安全事故协调",
        },
        {
          icon: '<use xlink:href="#icon-daoluyunshu"></use>',
          defineCode: "NVWA_B_DLYSTFSJCJ",
          title:"道路运输突发事件",
        },
        {
          icon: '<use xlink:href="#icon-gonggongqiche"></use>',
          defineCode: "NVWA_B_CSGGQDCTFSJCJ",
          title:"城市公共汽电车突发事件",
        },
        {
          icon: '<use xlink:href="#icon-shuilujiaotong"></use>',
          defineCode: "NVWA_B_SLJTTFSJCJ",
          title:"水路交通突发事件",
        },
      ],
      bill: {
        // definecode: '',
        // datastate: "NEW",
        // showToolBar: true,
        // initValues: {
        //   EVENT_ID: ''
        // }
      },
      visible: false,
      visibleF: true,
    };
  },

  created () { },

  mounted () { },

  methods: {
    openDialog (code) {
      this.bill = Object.assign({
        definecode: code,
        datastate: "NEW",
        showToolBar: true
      })
      this.visible = true
    },
    closeDialog () {
      this.visible = false
      this.visibleF = false
      setTimeout(() => {
        this.visibleF = true
      }, 0);
    },
  },

  watch: {},

  computed: {},

  components: {
    Dialog
  },
}

</script>
<style scoped>
.map-option {
  padding: 21px 12px;
  background: #ffffff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.14);
  border-radius: 3px;
  display: flex;
}
.map-option li {
  padding: 0 18px;
  border-right: 1px solid #e5e5e5;
}
.map-option li svg {
  font-size: 22px;
  cursor: pointer;
}
.map-option li:last-child {
  border-right: 0px;
}
</style>