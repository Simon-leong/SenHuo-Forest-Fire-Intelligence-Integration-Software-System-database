import type {AppRouteModule} from '/@/router/types';

import {getParentLayout, LAYOUT} from '/@/router/constant';
import {t} from '/@/hooks/web/useI18n';

const charts: AppRouteModule = {
  path: '/charts',
  name: 'Charts',
  component: LAYOUT,
  redirect: '/charts/echarts/map',
  meta: {
    orderNo: 3,
    icon: 'ion:bar-chart-outline',
    title: t('routes.demo.charts.charts'),
  },
  children: [
    {
      path: 'echarts',
      name: 'Echarts',
      component: getParentLayout('Echarts'),
      meta: {
        // title: 'Echarts',
        title: '森林火灾统计',
      },
      redirect: '/charts/echarts/map',
      children: [
        {
          path: 'map',
          name: 'Map',
          component: () => import('/@/views/demo/charts/Map.vue'),
          meta: {
            // title: t('routes.demo.charts.map'),
            title: t('全国森林火灾统计'),
          },
        },
        {
          path: 'line',
          name: 'Line',
          component: () => import('/@/views/demo/charts/Line.vue'),
          meta: {
            // title: t('routes.demo.charts.line'),
            title: t('火灾时间统计图'),
          },
        },
        {
          path: 'pie',
          name: 'Pie',
          component: () => import('/@/views/demo/charts/Pie.vue'),
          meta: {
            // title: t('routes.demo.charts.pie'),
            title: t('火灾原因统计图'),
          },
        },
      ],
    },
    {
      path: 'marsgis',
      name: 'Marsgis',
      meta: {
        title: '三维地图',
      },
      component: () => import('/@/marsgis/views/index.vue'),
    },
    {
      path: 'baiduMap',
      name: 'BaiduMap',
      meta: {
        title: t('routes.demo.charts.baiduMap'),
      },
      component: () => import('/@/views/demo/charts/map/Baidu.vue'),
    },
    // {
    //   path: 'aMap',
    //   name: 'AMap',
    //   meta: {
    //     title: t('routes.demo.charts.aMap'),
    //   },
    //   component: () => import('/@/views/demo/charts/map/Gaode.vue'),
    // },
    // {
    //   path: 'googleMap',
    //   name: 'GoogleMap',
    //   meta: {
    //     title: t('routes.demo.charts.googleMap'),
    //   },
    //   component: () => import('/@/views/demo/charts/map/Google.vue'),
    // },
  ],
};

export default charts;
