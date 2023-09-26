export interface GrowCardItem {
  icon: string;
  title: string;
  value: number;
  total: number;
  color: string;
  action: string;
}

export const growCardList: GrowCardItem[] = [
  {
    title: '访问数',
    icon: 'visit-count|svg',
    value: 20,
    total: 120,
    color: 'green',
    action: '月',
  },
  {
    title: '疑似火灾数',
    // icon: 'total-sales|svg',
    icon: 'Fire|svg',
    value: 2,
    total: 50,
    color: 'blue',
    action: '月',
  },
  {
    title: '起飞架次',
    // icon: 'download-count|svg',
    icon: 'plane_dash|svg',
    value: 8,
    total: 120,
    color: 'orange',
    action: '周',
  },
  {
    title: '扑灭数',
    icon: 'mie_huo|svg',
    value: 21,
    total: 107,
    color: 'purple',
    action: '年',
  },
];
