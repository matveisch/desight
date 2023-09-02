'use client';
import styles from './Hero.module.scss';
import Social from '@/components/Social/Social';
import { useRef } from 'react';
import { social } from '@/utils/data/data';
import { motion, useInView } from 'framer-motion';
import { HeroAnimation } from '@/components/HeroAnimation/HeroAnimaton';

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
const titleWrapperAnimation = {
  inView: {
    opacity: 1,
    filter: 'blur(0px)',
    position: 'relative',
    right: 'unset',
    alignItems: 'left',
  },
  notInView: {
    // opacity: 0,
    // filter: 'blur(16px)',
    // position: 'absolute',
  },
};

export function Hero() {
  const headerText1 = 'Clear Sight';
  const headerText2 = 'Bright Future';
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
  });
  console.log(headerText1.concat('', headerText2).split('').length);
  return (
    <section className={styles.hero}>
      <div className={styles.herowrap}>
        <div className={styles.text}>
          <motion.h3
            initial={{ opacity: 0, filter: 'blur(16px)' }}
            animate={
              isInView ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0 }
            }
            transition={{
              delay: headerText1.concat('', headerText2).split('').length * 0.1,
              duration: 0.7,
              type: 'tween',
            }}
          >
            Full cycle web agency
          </motion.h3>
          <motion.div
            ref={ref}
            layout
            animate={isInView ? 'inView' : 'notInView'}
            // variants={titleWrapperAnimation}
            transition={{ duration: 5, staggerChildren: 0.1 }}
            className={styles.titleWrap}
          >
            <div style={{ display: 'block' }}>
              {headerText1.split('').map((char, index) => {
                return (
                  <motion.h1
                    initial={titleInitial}
                    variants={titleAnimation}
                    transition={{ duration: 1, type: 'tween' }}
                    className={styles.titleChar}
                    key={index}
                  >
                    {char}
                  </motion.h1>
                );
              })}
            </div>
            <div style={{ display: 'block' }}>
              {headerText2.split('').map((char, index) => {
                return (
                  <motion.h1
                    initial={titleInitial}
                    variants={titleAnimation}
                    transition={{ duration: 1 }}
                    className={styles.titleChar}
                    key={index}
                  >
                    {char}
                  </motion.h1>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: 'blur(16px)' }}
            animate={
              isInView
                ? { opacity: 1, filter: 'blur(0px)' }
                : { opacity: 0, filter: 'blur(16px)' }
            }
            transition={{
              delay:
                headerText1.concat('', headerText2).split('').length * 0.1 +
                0.5,
            }}
            className={styles.social}
          >
            {social.map((icon, index) => (
              <Social
                key={index}
                name={icon.name}
                src={icon.src}
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
              delay:
                headerText1.concat('', headerText2).split('').length * 0.1 + 1,
              duration: 2,
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
