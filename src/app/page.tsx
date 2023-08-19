import { Header } from '@/sections/Header/Header';
import Services from '@/sections/Services/Services';
import { HeroAnimation } from '@/components/HeroAnimation/HeroAnimaton';
import Desighted from '@/sections/Desighted/Desighted';
import styles from '@styles/page.module.scss';
import OurWork from '@sections/OurWork/OurWork';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HeroAnimation />
      <Services />
      <OurWork />
      <Desighted />
    </main>
  );
}
