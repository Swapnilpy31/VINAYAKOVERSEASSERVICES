"use client";

import Image from "next/image";
import { Globe, MessageCircle, Users, Share2, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const quickLinks = [
 { name: "Home", href: "#home" },
 { name: "About Us", href: "/about" },
 { name: "Our Services", href: "/services" },
 { name: "Process", href: "/process" },
 { name: "Why Us", href: "/why-choose-us" },
 { name: "Contact Us", href: "/contact-info" },
];

const services = [
 "Overseas Recruitment",
 "Bulk Hiring",
 "Visa Processing",
 "Documentation & Compliance",
 "Candidate Screening",
 "Deployment Support",
];

export default function Footer() {
 return (
 <footer className="bg-[#061428] text-white/75 pt-20 pb-10 border-t-4 border-[#F5B301]">
 <div className="container mx-auto px-6 max-w-7xl">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

 {/* Brand */}
 <div className="space-y-6 lg:col-span-1">
 <Image
 src="/images/logo.jpeg"
 alt="VCS Website"
 width={200}
 height={60}
 className="bg-white/95 p-2 "
 />
 <p className="text-white/50 text-sm leading-relaxed">
 A trusted MEA-approved overseas recruitment partner delivering skilled manpower
 solutions across Gulf, Middle East, Asia & Europe.
 </p>
 {/* Social icons */}
 <div className="flex gap-3">
 {[Globe, MessageCircle, Users, Share2].map((Icon, i) => (
 <a
 key={i}
 href="#"
 className="w-9 h-9 bg-white border border-white/10 flex items-center justify-center hover:bg-[#F5B301] hover:text-[#23352b] hover:border-[#F5B301] transition-all"
 >
 <Icon className="w-4 h-4" />
 </a>
 ))}
 </div>
 </div>

 {/* Quick Links */}
 <div>
 <h4 className="text-white font-bold text-base mb-6 relative inline-block">
 Quick Links
 <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#F5B301] " />
 </h4>
 <ul className="space-y-3">
 {quickLinks.map((link) => (
 <li key={link.name}>
 <a
 href={link.href}
 className="flex items-center gap-2 text-white/50 hover:text-[#F5B301] transition-colors text-sm"
 >
 <ExternalLink className="w-3.5 h-3.5 text-white/25" />
 {link.name}
 </a>
 </li>
 ))}
 </ul>
 </div>

 {/* Services */}
 <div>
 <h4 className="text-white font-bold text-base mb-6 relative inline-block">
 Our Services
 <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#F5B301] " />
 </h4>
 <ul className="space-y-3">
 {services.map((svc) => (
 <li key={svc}>
 <a
 href="#services"
 className="flex items-center gap-2 text-white/50 hover:text-[#F5B301] transition-colors text-sm"
 >
 <ExternalLink className="w-3.5 h-3.5 text-white/25" />
 {svc}
 </a>
 </li>
 ))}
 </ul>
 </div>

 {/* Contact */}
 <div>
 <h4 className="text-white font-bold text-base mb-6 relative inline-block">
 Contact Us
 <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#F5B301] " />
 </h4>
 <ul className="space-y-4 text-sm">
 <li className="flex items-start gap-3">
 <MapPin className="w-4 h-4 text-[#F5B301] flex-shrink-0 mt-0.5" />
 <span className="text-white/50 leading-relaxed">
 Shop No 5, Ground & First Floor,<br />
 Old Hoshiarpur Road, Una,<br />
 Himachal Pradesh — 174303
 </span>
 </li>
 <li className="flex items-center gap-3">
 <Phone className="w-4 h-4 text-[#F5B301] flex-shrink-0" />
 <a href="tel:+918894412776" className="text-white/50 hover:text-[#F5B301] transition-colors">
 +91-8894412776
 </a>
 </li>
 <li className="flex items-center gap-3">
 <Mail className="w-4 h-4 text-[#F5B301] flex-shrink-0" />
 <a href="mailto:vinayakoverseas90@gmail.com"
 className="text-white/50 hover:text-[#F5B301] transition-colors break-all">
 vinayakoverseas90@gmail.com
 </a>
 </li>
 </ul>
 </div>

 </div>

 {/* Bottom Bar */}
 <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
 <p className="text-sm text-white/35">
 &copy; 2026{" "}
 <strong ><a className="text-white/60" href="https://snine.online">SNINEFUTURE</a></strong>. All Rights Reserved.
 </p>
 <div className="flex items-center gap-3">
 <div className="flex items-center gap-2 text-xs text-white/35 bg-white/5 px-4 py-2 border border-white/10">
 <span className="w-2 h-2 bg-[#F5B301] animate-pulse" />
 RA License: B-3393/HP/PER/100/5/11399/2026
 </div>
 </div>
 </div>

 </div>
 </footer>
 );
}
