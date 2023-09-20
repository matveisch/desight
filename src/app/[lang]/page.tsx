import { Header } from '@sections/Header/Header';
import Services from '@sections/Services/Services';
import Desighted from '@sections/Desighted/Desighted';
import { Hero } from '@sections/Hero/Hero';
import { HeroImage } from '@sections/HeroImage/HeroImage';
import styles from '@styles/page.module.scss';
import OurWork from '@sections/OurWork/OurWork';
import CompleteSolution from '@sections/CompleteSolution/CompleteSolution';
import { Footer } from '@sections/Footer/Footer';
import { getDictionary } from '@/app/[lang]/dictionaries';

export default async function Home({ params: { lang } }: { params: { lang: 'en' | 'ru' | 'he' } }) {
  const dict = await getDictionary(lang);

  return (
    <main className={styles.main} style={lang === 'he' ? { direction: 'rtl' } : undefined}>
      <Header dict={dict} />
      <Hero dict={dict} />
      <HeroImage dict={dict} />
      <Services dict={dict} />
      <OurWork dict={dict} />
      <CompleteSolution dict={dict} />
      <Desighted />
      <Footer />
    </main>
  );
}
