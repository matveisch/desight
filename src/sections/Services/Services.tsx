'use client';

import TabSwitcher from '@components/TabSwitcher/TabSwitcher';
import ItemBlock from '@components/ItemBlock/ItemBlock';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { designServices, devServices, servicesTabs } from '@/utils/data/data';
import styles from './Services.module.scss';

export default function Services() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <section className={styles.services} id='services'>
      <h2 className={styles.header}>Наши сервисы</h2>
      <Swiper
        centeredSlides
        slidesPerView={1}
        spaceBetween={'30px'}
        className={styles.swiper}
        onSlideChange={(swiper) => setCurrentTab(swiper.activeIndex)}
      >
        <TabSwitcher tabsNames={servicesTabs} currentTabIndex={currentTab} />
        <SwiperSlide>
          <p className={styles.headDescription}>
            Юзабилити и внешний вид вашего продукта — ключ к хорошей конверсии.
            Давайте позаботимся об этом.
          </p>
          <div className={styles.servicesContainer}>
            <ItemBlock service={designServices[0]} isBig />
            {designServices.slice(1).map((service, index) => (
              <ItemBlock service={service} key={service.title + index} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p className={styles.headDescription}>
            Вы можете быть уверены, что получите от нас именно то, что задумали.
            Мы гарантируем результат.
          </p>
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
