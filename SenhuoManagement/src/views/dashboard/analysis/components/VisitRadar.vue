<template>
  <Card title="火灾发生方位数" :loading="loading">
    <div ref="chartRef" :style="{ width, height }"></div>
  </Card>
</template>
<script lang="ts" setup>
import {Ref, ref, watch} from 'vue';
import {Card} from 'ant-design-vue';
import {useECharts} from '/@/hooks/web/useECharts';

const props = defineProps({
  loading: Boolean,
  width: {
    type: String as PropType<string>,
    default: '100%',
  },
  height: {
    type: String as PropType<string>,
    default: '300px',
  },
});
const chartRef = ref<HTMLDivElement | null>(null);
const {setOptions} = useECharts(chartRef as Ref<HTMLDivElement>);

watch(
  () => props.loading,
  () => {
    if (props.loading) {
      return;
    }
    setOptions({
      legend: {
        bottom: 0,
        data: ['一般火灾', '零星火灾'],
      },
      tooltip: {},
      radar: {
        radius: '60%',
        splitNumber: 8,
        indicator: [
          {
            // name: '电脑',
            name: 'N',
          },
          {
            name: 'NW',
          },
          {
            name: 'W',
          },
          {
            name: 'SW',
          },
          {
            name: 'S',
          },
          {
            name: 'SE',
          },
          {
            name: 'E',
          },
          {
            name: 'NE',
          },
        ],
      },
      series: [
        {
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            shadowBlur: 0,
            shadowColor: 'rgba(0,0,0,.2)',
            shadowOffsetX: 0,
            shadowOffsetY: 10,
            opacity: 1,
          },
          data: [
            {
              value: [1, 5, 12, 9, 20, 32, 26, 1],
              name: '一般火灾',
              itemStyle: {
                color: '#b6a2de',
              },
            },
            {
              value: [1, 2, 6, 17, 30, 69, 81, 1],
              name: '零星火灾',
              itemStyle: {
                color: '#5ab1ef',
              },
            },
          ],
        },
      ],
    });
  },
  {immediate: true},
);
</script>
