import { Header } from '@/sections/Header/Header';
import Services from '@/sections/Services/Services';
import { Hero } from '@/sections/Hero/Hero';
import styles from '@styles/page.module.scss';
import OurWork from '@sections/OurWork/OurWork';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Services />
      <OurWork />
    </main>
  );
}
