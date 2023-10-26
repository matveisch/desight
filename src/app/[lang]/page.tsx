import dynamic from 'next/dynamic';
import Header from '@sections/Header/Header';
import Hero from '@sections/Hero/Hero';
import HeroImage from '@sections/HeroImage/HeroImage';
const Services = dynamic(() => import('@sections/Services/Services'));
const Desighted = dynamic(() => import('@sections/Desighted/Desighted'));
const OurWork = dynamic(() => import('@sections/OurWork/OurWork'));
const CompleteSolution = dynamic(() => import('@sections/CompleteSolution/CompleteSolution'));
import Footer from '@sections/Footer/Footer';
import { getDictionary } from '@/app/[lang]/dictionaries';
import { SiteContent } from '@/utils/types';
import styles from '@styles/page.module.scss';

export default async function Home({ params: { lang } }: { params: { lang: 'en' | 'ru' | 'he' } }) {
  const dict: SiteContent = await getDictionary(lang);
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
    <main className={styles.main}>
      <Header links={links} lang={lang} />
      <Hero dict={dict} lang={lang} />
      <HeroImage dict={dict} />
      <Services dict={dict} lang={lang} />
      <OurWork dict={dict} lang={lang} />
      <CompleteSolution dict={dict} lang={lang} />
      <Desighted />
      <Footer dict={dict} links={links} lang={lang} />
    </main>
  );
}
