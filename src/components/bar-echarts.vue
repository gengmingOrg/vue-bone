<template>
  <div id="bar"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },

  created() {},

  mounted() {
    setTimeout(() => {
      this.init();
    }, 0);
  },

  methods: {
    init() {
      var chartDom = document.getElementById("bar");
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        grid: {
          top: 15,
          left: 45,
          right: 15,
          bottom: 40
        },
        xAxis: {
          type: "category",
          data: ["银川市", "固原市", "吴忠市", "石嘴山市", "中卫市"],
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: true,
            interval: 0,
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [10, 2, 2, 2, 1],
            type: "bar",
            itemStyle: {
              color: "#37C1CF",
            },
            barWidth: 20,
          },
        ],
      };

      option && myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },

  watch: {},

  computed: {},

  components: {},
};
</script>
<style scoped>
#bar {
  width: 100%;
  height: 213px;
}
</style>