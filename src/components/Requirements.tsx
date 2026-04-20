"use client";

import { useState } from "react";
import {
  FileText,
  User,
  Globe,
  Briefcase,
  Heart,
  Truck,
  Hammer,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  MapPin,
} from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";

const jobCategories = [
  {
    id: "nursing",
    icon: <Heart className="w-6 h-6" />,
    title: "Nursing & Healthcare",
    destinations: ["UK", "Germany", "Gulf Countries", "Canada"],
    roles: ["Staff Nurse", "Caregiver", "Medical Lab Technician", "Paramedic"],
    requirements: [
      "B.Sc Nursing / GNM / ANM qualification",
      "Valid nursing council registration (INC/State)",
      "Minimum 1–2 years clinical experience",
      "IELTS / OET score (for UK, Canada, Germany)",
      "Valid Indian passport (min. 2 years validity)",
      "Medical fitness certificate",
    ],
    highlight: "Nursing jobs in UK from Una HP",
  },
  {
    id: "driver",
    icon: <Truck className="w-6 h-6" />,
    title: "Driver & Transport",
    destinations: ["Dubai", "Saudi Arabia", "Qatar", "Oman"],
    roles: ["Heavy Vehicle Driver", "Light Vehicle Driver", "Forklift Operator", "Delivery Driver"],
    requirements: [
      "Valid Indian driving licence (LMV / HMV)",
      "Minimum 3 years driving experience",
      "Clean driving record",
      "International driving permit (preferred)",
      "Valid passport with 2+ years validity",
      "Basic English communication skills",
    ],
    highlight: "Driver jobs abroad Una HP",
  },
  {
    id: "construction",
    icon: <Hammer className="w-6 h-6" />,
    title: "Construction & Skilled Trades",
    destinations: ["Dubai", "Saudi Arabia", "Qatar", "Kuwait", "Oman"],
    roles: ["Mason / Carpenter", "Electrician", "Plumber", "Welder", "Steel Fixer", "Site Supervisor"],
    requirements: [
      "ITI / Diploma in relevant trade (preferred)",
      "Minimum 2 years site experience",
      "Skill India / NSDC certificate (advantageous)",
      "Physical fitness & medical clearance",
      "Valid passport",
      "No criminal record",
    ],
    highlight: "Construction work visa Una",
  },
  {
    id: "canada-pr",
    icon: <Globe className="w-6 h-6" />,
    title: "Canada PR & Express Entry",
    destinations: ["Canada"],
    roles: ["Skilled Worker PR", "Provincial Nominee Program", "Family Sponsorship", "Study-to-PR Pathway"],
    requirements: [
      "Minimum 67 points on CRS (Comprehensive Ranking System)",
      "IELTS CLB 7+ (Express Entry FSW)",
      "1+ year skilled work experience (NOC category)",
      "Educational Credential Assessment (ECA)",
      "Proof of settlement funds",
      "Police clearance & medical exam",
    ],
    highlight: "Canada PR consultancy Una HP",
  },
  {
    id: "germany",
    icon: <Briefcase className="w-6 h-6" />,
    title: "Germany Skilled Worker Visa",
    destinations: ["Germany"],
    roles: ["Nurse / Caregiver", "Mechanical Engineer", "IT Professional", "Chef / Cook", "Welder"],
    requirements: [
      "Recognized qualification equivalent to German standards",
      "German language proficiency A2–B2 (Goethe certificate)",
      "Job offer from German employer (Skilled Immigration Act)",
      "Credential recognition by German authority",
      "Valid passport & visa application",
      "APS certificate (for Indian graduates)",
    ],
    highlight: "Germany nursing jobs Una",
  },
  {
    id: "dubai",
    icon: <MapPin className="w-6 h-6" />,
    title: "Dubai & Gulf Jobs",
    destinations: ["Dubai", "Abu Dhabi", "Sharjah", "Riyadh", "Doha"],
    roles: ["Hospitality Staff", "Security Guard", "Sales Executive", "IT Support", "Admin Staff"],
    requirements: [
      "Relevant educational qualification (10th–Degree)",
      "Prior experience preferred (1–3 years)",
      "Valid passport with 2+ years validity",
      "Medical fitness certificate",
      "Good conduct certificate / police clearance",
      "Emigration clearance (ECR / ECNR as applicable)",
    ],
    highlight: "Dubai job agencies near me Una",
  },
];

const generalDocuments = [
  { doc: "Valid Indian Passport (min. 2 years validity)", note: "Original + 2 photocopies" },
  { doc: "Educational Certificates", note: "10th, 12th, Degree, Diploma — attested" },
  { doc: "Work Experience Letter", note: "From previous employer(s)" },
  { doc: "Skill / Trade Certificate", note: "ITI, NSDC, Skill India, or equivalent" },
  { doc: "Medical Fitness Certificate", note: "From GAMCA / approved panel doctor" },
  { doc: "Police Clearance Certificate (PCC)", note: "From local police / Passport Seva Kendra" },
  { doc: "Passport-size Photographs", note: "6–8 recent photos (white background)" },
  { doc: "Aadhaar Card / PAN Card", note: "Government ID proof" },
  { doc: "Bank Statement (last 3 months)", note: "For Canada, Germany, and PR visa categories" },
  { doc: "Emigration Clearance (ECR)", note: "For ECR passport holders going to notified countries" },
];

