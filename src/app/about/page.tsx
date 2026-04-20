import { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import AboutComponent from "@/components/About";
import Footer from "@/components/Footer";
import Requirements from "@/components/Requirements";

export const metadata: Metadata = {
    title: 'About Us | Foreign Job Consultants Una HP | VCS Overseas Services',
    description: 'VCS (Vinayak Overseas Services) is the leading overseas recruitment agency in Una, Himachal Pradesh. Specializing in Canada PR, Germany nursing, Dubai jobs, UK nursing, driver jobs abroad & construction visas. Serving Hamirpur, Kangra & near Chandigarh road.',
    keywords: [
        'overseas recruitment in Una',
        'foreign job consultants Una Himachal',
        'visa consultant Una',
        'Canada PR consultancy Una',
        'Germany nursing jobs Una',
        'nursing jobs in UK from Una',
        'driver jobs abroad Una HP',
        'construction work visa Una',
        'abroad job placement Hamirpur students',
        'foreign recruitment near Chandigarh road',
        'manpower agency Una HP',
        'Dubai job agencies near me',
    ],
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#24342b] flex flex-col pt-24">
            <Navbar />
            <div className="flex-grow">
                {/* Hero Banner for About Page */}
                <section className="relative bg-white py-24 text-center border-b border-[#E5E7EB] overflow-hidden">
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
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#24342b] mb-4">About <span className="text-[#F5B301]">VCS Website</span></h1>
                    </div>
                </section>

                {/* Re-using the About Component */}
                <AboutComponent />

                {/* Requirements Section */}
                <Requirements />

                <section className="bg-white py-16">
                    <div className="container mx-auto px-6 max-w-5xl text-center">
                        <h2 className="text-3xl font-bold text-[#24342b] mb-8">Our Mission & Vision</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-[#F1F5F9] border border-[#E5E7EB]">
                                <h3 className="text-xl font-bold text-[#24342b] mb-4">Our Mission</h3>
                                <p className="text-[#4B5563] leading-relaxed">To deliver compliant, ethical, and high-speed recruitment that matches the right candidate with the right culture, while reducing time-to-hire and cost-per-hire for our global partners.</p> </div>
                            <div className="p-8 bg-[#F1F5F9] border border-[#E5E7EB]">
                                <h3 className="text-xl font-bold text-[#24342b] mb-4">Our Vision</h3>
                                <p className="text-[#4B5563] leading-relaxed">To be the most trusted and preferred overseas recruitment partner globally, recognized for our unwavering commitment to quality, compliance, and excellence in human resource management.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
