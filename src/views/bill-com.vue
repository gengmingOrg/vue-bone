<template>
  <div>
    <BillVA
      :defineCode="bill.definecode"
      :billCode="bill.billcode"
      :dataState='bill.datastate'
      :showToolBar="bill.showToolBar"
      :initValues="bill.initValues"
    ></BillVA>
  </div>
</template>

<script>
export default {
  name: '',
  inject: ["context"],
  props: ['bill'],
  data () {
    return {};
  },

  created () { },

  mounted () { },

  methods: {},

  watch: {
    bill: {
      immediate: true,
      deep: true,
      handler (val) {
        this.$bus.$off("after-save")
        this.$bus.$once("after-save", ()=>{
          this.$emit("close")
        });
      }
    }
  },

  computed: {},

  components: {
  },
}

</script>
<style scoped>
</style>