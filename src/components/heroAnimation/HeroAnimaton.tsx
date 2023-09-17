'use client';

import { useState, useEffect } from 'react';
import styles from './HeroAnimation.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';
import cyrsqIcon from '@images/cyrsq-icon.svg';
import devIcon from '@images/dev-icon.svg';
import penIcon from '@images/pen-icon.svg';
// import setIcon from '@images/setting-icon.svg';
import squareIcon from '@images/squares-icon.svg';
import userIcon from '@images/user-icon.svg';
import clickText from '@images/clickandhold.svg';
import Globus from '@images/Globus.svg';

const iconsVariants = {
  tapped: {
    rotate: [0, 300],
    opacity: [1, 1, 0],
    transition: {
      rotate: { times: [0, 1], duration: 2, ease: 'easeIn' },
      opacity: { times: [0, 0.4, 0.99, 1], duration: 2 },
    },
  },
  notTapped: {
    rotate: [0, 0, 0, 0],
    opacity: [1, 0],
    transition: {
      rotate: { times: [0, 0.1, 0.6, 1], duration: 0.1 },
      opacity: { times: [0, 1], duration: 0.2 },
    },
  },
};

const iconVariants = {
  tapped: {
    y: ['0%', '-200%', '-200%', '0%', '-400%'], // Initial value replaced with '0%'
    rotate: [0, 200], // Initial value replaced with '0'
    transition: {
      y: { times: [0, 0.4, 0.7, 0.85, 1], duration: 2 },
      rotate: { times: [0, 1], duration: 2 },
    },
  },
  notTapped: {
    y: ['0%', 0, 0], // Initial value replaced with '0%'
    rotate: 0,
    transition: { y: { times: [0, 0.5, 1], duration: 0.4 } },
  },
};

const globeVariants = {
  tapped: {
    scale: [1, 0.4, 1], // Initial value replaced with '1'
    rotate: [0, -200, 0], // Initial value replaced with '0'
    opacity: [1, 1, 0], // Initial value replaced with '1'
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
    scale: [1, 1], // Initial value replaced with '1'
    rotate: [0, 360], // Initial value replaced with '0'
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
  const icons = [cyrsqIcon, penIcon, devIcon, userIcon, squareIcon];

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
    <motion.div animate={isTapped ? 'tapped' : 'notTapped'} className={styles.main}>
      <motion.div variants={iconsVariants} className={styles.icons}>
        {icons.map((icon, index) => (
          <motion.div key={`${index}-icon`} className={styles.iconWrapper}>
            <motion.div variants={iconVariants} className={styles.icon}>
              <Image src={icon} alt={`icon ${index}`} />
            </motion.div>
          </motion.div>
        ))}
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
