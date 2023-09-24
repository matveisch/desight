import { motion } from 'framer-motion';
import styles from './ContactErrorMessage.module.scss';

export default function ContactErrorMessage({ message }: { message: string }) {
  const variants = {
    hidden: { y: '-100vh' },
    show: { y: 0 },
    exit: { y: '-100vh', transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      transition={{ duration: 0.5, ease: 'easeOut' }}
      variants={variants}
      className={styles.contactErrorMessage}
    >
      {message}
    </motion.div>
  );
}
