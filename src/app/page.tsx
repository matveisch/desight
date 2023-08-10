import { Header } from '@sections/Header/Header';
import { HeroAnimation } from '@/components/hero-animation/HeroAnimaton';
import { SpinAnimation } from '@/components/spin-animation/SpinAnimation';
import styles from '@styles/page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HeroAnimation />
      <SpinAnimation />
      <h1>main page</h1>
    </main>
  );
}
