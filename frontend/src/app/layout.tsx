import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Blanca Correa Law - Immigration Attorney in North Carolina',
  description: 'Your Bridge to Immigration Success in North Carolina. Bilingual immigration law services with personalized guidance through family-based immigration, employment visas, citizenship, and more.',
  keywords: ['immigration attorney', 'North Carolina', 'Raleigh', 'Durham', 'Chapel Hill', 'bilingual', 'Spanish', 'family immigration', 'citizenship'],
  authors: [{ name: 'Blanca Correa Law' }],
  openGraph: {
    title: 'Blanca Correa Law - Immigration Attorney in North Carolina',
    description: 'Your Bridge to Immigration Success in North Carolina',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_ES',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
