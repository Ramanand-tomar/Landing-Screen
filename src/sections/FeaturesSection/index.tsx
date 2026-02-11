import { FeatureCard } from "./components/FeatureCard";

export const FeaturesSection = () => {
  const cards = [
    {
      title: "Easy to integrate",
      description: "Works instantly with your existing workflow. No extra setup required.",
      iconSrc: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-3.svg",
      mainImageSrc: "/feature_easy_integrate.png",
      mainImageAlt: "Browser bar with a doxy.me URL and main browser logos.",
      features: [
        { text: "One URL", iconSrc: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-3.svg" },
        { text: "No downloads", iconSrc: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-4.svg" },
        { text: "No patient login", iconSrc: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-4.svg" },
        { text: "Browser-friendly", iconSrc: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-4.svg" }
      ],
      stickyTop: "top-24",
      layout: "horizontal" as const,
      
    },
    {
      title: "Advanced video features",
      description: "Powerful tools that keep sessions clear, focused, and engaging.",
      iconSrc: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-6.svg",
      mainImageSrc: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/7.webp",
      mainImageAlt: "Screenshot of the doxy.me call UI.",
      features: [
        { text: "Group Call", iconSrc: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-4.svg" },
        { text: "Pause", iconSrc: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-4.svg" },
        { text: "Virtual Background", iconSrc: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-4.svg" },
        { text: "Screen Share", iconSrc: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-4.svg" }
      ],
      stickyTop: "top-28",
      layout: "horizontal" as const
    },
    {
      title: "Familiar clinical workflows",
      description: "Keep virtual care organized, efficient, and professional.",
      iconSrc: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-4.svg",
      mainImageSrc: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/8.webp",
      mainImageAlt: "Familiar clinical workflows",
      features: [
        { text: "Check-In", iconSrc: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-4.svg" },
        { text: "Waiting Room", iconSrc: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-4.svg" },
        { text: "Patient Transfer", iconSrc: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-4.svg" },
        { text: "Shared Room access", iconSrc: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-4.svg" }
      ],
      stickyTop: "top-32",
      layout: "horizontal" as const,
      overlay: (
        <div className="absolute inset-0 flex items-center justify-center p-4">
           <img 
            src="https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/9.avif" 
            alt="Patient transfer visualization" 
            className="w-full h-full object-contain"
          />
        </div>
      )
    },
    {
      title: "Documentation made simple",
      description: "Accurate records and essential forms, ready when you need them.",
      iconSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'%3E%3C/path%3E%3Cpolyline points='14 2 14 8 20 8'%3E%3C/polyline%3E%3Cline x1='16' y1='13' x2='8' y2='13'%3E%3C/line%3E%3Cline x1='16' y1='17' x2='8' y2='17'%3E%3C/line%3E%3Cpolyline points='10 9 9 9 8 9'%3E%3C/polyline%3E%3C/svg%3E", 
      mainImageSrc: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/26.jpg",
      mainImageAlt: "Documentation made simple",
      features: [
        { text: "Session History", iconSrc: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-4.svg" },
        { text: "SOAP and DAP Notes", iconSrc: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-7.svg" },
        { text: "Transcript", iconSrc: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-8.svg" },
        { text: "Teleconsent", iconSrc: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-8.svg" }
      ],
      stickyTop: "top-36",
      layout: "horizontal" as const,
      overlay: (
        <div className="absolute inset-0">
          <img src="https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/10.jpg" alt="" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <img src="https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/11.avif" alt="" className="w-full h-full object-contain" />
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="w-full flex flex-col items-center bg-white">
      {/* Inspired by care Header Section */}
      <section className="max-w-[1220px] w-full px-5 py-24 md:px-[60px] flex flex-col gap-12 md:gap-20">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between">
          <h2 className="text-4xl md:text-6xl font-medium text-neutral-800 tracking-tight leading-[1.1]">
            Inspired by care.<br />
            Designed for providers.
          </h2>
          <p className="text-lg md:text-xl text-neutral-500 max-w-[400px] leading-relaxed font-normal">
            Doxy.me is the leading video platform solely for healthcare professionals, simplifying how you connect with patients remotely.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 aspect-[4/5] bg-[#F7F7F7] rounded-[40px] overflow-hidden group">
            <img 
              src="https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/27.webp" 
              alt="Waiting room UI" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
          </div>
          <div className="hidden md:flex flex-1 aspect-[4/5] bg-[#F7F7F7] rounded-[40px] overflow-hidden group">
             <img 
              src="https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/5.avif" 
              alt="Female provider" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
          </div>
        </div>
      </section>

      {/* Features Section with Sticky Cards */}
      <section className="w-full bg-[#F9F9FB] pt-32 pb-[20vh] flex justify-center">
        <div className="max-w-[1220px] w-full px-5 md:px-[60px] flex flex-col gap-16 md:gap-24">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-[56px] font-semibold text-neutral-900 tracking-tight leading-[1.1]">
              Features beyond video.<br />
              Purpose-built for healthcare.
            </h2>
          </div>

          <div className="flex flex-col gap-12 md:gap-32 relative">
            {cards.map((card, index) => (
              <FeatureCard 
                key={index}
                {...card}
              >
                {card.overlay}
              </FeatureCard>
            ))}
          </div>

          <div className="flex justify-center mt-50 pt-10">
            <a 
              href="/product/overview"
              className="bg-white px-10 py-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-neutral-100 text-[16px] font-semibold text-neutral-900 flex items-center gap-3 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all group"
            >
              Learn about our product
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" 
                stroke="currentColor" 
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

       