'use client';

import LangSwitch from '@/components/LangSwitch/LangSwitch';
import MobileMenu from '@/components/MobileMenu/MobileMenu';
import burger from '@images/burger.svg';
import logo from '@images/logo.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.scss';

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

interface PropsType {
  links: {
    title: string;
    href: string;
  }[];
  lang: 'en' | 'ru' | 'he';
}

export default function Header({ links, lang }: PropsType) {
  const [animate, setAnimate] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0, filter: 'blur(16px)' }}
      variants={navVariants}
      animate={animate ? 'inView' : 'notInView'}
      ref={ref}
      className={styles.header}
    >
      <div className={styles.langSwitchWrapper}>
        <LangSwitch lang={lang} />
      </div>
      <motion.div className={styles.headWrap}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" className={styles.image} priority />
        </div>
        <motion.nav transition={{ staggerChildren: 0.3 }} className={styles.nav}>
          {links.map((link, index) => (
            <Link href={link.href} className={styles.link} key={`header-${link.title}-${index}`}>
              <motion.p variants={navLinkVariants}>{link.title}</motion.p>
            </Link>
          ))}
        </motion.nav>
        <button className={styles.menu} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Image src={burger} alt="burger" className={styles.image} priority />
        </button>
      </motion.div>
      <div className={styles.mobileMenuWrapper}>
        <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} lang={lang}>
          {links.map((link, index) => (
            <li key={`mobile-header-${link.title}-${index}`}>
              <Link href={link.href}>
                <p>{link.title}</p>
              </Link>
            </li>
          ))}
        </MobileMenu>
      </div>
    </motion.header>
  );
}
