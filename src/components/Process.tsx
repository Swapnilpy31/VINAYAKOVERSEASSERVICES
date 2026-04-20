import AnimatedHeading from "./AnimatedHeading";

const steps = [
  {
    num: "01",
    title: "Requirement Analysis",
    desc: "We conduct a thorough analysis of your workforce needs — skill sets, industry standards, volume, and timeline.",
  },
  {
    num: "02",
    title: "Candidate Sourcing",
    desc: "Tapping our database of 50,000+ pre-screened professionals and running targeted recruitment drives across India.",
  },
  {
    num: "03",
    title: "Screening & Interviews",
    desc: "Multi-stage evaluation: written tests, trade tests, panel interviews, and medical fitness assessments.",
  },
  {
    num: "04",
    title: "Documentation",
    desc: "Complete documentation handling — offer letters, contracts, attestation, emigration clearance, and compliance checks.",
  },
  {
    num: "05",
    title: "Visa Processing",
    desc: "End-to-end visa application, embassy coordination, work permit processing, and travel arrangements.",
  },
  {
    num: "06",
    title: "Deployment",
    desc: "Pre-departure orientation, flight coordination, airport assistance, and smooth onboarding at the destination.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#ecececfc] overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-[#F5B301] " />
            <span className="text-xs font-bold text-[#23352b]/50 uppercase tracking-[0.22em]">
              How It Works
            </span>
            <span className="h-[2px] w-8 bg-[#F5B301] " />
          </div>
          <AnimatedHeading 
            text="Our 6-Step Recruitment Process"
            className="text-4xl md:text-5xl font-extrabold text-[#23352b] leading-tight mb-4"
          />
          <p className="text-[#4B5563] text-lg leading-relaxed">
            A proven, structured timeline approach to deliver the right talent at the right time —
            every single time.
          </p>
        </div>

        {/* Vertical Alternating Timeline Grid */}
        <div className="relative w-full py-4">

          {/* Center Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#23352b] md:-translate-x-[1px]" />

          <div className="flex flex-col gap-12 md:gap-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              // On desktop:
              // isEven (0, 2, 4) -> Card appears on the Left side, text aligned Right
              // odd (1, 3, 5)    -> Card appears on the Right side, text aligned Left
              const boxMargin = isEven ? "md:mr-auto" : "md:ml-auto";
              const textAlign = isEven ? "md:text-right" : "md:text-left";

              return (
                <div key={idx} className="relative w-full">

                  {/* Floating Number Box (Timeline Marker) */}
                  <div className="absolute left-[28px] md:left-1/2 top-4 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 z-10 w-12 h-12 bg-[#23352b] border-2 border-[#F5B301] flex items-center justify-center shadow-lg transition-transform hover:scale-110 duration-300">
                    <span className="text-[#F5B301] font-black text-lg">{step.num}</span>
                  </div>

                  {/* Content Container */}
                  <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${boxMargin}`}>
                    <div className="relative overflow-hidden bg-white border border-[#E5E7EB] p-8 group transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-[#23352b]">

                      {/* Left accent bar — slides in on hover */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F5B301] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

                      {/* Hover background fill */}
                      <div className="absolute inset-0 bg-[#23352b] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      {/* Ghost number — always visible, fades on hover */}
                      <div className="absolute top-2 right-4 text-6xl font-extrabold leading-none select-none pointer-events-none text-[#23352b]/8 group-hover:text-white/5 transition-colors duration-300">
                        {step.num}
                      </div>

                      {/* Content (sits above the pseudo-bg) */}
                      <div className="relative z-10">
                        <h4 className={`text-xl font-bold text-[#23352b] group-hover:text-[#F5B301] mb-3 transition-colors duration-300 text-left ${textAlign}`}>
                          {step.title}
                        </h4>
                        <p className={`text-[#4B5563] text-sm leading-relaxed group-hover:text-white/75 transition-colors duration-300 text-left ${textAlign}`}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        
      </div>
    </section>
  );
}
