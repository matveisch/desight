'use client';

import Image from 'next/image';
import { TabType } from '@/utils/data/data';
import { motion } from 'framer-motion';
import { useSwiper } from 'swiper/react';
import styles from './TabSwitcher.module.scss';
import { useRef } from 'react';

type TabSwitcherProps = {
  tabsNames: TabType[];
  currentTabIndex: number;
  darkTab?: boolean;
  lang: 'ru' | 'en' | 'he';
};

export default function TabSwitcher(props: TabSwitcherProps) {
  const tabNameRef = useRef<HTMLDivElement>(null);
  const { tabsNames, currentTabIndex, darkTab = false, lang } = props;
  const swiper = useSwiper();
  const tabWidth = tabNameRef.current?.clientWidth;

  return (
    <div className={styles.tabSwitcher}>
      <motion.div
        initial={{ x: 0 }}
        animate={
          lang === 'he'
            ? {
                x: `calc(${100 * (tabsNames.length - currentTabIndex - 1)}% + ${
                  30 * (tabsNames.length - currentTabIndex - 1)
                }px)`,
              }
            : {
                x: 'calc(' + 100 * currentTabIndex + '% + ' + 30 * currentTabIndex + 'px)',
              }
        }
        transition={{ type: 'just' }}
        style={{
          width: tabWidth,
          backgroundColor: darkTab ? '#05050D' : '#0054F6',
        }}
        className={styles.switcher}
      />
      {tabsNames.map((tab, index) => (
        <div
          ref={tabNameRef}
          key={`${tab.title}-${index}`}
          className={styles.tabName}
          onClick={() => swiper.slideTo(index)}
        >
          {tab.icon && <Image src={tab.icon} alt="tab-icon" />}
          {tab.title && <h4>{tab.title}</h4>}
        </div>
      ))}
    </div>
  );
}
