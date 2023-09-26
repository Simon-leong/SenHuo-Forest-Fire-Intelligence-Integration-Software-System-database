import type {AppRouteModule} from '/@/router/types';

import {getParentLayout, LAYOUT} from '/@/router/constant';
// import {ExceptionEnum} from '/@/enums/exceptionEnum';
import {t} from '/@/hooks/web/useI18n';

// const ExceptionPage = () => import('/@/views/sys/exception/Exception.vue');

const page: AppRouteModule = {
  path: '/page-demo',
  name: 'PageDemo',
  component: LAYOUT,
  redirect: '/page-demo/form/basic',
  meta: {
    orderNo: 3,
    icon: 'ion:aperture-outline',
    // title: t('routes.demo.page.page'),
    title: t('可视化监控'),
  },
  children: [
    // =============================list start=============================
    {
      path: 'basic',
      name: 'ListBasicPage',
      component: () => import('/@/views/demo/page/list/basic/index.vue'),
      meta: {
        // title: t('routes.demo.page.listBasic'),
        title: t('无人机状态监控'),
      },
    },
    {
      path: 'card',
      name: 'ListCardPage',
      component: () => import('/@/views/demo/page/list/card/index.vue'),
      meta: {
        // title: t('routes.demo.page.listCard'),
        title: t('高塔状态监控'),
      },
    },
    {
      path: 'search',
      name: 'ListSearchPage',
      component: () => import('/@/views/demo/page/list/search/index.vue'),
      meta: {
        // title: t('routes.demo.page.listSearch'),
        title: t('卫星搜索'),
      },
    },
    {
      path: 'result',
      name: 'ResultPage',
      redirect: '/page-demo/result/success',
      component: getParentLayout('ResultPage'),

      meta: {
        // title: t('routes.demo.page.result'),
        title: t('无人机航迹追踪'),
      },
      children: [
        {
          path: 'success',
          name: 'ResultSuccessPage',
          component: () => import('/@/views/demo/page/result/success/index.vue'),
          meta: {
            title: t('项目列表'),
          },
        },
      ],
    },
  ],
};

export default page;
