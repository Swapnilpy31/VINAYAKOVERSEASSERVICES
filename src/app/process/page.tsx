import { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import ProcessComponent from "@/components/Process";
import Footer from "@/components/Footer";

const BASE_URL = 'https://www.vinayakoverseasservices.com';

export const metadata: Metadata = {
  title: 'Our 6-Step Recruitment Process | MEA-Approved Overseas Hiring | VCS',
  description:
    'Learn how VCS Una recruits skilled manpower overseas in 6 transparent steps — from requirement analysis and candidate sourcing to visa processing and final deployment.',
  keywords: [
    'overseas recruitment process India',
    'how to get overseas job Una HP',
    'manpower hiring steps abroad',
    'visa processing recruitment agency Una',
    'step by step overseas placement Una Himachal',
    'MEA approved recruitment process',
  ],
  alternates: {
    canonical: `${BASE_URL}/process`,
  },
  openGraph: {
    title: 'Our 6-Step Overseas Recruitment Process | VCS — Una, HP',
    description:
      'Transparent 6-step process from job order to final deployment. See how VCS Una ensures legal, ethical, fast overseas placements.',
    url: `${BASE_URL}/process`,
    images: [{ url: '/images/hero_city_buildings.png', width: 1200, height: 630, alt: 'VCS Recruitment Process' }],
    type: 'website',
    siteName: 'Vinayak Overseas Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: '6-Step Overseas Recruitment Process | VCS Una HP',
    description: 'Transparent, legal overseas recruitment in 6 steps from Una, HP.',
    images: ['/images/hero_city_buildings.png'],
  },
};


export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[#24342b] flex flex-col pt-24">
      <Navbar />
      <div className="flex-grow">
        {/* Hero Banner for Process Page */}
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#24342b] mb-4">Our <span className="text-[#F5B301]">Process</span></h1>
          </div>
        </section>

        {/* Re-using the Process Component */}
        <ProcessComponent />
      </div>
      <Footer />
    </main>
  );
}
