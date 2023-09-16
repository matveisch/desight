'use client';
import styles from './HeroImage.module.scss';
import Image from 'next/image';
import left from '@images/negativeflow.png';
import right from '@images/positiveflow.png';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const borderVariants = {
  animate: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 1,
      type: 'tween',
    },
  },
  noAnimate: {},
};

const imageVariants = {
  animate: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      type: 'tween',
    },
  },
  noAnimate: {},
};

const textVariants = {
  animate: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      type: 'tween',
    },
  },
  noAnimate: {},
};

export function HeroImage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: '0px 100px -300px 0px',
    once: true,
  });

  return (
    <motion.div
      animate={isInView ? 'animate' : 'noAnimate'}
      className={styles.heroimage}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        variants={borderVariants}
        // animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        // transition={{ delay: 5, duration: 1.5 }}
        className={styles.border}
      >
        <motion.h2
          ref={ref}
          initial={{
            y: -20,
            opacity: 0,
            filter: 'blur(16px)',
          }}
          // animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          // transition={{ delay: 5.5, duration: 1 }}
          variants={textVariants}
        >
          От идеи к реальности. Пиксель за пикселем
        </motion.h2>
      </motion.div>
      <motion.div className={styles.image}>
        <motion.div
          initial={{ opacity: 0, y: -50, filter: 'blur(16px)' }}
          variants={imageVariants}
          className={styles.leftContainer}
        >
          <Image src={left} alt="left" className={styles.left} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50, filter: 'blur(16px)' }}
          variants={imageVariants}
          className={styles.rightContainer}
        >
          <Image src={right} alt="right" className={styles.right} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
