import translateIcon from '@images/translate-icon.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useEffect, useRef } from 'react';
import styles from './MobileMenu.module.scss';

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  children: ReactNode;
  lang: 'en' | 'ru' | 'he';
};

export default function MobileMenu({ isOpen, setIsOpen, children, lang }: Props) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: any) => {
      menuRef.current && !menuRef.current.contains(event.target) && isOpen
        ? setIsOpen(false)
        : undefined;
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  return (
    <motion.div
      ref={menuRef}
      animate={{ height: isOpen ? '100px' : '0px' }}
      className={styles.mainWrapper}
    >
      <nav>
        <motion.ul onClick={() => setIsOpen(false)}>{children}</motion.ul>
      </nav>
      <motion.div onClick={() => setIsOpen(false)} className={styles.translateWrapper}>
        <div className={styles.translateIcon}>
          <Image src={translateIcon} alt="translate-icon" priority />
        </div>
        <div>
          <ul>
            <li>
              <Link href="/">
                <p
                  style={{
                    opacity: lang === 'en' ? 1 : 0.7,
                    fontWeight: lang === 'en' ? 800 : 600,
                  }}
                >
                  English
                </p>
              </Link>
            </li>
            <li>
              <Link href="/ru">
                <p
                  style={{
                    opacity: lang === 'ru' ? 1 : 0.7,
                    fontWeight: lang === 'ru' ? 800 : 600,
                  }}
                >
                  Русский
                </p>
              </Link>
            </li>
            <li>
              <Link href="/he">
                <p
                  style={{
                    opacity: lang === 'he' ? 1 : 0.7,
                    fontWeight: lang === 'he' ? 800 : 600,
                  }}
                >
                  עברית
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        animate={{ height: isOpen ? '0px' : '100px', y: isOpen ? 100 : 0 }}
        transition={{ type: 'tween' }}
        className={styles.cover}
      ></motion.div>
    </motion.div>
  );
}
