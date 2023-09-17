import Image from 'next/image';
import styles from './LangSwitch.module.scss';
import languageIcon from '@images/translate-icon.svg';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LangSwitch() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <motion.div
      whileHover={!isOpen ? { padding: '4px', width: '66px', x: 4, y: -4 } : {}}
      animate={
        isOpen
          ? {
              width: 'fit-content',
              padding: '4px',
              x: 4,
              y: -4,
            }
          : {
              width: '58px',
              padding: '0px',
              x: 0,
              y: 0,
            }
      }
      transition={{ type: 'tween', duration: 0.3 }}
      className={styles.mainWrapper}
    >
      <div className={styles.iconWrapper} onClick={() => setIsOpen(!isOpen)}>
        <motion.svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d={
              !isOpen
                ? 'M6 1L1.82588 4.75671C1.3845 5.15395 1.3845 5.84605 1.82588 6.24329L6 10'
                : 'M1 10L5.17412 6.24329C5.6155 5.84605 5.6155 5.15395 5.17412 4.75671L1 1'
            }
            stroke="#F5F1F8"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </motion.svg>

        <Image src={languageIcon} alt="language-icon" />
      </div>
      <ul onClick={() => setIsOpen(false)}>
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
    </motion.div>
  );
}
