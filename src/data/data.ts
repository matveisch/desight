import designIcon from '@images/design-tab-icon.svg';
import devIcon from '@images/dev-tab-icon.svg';
import webDesignIcon from '@images/design-icon.svg';
import logoIcon from '@images/logo-icon.svg';
import productIcon from '@images/product-icon.svg';

export type ServicesTabType = {
  title: string;
  icon: string;
};

export type DesignServiceType = {
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

export const designServices: DesignServiceType[] = [
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
