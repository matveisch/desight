'use client';

import TabSwitcher from '@/components/TabSwitcher/TabSwitcher';
import styles from './Footer.module.scss';
import { contact } from '@/utils/data/data';
import EmailForm from '@/components/EmailForm/EmailForm';
import Image from 'next/image';
import logo from '@images/logo-footer.svg';
import Social from '@/components/Social/Social';
import { social } from '@/utils/data/data';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import globe from '@images/globe.svg';

interface PropsType {
  dict: any;
  lang: 'en' | 'ru' | 'he';
  links: {
    title: string;
    href: string;
  }[];
}

export function Footer({ dict, links, lang }: PropsType) {
  // const [currentTab, setCurrentTab] = useState(0);
  // const formTypes = [
  //   'email',
  //   'whatsapp',
  //   'telegram',
  // ];

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2 className={styles.title}>{dict.footer.getResponse}</h2>
          <div className={styles.swiperWrap}>
            <Swiper
              centeredSlides
              slidesPerView={1}
              spaceBetween={'30px'}
              className={styles.swiper}
              // onSlideChange={(swiper) => setCurrentTab(swiper.activeIndex)}
            >
              <TabSwitcher tabsNames={contact} currentTabIndex={0} darkTab lang={lang} />
              <SwiperSlide>
                <p className={styles.formTitle}>{dict.footer.emailMessage}</p>
                <EmailForm dict={dict} />
              </SwiperSlide>
              {/*<SwiperSlide>*/}
              {/*  <p className={styles.formTitle}>Whatsapp message</p>*/}
              {/*  <CustomForm formType={formTypes[currentTab]} />*/}
              {/*</SwiperSlide>*/}
              {/*<SwiperSlide>*/}
              {/*  <p className={styles.formTitle}>Telegram message</p>*/}
              {/*  <CustomForm formType={formTypes[currentTab]} />*/}
              {/*</SwiperSlide>*/}
            </Swiper>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.header}>
            <Image src={logo} alt="logo" className={styles.logo} />
            <div className={styles.social}>
              {social.map((icon, index) => (
                <Social
                  key={`footer-${icon.name}-${index}`}
                  name={icon.name}
                  src={icon.srcWhite}
                  link={icon.link}
                />
              ))}
            </div>
          </div>
          <div className={styles.body}>
            <h2 className={styles.slogan}>{dict.footer.clearSight}</h2>
            <div className={styles.nav}>
              {links.map((link, index) => (
                <Link href={link.href} key={`${link.title}-${index}`}>
                  <p className={styles.link}>{link.title}</p>
                </Link>
              ))}
            </div>
            <div className={styles.imagewrap}>
              <Image src={globe} alt="globe" className={styles.image} />
            </div>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>Product by Desight ©{new Date().getFullYear()} </p>
    </footer>
  );
}
