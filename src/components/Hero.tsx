"use client";

import { ArrowRight, Briefcase, UserCheck, ShieldCheck, Globe, CheckCircle } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";
import AnimatedCounter from "./AnimatedCounter";

const trustBadges = [
    { icon: <ShieldCheck className="w-4 h-4" />, text: "MEA Registered" },
    { icon: <CheckCircle className="w-4 h-4" />, text: "100% Legal Recruitment" },
    { icon: <Globe className="w-4 h-4" />, text: "Global Placements" },
];


export default function Hero() {
    return (
        <>
            {/* ── HERO ── */}
            <section
                id="home"
                className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden mt-[115px] sm:mt-[120px] lg:mt-[128px]"
            >
                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/images/hero_city_buildings.png')" }}
                />

                {/* Navy gradient overlay */}
                <div className="absolute inset-0 hero-overlay" />

                {/* Gold accent bar — left edge */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#F5B301] via-[#F5B301]/50 to-transparent" />

                {/* Content */}
                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-24">

                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-3 mb-6 animate-fade-in-up">
                        <span className="h-px w-10 bg-[#F5B301]" />
                        <span className="text-[#F5B301] text-xs font-bold tracking-[0.3em] uppercase">
                            MEA Approved · Government of India Licensed
                        </span>
                        <span className="h-px w-10 bg-[#F5B301]" />
                    </div>

                    {/* Heading */}
                    <AnimatedHeading
                        element="h1"
                        text="Expert Global [Manpower] & Overseas Hiring Solutions"
                        className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6"
                        highlightClass="text-[#F5B301]"
                    />



                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up delay-300">
                        <a
                            href="#about"
                            id="hero-hire-talent"
                            className="btn-primary text-base px-8 py-4"
                        >
                            <Briefcase className="w-5 h-5" />
                            Explore more
                            <ArrowRight className="w-4 h-4" />
                        </a>

                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up delay-400">
                        {trustBadges.map((badge, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 px-5 py-2.5 glass text-white text-sm font-semibold"
                            >
                                <span className="text-[#F5B301]">{badge.icon}</span>
                                {badge.text}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Social Icons Sidebar ── */}
                <div className="hidden md:flex absolute right-0 top-[50%] -translate-y-1/2 flex-col z-[100]">
                    <a
                        href="https://facebook.com"
                        target="_blank" rel="noreferrer"
                        aria-label="Facebook"
                        className="w-10 h-10 md:w-12 md:h-12 bg-[#23352b] border border-[#F5B301]/40 flex items-center justify-center text-[#F5B301] hover:bg-[#F5B301] hover:text-[#23352b] hover:-translate-x-1 transition-all duration-200 mb-[2px]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-5 h-5 md:w-6 md:h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank" rel="noreferrer"
                        aria-label="Twitter / X"
                        className="w-10 h-10 md:w-12 md:h-12 bg-[#23352b] border border-[#F5B301]/40 flex items-center justify-center text-[#F5B301] hover:bg-[#F5B301] hover:text-[#23352b] hover:-translate-x-1 transition-all duration-200 mb-[2px]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-5 h-5 md:w-6 md:h-6"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank" rel="noreferrer"
                        aria-label="Instagram"
                        className="w-10 h-10 md:w-12 md:h-12 bg-[#23352b] border border-[#F5B301]/40 flex items-center justify-center text-[#F5B301] hover:bg-[#F5B301] hover:text-[#23352b] hover:-translate-x-1 transition-all duration-200 mb-[2px]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    </a>
                    <a
                        href="https://linkedin.com/company/vinayakoverseasservices"
                        target="_blank" rel="noreferrer"
                        aria-label="LinkedIn"
                        className="w-10 h-10 md:w-12 md:h-12 bg-[#23352b] border border-[#F5B301]/40 flex items-center justify-center text-[#F5B301] hover:bg-[#F5B301] hover:text-[#23352b] hover:-translate-x-1 transition-all duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-5 h-5 md:w-6 md:h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                </div>


            </section>

            {/* ── PREMIUM STATS BAR ── */}
            <div id="stats" className="bg-[#0B1F3A] py-16 relative overflow-hidden">
                {/* Subtle Background Pattern */}
                <div
                    className="absolute inset-0 z-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)',
                        backgroundSize: '30px 30px'
                    }}
                />

                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {/* Card 1 */}
                        <div className="bg-white/10 backdrop-blur-sm border border-white/10   p-4 flex flex-col items-center justify-center text-center group hover:bg-white/15 transition-all duration-500 shadow-xl hover:-translate-y-2">
                            <div className="text-3xl md:text-4xl font-extrabold text-[#F5B301] mb-3">
                                <AnimatedCounter end={500} suffix="+" />
                            </div>
                            <div className="text-sm font-semibold text-white tracking-widest uppercase">
                                Global Clients
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white/10 backdrop-blur-sm border border-white/10   p-4 flex flex-col items-center justify-center text-center group hover:bg-white/15 transition-all duration-500 shadow-xl hover:-translate-y-2">
                            <div className=" text-3xl md:text-4xl font-extrabold text-[#F5B301] mb-3">
                                <AnimatedCounter end={10000} suffix="+" />
                            </div>
                            <div className="text-sm font-semibold text-white tracking-widest uppercase">
                                Placements Made
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white/10 backdrop-blur-sm border border-white/10   p-4 flex flex-col items-center justify-center text-center group hover:bg-white/15 transition-all duration-500 shadow-xl hover:-translate-y-2">
                            <div className=" text-3xl md:text-4xl font-extrabold text-[#F5B301] mb-3">
                                <AnimatedCounter end={20} suffix="+" />
                            </div>
                            <div className="text-sm font-semibold text-white tracking-widest uppercase">
                                Countries Served
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white/10 backdrop-blur-sm border border-white/10   p-4 flex flex-col items-center justify-center text-center group hover:bg-white/15 transition-all duration-500 shadow-xl hover:-translate-y-2">
                            <div className=" text-3xl md:text-4xl font-extrabold text-[#F5B301] mb-3">
                                <AnimatedCounter end={15} suffix="+" />
                            </div>
                            <div className="text-sm font-semibold text-white tracking-widest uppercase">
                                Industries Covered
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
