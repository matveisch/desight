'use client';

import WorkGrid from '@components/WorkGrid/WorkGrid';
import styles from './OurWork.module.scss';
import TabSwitcher from '@components/TabSwitcher/TabSwitcher';
import { useState } from 'react';
import { workTabs } from '@/utils/data/data';
import WorkDescription from '@components/WorkDescription/WorkDescription';
import { workData } from '@/utils/data/data';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function OurWork() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <section className={styles.ourWork} id='projects'>
      <h2 className={styles.header}>Check our work</h2>
      <Swiper
        centeredSlides
        slidesPerView={1}
        spaceBetween={'10px'}
        className={styles.swiper}
        onSlideChange={(swiper) => setCurrentTab(swiper.activeIndex)}
      >
        <TabSwitcher tabsNames={workTabs} currentTabIndex={currentTab} />
        {workData.map((item, index) => (
          <SwiperSlide key={`${item.title} ${index}`}>
            <p className={styles.headDescription}>{item.blockDescription}</p>
            <div className={styles.blocksContainer}>
              <WorkDescription
                icon={item.icon}
                title={item.title}
                link={item.link}
                description={item.description}
              />
              <div className={styles.gridContainer}>
                <WorkGrid />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
