
import { Header } from '@sections/Header/Header';
import { HeroAnimation } from '@/components/heroAnimation/HeroAnimaton';
import { SpinAnimation } from '@/components/spinAnimation/SpinAnimation';

import Services from '@/sections/Services/Services';


import styles from '@styles/page.module.scss';
import OurWork from '@sections/OurWork/OurWork';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

      <Services />
      <OurWork />

    </main>
  );
}
