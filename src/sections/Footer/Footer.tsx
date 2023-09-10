'use client';

import React from 'react';
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
import CustomForm from '@/components/CustomForm/CustomForm';

export function Footer() {
  const [currentTab, setCurrentTab] = React.useState(0);
  const formTypes = ['email', 'whatsapp', 'telegram'];

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2 className={styles.title}>Get response</h2>
          <div className={styles.swiperWrap}>
            <Swiper
              centeredSlides
              slidesPerView={1}
              spaceBetween={'30px'}
              className={styles.swiper}
              onSlideChange={(swiper) => setCurrentTab(swiper.activeIndex)}
            >
              <TabSwitcher
                tabsNames={contact}
                currentTabIndex={currentTab}
                darkTab
              />
              <SwiperSlide>
                <p className={styles.formTitle}>Email message</p>
                <EmailForm />
              </SwiperSlide>
              <SwiperSlide>
                <p className={styles.formTitle}>Whatsapp message</p>
                <CustomForm formType={formTypes[currentTab]}/>
              </SwiperSlide>
              <SwiperSlide>
                <p className={styles.formTitle}>Telegram message</p>
                <CustomForm formType={formTypes[currentTab]}/>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.header}>
            <Image src={logo} alt="logo" className={styles.logo} />
            <div className={styles.social}>
              {social.map((icon, index) => (
                <Social
                  key={index}
                  name={icon.name}
                  src={icon.srcWhite}
                  link={icon.link}
                />
              ))}
            </div>
          </div>
          <div className={styles.body}>
            <h2 className={styles.slogan}>Clear sight. Bright future</h2>
            <div className={styles.nav}>
              <Link href="#services">
                <p className={styles.link}>Services</p>
              </Link>
              <Link href="#projects">
                <p className={styles.link}>Projects</p>
              </Link>
              <Link href="#about">
                <p className={styles.link}>About us</p>
              </Link>
              <Link href="#contact">
                <p className={styles.link}>Contact</p>
              </Link>
            </div>
            <div className={styles.imagewrap}>
              <Image src={globe} alt="globe" className={styles.image} />
            </div>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>
        Product by Desight ©{new Date().getFullYear()}{' '}
      </p>
    </footer>
  );
}
