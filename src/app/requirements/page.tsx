import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Requirements from "@/components/Requirements";

export const metadata: Metadata = {
  title:
    "Job Requirements & Eligibility | Overseas Recruitment Una Himachal Pradesh | VOS",
  description:
    "Check eligibility requirements for overseas jobs from Una, HP. VOS is the top foreign job consultant in Una, Himachal Pradesh — offering Canada PR, Germany nursing, Dubai jobs, UK nursing, driver jobs abroad & construction work visas. Serving Hamirpur, Kangra & near Chandigarh road.",
  keywords: [
    "overseas recruitment in Una",
    "foreign job consultants Una Himachal",
    "visa consultant Una",
    "Canada PR consultancy Una",
    "Germany nursing jobs Una",
    "Dubai job agencies near me",
    "nursing jobs in UK from Una",
    "driver jobs abroad Una HP",
    "construction work visa Una",
    "abroad job placement Hamirpur students",
    "foreign recruitment near Chandigarh road",
    "overseas jobs Una HP",
    "manpower agency Una Himachal Pradesh",
    "overseas recruitment Himachal Pradesh",
    "job requirements overseas Una",
    "visa eligibility criteria India",
  ],
  openGraph: {
    title: "Job Requirements for Overseas Recruitment | VOS Una, HP",
    description:
      "Find out the eligibility and document requirements for nursing jobs UK, Canada PR, Germany jobs, Dubai jobs & more — from Una, Himachal Pradesh.",
    url: "https://www.vinayakoverseasservices.com/requirements",
    images: [{ url: "/images/hero_city_buildings.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.vinayakoverseasservices.com/requirements",
  },
};

// LocalBusiness schema for Una office
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.vinayakoverseasservices.com/#localbusiness",
  name: "Vinayak Overseas Services (VOS)",
  image: "https://www.vinayakoverseasservices.com/images/logo.jpeg",
  description:
    "VOS is the leading overseas recruitment consultancy in Una, Himachal Pradesh offering visa assistance, Canada PR, Germany nursing, Dubai jobs, UK nursing, and abroad placement services for candidates from Una, Hamirpur, Kangra, and near Chandigarh road.",
  url: "https://www.vinayakoverseasservices.com",
  telephone: "+91-8894412776",
  email: "vinayakoverseas90@gmail.com",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No 5, Ground & First Floor, Old Hoshiarpur Road",
    addressLocality: "Una",
    addressRegion: "Himachal Pradesh",
    postalCode: "174303",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "31.4697",
    longitude: "76.2729",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "18:30",
    },
  ],
  hasMap: "https://maps.google.com/?q=Una+Himachal+Pradesh",
  priceRange: "₹₹",
  areaServed: [
    "Una",
    "Hamirpur",
    "Kangra",
    "Himachal Pradesh",
    "Punjab",
  ],
  serviceType: [
    "Overseas Recruitment",
    "Visa Consultancy",
    "Canada PR",
    "Germany Skilled Worker Visa",
    "Dubai Job Placement",
    "UK Nursing Jobs",
    "Driver Jobs Abroad",
    "Construction Work Visa",
  ],
};

export default function RequirementsPage() {
  return (
    <main className="min-h-screen bg-[#24342b] flex flex-col pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Navbar />
      <div className="flex-grow">

        {/* Hero Banner */}
        <section
          className="hidden md:block relative bg-white py-24 text-center border-b border-[#E5E7EB] overflow-hidden"
          aria-label="Requirements page header"
        >
          {/* Grid Background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              maskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            }}
          />
          <div className="container mx-auto px-6 max-w-4xl relative z-10">


            <h1 className="text-4xl md:text-5xl font-extrabold text-[#24342b] mb-4">
              Job <span className="text-[#F5B301]">Requirements</span>
            </h1>



          </div>
        </section>

        {/* Requirements Component */}
        <Requirements />
      </div>
      <Footer />
    </main>
  );
}