export default function Requirements() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section
      id="requirements"
      className="py-24 bg-[#F8F9FA] overflow-hidden"
      aria-label="Job requirements for overseas recruitment from Una, Himachal Pradesh"
    >
      {/* Hidden SEO text for local keyword targeting */}
      <div className="sr-only">
        <p>
          Overseas recruitment in Una Himachal Pradesh. Foreign job consultants Una HP. Visa consultant Una.
          Canada PR consultancy Una. Germany nursing jobs from Una. Dubai job agencies near me Una HP.
          Nursing jobs in UK from Una Himachal. Driver jobs abroad Una HP. Construction work visa Una.
          Abroad job placement for Hamirpur students. Foreign recruitment near Chandigarh road Una.
          Overseas jobs from Una HP. Best manpower agency Una Himachal Pradesh.
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-[#F5B301]" />
            <span className="text-xs font-bold text-[#24342b]/50 uppercase tracking-wider">
              Requirements
            </span>
            <span className="h-[2px] w-8 bg-[#F5B301]" />
          </div>
          <AnimatedHeading
            text="Job Requirements & [Eligibility Criteria]"
            className="text-[#24342b] text-4xl lg:text-5xl font-bold leading-tight mb-6"
          />
           {/* Local tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {[
                "Una, HP",
                "Hamirpur",
                "Kangra",
                "Near Chandigarh Road",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-[#F1F5F9] border border-[#E5E7EB] text-[#24342b] font-semibold px-3 py-1 uppercase tracking-wide"
                >
                  📍 {tag}
                </span>
              ))}
            </div>
        </div>

        {/* Job Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {jobCategories.map((cat) => (
            <div
              key={cat.id}
              className={`bg-white border transition-all duration-300 cursor-pointer group ${
                activeCategory === cat.id
                  ? "border-[#F5B301] shadow-xl shadow-[#F5B301]/10"
                  : "border-[#E5E7EB] hover:border-[#F5B301]/50 hover:shadow-lg"
              }`}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              aria-expanded={activeCategory === cat.id}
            >
              {/* Card Header */}
              <div className="p-6 flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 transition-colors duration-300 ${
                      activeCategory === cat.id
                        ? "bg-[#F5B301] text-white"
                        : "bg-[#F1F5F9] text-[#24342b] group-hover:bg-[#F5B301]/10 group-hover:text-[#24342b]"
                    }`}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#24342b] text-lg leading-tight">{cat.title}</h3>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {cat.destinations.slice(0, 3).map((d) => (
                        <span
                          key={d}
                          className="text-[10px] font-semibold text-[#4B5563] bg-[#F1F5F9] px-2 py-0.5 uppercase tracking-wide"
                        >
                          {d}
                        </span>
                      ))}
                      {cat.destinations.length > 3 && (
                        <span className="text-[10px] font-semibold text-[#4B5563] bg-[#F1F5F9] px-2 py-0.5">
                          +{cat.destinations.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#24342b]/40 flex-shrink-0 mt-1 transition-transform duration-300 ${
                    activeCategory === cat.id ? "rotate-180 text-[#F5B301]" : ""
                  }`}
                />
              </div>

              {/* Expandable Requirements */}
              {activeCategory === cat.id && (
                <div className="border-t border-[#E5E7EB] px-6 pb-6 pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* Roles */}
                  <p className="text-xs font-bold text-[#24342b]/50 uppercase tracking-wider mb-2">Common Roles</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cat.roles.map((role) => (
                      <span
                        key={role}
                        className="text-xs bg-[#24342b] text-white px-3 py-1 font-medium"
                      >
                        {role}
                      </span>
                    ))}
                  </div>

                  {/* Requirements */}
                  <p className="text-xs font-bold text-[#24342b]/50 uppercase tracking-wider mb-2 mt-4">
                    Eligibility Requirements
                  </p>
                  <ul className="space-y-2">
                    {cat.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#374151]">
                        <CheckCircle2 className="w-4 h-4 text-[#F5B301] flex-shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact-info"
                    className="mt-5 inline-block btn-primary text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Apply Now
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* General Documents Section */}
        <div className="bg-white border border-[#E5E7EB] p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-[#F5B301] text-white">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#24342b]">General Documents Required</h2>
              <p className="text-[#4B5563] text-sm">
                Applicable for all overseas job applications from Una, Hamirpur & surrounding regions
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {generalDocuments.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-[#F8F9FA] border border-[#E5E7EB] hover:border-[#F5B301]/40 transition-colors"
              >
                <div className="w-7 h-7 bg-[#24342b] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="font-semibold text-[#24342b] text-sm">{item.doc}</p>
                  <p className="text-[#6B7280] text-xs mt-0.5">{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Notice Banner */}
          <div className="mt-8 flex items-start gap-3 bg-[#FFF8E1] border border-[#F5B301]/40 p-5">
            <AlertCircle className="w-5 h-5 text-[#F5B301] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#374151]">
              <strong className="text-[#24342b]">Note:</strong> Document requirements may vary by destination country and
              job category. Our team at VCS, Una (Himachal Pradesh) will provide a personalised checklist once you
              register with us. Visit our office at <strong>Old Hoshiarpur Road, Una, HP</strong> or call{" "}
              <a href="tel:+918894412776" className="text-[#24342b] font-bold underline">
                +91 88944 12776
              </a>
              .
            </p>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="mt-12 bg-[#24342b] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Ready to Apply? <span className="text-[#F5B301]">We're Here to Help.</span>
            </h3>
            <p className="text-white/70 text-sm">
              Serving candidates from Una, Hamirpur, Kangra, and across Himachal Pradesh &amp; Punjab border.
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <a href="/contact-info" className="btn-primary whitespace-nowrap">
              Register Now
            </a>
            <a href="/services" className="btn-secondary-dark whitespace-nowrap">
              View Services
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
