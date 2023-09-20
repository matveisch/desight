'use client';

import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import styles from './CompleteDescription.module.scss';

export default function CompleteDescription({ children }: { children: ReactNode }) {
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
      {children}
    </motion.div>
  );
}
