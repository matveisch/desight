'use client';

import styles from './Hero.module.scss';
import Social from '@/components/Social/Social';
import { useRef } from 'react';
import { social } from '@/utils/data/data';
import { motion, useInView } from 'framer-motion';
import { HeroAnimation } from '@components/heroAnimation/HeroAnimaton';

const titleAnimation = {
  inView: { x: 0, scale: 1, opacity: 1, filter: 'blur(0px)' },
  notInView: { x: 20, scale: 0.2, opacity: 0, filter: 'blur(16px)' },
};
const titleInitial = {
  x: 20,
  scale: 1,
  opacity: 0,
  filter: 'blur(16px)',
};

export function Hero(props: { dict: any; lang: 'ru' | 'en' | 'he' }) {
  const { dict, lang } = props;
  const headerText1: string = dict.hero.clearSight;
  const headerText2: string = dict.hero.brightFuture;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <section className={styles.hero}>
      <div className={styles.herowrap}>
        <div className={styles.text}>
          <motion.h3
            initial={{ opacity: 0, filter: 'blur(16px)' }}
            animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0 }}
            transition={{
              delay: headerText1.concat('', headerText2).split('').length * 0.1 - 1.5,
              duration: 0.5,
              type: 'tween',
            }}
          >
            {dict.hero.webAgency}
          </motion.h3>
          <motion.div
            ref={ref}
            layout
            animate={isInView ? 'inView' : 'notInView'}
            transition={{ duration: 5, staggerChildren: 0.05 }}
            className={styles.titleWrap}
          >
            <div className={styles.title}>
              <div className={styles.strokeWrapper}>
                {headerText1.split('').map((char, index) => {
                  return (
                    <motion.h1
                      initial={titleInitial}
                      variants={titleAnimation}
                      transition={{ duration: 0.8, type: 'tween' }}
                      className={styles.titleChar}
                      key={`headerText-${index}`}
                      style={lang == 'ru' ? { fontSize: 'min(60px, 5.4vw)' } : undefined}
                    >
                      {char}
                    </motion.h1>
                  );
                })}
              </div>
            </div>
            <div className={styles.title}>
              <div className={styles.strokeWrapper}>
                {headerText2.split('').map((char, index) => {
                  return (
                    <motion.h1
                      initial={titleInitial}
                      variants={titleAnimation}
                      transition={{ duration: 0.8 }}
                      className={styles.titleChar}
                      key={`hero-char-${index}`}
                      style={lang == 'ru' ? { fontSize: 'min(60px, 5.4vw)' } : undefined}
                    >
                      {char}
                    </motion.h1>
                  );
                })}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(16px)' }}
            animate={
              isInView ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(16px)' }
            }
            transition={{
              delay: headerText1.concat('', headerText2).split('').length * 0.1 - 1,
            }}
            className={styles.social}
          >
            {social.map((icon, index) => (
              <Social
                key={`hero-${icon.name}-${index}`}
                name={icon.name}
                src={icon.srcBlue}
                link={icon.link}
              />
            ))}
          </motion.div>
        </div>
        <div className={styles.animation}>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(16px)', scale: 0.7 }}
            animate={
              isInView
                ? { opacity: 1, filter: 'blur(0px)', scale: 1 }
                : { opacity: 0, filter: 'blur(16px)' }
            }
            transition={{
              delay: headerText1.concat('', headerText2).split('').length * 0.1 - 0.5,
              duration: 3,
            }}
            className={styles.animationWrap}
          >
            <HeroAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
