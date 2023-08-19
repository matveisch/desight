'use client';
import { useState, useEffect } from 'react';
import styles from './HeroAnimation.module.scss';
import { easeIn, motion, Variants } from 'framer-motion';
import Image from 'next/image';
import cyrsqIcon from '@images/cyrsq-icon.svg';
import devIcon from '@images/dev-icon.svg';
import penIcon from '@images/pen-icon.svg';
import setIcon from '@images/setting-icon.svg';
import squareIcon from '@images/squares-icon.svg';
import userIcon from '@images/user-icon.svg';
import clickText from '@images/clickandhold.svg';
import Globus from '@images/Globus.svg';
import { clearTimeout } from 'timers';

const iconsVariants = {
  tapped: {
    rotate: [null, 300],
    opacity: [null, 1, 1, 0],
    transition: {
      rotate: { times: [0, 1], duration: 2, ease: 'easeIn' },
      opacity: { times: [0, 0.4, 0.99, 1], duration: 2 },
    },
  },
  notTapped: {
    rotate: [null, 0, 0, 0],
    opacity: [null, 0],
    transition: {
      rotate: { times: [0, 0.1, 0.6, 1], duration: 0.1 },
      opacity: { times: [0, 1], duration: 0.2 },
    },
  },
};
const iconVariants = {
  tapped: {
    y: [null, '-200%', '-200%', '0%', '-400%'],
    rotate: [null, 200],
    transition: {
      y: { times: [0, 0.4, 0.7, 0.85, 1], duration: 2 },
      rotate: { times: [0, 1], duration: 2 },
    },
  },
  notTapped: {
    y: [null, 0, 0],
    rotate: 0,
    transition: { y: { times: [0, 0.5, 1], duration: 0.4 } },
  },
};
const globeVariants = {
  tapped: {
    scale: [null, 0.4, 1],
    rotate: [null, -200, 0],
    opacity: [null, 1, 0],
    filter: 'blur(0px)',
    transition: {
      scale: { times: [0, 0.85, 1], duration: 2 },
      rotate: {
        repeat: Infinity,
        times: [0, 0.85, 1],
        duration: 2,
        ease: 'linear',
      },
      opacity: {
        times: [0, 0.99, 1],
        duration: 2,
      },
      filter: { duration: 1 },
    },
  },
  notTapped: {
    scale: [null, 1],
    rotate: [null, 360],
    opacity: 1,
    filter: 'blur(5px)',
    transition: {
      scale: { times: [0, 1], duration: 0.2 },
      rotate: { repeat: Infinity, times: [0, 1], duration: 10, ease: 'linear' },
      filter: { duration: 0.1 },
    },
  },
};
export function HeroAnimation() {
  const [isHovered, setHovered] = useState<boolean>(false);
  const [isTapped, setIsTapped] = useState<boolean>(false);
  const handleMouseUp = () => {
    setIsTapped(false);
  };
  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isTapped]);
  // useEffect(() => {
  //   if (isTapped) {
  //     const timer = setTimeout(() => {
  //       if (isTapped) {
  //         setIsTapped(false);
  //       }
  //       // GO TO SERVISES SECTION
  //       console.log('timer up');
  //     }, 2000);
  //   }
  // }, [isTapped]);
  return (
    <motion.div
      animate={isTapped ? 'tapped' : 'notTapped'}
      className={styles.main}
    >
      <motion.div variants={iconsVariants} className={styles.icons}>
        <motion.div className={styles.iconWrapper}>
          <motion.div variants={iconVariants} className={styles.icon}>
            <Image src={cyrsqIcon} alt="test" />
          </motion.div>
        </motion.div>
        <motion.div className={styles.iconWrapper}>
          <motion.div variants={iconVariants} className={styles.icon}>
            <Image src={penIcon} alt="test" />
          </motion.div>
        </motion.div>
        <motion.div className={styles.iconWrapper}>
          <motion.div variants={iconVariants} className={styles.icon}>
            <Image src={devIcon} alt="test" />
          </motion.div>
        </motion.div>
        <motion.div className={styles.iconWrapper}>
          <motion.div variants={iconVariants} className={styles.icon}>
            <Image src={userIcon} alt="test" />
          </motion.div>
        </motion.div>
        <motion.div className={styles.iconWrapper}>
          <motion.div variants={iconVariants} className={styles.icon}>
            <Image src={squareIcon} alt="test" />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.clickWrapper}
        animate={{
          rotate: -360,
          scale: isTapped ? 0.7 : 1,
          opacity: isTapped ? 0 : 1,
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: isHovered ? 50 : 20,
            ease: 'linear',
          },
        }}
      >
        <Image src={clickText} alt="click and hold" />
      </motion.div>
      <motion.div
        className={styles.globeWrapper}
        variants={globeVariants}
        onMouseDown={(e) => {
          setIsTapped(true);
          e.preventDefault();
        }}
        onMouseUp={() => setIsTapped(false)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image className={styles.globe} src={Globus} alt="Globe" />
      </motion.div>
    </motion.div>
  );
}
