import { Header } from '@/sections/Header/Header';

import styles from '@styles/page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <h1>main page</h1>
    </main>
  );
}
