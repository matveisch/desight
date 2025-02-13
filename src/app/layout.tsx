import '@styles/globals.scss';
import type { Metadata } from 'next';
import { Nunito, Unbounded } from 'next/font/google';
import 'normalize.css';

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-unbounded',
});
const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: 'Web Studio Desight: Professional Website Design and Development',
    description: 'Full Cycle Web Agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  )
}