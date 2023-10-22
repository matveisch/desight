import 'normalize.css';
import '@styles/globals.scss';
import type { Metadata } from 'next';
import { Unbounded, Nunito } from 'next/font/google';
import { ReactNode } from 'react';

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-unbounded',
});
const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: 'Desight Studio',
  description: 'Full Cycle Web Agency',
};

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
      <body className={`${unbounded.variable} ${nunito.variable}`}>{children}</body>
    </html>
  );
}
