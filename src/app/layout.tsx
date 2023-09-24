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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable} ${nunito.variable}`}>{children}</body>
    </html>
  );
}
