import type { Metadata } from 'next';
import { Boogaloo, Nunito } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PlausibleScript } from '@/components/PlausibleScript';

const boogaloo = Boogaloo({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-boogaloo',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Stink Farm — Outbluff the Farmyard!',
  description:
    'The hilarious bluffing card game for the whole family. Play animal cards face-down and dare others to call your bluff. Ages 7+ | 2–8 Players | 20–40 min. Get yours for $19.99!',
  keywords: ['stink farm', 'card game', 'family game', 'bluffing game', 'farm game', 'kids game'],
  openGraph: {
    title: 'Stink Farm — Outbluff the Farmyard!',
    description:
      'The hilarious bluffing card game for the whole family. Play animal cards face-down and dare others to call your bluff.',
    url: 'https://stinkfarmgame.com',
    siteName: 'Stink Farm',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stink Farm — Outbluff the Farmyard!',
    description: 'The hilarious bluffing card game for the whole family.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${boogaloo.variable} ${nunito.variable}`}>
      <head>
        <PlausibleScript />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
