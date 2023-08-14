'use client';

import Image from 'next/image';
import { ServicesTabType } from '@/data/data';
import { motion } from 'framer-motion';
import { useSwiper } from 'swiper/react';
import { useEffect, useState } from 'react';
import styles from './TabSwitcher.module.scss';

type TabSwitcherProps = {
  tabsNames: ServicesTabType[];
  currentTabIndex: number;
};

export default function TabSwitcher(props: TabSwitcherProps) {
  const { tabsNames, currentTabIndex } = props;
  const [screenWidth, setScreenWidth] = useState(0);
  const tabsArrayLength = tabsNames?.length;
  const tabWidth = 100 / tabsArrayLength;
  const tabMargin = screenWidth <= 425 ? 3 : screenWidth <= 768 ? 4 : 6;
  const swiper = useSwiper();

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [screenWidth]);

  return (
    <div className={styles.tabSwitcher}>
      <motion.div
        initial={false}
        animate={{
          x: currentTabIndex * 100 + '%',
        }}
        transition={{ type: 'just' }}
        className={styles.switcher}
      />
      {tabsNames.map((tab, index) => {
        return (
          <div
            key={tab.title + index}
            className={styles.tabName}
            style={{ width: `${tabWidth}%` }}
            onClick={() => swiper.slideTo(index)}
          >
            <Image src={tab.icon} alt="tab-icon" />
            <h4>{tab.title}</h4>
          </div>
        );
      })}
    </div>
  );
}
