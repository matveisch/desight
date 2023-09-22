'use client';

import styles from './OneStep.module.scss';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import BlueDot from '@components/BlueDot/BlueDot';

type PropsType = {
  num: number;
  last?: boolean;
  first?: boolean;
  header: string;
  description: string;
  lang: 'he' | 'en' | 'ru';
};

export default function OneStep(props: PropsType) {
  const { num, last, first, header, description, lang } = props;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: '0px 100px -300px 0px',
    once: true,
  });
  return (
    <div className={styles.oneStep} ref={ref}>
      <div className={styles.numberContainer}>
        {(last || first) && (
          <motion.div
            className={styles.dotsContainer}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            style={
              lang == 'he'
                ? {
                    right: last ? 'calc(50% + 32px)' : 'unset',
                    left: last ? 'unset' : 'calc(50% + 32px)',
                    flexDirection: last ? 'row' : 'row-reverse',
                  }
                : last
                ? {
                    left: 'calc(50% + 32px)',
                    right: 'unset',
                    flexDirection: 'row',
                  }
                : undefined
            }
          >
            {Array.from(Array(10).keys()).map((key) => {
              return (
                <motion.div
                  key={`key-${key}`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: key * 0.1 + 1.8 }}
                >
                  <BlueDot key={key} blur={{ filter: `blur(${key / 3}px)` }} />
                </motion.div>
              );
            })}
          </motion.div>
        )}
        {/* <motion.div
          initial={{
            left: first ? '50%' : 0,

            width: '0%',
          }}
          animate={isInView ? { width: first || last ? '50%' : '100%' } : {}}
          transition={{
            type: 'tween',
            ease: 'linear',
            duration: props.last ? 0.4 : 0.8,
            delay: props.num * 0.8,
          }}
          style={
            last
              ? { right: 'unset', left: '0' }
              : first
              ? {
                  left: '0',
                  right: 'unset',
                }
              : first && lang == 'he'
              ? { rotate: 180 }
              : {}
          }
          className={styles.line}
        /> */}
        {first && (
          <motion.div
            initial={lang == 'he' ? { left: 'unset', right: '50%' } : {}}
            animate={isInView ? { width: '300%' } : {}}
            transition={{
              type: 'tween',
              ease: 'linear',
              duration: 1.2,
              delay: 0.5,
            }}
            className={styles.line}
          />
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{
            type: 'tween',
            ease: 'linear',
            duration: 0.2,
            delay: props.num * 0.4,
          }}
          className={styles.number}
        >
          <p>{num}</p>
        </motion.div>
      </div>
      <motion.div
        className={styles.textContainer}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{
          type: 'tween',
          ease: 'linear',
          duration: 0.2,
          delay: props.num * 0.4 + 0.2,
        }}
      >
        <h5>{header}</h5>
        <text className="description">{description}</text>
      </motion.div>
    </div>
  );
}
