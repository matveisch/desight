import { motion } from 'framer-motion';
import styles from './ContactErrorMessage.module.scss';

interface PropsType {
  message: string;
  successMessage?: boolean;
}

export default function ContactErrorMessage({ message, successMessage }: PropsType) {
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
      style={
        successMessage
          ? { background: 'green', boxShadow: '0 6px 16px 0 rgba(0, 255, 0, 0.25)' }
          : {}
      }
    >
      {successMessage ? 'Sent!' : message}
    </motion.div>
  );
}
