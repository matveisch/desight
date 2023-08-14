'use client';

import Image from 'next/image';
import { TabType } from '@/utils/data/data';
import { motion } from 'framer-motion';
import { useSwiper } from 'swiper/react';
import styles from './TabSwitcher.module.scss';
import useGetScreenWidth from '@/utils/hooks/useGetScreenWidth';

type TabSwitcherProps = {
  tabsNames: TabType[];
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
            {tab.icon && <Image src={tab.icon} alt="tab-icon" />}
            <h4>{tab.title}</h4>
          </div>
        );
      })}
    </div>
  );
}
