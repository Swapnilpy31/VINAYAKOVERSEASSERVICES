import { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import ServicesComponent from "@/components/Services";
import Footer from "@/components/Footer";

const BASE_URL = 'https://www.vinayakoverseasservices.com';

export const metadata: Metadata = {
  title: 'Overseas Recruitment Services | Skilled, Healthcare, IT & Oil & Gas Staffing | VCS',
  description:
    'VCS provides MEA-approved overseas staffing across healthcare, skilled trades, IT, hospitality, oil & gas, and construction. Serving employers worldwide from Una, Himachal Pradesh.',
  keywords: [
    'overseas recruitment services India',
    'international manpower agency',
    'MEA approved staffing',
    'healthcare recruitment abroad',
    'skilled trade workers overseas',
    'IT BPO recruitment India',
    'oil gas construction workforce',
    'foreign job placement Una HP',
    'overseas staffing Una Himachal Pradesh',
  ],
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
  openGraph: {
    title: 'Overseas Recruitment Services | VCS — Una, Himachal Pradesh',
    description:
      'Skilled manpower for healthcare, IT, oil & gas, hospitality, and construction sectors. MEA-approved overseas recruitment from Una, HP.',
    url: `${BASE_URL}/services`,
    images: [{ url: '/images/hero_city_buildings.png', width: 1200, height: 630, alt: 'VCS Services' }],
    type: 'website',
    siteName: 'Vinayak Overseas Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Overseas Recruitment Services | VCS Una HP',
    description: 'MEA-approved staffing for healthcare, IT, oil & gas & more.',
    images: ['/images/hero_city_buildings.png'],
  },
};


export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#24342b] flex flex-col pt-24">
      <Navbar />
      <div className="flex-grow">
        {/* Hero Banner for Services Page */}
        <section className="hidden md:block relative bg-white py-24 text-center border-b border-[#E5E7EB] overflow-hidden">
          {/* Modern Grid Background */}
          <div 
              className="absolute inset-0 z-0"
              style={{
                  backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                  maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
              }}
          />
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#24342b] mb-4">Our <span className="text-[#F5B301]">Services</span></h1>
          </div>
        </section>

        {/* Re-using the Services Component */}
        <ServicesComponent />
      </div>
      <Footer />
    </main>
  );
}
