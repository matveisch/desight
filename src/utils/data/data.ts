import designIcon from '@images/design-tab-icon.svg';
import devIcon from '@images/dev-tab-icon.svg';
import webDesignIcon from '@images/design-icon.svg';
import logoIcon from '@images/logo-icon.svg';
import productIcon from '@images/product-icon.svg';
import websiteIcon from '@images/website-icon.svg';
import appIcon from '@images/app-icon.svg';
import shopIcon from '@images/shop-icon.svg';
import businessIcon from '@images/business-icon.svg';
import beetrade from '@images/beetrade-icon.svg';

export type TabType = {
  title: string;
  icon?: string;
};

export type ServiceType = {
  title: string;
  description: string;
  icon: string;
  link: string;
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

export const designServices: ServiceType[] = [
  {
    title: 'Дизайн сайтов',
    description:
      'Мы создаем дизайн сайтов исходя из канонов взаимодействия пользователя с интерфейсом. Наши клиенты могут похвастаться сайтами с высокой конверсией.',
    icon: webDesignIcon,
    link: '',
  },
  {
    title: 'Логотип',
    description:
      'Качественный логотип формирует первое впечатление о компании, способствует узнаваемости и повышает доверие клиентов.',
    icon: logoIcon,
    link: '',
  },
  {
    title: 'Продукт',
    description:
      'Создание и усовершенствование продуктов для удовлетворения пользовательских потребностей.',
    icon: productIcon,
    link: '',
  },
];

export const devServices: ServiceType[] = [
  {
    title: 'Websites',
    description:
      'Мы разрабатываем сайты любой сложности, от простых одностраничных лендингов до многостраничных веб-порталов.',
    icon: websiteIcon,
    link: '',
  },
  {
    title: 'Applications',
    description:
      'Мы создаём качественные и удобные приложения для iOS и Android по современным стандартам.',
    icon: appIcon,
    link: '',
  },
  {
    title: 'E-commerce',
    description:
      'Интернет-магазин может увеличить ваши продажи. Мы  обеспечим выгоду для бизнеса и удобство для клиентов.',
    icon: shopIcon,
    link: '',
  },
  {
    title: 'For business',
    description:
      'Продукты для повышения вашей эффективности и достижения целей, включая CRM, серверы и другие бизнес-оптимизационные инструменты.',
    icon: businessIcon,
    link: '',
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
    blockDescription:
      'Комплексная платформа для онлайн-обучения пользователей трейдингу. ',
    description:
      'Грамотно спроектированный и оптимизированный веб-сайт позволяет просматривать обучающие видео, изучать материалы курса и учиться анализировать информацию. Просто и доступно для каждого пользователя.',
  },
  {
    title: 'Radar Digitaly',
    icon: beetrade,
    link: '',
    blockDescription:
      'Захватывающий внимание веб-сайт для рекламного агентства',
    description:
      'Лучший способ впечатлить клиента – полностью погрузить его в веб-сайт. Современный дизайн и приятные анимации нацелены на привлечение внимания пользователя с первых секунд.',
  },
];

export const social = [
  {
    name: 'Telegram',
    srcWhite: require("@images/tg-w.svg").default,
    srcBlue: require("@images/tg.svg").default,
    link: ''
  },
  {
    name: 'Facebook',
    srcWhite: require("@images/fb-w.svg").default,
    srcBlue: require("@images/fb.svg").default,
    link: ''
  },
  {
    name: 'Behance',
    srcWhite: require("@images/behance-w.svg").default,
    srcBlue: require("@images/behance.svg").default,
    link: ''
  },
  {
    name: 'Instagram',
    srcWhite: require("@images/insta-w.svg").default,
    srcBlue: require("@images/insta.svg").default,
    link: ''
  }
];

export const contact = [
  {
    title: 'email'
  },
  {
    title: 'whatsapp'
  },
  {
    title: 'telegram'
  },
  {
    title: 'facebook'
  },
]