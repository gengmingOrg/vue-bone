<template>
  <div class="query">
    <!-- 添加自定义查询组件 -->
    <query :config="config" :initParams="initParams" v-if="flage"/>
  </div>
</template>

<script>
import query from "@emergency/common-query-lib";
export default {
  name: '',
  props: {
    config: {
      type: Object,
      required: true,
    },
    initParams: {
      type: Array,
    }
  },
  data () {
    return {
      flage: true
    };
  },

  created () { },

  mounted () { 
    console.log(this.config, 'config');
  },

  methods: {},

  watch: {
    config: {
      deep: true,
      handler: function (val, oldVal){
        console.log(val);
        this.flage =false
        this.$nextTick(()=>{
          this.flage = true
        })
        
      }
    }
  },

  computed: {},

  components: {
    query: query.CommonQueryExecute
  },
}

</script>
<style scoped>
.query {
  height: 100%;
}
</style>