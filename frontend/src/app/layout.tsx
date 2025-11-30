import type { Metadata } from 'next';
import { Montserrat, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-montserrat',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-source-serif',
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
    <html lang="en" className={`${montserrat.variable} ${sourceSerif.variable}`}>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
