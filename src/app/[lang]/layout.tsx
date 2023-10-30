import 'normalize.css';
import '@styles/globals.scss';
import type { Metadata } from 'next';
import { Unbounded, Nunito } from 'next/font/google';
import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-unbounded',
});
const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-nunito',
});

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const russianMetadata: Metadata = {
    title: 'Студия Desight: Профессиональная разработка и дизайн сайтов и веб приложений',
    description: 'Full Cycle Web Agency',
  };

  const englishMetadata: Metadata = {
    title: 'Web Studio Desight: Professional Website Design and Development',
    description: 'Full Cycle Web Agency',
  };

  const hebrewMetadata: Metadata = {
    title: 'אולפן עיצוב Desight: פיתוח ועיצוב אתרים מקצועי',
    description: 'Full Cycle Web Agency',
  };

  if (params.lang === 'en') {
    return englishMetadata;
  } else if (params.lang === 'ru') {
    return russianMetadata;
  } else {
    return hebrewMetadata;
  }
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'he' }, { lang: 'ru' }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang} dir={params.lang === 'he' ? 'rtl' : 'ltr'}>
      <body className={`${unbounded.variable} ${nunito.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
