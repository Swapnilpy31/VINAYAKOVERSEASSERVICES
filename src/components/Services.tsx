"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, Layers } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";

const services = [
    {
        title: "Skilled Technical Workforce Solutions",
        category: "Skilled Trades & Technical Staff",
        desc: "We provide highly trained engineers, welders, electricians, HVAC technicians, and industrial fitters ready for global deployment. Our candidates are certified, experienced, and compliant with international safety standards.",
        img: "/images/modern_indian_skilled_trades.png",
        alt: "Skilled welders working at industrial site",
        cta: "Hire Talent",
        href: "/services#skilled-trades",
        id: "skilled-trades",
    },
    {
        title: "International Healthcare Staffing Solutions",
        category: "Healthcare Professionals",
        desc: "We recruit qualified nurses, doctors, lab technicians, and paramedics with complete licensing and documentation support for overseas placements.",
        img: "/images/modern_indian_healthcare.png",
        alt: "Nurses providing patient care in hospital",
        cta: "Get Workforce",
        href: "/services#healthcare",
        id: "healthcare",
    },
    {
        title: "Hospitality & Retail Staffing Services",
        category: "Hospitality & Retail",
        desc: "From chefs and housekeeping staff to retail managers and customer service professionals, we deliver trained candidates for hotels, restaurants, and retail chains worldwide.",
        img: "/images/modern_indian_hospitality.png",
        alt: "Hospitality staff providing premium service",
        cta: "Request Candidates",
        href: "/services#hospitality",
        id: "hospitality",
    },
    {
        title: "IT & BPO Recruitment Services",
        category: "IT & BPO Experts",
        desc: "Hire skilled software developers, data analysts, customer support executives, and IT professionals for global business operations and outsourcing needs.",
        img: "/images/modern_indian_it.png",
        alt: "Modern IT and BPO professionals working in an office",
        cta: "Hire Talent",
        href: "/services#it-bpo",
        id: "it-bpo",
    },
    {
        title: "Oil, Gas & Construction Workforce",
        category: "Oil & Gas & Construction",
        desc: "We supply experienced rig workers, safety officers, engineers, and heavy equipment operators for large-scale infrastructure and energy projects.",
        img: "/images/modern_indian_oil_gas.png",
        alt: "Engineers working on an international oil and gas rig",
        cta: "Request Candidates",
        href: "/services#oil-gas",
        id: "oil-gas",
    },
];

export default function Services() {
    const router = useRouter();
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": services.map((svc, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
                "@type": "Service",
                "name": svc.title,
                "description": svc.desc,
                "serviceType": svc.category,
                "url": `https://www.vinayakoverseasservices.com${svc.href}`,
                "provider": {
                    "@type": "Organization",
                    "name": "VCS Website"
                }
            }
        }))
    };

    return (
        <section id="services" className="py-24 bg-[#ecececfc]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <div className="container mx-auto px-6 max-w-[90rem]">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="h-[2px] w-8 bg-[#F5B301] " />
                        <span className="text-xs font-bold text-[#23352b]/60 tracking-[0.2em] uppercase">
                            Our Expertise
                        </span>
                        <span className="h-[2px] w-8 bg-[#F5B301] " />
                    </div>
                    <AnimatedHeading 
                        text="Global Manpower Services Across Key Industries"
                        className="text-4xl md:text-5xl font-extrabold text-[#23352b] leading-tight mb-6"
                    />
                    <p className="text-[#4B5563] text-lg max-w-3xl mx-auto leading-relaxed">
                        We deliver skilled, certified, and job-ready professionals for international employers across high-demand sectors.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((svc, i) => (
                        <a
                            key={i}
                            id={svc.id}
                            href={svc.href}
                            className="group relative h-[420px] md:h-[480px] overflow-hidden shadow-lg border border-[#E5E7EB] bg-[#23352b] flex flex-col justify-end transform transition-transform duration-500 hover:shadow-2xl hover:-translate-y-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B301]"
                            aria-label={svc.title}
                        >
                            {/* Background Image */}
                            <Image
                                src={svc.img}
                                alt={svc.alt}
                                fill
                                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 opacity-90 group-hover:opacity-70"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#23352b] via-[#23352b]/70 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-95" />

                            {/* Content */}
                            <div className="relative z-20 p-8 flex flex-col h-full justify-end">
                                <span className="inline-block py-1 px-3 mb-4 bg-[#F5B301]/20 text-[#F5B301] border border-[#F5B301]/30 text-xs font-bold uppercase tracking-wider w-fit transition-transform duration-500 group-hover:-translate-y-1">
                                    {svc.category}
                                </span>

                                <h3 className="text-2xl font-bold text-white mb-3 leading-snug group-hover:text-[#F5B301] transition-colors duration-300 group-hover:-translate-y-1 transform">
                                    {svc.title}
                                </h3>

                                {/* Description — smooth max-height reveal */}
                                <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    <p className="text-white/80 text-sm leading-relaxed mb-5">
                                        {svc.desc}
                                    </p>
                                </div>

                                {/* CTA Button instead of a tag to prevent nested anchors */}
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        router.push("/contact-info");
                                    }}
                                    className="inline-flex items-center gap-2 text-white font-semibold text-sm uppercase tracking-wide group-hover:text-[#F5B301] transition-colors mt-2 hover:underline underline-offset-4"
                                >
                                    {svc.cta}
                                    <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2" />
                                </button>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Explore All Services CTA */}
                <div className="mt-14 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="/services"
                        className="btn-primary inline-flex items-center gap-2 uppercase"
                        id="explore-all-services-btn"
                    >
                        <Layers className="w-4 h-4" />
                        Explore All Services
                    </a>
                    <a
                        href="/contact-info"
                        className="btn-secondary-dark inline-flex items-center gap-2 uppercase"
                        id="contact-us-services-btn"
                    >
                        Request Workforce
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

            </div>
        </section>
    );
}

