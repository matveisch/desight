'use client';

import WorkGrid from '@components/WorkGrid/WorkGrid';
import styles from './OurWork.module.scss';
import TabSwitcher from '@components/TabSwitcher/TabSwitcher';
import { useState } from 'react';
import { TabType } from '@/utils/data/data';
import WorkDescription from '@components/WorkDescription/WorkDescription';
import { Swiper, SwiperSlide } from 'swiper/react';
import beetrade from '@images/beetrade-icon.svg';
import { SiteContent } from '@/utils/types';

type WorkDataType = {
  title: string;
  icon: string;
  link: string;
  blockDescription: string;
  description: string;
};

export default function OurWork({ dict, lang }: { dict: SiteContent; lang: 'en' | 'he' | 'ru' }) {
  const [currentTab, setCurrentTab] = useState(0);

  const workTabs: TabType[] = [
    {
      title: 'Radar Digitaly',
    },
    {
      title: 'BeeTrade',
    },
    {
      title: 'Libira',
    },
  ];
  const workData: WorkDataType[] = [
    {
      title: 'Radar Digitaly',
      icon: beetrade,
      link: '',
      blockDescription: dict.ourWork.workData.radarDigitaly.blockDescription,
      description: dict.ourWork.workData.radarDigitaly.description,
    },

    {
      title: 'BeeTrade',
      icon: beetrade,
      link: '',
      blockDescription: dict.ourWork.workData.beeTrade.blockDescription,
      description: dict.ourWork.workData.beeTrade.description,
    },
    {
      title: 'Libira',
      icon: beetrade,
      link: '',
      blockDescription: dict.ourWork.workData.libira.blockDescription,
      description: dict.ourWork.workData.libira.description,
    },
  ];

  return (
    <section className={styles.ourWork} id="projects">
      <h2 className={styles.header}>{dict.ourWork.check}</h2>
      <Swiper
        centeredSlides
        slidesPerView={1}
        spaceBetween={'10px'}
        className={styles.swiper}
        onSlideChange={(swiper) => setCurrentTab(swiper.activeIndex)}
      >
        <TabSwitcher tabsNames={workTabs} currentTabIndex={currentTab} lang={lang} />
        {workData.map((item, index) => (
          <SwiperSlide key={`${item.title}-${index}-workData`}>
            <p className={styles.headDescription}>{item.blockDescription}</p>
            <div className={styles.blocksContainer}>
              <WorkDescription
                icon={item.icon}
                title={item.title}
                link={item.link}
                description={item.description}
              />
              <div className={styles.gridContainer}>
                <WorkGrid title={item.title} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
