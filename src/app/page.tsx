import { Header } from '@sections/Header/Header';

import styles from '@styles/page.module.scss';
import TabSwitcher from '@components/TabSwitcher/TabSwitcher';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <h1>main page</h1>
      <TabSwitcher tabsNames={['Дизайн', 'Разработка']} />
    </main>
  );
}
