import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@images/logo.svg';
import burger from '@images/burger.svg';
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headWrap}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" className={styles.image} />
        </div>
        <nav className={styles.nav}>
          <Link href="#services" className={styles.link}>
            <p>Сервисы</p>
          </Link>
          <Link href="#projects" className={styles.link}>
            <p>Проекты</p>
          </Link>
          <Link href="#about" className={styles.link}>
            <p>О нас</p>
          </Link>
          <Link href="#contact" className={styles.link}>
            <p>Контакты</p>
          </Link>
        </nav>
        <button className={styles.menu}>
          <Image src={burger} alt="burger" className={styles.image} />
        </button>
      </div>
    </header>
  );
}
