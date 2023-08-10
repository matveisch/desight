import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@images/logo.svg';
import burger from '@images/burger.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt='logo' className={styles.image}/>
      </div>
      <nav className={styles.nav}>
        <Link href='#' className={styles.link}>Сервисы</Link>
        <Link href='#' className={styles.link}>Проекты</Link>
        <Link href='#' className={styles.link}>О нас</Link>
        <Link href='#' className={styles.link}>Контакты</Link>
      </nav>
      <button className={styles.menu}>
        <Image src={burger} alt='burger' className={styles.image} />
      </button>
    </header>
  );
}
