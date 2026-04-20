import { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";

const BASE_URL = 'https://www.vinayakoverseasservices.com';

export const metadata: Metadata = {
  title: 'Why Choose VCS | Best Overseas Recruitment Agency Una Himachal Pradesh',
  description:
    'Why VCS is Una\'s most trusted MEA-approved overseas recruitment agency. 10+ years of experience, 500+ global clients, 20+ countries served. Legal, ethical, and fast overseas placements.',
  keywords: [
    'best overseas recruitment agency Una HP',
    'trusted manpower consultancy Una Himachal',
    'MEA approved recruitment Una',
    'why choose overseas agency Una',
    'legal overseas jobs Una HP',
    'top job placement consultant Una',
    'overseas recruitment experience India',
  ],
  alternates: {
    canonical: `${BASE_URL}/why-choose-us`,
  },
  openGraph: {
    title: 'Why Choose VCS | #1 Overseas Recruitment Agency Una, HP',
    description:
      'MEA-approved, 10+ years experience, 500+ global clients. VCS is the most trusted overseas recruitment agency in Una, Himachal Pradesh.',
    url: `${BASE_URL}/why-choose-us`,
    images: [{ url: '/images/hero_city_buildings.png', width: 1200, height: 630, alt: 'Why Choose VCS' }],
    type: 'website',
    siteName: 'Vinayak Overseas Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Choose VCS — Overseas Recruitment Una, HP',
    description: 'MEA-approved. 10+ yrs. 500+ clients. 20+ countries. Una HP.',
    images: ['/images/hero_city_buildings.png'],
  },
};


export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen bg-[#24342b] flex flex-col pt-24">
      <Navbar />
      <div className="flex-grow">
        {/* Hero Banner for Why Choose Us Page */}
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#24342b] mb-4">Why Choose <span className="text-[#F5B301]">VCS?</span></h1>
          </div>
        </section>

        {/* Re-using the WhyUs Component */}
        <WhyUs />
      </div>
      <Footer />
    </main>
  );
}
