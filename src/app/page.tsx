import { Header } from '@/sections/Header/Header';
import Services from '@/sections/Services/Services';

import styles from '@styles/page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Services />
    </main>
  );
}
