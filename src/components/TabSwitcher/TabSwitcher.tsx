'use client';

import Image from 'next/image';
import { TabType } from '@/utils/data/data';
import { motion } from 'framer-motion';
import { useSwiper } from 'swiper/react';
import styles from './TabSwitcher.module.scss';
import useGetScreenWidth from '@/utils/hooks/useGetScreenWidth';
import { useRef } from 'react';

type TabSwitcherProps = {
  tabsNames: TabType[];
  currentTabIndex: number;
  darkTab?: boolean;
};

export default function TabSwitcher(props: TabSwitcherProps) {
  const tabNameRef = useRef<HTMLDivElement>(null);
  const { tabsNames, currentTabIndex, darkTab = false } = props;

  const screenWidth = useGetScreenWidth();
  const swiper = useSwiper();

  const tabsArrayLength = tabsNames?.length;

  const tabMargin = screenWidth <= 744 ? 3 : 6;

  // const tabWidth =
  //   screenWidth <= 744
  //     ? 100 / tabsArrayLength + '%'
  //     : 'calc( (100% / ' +
  //       tabsArrayLength +
  //       ' - ' +
  //       (15 + tabMargin * 2) +
  //       'px)';
  const tabWidth = tabNameRef.current?.clientWidth;

  // console.log(tabWidth);

  return (
    <div className={styles.tabSwitcher}>
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x:
            'calc(' +
            100 * currentTabIndex +
            '% + ' +
            30 * currentTabIndex +
            'px)',
        }}
        transition={{ type: 'just' }}
        style={{
          width: tabWidth,
          backgroundColor: darkTab ? '#05050D' : '#0054F6',
        }}
        className={styles.switcher}
      />
      {/* <motion.div
        initial={{ x: 0 }}
        animate={{
          x: 'calc(100% + 60px)',
        }}
        transition={{ type: 'just' }}
        style={{
          width: tabWidth,
          backgroundColor: darkTab ? '#05050D' : '#0054F6',
        }}
        className={styles.switcher}
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: 'calc(200% + 90px)',
        }}
        transition={{ type: 'just' }}
        style={{
          width: tabWidth,
          backgroundColor: darkTab ? '#05050D' : '#0054F6',
        }}
        className={styles.switcher}
      /> */}
      {tabsNames.map((tab, index) => {
        return (
          <div
            ref={tabNameRef}
            key={`${tab.title}-${index}`}
            className={styles.tabName}
            onClick={() => swiper.slideTo(index)}
          >
            {tab.icon && <Image src={tab.icon} alt="tab-icon" />}
            {tab.title && <h4>{tab.title}</h4>}
          </div>
        );
      })}
    </div>
  );
}
