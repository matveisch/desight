'use client';

import React from 'react';
import TabSwitcher from '@/components/TabSwitcher/TabSwitcher';
import styles from './Footer.module.scss';
import { contact } from '@/utils/data/data';
import Form from '@/components/Form/Form';
import Image from 'next/image';
import logo from '@images/logo-footer.svg';
import Social from '@/components/Social/Social';
import { social } from '@/utils/data/data';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

export function Footer() {
  const [currentTab, setCurrentTab] = React.useState(0);

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2 className={styles.title}>Get response</h2>
          <Swiper
            centeredSlides
            slidesPerView={1}
            spaceBetween={'30px'}
            className={styles.swiper}
            onSlideChange={(swiper) => setCurrentTab(swiper.activeIndex)}
          >
            <TabSwitcher tabsNames={contact} currentTabIndex={currentTab} />
            <SwiperSlide>
              <p className={styles.formTitle}>Email message</p>
              <Form />
            </SwiperSlide>
            <SwiperSlide>
              <p className={styles.formTitle}>Whatsapp message</p>
              <Form />
            </SwiperSlide>
            <SwiperSlide>
              <p className={styles.formTitle}>Telegram message</p>
              <Form />
            </SwiperSlide>
            <SwiperSlide>
              <p className={styles.formTitle}>Facebook message</p>
              <Form />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.right}>
          <div className={styles.header}>
            <Image src={logo} alt="logo" className={styles.logo} />
            <div className={styles.social}>
              {social.map((icon, index) => (
                <Social
                  key={index}
                  name={icon.name}
                  src={icon.src}
                  link={icon.link}
                />
              ))}
            </div>
          </div>
          <h2 className={styles.slogan}>Clear sight. Bright future</h2>
          <div className={styles.nav}>
            <Link href='#'>
                Services
            </Link>
            <Link href='#'>
                Projects
            </Link>
            <Link href='#'>
                About us
            </Link>
            <Link href='#'>
                Contact
            </Link>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>
        Product by Desight ©{new Date().getFullYear()}{' '}
      </p>
    </footer>
  );
}