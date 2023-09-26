import type {AppRouteModule} from '/@/router/types';

import {getParentLayout, LAYOUT} from '/@/router/constant';
import {RoleEnum} from '/@/enums/roleEnum';
import {t} from '/@/hooks/web/useI18n';

const permission: AppRouteModule = {
  path: '/permission',
  name: 'Permission',
  component: LAYOUT,
  redirect: '/permission/front/page',
  meta: {
    orderNo: 9,
    icon: 'ion:key-outline',
    // title: t('routes.demo.permission.permission'),
    title: t('各组权限'),
  },


  children: [
    {
      path: 'front/page',
      name: 'PermissionFrontDemo',
      // component: getParentLayout('PermissionFrontDemo'),
      component: () => import('/@/views/demo/permission/front/CommandGroup.vue'),
      meta: {
        // title: t('routes.demo.permission.front'),
        title: t('指挥部权限'),
      },
      // children: [
      //   {
      //     path: 'page',
      //     name: 'FrontPageAuth',
      //     component: () => import('/@/views/demo/permission/front/index.vue'),
      //     meta: {
      //       title: t('routes.demo.permission.frontPage'),
      //     },
      //   },
      //   {
      //     path: 'btn',
      //     name: 'FrontBtnAuth',
      //     component: () => import('/@/views/demo/permission/front/Btn.vue'),
      //     meta: {
      //       title: t('routes.demo.permission.frontBtn'),
      //     },
      //   },
      //   {
      //     path: 'auth-pageA',
      //     name: 'FrontAuthPageA',
      //     component: () => import('/@/views/demo/permission/front/AuthPageA.vue'),
      //     meta: {
      //       title: t('routes.demo.permission.frontTestA'),
      //       roles: [RoleEnum.SUPER],
      //     },
      //   },
      //   {
      //     path: 'auth-pageB',
      //     name: 'FrontAuthPageB',
      //     component: () => import('/@/views/demo/permission/front/AuthPageB.vue'),
      //     meta: {
      //       title: t('routes.demo.permission.frontTestB'),
      //       roles: [RoleEnum.TEST],
      //     },
      //   },
      // ],
      // children: [
      //   {
      //     path: 'page',
      //     name: 'FrontPageAuth',
      //     component: () => import('/@/views/demo/permission/front/index.vue'),
      //     meta: {
      //       title: t('routes.demo.permission.frontPage'),
      //     },
      //   },
      //   {
      //     path: 'btn',
      //     name: 'FrontBtnAuth',
      //     component: () => import('/@/views/demo/permission/front/Btn.vue'),
      //     meta: {
      //       title: t('routes.demo.permission.frontBtn'),
      //     },
      //   },
      //   {
      //     path: 'auth-pageA',
      //     name: 'FrontAuthPageA',
      //     component: () => import('/@/views/demo/permission/front/AuthPageA.vue'),
      //     meta: {
      //       title: t('routes.demo.permission.frontTestA'),
      //       roles: [RoleEnum.SUPER],
      //     },
      //   },
      //   {
      //     path: 'auth-pageB',
      //     name: 'FrontAuthPageB',
      //     component: () => import('/@/views/demo/permission/front/AuthPageB.vue'),
      //     meta: {
      //       title: t('routes.demo.permission.frontTestB'),
      //       roles: [RoleEnum.TEST],
      //     },
      //   },
      // ],

    },


    {
      path: 'back/page',
      name: 'PermissionBackDemo',
      // component: getParentLayout('PermissionBackDemo'),
      component: () => import('/@/views/demo/permission/back/FightFire.vue'),
      meta: {
        // title: t('routes.demo.permission.back'),
        title: t('灭火组权限'),
      },
      // children: [
      //   {
      //     path: 'page',
      //     name: 'BackAuthPage',
      //     component: () => import('/@/views/demo/permission/back/index.vue'),
      //     meta: {
      //       title: t('routes.demo.permission.backPage'),
      //     },
      //   },
      //   {
      //     path: 'btn',
      //     name: 'BackAuthBtn',
      //     component: () => import('/@/views/demo/permission/back/Btn.vue'),
      //     meta: {
      //       title: t('routes.demo.permission.backBtn'),
      //     },
      //   },
      // ],
    },


    {
      path: 'back/communicate',
      // name: 'PermissionBackDemo',
      name: 'PermissionCommunicate',
      // component: getParentLayout('PermissionBackDemo'),
      component: () => import('/@/views/demo/permission/back/Communicate.vue'),
      meta: {
        // title: t('routes.demo.permission.back'),
        title: t('通讯组权限'),
      },
    },


    {
      path: 'back/repair',
      // name: 'PermissionBackDemo',
      name: 'PermissionRepair',
      // component: getParentLayout('PermissionBackDemo'),
      component: () => import('/@/views/demo/permission/back/repair.vue'),
      meta: {
        // title: t('routes.demo.permission.back'),
        title: t('维修组权限'),
      },
    }
  ],
};

export default permission;
