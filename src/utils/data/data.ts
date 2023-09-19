import mail from '@images/mail-foo.svg';

export type TabType = {
  title?: string;
  icon?: string;
};

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
