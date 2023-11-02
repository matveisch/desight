import mail from '@images/mail-foo.svg';
import libiraDc2 from '@images/libiraDc2.jpg';
import libiraDc1 from '@images/libiraDc1.jpg';
import libiraMob1 from '@images/libiraMob1.jpg';
import libiraMob2 from '@images/libiraMob2.jpg';
import libiraMob3 from '@images/libiraMob3.jpg';
import libiraHor1 from '@images/libiraHor1.jpg';
import libiraHor2 from '@images/libiraHor2.jpg';
import libiraHor3 from '@images/libiraHor3.jpg';
import radarDc2 from '@images/radarDc2.jpg';
import radarDc1 from '@images/radarDc1.jpg';
import radarMob2 from '@images/radarMob2.jpg';
import radarMob3 from '@images/radarMob3.jpg';
import radarMob1 from '@images/radarMob1.jpg';
import radarHor3 from '@images/radarHor3.jpg';
import radarHor1 from '@images/radarHor1.jpg';
import radarHor2 from '@images/radarHor2.jpg';
import beetradeDc2 from '@images/beetradeDc2.jpg';
import beetradeDc1 from '@images/beetradeDc1.jpg';
import beetradeMob1 from '@images/beetradeMob1.jpg';
import beetradeMob2 from '@images/beetradeMob2.jpg';
import beetradeMob3 from '@images/beetradeMob3.jpg';
import beetradeHor1 from '@images/beetradeHor1.jpg';
import beetradeHor2 from '@images/beetradeHor2.jpg';
import beetradeHor3 from '@images/beetradeHor3.jpg';

export type TabType = {
  title?: string;
  icon?: string;
};

export type ServiceType = {
  title: string;
  description: string;
  icon: string;
  link: string;
};

export const social = [
  {
    name: 'Telegram',
    srcWhite: require('@images/tg-w.svg').default,
    srcBlue: require('@images/tg.svg').default,
    link: 'https://t.me/lidkovsky',
  },
  {
    name: 'Facebook',
    srcWhite: require('@images/fb-w.svg').default,
    srcBlue: require('@images/fb.svg').default,
    link: 'https://instagram.com/desight_agency',
  },
  // {
  //   name: 'Behance',
  //   srcWhite: require('@images/behance-w.svg').default,
  //   srcBlue: require('@images/behance.svg').default,
  //   link: '',
  // },
  {
    name: 'Instagram',
    srcWhite: require('@images/insta-w.svg').default,
    srcBlue: require('@images/insta.svg').default,
    link: 'https://instagram.com/desight_agency',
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

export const libiraWork = {
  dc1: libiraDc2,
  dc2: libiraDc1,
  mob1: libiraMob1,
  mob2: libiraMob2,
  mob3: libiraMob3,
  hor1: libiraHor1,
  hor2: libiraHor2,
  hor3: libiraHor3,
};

export const radarWork = {
  dc1: radarDc2,
  dc2: radarDc1,
  mob1: radarMob2,
  mob2: radarMob3,
  mob3: radarMob1,
  hor1: radarHor3,
  hor2: radarHor1,
  hor3: radarHor2,
};

export const beetradeWork = {
  dc1: beetradeDc2,
  dc2: beetradeDc1,
  mob1: beetradeMob1,
  mob2: beetradeMob2,
  mob3: beetradeMob3,
  hor1: beetradeHor1,
  hor2: beetradeHor2,
  hor3: beetradeHor3,
};
