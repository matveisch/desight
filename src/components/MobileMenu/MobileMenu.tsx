import styles from './MobileMenu.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';
import translateIcon from '@images/translate-icon.svg';
import { ReactNode, useEffect, useRef } from 'react';

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  children: ReactNode;
};

export default function MobileMenu({ isOpen, setIsOpen, children }: Props) {
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
