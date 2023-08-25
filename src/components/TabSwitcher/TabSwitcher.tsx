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

  const tabMargin = screenWidth <= 744 ? 3 : 2;

  const tabWidth = 100 / tabsArrayLength;

  return (
    <div className={styles.tabSwitcher}>
      <motion.div
        initial={{ x: tabMargin }}
        animate={{
          x: 'calc(' + currentTabIndex * 100 + '% + ' + tabMargin + 'px )',
        }}
        transition={{ type: 'just' }}
        style={{ width: `calc(${tabWidth}% - ${tabMargin * 3}px)` }}
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
