import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';
import { SiteLayout } from '@/components/SiteLayout';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f766e',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://palmsresortandbeach.com'),
  title: {
    default: 'Palms Resort & Beach — St. Croix, U.S. Virgin Islands',
    template: '%s | Palms Resort & Beach',
  },
  description:
    'Escape to Palms Resort & Beach on St. Croix, U.S. Virgin Islands. 45 beachfront rooms, mile-long palm-lined beach, freshwater pool, dining, and endless Caribbean sunshine.',
  icons: {
    icon: '/images/palmslogo.svg',
  },
  keywords: [
    'Palms Resort & Beach',
    'St. Croix',
    'U.S. Virgin Islands',
    'beach resort',
    'beachfront rooms',
    'Caribbean',
  ],
  openGraph: {
    title: 'Palms Resort & Beach — St. Croix, U.S. Virgin Islands',
    description:
      'Escape to Palms Resort & Beach on St. Croix. 45 beachfront rooms, mile-long beach, pool, dining, and Caribbean sunshine.',
    type: 'website',
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
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
