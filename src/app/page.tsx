import { Header } from '@/sections/Header/Header';
import Services from '@/sections/Services/Services';
<<<<<<< HEAD
// import { Hero } from '@/sections/Hero/Hero';
=======
import { HeroAnimation } from '@/components/HeroAnimation/HeroAnimaton';
import Desighted from '@/sections/Desighted/Desighted';
>>>>>>> f229f1ce8de54413e43f428baa72fc58181c0437
import styles from '@styles/page.module.scss';
import OurWork from '@sections/OurWork/OurWork';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
<<<<<<< HEAD
      {/* <Hero /> */}
=======
      <HeroAnimation />
>>>>>>> f229f1ce8de54413e43f428baa72fc58181c0437
      <Services />
      <OurWork />
      <Desighted />
    </main>
  );
}
