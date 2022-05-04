<template>
  <div class="btn-com" :class="[ type ]" @click="handleClick">
    <slot />
  </div>
</template>

<script>

export default {
  name: '',
  props: {
    type: {
      type: String,
      default: ""
    }
  },
  data () {
    return {

    };
  },

  created () { },

  mounted () { },

  methods: {
    handleClick(val){
      this.$emit('click',val)
    }
  },

  watch: {},

  computed: {},

  components: {},
}

</script>
<style scoped>
.btn-com {
  height: 32px;
  line-height: 31px;
  font-size: 14px;
  padding: 0px 16px;
  border-radius: 4px;
  border: 1px solid #D2D2D2;
  cursor: pointer;
  display: inline-block;
}
.btn-com.primary {
  color: #FFFFFF;
  background: #1E6AE5;
  border: 0px;
}
.btn-com + .btn-com{
  margin-left: 10px;
}
</style>