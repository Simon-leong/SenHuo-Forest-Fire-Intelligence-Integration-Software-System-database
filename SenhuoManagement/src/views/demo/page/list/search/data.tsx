import { FormSchema } from '/@/components/Form/index';

export const searchList = (() => {
  const result: any[] = [];
  // for (let i = 0; i < 6; i++) {
  //   result.push({
  //     id: i,
  //     title: 'CBERS-1 中巴资源卫星',
  //     description: ['中国', '国土变化', '自然资源', '灾害监测', '矿产开发'],
  //     content: '搭载传感器: IRMSS多光谱扫描仪 WFI宽视场成像仪 CCD相机',
  //     time: '2020-11-14 11:20',
  //   });
  // }
  result.push({
    id: 1,
    title: 'CBERS-1 中巴资源卫星',
    description: ['中国', '国土变化', '自然资源', '灾害监测', '矿产开发'],
    content: '搭载传感器: IRMSS多光谱扫描仪 WFI宽视场成像仪 CCD相机',
    time: '2020-11-14 11:20',
  });
  result.push({
    id: 2,
    title: '法国SPOT卫星',
    description: ['法国', '资源开发', '监测', '大气监测', '植被保护'],
    content: '搭载传感器: HRG几何装置 HRV、HRVIR、HRS传感器',
    time: '2020-11-14 11:20',
  });
  result.push({
    id: 3,
    title: '日本JERS-1卫星',
    description: ['日本', '地球陆域观测', '地学研究'],
    content: '搭载传感器: OPS光学传感器 SAR合成孔径雷达 CCD相机',
    time: '2020-11-14 11:20',
  });
  result.push({
    id: 4,
    title: '中国吉林一号光学A星',
    description: ['中国', '智慧城市建设', '交通设施监测', '国土资源监测'],
    content: '搭载传感器: 多光谱CCD图像传感器 HR WFI',
    time: '2020-11-14 11:20',
  });
  result.push({
    id: 5,
    title: '加拿大RADARSAT-1卫星',
    description: ['加拿大', '全球环境和土地利用', '自然资源监测'],
    content: '搭载传感器: SAR合成孔径雷达系统',
    time: '2020-11-14 11:20',
  });
  result.push({
    id: 6,
    title: '美国陆地卫星八号',
    description: ['美国', '植被分析', '地球水域监测', '大气监测', '军事监测'],
    content: '搭载传感器：多光谱扫描仪系统 Thematic Mapper仪器 OLI',
    time: '2020-11-14 11:20',
  });
  result.push({
    id: 7,
    title: '美国陆地卫星七号',
    description: ['美国', '植被分析', '地球水域监测', '大气监测', '军事监测'],
    content: '搭载传感器: PASC孔径太阳校准器 MSS、ETM+、OLI、TIRS传感器',
    time: '2020-11-14 11:20',
  });
  result.push({
    id: 8,
    title: '中国天绘一号',
    description: ['中国', '智慧城市建设', '交通设施监测', '国土资源监测', '资源开发', '监测'],
    content: '搭载传感器: 三线阵CCD相机 2米高分辨率全色相机 多光谱相机',
    time: '2020-11-14 11:20',
  });
  return result;
})();

export const actions: any[] = [
  // { icon: 'clarity:star-line', text: '156', color: '#018ffb' },
  // { icon: 'bx:bxs-like', text: '156', color: '#459ae8' },
  // { icon: 'bx:bxs-message-dots', text: '2', color: '#42d27d' },
];

export const schemas: FormSchema[] = [
  {
    field: 'field1',
    component: 'InputSearch',
    label: '项目名',
    colProps: {
      span: 8,
    },
    componentProps: {
      onChange: (e: any) => {
        console.log(e);
      },
    },
  },
];
