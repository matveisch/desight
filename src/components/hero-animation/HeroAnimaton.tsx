'use client';
import { useState, useEffect } from 'react';
import styles from './HeroAnimation.module.scss';
import { easeIn, motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Globus from '@images/Globus.svg';
import clickText from '@images/clickandhold.svg';

const iconsVariants = {
  tapped: {
    rotate: [null, 660],
    opacity: [null, 1, 0, 1, 0],
    transition: {
      rotate: { times: [0, 1], duration: 2, ease: 'easeIn' },
      opacity: { times: [0, 0.4, 0.9, 0.99, 1], duration: 2 },
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
    y: [null, -90, 0, -110],
    rotate: 180,
    transition: {
      y: { times: [0, 0.4, 0.85, 1], duration: 2 },
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
      filter: { duration: 0.2 },
    },
  },
};
export function HeroAnimation() {
  const [isHovered, setHovered] = useState<boolean>(false);
  const [isTapped, setIsTapped] = useState<boolean>(false);
  useEffect(() => {
    isTapped
      ? setTimeout(() => {
          setIsTapped(false);
          // GO TO SERVISES SECTION
        }, 2000)
      : undefined;
  }, [isTapped]);
  return (
    <motion.div
      animate={isTapped ? 'tapped' : 'notTapped'}
      className={styles.main}
    >
      <motion.div variants={iconsVariants} className={styles.icons}>
        <motion.div className={styles.iconWrapper}>
          <motion.div variants={iconVariants} className={styles.icon}>
            <Image src={Globus} alt="test" />
          </motion.div>
        </motion.div>
        <motion.div className={styles.iconWrapper}>
          <motion.div variants={iconVariants} className={styles.icon}>
            <Image src={Globus} alt="test" />
          </motion.div>
        </motion.div>
        <motion.div className={styles.iconWrapper}>
          <motion.div variants={iconVariants} className={styles.icon}>
            <Image src={Globus} alt="test" />
          </motion.div>
        </motion.div>
        <motion.div className={styles.iconWrapper}>
          <motion.div variants={iconVariants} className={styles.icon}>
            <Image src={Globus} alt="test" />
          </motion.div>
        </motion.div>
        <motion.div className={styles.iconWrapper}>
          <motion.div variants={iconVariants} className={styles.icon}>
            <Image src={Globus} alt="test" />
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
        whileHover={{ filter: 'blur(3px)' }}
        className={styles.globeWrapper}
        variants={globeVariants}
        onMouseDown={() => setIsTapped(true)}
        onMouseUp={() => setIsTapped(false)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image className={styles.globe} src={Globus} alt="Globe" />
      </motion.div>
    </motion.div>
  );
}
