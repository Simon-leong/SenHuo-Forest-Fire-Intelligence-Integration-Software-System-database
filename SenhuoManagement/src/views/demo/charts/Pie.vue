<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>
<script lang="ts">
import {defineComponent, PropType, ref, Ref, onMounted} from 'vue';

import {useECharts} from '/@/hooks/web/useECharts';

export default defineComponent({
  props: {
    width: {
      type: String as PropType<string>,
      default: '100%',
    },
    height: {
      type: String as PropType<string>,
      default: 'calc(100vh - 78px)',
    },
  },
  setup() {
    const chartRef = ref<HTMLDivElement | null>(null);
    const {setOptions} = useECharts(chartRef as Ref<HTMLDivElement>);
    const dataAll = [389, 259, 262, 324, 232, 176, 196, 214, 133, 370];
    const yAxisData = [
      '烧荒烧炭',
      '上坟烧纸',
      '野外吸烟',
      '小孩玩火',
      '炼山造林',
      '电线引起',
      '取暖做饭',
      '痴呆弄火',
      '未查明火源',
      '家火上山',
    ];
    onMounted(() => {
      setOptions({
        backgroundColor: '#0f375f',
        title: [
          {
            text: '森林火灾原因占比',
            left: '2%',
            top: '1%',
            textStyle: {
              color: '#fff',
              fontSize: 14,
            },
          },
          {
            text: '人为原因Top10',
            left: '40%',
            top: '1%',
            textStyle: {
              color: '#fff',
              fontSize: 14,
            },
          },
          {
            text: '天气原因占比',
            left: '2%',
            top: '50%',
            textStyle: {
              color: '#fff',
              fontSize: 14,
            },
          },
        ],
        grid: [{left: '50%', top: '7%', width: '45%', height: '90%'}],
        tooltip: {
          formatter: '{b} ({c})',
        },
        xAxis: [
          {
            gridIndex: 0,
            axisTick: {show: false},
            axisLabel: {show: false},
            splitLine: {show: false},
            axisLine: {show: false},
          },
        ],
        yAxis: [
          {
            gridIndex: 0,
            interval: 0,
            data: yAxisData.reverse(),
            axisTick: {show: false},
            axisLabel: {show: true},
            splitLine: {show: false},
            axisLine: {show: true, lineStyle: {color: '#6173a3'}},
          },
        ],
        series: [
          {
            name: '森林火灾原因占比',
            type: 'pie',
            radius: '30%',
            center: ['22%', '25%'],
            data: [
              {value: 75, name: '人为原因'},
              {value: 13, name: '天气因素'},
              {value: 7, name: '自然因素'},
              {value: 5, name: '其他因素'},
            ],
            labelLine: {show: false},
            label: {
              show: true,
              formatter: '{b} \n ({d}%)',
              color: '#B1B9D3',
            },
          },
          {
            name: '天气原因占比',
            type: 'pie',
            radius: '30%',
            center: ['22%', '75%'],
            labelLine: {show: false},
            data: [
              // {value: 25, name: '未熄灭的烟蒂、火柴等'},
              // {value: 22, name: '篝火、烧烤'},
              // {value: 2, name: '放烟花爆竹等'},
              // {value: 1, name: '意外事故(例如工地、交通事故等)'},
              // {value: 4, name: '纵火、恶意放火等'},
              // {value:2,name:'其他人为因素'}
              {value: 90, name: '干旱'},
              {value: 5, name: '高温和低湿度'},
              {value: 1, name: '闪电'},
            ],
            label: {
              show: true,
              formatter: '{b} \n ({d}%)',
              color: '#B1B9D3',
            },
          },
          {
            name: '投诉原因TOP10',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            barWidth: '45%',
            itemStyle: {color: '#86c9f4'},
            label: {show: true, position: 'right', color: '#9EA7C4'},
            data: dataAll.sort(),
          },
        ],
      });
    });
    return {chartRef};
  },
});
</script>
