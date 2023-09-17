import styles from './MobileMenu.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import translateIcon from '@images/translate-icon.svg';
import { useEffect, useRef } from 'react';
type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export default function MobileMenu({ isOpen, setIsOpen }: Props) {
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
        <motion.ul onClick={() => setIsOpen(false)}>
          <li>
            <Link href="#services">
              <p>Сервисы</p>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <p>Проекты</p>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <p>О нас</p>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <p>Контакты</p>
            </Link>
          </li>
        </motion.ul>
      </nav>
      <motion.div
        onClick={() => setIsOpen(false)}
        className={styles.translateWrapper}
      >
        <div className={styles.translateIcon}>
          <Image src={translateIcon} alt="translate-icon" />
        </div>
        <div>
          <ul>
            <li>
              <p>English</p>
            </li>
            <li>
              <p>Русский</p>
            </li>
            <li>
              <p>עברית</p>
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
