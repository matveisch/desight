import { Header } from '@sections/Header/Header';

import styles from '@styles/page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <h4>main page</h4>
    </main>
  );
}
