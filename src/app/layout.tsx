import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const BASE_URL = 'https://www.vinayakoverseasservices.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'VCS Website | MEA Approved Global Manpower Recruitment',
    template: '%s | VCS Website',
  },
  description:
    'VCS Website is an MEA-approved, Government of India licensed overseas manpower recruitment agency. We connect skilled Indian professionals with trusted international employers across Gulf, Middle East, Asia & Europe.',
  keywords: [
    'overseas recruitment India',
    'manpower agency India',
    'MEA approved recruitment',
    'overseas jobs India',
    'gulf recruitment agency',
    'international manpower consultancy',
    'VCS Website',
    'overseas staffing India',
    // Local Una / HP SEO keywords
    'overseas recruitment in Una',
    'foreign job consultants Una Himachal',
    'visa consultant Una',
    'Canada PR consultancy Una',
    'Germany nursing jobs Una',
    'Dubai job agencies near me Una HP',
    'nursing jobs in UK from Una',
    'driver jobs abroad Una HP',
    'construction work visa Una',
    'abroad job placement Hamirpur students',
    'foreign recruitment near Chandigarh road',
    'manpower agency Una Himachal Pradesh',
    'overseas jobs Una HP',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: 'VCS Website',
    title: 'VCS Website | MEA Approved Global Manpower Recruitment',
    description:
      'Connecting skilled Indian talent with trusted international employers. MEA Registered | 100% Legal Recruitment | Global Placements.',
    images: [
      {
        url: '/images/hero_city_buildings.png',
        width: 1200,
        height: 630,
        alt: 'VCS Website — Global Recruitment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VCS Website | Global Manpower Recruitment',
    description:
      'MEA approved overseas recruitment agency. Connecting skilled Indian professionals with global employers.',
    images: ['/images/hero_city_buildings.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VCS Website',
  alternateName: 'VCS',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.jpeg`,
  description:
    'MEA approved overseas manpower recruitment agency connecting skilled Indian professionals with international employers across Gulf, Middle East, Asia and Europe.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop No 5, Ground & First Floor, Old Hoshiarpur Road',
    addressLocality: 'Una',
    addressRegion: 'Himachal Pradesh',
    postalCode: '174303',
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-8894412776',
      contactType: 'customer service',
      availableLanguage: ['Hindi', 'English'],
    },
  ],
  email: 'vinayakoverseas90@gmail.com',
  foundingDate: '2014',
  numberOfEmployees: '10-50',
  sameAs: [
    'https://www.facebook.com/vinayakoverseasservices',
    'https://www.linkedin.com/company/vinayakoverseasservices',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-[#24342b] text-slate-800`}
      >
        {children}
      </body>
    </html>
  );
}
