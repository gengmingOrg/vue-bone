<template>
  <div id="main">
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: '',
  props: ['xData', 'series'],
  data () {
    return {

    };
  },

  created () {

  },

  mounted () {
    setTimeout(() => {
      this.init()
    }, 0); 
  },

  methods: {
    init () {
      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option;
      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '16',
          right: '16',
          bottom: '16',
          top: '30',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          // data: ['2009', '2010', '2011', '2012', '2013', '2014', '2015'],
          data: this.xData,
          axisLine: {
            lineStyle: {
              color: '#000000',
              opacity: 0.25
            }
          },
          axisTick: {
            lineStyle: {
              color: '#000000',
              opacity: 0.25
            },
            alignWithLabel: true,
          },
          axisLabel: {
            color: '#000000',
            opacity: 0.4
          }
        },
        color:['#5B8FF9', '#5AD8A6', '#5D7092','#F6BD16', '#E8684A'],
        yAxis: {
          type: 'value'
        },
        series: this.series,
        // series: [
        //   {
        //     name: 'Email',
        //     type: 'line',
        //     stack: 'Total',
        //     symbol: 'none',
        //     data: [120, 132, 101, 134, 90, 230, 210]
        //   },
        //   {
        //     name: 'Union Ads',
        //     type: 'line',
        //     stack: 'Total',
        //     symbol: 'none',
        //     data: [220, 182, 191, 234, 290, 330, 310]
        //   },
        //   {
        //     name: 'Video Ads',
        //     type: 'line',
        //     stack: 'Total',
        //     symbol: 'none',
        //     data: [150, 232, 201, 154, 190, 330, 410]
        //   },
        //   {
        //     name: 'Direct',
        //     type: 'line',
        //     stack: 'Total',
        //     symbol: 'none',
        //     data: [320, 332, 301, 334, 390, 330, 320]
        //   },
        //   {
        //     name: 'Search Engine',
        //     type: 'line',
        //     stack: 'Total',
        //     symbol: 'none',
        //     data: [820, 932, 901, 934, 1290, 1330, 1320]
        //   }
        // ]
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
#main {
  width: 100%;
  height: 100%;
}
</style>