import designIcon from '@images/design-tab-icon.svg';
import devIcon from '@images/dev-tab-icon.svg';

export type ServicesTabsType = { title: string; icon: string }[];

export const servicesTabs: ServicesTabsType = [
  {
    title: 'Дизайн',
    icon: designIcon,
  },
  {
    title: 'Разработка',
    icon: devIcon,
  },
];
