import 'normalize.css';
import '@styles/globals.scss';
import type { Metadata } from 'next';
import { Unbounded, Nunito } from 'next/font/google';
import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-unbounded',
});
const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-nunito',
});

// export const metadata: Metadata = {
//   title: 'Студия Desight: Профессиональная разработка и дизайн сайтов и веб приложений',
//   description: 'Full Cycle Web Agency',
// };

// right way but doesnt work below

// type MetaProps = {
//   lang: string;
// };

// export async function generateMetadata({ lang }: MetaProps): Promise<Metadata> {
//   return lang == 'he'
//     ? {
//         title: 'אולפן עיצוב Desight: פיתוח ועיצוב אתרים מקצועי',
//         description: 'Full Cycle Web Agency',
//       }
//     : lang == 'en'
//     ? {
//         title: 'Web Studio Desight: Professional Website Design and Development',
//         description: 'Full Cycle Web Agency',
//       }
//     : {
//         title: 'Студия Desight: Профессиональная разработка и дизайн сайтов и веб приложений',
//         description: 'Full Cycle Web Agency',
//       };
// }

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'he' }, { lang: 'ru' }];
}
export function getMetadata(lang: string): Metadata {
  const defaultMetadata = {
    title: 'Студия Desight: Профессиональная разработка и дизайн сайтов и веб приложений',
    description: 'Full Cycle Web Agency',
  };

  switch (lang) {
    case 'en':
      return {
        title: 'Desight Studio: Professional Web Design and Development',
        description: 'Full Cycle Web Agency',
      };
    case 'he':
      return {
        title: 'אולפן Desight: עיצוב ופיתוח אתרים מקצועיים',
        description: 'סוכנות אינטרנט מלאה',
      };
    default:
      return defaultMetadata;
  }
}

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  const metadataForLang = getMetadata(params.lang);
  console.log(metadataForLang);
  return (
    <html lang={params.lang} dir={params.lang === 'he' ? 'rtl' : 'ltr'}>
      <head>
        <title>{<>{metadataForLang.title}</>}</title>
        <meta name="description" content={metadataForLang.description || 'Default description'} />
      </head>
      <body className={`${unbounded.variable} ${nunito.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
