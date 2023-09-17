'use client';
import styles from './Header.module.scss';
import MobileMenu from '@/components/MobileMenu/MobileMenu';
import LangSwitch from '@/components/LangSwitch/LangSwitch';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@images/logo.svg';
import burger from '@images/burger.svg';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const navVariants = {
  inView: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
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
      delay: 0.4,
      duration: 0.3,
    },
  },
  notInView: {
    opacity: 0,
    filter: 'blur(16px)',
  },
};

export function Header() {
  const [animate, setAnimate] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  // const isInView = useInView(ref, {
  //   once: true,
  // });

  return (
    <motion.header
      initial={{ y: -50, opacity: 0, filter: 'blur(16px)' }}
      variants={navVariants}
      animate={animate ? 'inView' : 'notInView'}
      ref={ref}
      className={styles.header}
    >
      <div className={styles.langSwitchWrapper}>
        <LangSwitch />
      </div>
      <motion.div className={styles.headWrap}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" className={styles.image} />
        </div>

        <motion.nav
          transition={{ staggerChildren: 0.3 }}
          className={styles.nav}
        >
          <Link href="#services" className={styles.link}>
            <motion.p variants={navLinkVariants}>Сервисы</motion.p>
          </Link>

          <Link href="#projects" className={styles.link}>
            <motion.p variants={navLinkVariants}>Проекты</motion.p>
          </Link>

          <Link href="#about" className={styles.link}>
            <motion.p variants={navLinkVariants}>О нас</motion.p>
          </Link>
          <Link href="#contact" className={styles.link}>
            <motion.p variants={navLinkVariants}>Контакты</motion.p>
          </Link>
        </motion.nav>
        <button
          className={styles.menu}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image src={burger} alt="burger" className={styles.image} />
        </button>
      </motion.div>
      <div className={styles.mobileMenuWrapper}>
        <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      </div>
    </motion.header>
  );
}
