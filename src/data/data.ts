import designIcon from '@images/design-tab-icon.svg';
import devIcon from '@images/dev-tab-icon.svg';
import webDesignIcon from '@images/design-icon.svg';
import logoIcon from '@images/logo-icon.svg';
import productIcon from '@images/product-icon.svg';
import websiteIcon from '@images/website-icon.svg';
import appIcon from '@images/app-icon.svg';
import shopIcon from '@images/shop-icon.svg';
import businessIcon from '@images/business-icon.svg';

export type ServicesTabType = {
  title: string;
  icon: string;
};

export type ServiceType = {
  title: string;
  description: string;
  icon: string;
  link: string;
};

export const servicesTabs: ServicesTabType[] = [
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
