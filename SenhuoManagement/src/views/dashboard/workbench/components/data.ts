interface GroupItem {
  title: string;
  icon: string;
  color: string;
  desc: string;
  date: string;
  group: string;
}

interface NavItem {
  title: string;
  icon: string;
  color: string;
}

interface DynamicInfoItem {
  avatar: string;
  name: string;
  date: string;
  desc: string;
}

export const navItems: NavItem[] = [
  {
    title: '首页',
    icon: 'ion:home-outline',
    color: '#1fdaca',
  },
  {
    title: '部门组成',
    icon: 'ion:grid-outline',
    color: '#bf0c2c',
  },
  {
    title: '部门动态',
    icon: 'ion:layers-outline',
    color: '#e18525',
  },
  {
    title: '系统管理',
    icon: 'ion:settings-outline',
    color: '#3fb27f',
  },
  {
    title: '权限管理',
    icon: 'ion:key-outline',
    color: '#4daf1bc9',
  },
  {
    title: '火灾图表',
    icon: 'ion:bar-chart-outline',
    color: '#00d8ff',
  },
];

export const dynamicInfoItems: DynamicInfoItem[] = [
  {
    // avatar: 'dynamic-avatar-1|svg',
    avatar: '7|svg',
    name: '张勇',
    date: '刚刚',
    desc: `给大疆精灵一号无人机充电`,
  },
  {
    avatar: '8|svg',
    name: '刘华',
    date: '1个小时前',
    desc: `确认森林西南角无火情`,
  },
  {
    avatar: '9|svg',
    name: '张伟',
    date: '1天前',
    desc: `组织和指挥随行医护人员`,
  },
  {
    avatar: 'dynamic-avatar-4|svg',
    name: '王超',
    date: '2天前',
    desc: `与当地居民进行联系，确保无人员受伤`,
  },
  {
    avatar: '12|svg',
    name: '刘强',
    date: '3天前',
    desc: `对之前火灾区域进行再次勘查`,
  },
  {
    avatar: '11|svg',
    name: '杨波',
    date: '1周前',
    desc: `运送防火物资和设备`,
  },
  {
    avatar: '10|svg',
    name: '王峰',
    date: '1周前',
    desc: `对消防员进行救火知识培训`,
  },
];

export const groupItems: GroupItem[] = [
  {
    title: '陈志鹏',
    icon: '1|svg',
    color: '',
    desc: '前往森林西北方进行火情查看和扑救',
    group: '灭火组',
    date: '2021-04-01',
  },
  {
    title: '张雪峰',
    icon: '2|svg',
    color: '#3fb27f',
    desc: '前往森林东北方进行火情巡视',
    group: '灭火组',
    date: '2021-04-01',
  },
  {
    title: '王良夫',
    icon: '3|svg',
    color: '#e18525',
    desc: '前往森林火灾现场疏散群众',
    group: '紧急疏散组',
    date: '2021-04-01',
  },
  {
    title: '林静怡',
    icon: '4|svg',
    color: '#bf0c2c',
    desc: '前往森林火灾现场协调指挥',
    group: '通讯组',
    date: '2021-04-01',
  },
  {
    title: '刘泽宇',
    icon: '5|svg',
    color: '#00d8ff',
    desc: '查看森林东南方疑似火灾点',
    group: '监测组',
    date: '2021-04-01',
  },
  {
    title: '郭博文',
    icon: '6|svg',
    color: '#4daf1bc9',
    desc: '维修损坏无人机',
    group: '维修组',
    date: '2021-04-01',
  }
];
