'use client';

import TabSwitcher from '@components/TabSwitcher/TabSwitcher';
import ItemBlock from '@components/ItemBlock/ItemBlock';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './Services.module.scss';
import webDesignIcon from '@images/design-icon.svg';
import logoIcon from '@images/logo-icon.svg';
import productIcon from '@images/product-icon.svg';
import websiteIcon from '@images/website-icon.svg';
import appIcon from '@images/app-icon.svg';
import shopIcon from '@images/shop-icon.svg';
import businessIcon from '@images/business-icon.svg';
import designIcon from '@images/design-tab-icon.svg';
import devIcon from '@images/dev-tab-icon.svg';
import { TabType } from '@/utils/data/data';

type ServiceType = {
  title: string;
  description: string;
  icon: string;
  link: string;
};

export default function Services({ dict }: { dict: any }) {
  const [currentTab, setCurrentTab] = useState(0);
  const servicesDict = dict.services;
  const designServices: ServiceType[] = [
    {
      title: servicesDict.design.services.webDesign.title,
      description: servicesDict.design.services.webDesign.description,
      icon: webDesignIcon,
      link: '',
    },
    {
      title: servicesDict.design.services.logo.title,
      description: servicesDict.design.services.logo.description,
      icon: logoIcon,
      link: '',
    },
    {
      title: servicesDict.design.services.product.title,
      description: servicesDict.design.services.product.description,
      icon: productIcon,
      link: '',
    },
  ];
  const devServices: ServiceType[] = [
    {
      title: servicesDict.dev.services.websites.title,
      description: servicesDict.dev.services.websites.description,
      icon: websiteIcon,
      link: '',
    },
    {
      title: servicesDict.dev.services.applications.title,
      description: servicesDict.dev.services.applications.description,
      icon: appIcon,
      link: '',
    },
    {
      title: servicesDict.dev.services.eCommerce.title,
      description: servicesDict.dev.services.eCommerce.description,
      icon: shopIcon,
      link: '',
    },
    {
      title: servicesDict.dev.services.business.title,
      description: servicesDict.dev.services.business.description,
      icon: businessIcon,
      link: '',
    },
  ];
  const servicesTabs: TabType[] = [
    {
      title: servicesDict.tabs.design,
      icon: designIcon,
    },
    {
      title: servicesDict.tabs.dev,
      icon: devIcon,
    },
  ];

  return (
    <section className={styles.services} id="services">
      <h2 className={styles.header}>{servicesDict.ourServices}</h2>
      <Swiper
        centeredSlides
        slidesPerView={1}
        spaceBetween={'30px'}
        className={styles.swiper}
        onSlideChange={(swiper) => setCurrentTab(swiper.activeIndex)}
      >
        <TabSwitcher tabsNames={servicesTabs} currentTabIndex={currentTab} />
        <SwiperSlide>
          <p className={styles.headDescription}>{servicesDict.design.header}</p>
          <div className={styles.servicesContainer}>
            <ItemBlock service={designServices[0]} isBig />
            {designServices.slice(1).map((service, index) => (
              <ItemBlock service={service} key={service.title + index} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p className={styles.headDescription}>{servicesDict.dev.header}</p>
          <div className={styles.servicesContainerDev}>
            {devServices.map((service, index) => (
              <ItemBlock service={service} key={service.title + index} />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
