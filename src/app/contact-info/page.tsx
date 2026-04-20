import { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import ContactComponent from "@/components/Contact";
import Footer from "@/components/Footer";

const BASE_URL = 'https://www.vinayakoverseasservices.com';

export const metadata: Metadata = {
  title: 'Contact Us | Overseas Recruitment Agency Una HP | VCS',
  description:
    'Contact Vinayak Overseas Services (VCS) in Una, Himachal Pradesh. Get in touch for overseas job placement, visa consultancy, Canada PR, Germany nursing, Dubai jobs & more. Call: +91-8894412776.',
  keywords: [
    'contact overseas recruitment Una',
    'foreign job consultant Una Himachal',
    'visa consultant Una HP',
    'manpower agency contact Una',
    'overseas job enquiry Una Himachal Pradesh',
    'recruitment agency near Chandigarh road',
  ],
  alternates: {
    canonical: `${BASE_URL}/contact-info`,
  },
  openGraph: {
    title: 'Contact VCS | Overseas Recruitment Una, Himachal Pradesh',
    description:
      'Reach out to VCS — Una\'s top overseas recruitment agency. Office: Shop No 5, Old Hoshiarpur Road, Una, HP 174303.',
    url: `${BASE_URL}/contact-info`,
    images: [{ url: '/images/hero_city_buildings.png', width: 1200, height: 630, alt: 'Contact VCS' }],
    type: 'website',
    siteName: 'Vinayak Overseas Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact VCS | Overseas Recruitment Agency Una HP',
    description: 'Get in touch for overseas jobs, visa & Canada PR — Una, HP.',
    images: ['/images/hero_city_buildings.png'],
  },
};


export default function ContactInfoPage() {
  return (
    <main className="min-h-screen bg-[#24342b] flex flex-col pt-24">
      <Navbar />
      <div className="flex-grow">
        {/* Hero Banner for Contact Page */}
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#24342b] mb-4">Contact <span className="text-[#F5B301]">Us</span></h1>
          </div>
        </section>

        {/* Re-using the Contact Component */}
        <ContactComponent />
      </div>
      <Footer />
    </main>
  );
}
