'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import styles from './CompleteDescription.module.scss';
import arrow from '@images/arrow-link.svg';

export default function CompleteDescription() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: '0px 100px -300px 0px',
    once: true,
  });
  return (
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, type: 'tween', ease: 'easeOut' }}
      className={styles.completeDescription}
      ref={ref}
    >
      <h3>From $999</h3>
      <h2>Complete Web Solution</h2>
      <p className={styles.text}>
        Наш пакет услуг охватывает весь спектр разработки веб-сайтов, от
        креативного дизайна до разработки и поддержки, чтобы вы могли
        сосредоточиться на своем бизнесе.
      </p>
      <button>
        <p>Узнать подробности</p>
        <Image src={arrow} alt={'arrow'} />
      </button>
    </motion.div>
  );
}
