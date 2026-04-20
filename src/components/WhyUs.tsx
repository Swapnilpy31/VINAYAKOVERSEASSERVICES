import Image from "next/image";
import {
    Users,
    ShieldCheck,
    FileCheck,
    Clock,
    Headset,
    Award,
    CheckCircle2,
    Globe,
    MapPin,
    TrendingUp,
} from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";

const whyUsFeatures = [
    {
        icon: <Users className="w-6 h-6 text-[#F5B301]" />,
        title: "Pan-India Talent Pool",
        desc: "Access a vast network of candidates from metro cities like Mumbai, Delhi, Bangalore, as well as tier-2 and tier-3 regions, ensuring quality talent at competitive salary expectations.",
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-[#F5B301]" />,
        title: "Stringent Screening Process",
        desc: "Multi-level candidate evaluation including skill assessments, background verification, medical checks, and video interviews to ensure only qualified professionals are selected.",
    },
    {
        icon: <FileCheck className="w-6 h-6 text-[#F5B301]" />,
        title: "Visa & Compliance Expertise",
        desc: "Dedicated in-house team handling passport processing, document attestation, visa approvals, and emigration clearance (ECR/ECNR).",
    },
    {
        icon: <Clock className="w-6 h-6 text-[#F5B301]" />,
        title: "Fast Turnaround Time",
        desc: "Receive shortlisted candidates within 48–72 hours and complete deployment within 30–45 days.",
    },
    {
        icon: <Headset className="w-6 h-6 text-[#F5B301]" />,
        title: "Post-Deployment Support",
        desc: "We provide onboarding assistance, grievance handling, and continuous follow-up during the probation period to ensure smooth workforce integration.",
    },
    {
        icon: <Award className="w-6 h-6 text-[#F5B301]" />,
        title: "Certifications & Compliance",
        desc: "Registered with the Ministry of External Affairs (India). License No: B-3393/HP/PER/100/5/11399/2026.",
    },
];

const promiseItems = [
    "100% Documented Recruitment",
    "Zero Candidate Substitution",
    "Transparent Pricing Structure",
    "Long-Term After-Sales Support",
];

export default function WhyUs() {
    return (
        <>
            {/* ── Section 1: Why Partner With Us ── */}
            <section id="whyus" className="py-24 bg-[#ecececfc]">
                <div className="container mx-auto px-6 max-w-[85rem]">

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <span className="h-[2px] w-8 bg-[#F5B301] " />
                            <span className="text-xs font-bold text-[#23352b]/60 tracking-[0.2em] uppercase">
                                Why Choose Us
                            </span>
                            <span className="h-[2px] w-8 bg-[#F5B301] " />
                        </div>
                        <AnimatedHeading 
                            text="Why Partner With VCS Website?"
                            className="text-4xl md:text-5xl font-extrabold text-[#23352b] mb-6 leading-tight"
                        />
                        <p className="text-[#4B5563] text-lg max-w-2xl mx-auto leading-relaxed">
                            We deliver reliable, compliant, and efficient global manpower solutions tailored to your business needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* Features (Left/Main Grid) */}
                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {whyUsFeatures.map((feat, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-8 shadow-sm border border-[#E5E7EB] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 bg-[#23352b] flex items-center justify-center mb-6">
                                        {feat.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#23352b] mb-3">
                                        {feat.title}
                                    </h3>
                                    <p className="text-[#4B5563] text-sm leading-relaxed">
                                        {feat.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Promise Box (Right Sidebar) */}
                        <div className="lg:col-span-4 sticky top-32">
                            <div className="bg-[#23352b] p-8 lg:p-10 shadow-2xl relative overflow-hidden">
                                {/* Decorative Elements */}
                                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#F5B301] opacity-10 blur-2xl"></div>
                                <div className="absolute bottom-0 right-0 w-1 h-full bg-[#F5B301]" />

                                <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/20 pb-4">
                                    Our Commitment <span className="text-[#F5B301]">to Excellence</span>
                                </h3>

                                <ul className="space-y-6">
                                    {promiseItems.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <CheckCircle2 className="w-6 h-6 text-[#F5B301] flex-shrink-0 mt-0.5" />
                                            <span className="text-white/90 font-medium leading-relaxed">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Section 2: Consultant Profile ── */}
            <section id="leadership" className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-[85rem]">

                    <div className="flex flex-col lg:flex-row gap-16 items-center">

                        {/* Left: Professional Portrait */}
                        <div className="lg:w-5/12 w-full relative">
                            <div className=" overflow-hidden shadow-2xl relative z-10 aspect-[4/5] border border-[#E5E7EB]">
                                <Image
                                    src="/images/sanjeev_kumar.jpeg"
                                    alt="Professional visa consultant India"
                                    fill
                                    className="object-cover"
                                />

                                {/* Name Overlay Flag */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#23352b] via-[#23352b]/80 to-transparent p-8 pt-16">
                                    <h3 className="text-3xl font-extrabold text-white mb-1">Khushi Ram (Urf Sanjeev Kumar)</h3>
                                    <p className="text-[#F5B301] font-semibold text-sm tracking-widest uppercase">
                                        Visa & Immigration Consultant
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Offset Block */}
                            <div className="absolute top-6 -left-6 w-full h-full border-2 border-[#23352b] -z-10 bg-[#F1F5F9]/50"></div>
                        </div>

                        {/* Right: Profile Content */}
                        <div className="lg:w-7/12 space-y-8">
                            <div className="flex items-center gap-3">
                                <span className="h-[2px] w-8 bg-[#F5B301] " />
                                <span className="text-xs font-bold text-[#23352b]/60 tracking-[0.2em] uppercase">
                                    Leadership Profile
                                </span>
                            </div>

                            <AnimatedHeading 
                                text={`About Khushi Ram\n[Founder and CEO]`}
                                className="text-3xl lg:text-4xl font-bold text-[#23352b] leading-tight"
                            />

                            <p className="text-[#4B5563] text-lg leading-relaxed">
                                Khushi Ram (popularly known as Sanjeev Kumar) is a highly experienced visa and immigration consultant based in Una, Himachal Pradesh, with over 12 years of expertise in international visa processing and documentation.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                <div className="bg-[#23352b] p-6 border border-[#E5E7EB]">
                                    <Globe className="w-8 h-8 text-[#23352b] mb-4" />
                                    <h3 className="font-bold text-[#F5B301] mb-2 text-lg">Areas of Specialization</h3>
                                    <ul className="text-sm text-[#FFFF] space-y-2">
                                        <li className="flex items-start gap-2">
                                            <MapPin className="w-4 h-4 text-[#F5B301] mt-0.5 flex-shrink-0" />
                                            <span><strong>Arab Countries:</strong> UAE (Dubai), Saudi Arabia, Qatar, Oman, Bahrain, Kuwait</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <MapPin className="w-4 h-4 text-[#F5B301] mt-0.5 flex-shrink-0" />
                                            <span><strong>European Countries:</strong> Schengen visa and EU destinations</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-[#23352b] p-6 border border-[#E5E7EB]">
                                    <CheckCircle2 className="w-8 h-8 text-[#23352b] mb-4" />
                                    <h3 className="font-bold text-[#F5B301] mb-2 text-lg">Expertise & Approach</h3>
                                    <p className="text-sm text-[#FFFF] leading-relaxed">
                                        Known for his detail-oriented approach, Sanjeev ensures every application meets strict embassy and immigration requirements. His expertise significantly reduces visa rejection rates and delays.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#23352b] text-white p-8 relative overflow-hidden mt-6 shadow-lg">
                                <TrendingUp className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 rotate-12" />
                                <h3 className="text-[#F5B301] font-bold mb-2 flex items-center gap-2 text-lg">
                                    Professional Philosophy
                                </h3>
                                <blockquote className="text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-[#F5B301] pl-4 mb-6">
                                    &quot;Accuracy, transparency, and preparation are the pillars of successful visa processing.&quot;
                                </blockquote>

                                <h3 className="text-[#F5B301] font-bold mb-2 flex items-center gap-2 text-lg">
                                    Vision
                                </h3>
                                <p className="text-white/80 leading-relaxed text-sm md:text-base pr-8 relative z-10">
                                    Sanjeev aims to expand his services globally, helping individuals and organizations achieve seamless immigration and workforce mobility.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
