'use client';

import styles from './HeroImage.module.scss';
import Image from 'next/image';
import left from '@images/negativeflow.png';
import right from '@images/positiveflow.png';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SiteContent } from '@/utils/types';

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

export default function HeroImage(props: { dict: SiteContent }) {
  const { dict } = props;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: '0px 100px -300px 0px',
    once: true,
  });

  return (
    <motion.div animate={isInView ? 'animate' : 'noAnimate'} className={styles.heroimage}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        variants={borderVariants}
        className={styles.border}
      >
        <motion.h2
          ref={ref}
          initial={{
            y: -20,
            opacity: 0,
            filter: 'blur(16px)',
          }}
          variants={textVariants}
        >
          <div>{dict.heroImage.fromIdea}</div>
          <div>{dict.heroImage.pixelByPixel}</div>
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
