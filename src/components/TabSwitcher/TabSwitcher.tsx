'use client';

import Image from 'next/image';
import { ServicesTabsType } from '@/data/data';
import { motion } from 'framer-motion';
import { useState } from 'react';

import styles from './TabSwitcher.module.scss';

type TabSwitcherProps = {
  tabsNames: ServicesTabsType;
};

export default function TabSwitcher(props: TabSwitcherProps) {
  const { tabsNames } = props;
  const tabsArrayLength = tabsNames?.length;
  const tabWidth = 100 / tabsArrayLength;
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  console.log(currentTabIndex);

  return (
    <div className={styles.tabSwitcher}>
      <motion.div
        initial={false}
        animate={{
          left: `calc(${tabWidth * currentTabIndex}% - ${
            currentTabIndex === tabsArrayLength - 1 ? 6 : 0
          }px)`,
        }}
        className={styles.switcher}
        style={{ width: `calc(${tabWidth}% - 6px)` }}
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
