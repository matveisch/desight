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
  const dict: any = await getDictionary(lang);

  const links: { title: string; href: string }[] = [
    {
      title: dict.header.services,
      href: '#services',
    },
    {
      title: dict.header.projects,
      href: '#projects',
    },
    {
      title: dict.header.about,
      href: '#about',
    },
    {
      title: dict.header.contacts,
      href: '#contact',
    },
  ];

  return (
    <main className={styles.main} style={lang === 'he' ? { direction: 'rtl' } : undefined}>
      <Header links={links} lang={lang} />
      <Hero dict={dict} />
      <HeroImage dict={dict} />
      <Services dict={dict} lang={lang} />
      <OurWork dict={dict} lang={lang} />
      <CompleteSolution dict={dict} lang={lang} />
      <Desighted />
      <Footer dict={dict} links={links} lang={lang} />
    </main>
  );
}
