import { getDictionary } from '@/app/[lang]/dictionaries';
import { SiteContent } from '@/utils/types';
import Footer from '@sections/Footer/Footer';
import Header from '@sections/Header/Header';
import Hero from '@sections/Hero/Hero';
import HeroImage from '@sections/HeroImage/HeroImage';
import styles from '@styles/page.module.scss';
import dynamic from 'next/dynamic';
const Services = dynamic(() => import('@sections/Services/Services'));
const Desighted = dynamic(() => import('@sections/Desighted/Desighted'));
const OurWork = dynamic(() => import('@sections/OurWork/OurWork'));
const CompleteSolution = dynamic(() => import('@sections/CompleteSolution/CompleteSolution'));

export default async function Home() {
  const dict: SiteContent = await getDictionary('en');
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
      <Header links={links} lang={'en'} />
      <Hero dict={dict} lang={'en'} />
      <HeroImage dict={dict} />
      <Services dict={dict} lang={'en'} />
      <OurWork dict={dict} lang={'en'} />
      <CompleteSolution dict={dict} lang={'en'} />
      <Desighted />
      <Footer dict={dict} links={links} lang={'en'} />
    </main>
  );
}
