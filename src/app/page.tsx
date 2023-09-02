import { Header } from '@/sections/Header/Header';
import Services from '@/sections/Services/Services';
import Desighted from '@/sections/Desighted/Desighted';
import { Hero } from '@/sections/Hero/Hero';
import { HeroImage } from '@/sections/HeroImage/HeroImage';
import styles from '@styles/page.module.scss';
import OurWork from '@sections/OurWork/OurWork';
import CompleteSolution from '@sections/CompleteSolution/CompleteSolution';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <HeroImage />
      <Services />
      <OurWork />
      <CompleteSolution />
      <Desighted />
    </main>
  );
}
