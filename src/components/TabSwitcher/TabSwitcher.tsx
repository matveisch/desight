'use client';

import Image from 'next/image';
import { ServicesTabType } from '@components/utils/data/data';
import { motion } from 'framer-motion';
import { useSwiper } from 'swiper/react';
import styles from './TabSwitcher.module.scss';
import useGetScreenWidth from '@components/utils/hooks/useGetScreenWidth';

type TabSwitcherProps = {
  tabsNames: ServicesTabType[];
  currentTabIndex: number;
};

export default function TabSwitcher(props: TabSwitcherProps) {
  const { tabsNames, currentTabIndex } = props;

  const screenWidth = useGetScreenWidth();
  const swiper = useSwiper();

  const tabsArrayLength = tabsNames?.length;
  const tabWidth = 100 / tabsArrayLength;
  const tabMargin = screenWidth <= 425 ? 3 : screenWidth <= 768 ? 4 : 6;

  return (
    <div className={styles.tabSwitcher}>
      <motion.div
        initial={false}
        animate={{
          left: `calc(${tabWidth * currentTabIndex}% - ${
            currentTabIndex === tabsArrayLength - 1 ? tabMargin : 0
          }px)`,
        }}
        className={styles.switcher}
        style={{ width: `calc(${tabWidth}% - ${tabMargin}px)` }}
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
