import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/account',
  meta: {
    orderNo: 8,
    icon: 'ion:settings-outline',
    title: t('routes.demo.system.moduleName'),
  },
  children: [
    // {
    //   path: 'account',
    //   name: 'AccountManagement',
    //   meta: {
    //     // title: t('routes.demo.system.account'),
    //     title: t('用户管理'),
    //     ignoreKeepAlive: false,
    //   },
    //   component: () => import('/@/views/demo/system/account/index.vue'),
    // },
    {
      path: 'account_detail/:id',
      name: 'AccountDetail',
      meta: {
        hideMenu: true,
        title: t('routes.demo.system.account_detail'),
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/system/account',
      },
      component: () => import('/@/views/demo/system/account/AccountDetail.vue'),
    },
    // {
    //   path: 'role',
    //   name: 'RoleManagement',
    //   meta: {
    //     // title: t('routes.demo.system.role'),
    //     title: t('无人机管理'),
    //     ignoreKeepAlive: true,
    //   },
    //   component: () => import('/@/views/demo/system/role/index.vue'),
    // },
    // {
    //   path: 'role_1',
    //   name: 'RoleManagement_1',
    //   meta: {
    //     // title: t('routes.demo.system.role'),
    //     title: t('高塔管理'),
    //     ignoreKeepAlive: true,
    //   },
    //   component: () => import('/@/views/demo/system/role/index.vue'),
    // },
    //菜单管理
    // {
    //   path: 'menu',
    //   name: 'MenuManagement',
    //   meta: {
    //     title: t('routes.demo.system.menu'),
    //     ignoreKeepAlive: true,
    //   },
    //   component: () => import('/@/views/demo/system/menu/index.vue'),
    // },
    // {
    //   path: 'dept',
    //   name: 'DeptManagement',
    //   meta: {
    //     // title: t('routes.demo.system.dept'),
    //     title: t('机群管理'),
    //     ignoreKeepAlive: true,
    //   },
    //   component: () => import('/@/views/demo/system/dept/index.vue'),
    // },
    {
      path: 'changePassword',
      name: 'ChangePassword',
      meta: {
        title: t('routes.demo.system.password'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/system/password/index.vue'),
    },
  ],
};

export default system;
