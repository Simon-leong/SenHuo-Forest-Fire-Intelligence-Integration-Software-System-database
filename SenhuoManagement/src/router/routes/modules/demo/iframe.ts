import type {AppRouteModule} from '/@/router/types';

import {LAYOUT} from '/@/router/constant';

const IFrame = () => import('/@/views/sys/iframe/FrameBlank.vue');
import {t} from '/@/hooks/web/useI18n';

const iframe: AppRouteModule = {
  path: '/frame',
  name: 'Frame',
  component: LAYOUT,
  redirect: '/frame/submit_fire',
  meta: {
    orderNo: 4,
    icon: 'ion:tv-outline',
    hideChildrenInMenu: true,
    // title: t('routes.demo.iframe.frame'),
    title: t('火势上报'),
  },
  children: [{
    path: "submit_fire",
    name: "submit_fire",
    meta: {
      title: t("火势上报")
    },
    component: () => {
      return import('/@/views/demo/page/list/basic/fireSumit.vue');
    }
  }]
  // children: [
  //   {
  //     path: 'doc',
  //     name: 'Doc',
  //     component: IFrame,
  //     meta: {
  //       frameSrc: 'https://vvbin.cn/doc-next/',
  //       title: t('routes.demo.iframe.doc'),
  //     },
  //   },
  //   {
  //     path: 'antv',
  //     name: 'Antv',
  //     component: IFrame,
  //     meta: {
  //       frameSrc: 'https://2x.antdv.com/docs/vue/introduce-cn/',
  //       title: t('routes.demo.iframe.antv'),
  //     },
  //   },
  //   {
  //     path: 'https://vvbin.cn/doc-next/',
  //     name: 'DocExternal',
  //     component: IFrame,
  //     meta: {
  //       title: t('routes.demo.iframe.docExternal'),
  //     },
  //   },
  // ],
};

export default iframe;
