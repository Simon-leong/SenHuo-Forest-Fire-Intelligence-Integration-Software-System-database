// import type { AppRouteModule } from '/@/router/types';

// import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

// const charts: AppRouteModule = {
//   path: '/flow',
//   name: 'FlowDemo',
//   component: LAYOUT,
//   redirect: '/flow/flowChart',
//   meta: {
//     orderNo: 6,
//     icon: 'tabler:chart-dots',
//     // title: t('routes.demo.flow.name'),
//     title: t('消防队伍装备管理'),
//   },
//   // children: [
//   //   {
//   //     path: 'flowChart',
//   //     name: 'flowChartDemo',
//   //     component: () => import('/@/views/demo/comp/flow-chart/index.vue'),
//   //     meta: {
//   //       title: t('routes.demo.flow.flowChart'),
//   //     },
//   //   },
//   // ],
// };

// export default charts;
import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const charts: AppRouteModule = {
  path: '/firefightingSupply',
  name: 'FirefightingSupply',
  component: LAYOUT,
  redirect: '/firefightingSupply/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ion:git-compare-outline',
    title: t('消防队伍装备管理'),
    orderNo: 6,
  },
  children: [
    {
      path: 'index',
      name: 'firefightingSupplyDemo',
      // component: () => import('/@/views/demo/system/EmergencySupply/index.vue'),
      component: () => import('/@/views/demo/system/FirefightingSupply/index1.vue'),
      meta: {
        title: t('消防队伍装备管理'),
        hideMenu: true,
      },
    },
  ],
};

export default charts;
