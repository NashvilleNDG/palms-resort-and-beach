import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';
import { SiteLayout } from '@/components/SiteLayout';

const GA_MEASUREMENT_ID = 'G-VHXKG7RS8Q';
const GTM_ID = 'GTM-P4TH96VZ';

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
        {/* Google Tag Manager - injected into head by Next.js (beforeInteractive) */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* Google Tag Manager (noscript) - immediately after opening body */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height={0}
            width={0}
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
