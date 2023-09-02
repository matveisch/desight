'use client';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@images/logo.svg';
import burger from '@images/burger.svg';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const navVariants = {
  inView: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      type: 'tween',
    },
  },
  notInView: {
    y: -10,
  },
};

const navLinkVariants = {
  inView: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
    },
  },
  notInView: {
    opacity: 0,
    filter: 'blur(16px)',
  },
};

export function Header() {
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <motion.header
      initial={{ y: -50, opacity: 0, filter: 'blur(16px)' }}
      variants={navVariants}
      animate={animate ? 'inView' : 'notInView'}
      ref={ref}
      className={styles.header}
    >
      <motion.div className={styles.headWrap}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" className={styles.image} />
        </div>
        <motion.nav
          transition={{ staggerChildren: 0.3 }}
          className={styles.nav}
        >
          <Link href="#">
            <motion.p variants={navLinkVariants}>Сервисы</motion.p>
          </Link>

          <Link href="#">
            <motion.p variants={navLinkVariants}>Проекты</motion.p>
          </Link>

          <Link href="#">
            <motion.p variants={navLinkVariants}>О нас</motion.p>
          </Link>
          <Link href="#">
            <motion.p variants={navLinkVariants}>Контакты</motion.p>
          </Link>
        </motion.nav>
        <button className={styles.menu}>
          <Image src={burger} alt="burger" className={styles.image} />
        </button>
      </motion.div>
    </motion.header>
  );
}
