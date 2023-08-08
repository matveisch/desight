import '@styles/globals.scss';
import type { Metadata } from 'next';
import { Unbounded, Nunito } from 'next/font/google';

const unbounded = Unbounded({ subsets: ['latin', 'cyrillic'] });
const nunito = Nunito({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Desight Studio',
  description: 'Full Cycle Web Agency',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
