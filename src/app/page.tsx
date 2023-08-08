import { Header } from '@sections/Header/Header';
import TabSwitcher from '@components/TabSwitcher/TabSwitcher';

import styles from '@styles/page.module.scss';
import { servicesTabs } from '@/data/data';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <h1>main page</h1>
      <TabSwitcher tabsNames={servicesTabs} />
    </main>
  );
}
