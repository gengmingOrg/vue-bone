<template>
<div class="bar-echarts">
  <slot />
  <div id="categeory"> </div>
</div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: '',
  props: ['data'],
  data () {
    return {

    };
  },

  created () { },

  mounted () {
    setTimeout(() => {
      this.init()
    }, 0);  
  },

  methods: {
    init () {
      var chartDom = document.getElementById("categeory");
      var myChart = echarts.init(chartDom);
      var option;
      // var that = this
      option = {
       
        tooltip: {
          trigger: "item",
        },
        color: [
          "#5B8FF9",
          "#5AD8A6",
          "#5D7092",
          "#E8684A",
          "#F6BD16",
        ],
        legend: {
          top: 100,
          left: 320,
          orient: "vertical",
          align: "left",
          icon: "circle",
          itemWidth: 10,
          itemHeight: 10,
          height: 140,
          itemGap: 14,
          textStyle: {
            color: "#626262",
            fontSize: 12,
            lineHeight: 14,
            fontFamily: "PingFangSC-Regular, PingFang SC",
          },
          // formatter: function (name) {
          //   var rate = '10%'
          //   let arr = [`{a|${name}}{b| ${rate}}`];
          //   return arr.join("\n");
          //   // console.log(params1, 'params1');
          // },
           textStyle: {
            color: "#626262",
            fontSize: 12,
            lineHeight: 14,
            fontFamily: "PingFangSC-Regular, PingFang SC",
            rich: {
              a: {
                verticalAlign: "right",
                fontSize: 12,
                align: "left",
                width: 80,
              },
              b: {
                fontSize: 12,
                align: "right",
                width: 50,
              },
            },
          },
        },
        //  graphic:{
        //     type:"text",
        //     left:"85",
        //     top:"90",
        //     style:{
        //         text:"48900",
        //         textAlign:"center",
        //         fill:"#333",
        //         fontSize:32,
        //         fontWeight:700,
        //     }
        // },
        // title:{
        //     text:"件数",
        //     left:"100",
        //     top:"65",
        //     textStyle:{
        //         color:"#555555",
        //         fontSize: 12,
        //         align:"center"
        //     }
        // },
        series: [
          {
            type: "pie",
            radius: ["100", "129"],
            center: ["140", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
              formatter() {
                return '件数\r\n2000'
              }
            },
            labelLine: {
              show: false,
            },
            data: this.data,
          },
        ],
      };

      option && myChart.setOption(option);
    }
  },

  watch: {},

  computed: {},

  components: {},
}

</script>
<style scoped>
#categeory {
  width: 100%;
  height: 330px;
}
.bar-echarts {
  position: relative;
}
.bar-echarts .tips-label {
  position: absolute;
}
</style>