import styles from './ContactErrorMessage.module.scss';

export default function ContactErrorMessage({ message }: { message: string }) {
  return <div className={styles.contactErrorMessage}>{message}</div>;
}
