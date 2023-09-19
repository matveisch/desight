import designIcon from '@images/design-tab-icon.svg';
import devIcon from '@images/dev-tab-icon.svg';
import beetrade from '@images/beetrade-icon.svg';
import mail from '@images/mail-foo.svg';

export type TabType = {
  title?: string;
  icon?: string;
};

export type WorkDataType = {
  title: string;
  icon: string;
  link: string;
  blockDescription: string;
  description: string;
};

export const servicesTabs: TabType[] = [
  {
    title: 'Дизайн',
    icon: designIcon,
  },
  {
    title: 'Разработка',
    icon: devIcon,
  },
];

export const workTabs: TabType[] = [
  {
    title: 'Libira',
  },
  {
    title: 'BeeTrade',
  },
  {
    title: 'Radar Digitaly',
  },
];

export const workData: WorkDataType[] = [
  {
    title: 'Libira',
    icon: beetrade,
    link: '',
    blockDescription:
      'Веб-сайт для рекламы и заказа мероприятий – лучший способ презентовать продукт',
    description:
      'Удобная и информативная страница наглядно демонстрирует опыт, который клиент получит в заведении. Возможность быстро и просто оставить свои данные для связи с рестораном, все происходит в два клика.',
  },
  {
    title: 'BeeTrade',
    icon: beetrade,
    link: '',
    blockDescription: 'Комплексная платформа для онлайн-обучения пользователей трейдингу. ',
    description:
      'Грамотно спроектированный и оптимизированный веб-сайт позволяет просматривать обучающие видео, изучать материалы курса и учиться анализировать информацию. Просто и доступно для каждого пользователя.',
  },
  {
    title: 'Radar Digitaly',
    icon: beetrade,
    link: '',
    blockDescription: 'Захватывающий внимание веб-сайт для рекламного агентства',
    description:
      'Лучший способ впечатлить клиента – полностью погрузить его в веб-сайт. Современный дизайн и приятные анимации нацелены на привлечение внимания пользователя с первых секунд.',
  },
];

export const social = [
  {
    name: 'Telegram',
    srcWhite: require('@images/tg-w.svg').default,
    srcBlue: require('@images/tg.svg').default,
    link: '',
  },
  {
    name: 'Facebook',
    srcWhite: require('@images/fb-w.svg').default,
    srcBlue: require('@images/fb.svg').default,
    link: '',
  },
  {
    name: 'Behance',
    srcWhite: require('@images/behance-w.svg').default,
    srcBlue: require('@images/behance.svg').default,
    link: '',
  },
  {
    name: 'Instagram',
    srcWhite: require('@images/insta-w.svg').default,
    srcBlue: require('@images/insta.svg').default,
    link: '',
  },
];

export const contact: TabType[] = [
  {
    icon: mail,
  },
  // {
  //   icon: whatsapp,
  // },
  // {
  //   icon: tg,
  // },
];
