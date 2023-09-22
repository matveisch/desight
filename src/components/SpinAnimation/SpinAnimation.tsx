'use client';

import styles from './SpinAnimation.module.scss';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import cyrsqIcon from '@images/cyrsq-icon.svg';
import devIcon from '@images/dev-icon.svg';
import penIcon from '@images/pen-icon.svg';
import setIcon from '@images/setting-icon.svg';
import squareIcon from '@images/squares-icon.svg';
import userIcon from '@images/user-icon.svg';
import desightIcon from '@images/icon.svg';

export function SpinAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: '0px 100px -300px 0px',
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, type: 'tween', ease: 'easeOut', delay: 0.5 }}
      className={styles.main}
    >
      <motion.div
        animate={{ scale: 1.3 }}
        transition={{
          repeat: Infinity,
          ease: 'easeInOut',
          repeatType: 'reverse',

          duration: 2,
        }}
        className={styles.desight}
      >
        <Image src={desightIcon} alt="desight icon" />
      </motion.div>

      <motion.div
        animate={{ rotate: 360, scale: 0.7 }}
        transition={{
          default: { repeat: Infinity, ease: 'linear', duration: 7 },
          scale: {
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'reverse',
            duration: 2,
          },
        }}
        className={styles.iconsWrapper}
      >
        <motion.div className={styles.iconWrapper}>
          <motion.div
            animate={{ rotate: [0, -360] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
              duration: 7,
            }}
          >
            <Image src={squareIcon} alt="squares" />
          </motion.div>
        </motion.div>
        <motion.div className={styles.iconWrapper}>
          <motion.div
            animate={{ rotate: [-60, -420] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
              duration: 7,
            }}
          >
            <Image src={devIcon} alt="cyrsqIcon" />
          </motion.div>
        </motion.div>
        <motion.div className={styles.iconWrapper}>
          <motion.div
            animate={{ rotate: [-120, -480] }}
            transition={{
              repeat: Infinity,

              ease: 'linear',
              duration: 7,
            }}
          >
            <Image src={penIcon} alt="cyrsqIcon" />
          </motion.div>
        </motion.div>
        <motion.div className={styles.iconWrapper}>
          <motion.div
            animate={{ rotate: [-180, -540] }}
            transition={{
              repeat: Infinity,

              ease: 'linear',
              duration: 7,
            }}
          >
            <Image src={setIcon} alt="cyrsqIcon" />
          </motion.div>
        </motion.div>
        <motion.div className={styles.iconWrapper}>
          <motion.div
            animate={{ rotate: [-240, -600] }}
            transition={{
              repeat: Infinity,

              ease: 'linear',
              duration: 7,
            }}
          >
            <Image src={userIcon} alt="cyrsqIcon" />
          </motion.div>
        </motion.div>
        <motion.div className={styles.iconWrapper}>
          <motion.div
            animate={{ rotate: [-300, -660] }}
            transition={{
              repeat: Infinity,

              ease: 'linear',
              duration: 7,
            }}
          >
            <Image src={cyrsqIcon} alt="cyrsqIcon" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
