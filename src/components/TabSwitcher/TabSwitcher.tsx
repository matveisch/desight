'use client';

import Image from 'next/image';
import { ServicesTabType } from '@/data/data';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './TabSwitcher.module.scss';

type TabSwitcherProps = {
  tabsNames: ServicesTabType[];
};

export default function TabSwitcher(props: TabSwitcherProps) {
  const { tabsNames } = props;
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const tabsArrayLength = tabsNames?.length;
  const tabWidth = 100 / tabsArrayLength;
  const tabMargin = screenWidth <= 425 ? 3 : screenWidth <= 768 ? 4 : 6;

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
            onClick={() => setCurrentTabIndex(index)}
          >
            <Image src={tab.icon} alt="tab-icon" />
            <h4>{tab.title}</h4>
          </div>
        );
      })}
    </div>
  );
}