import React from "react";

export type FeatureCardProps = {
  title: string;
  description: string;
  features: Array<{
    iconSrc: string;
    text: string;
  }>;
  mainImageSrc: string;
  mainImageAlt: string;
  iconSrc?: string;
  stickyTop?: string;
  className?: string;
  children?: React.ReactNode;
  layout?: "horizontal" | "vertical";
};

export const FeatureCard = ({
  title,
  description,
  features,
  mainImageSrc,
  mainImageAlt,
  iconSrc,
  stickyTop = "top-24",
  className = "",
  children,
  layout = "horizontal",
}: FeatureCardProps) => {
  return (
    <div
      className={`sticky ${stickyTop} bg-white rounded-[40px] p-6 md:p-10 flex flex-col gap-10 w-full transition-all duration-500 md:shadow-none shadow-sm ${className}`}
    >
      {/* Container with horizontal layout on desktop */}
      <div className={`flex flex-col gap-12 ${layout === "horizontal" ? "md:flex-row md:items-center md:gap-16" : ""}`}>
        
        {/* Left Side: Content */}
        <div className="md:w-[35%] flex flex-col gap-8">
          {/* Circular Icon */}
          {iconSrc && (
            <div className="w-12 h-12 bg-[#F7F7F7] rounded-full flex items-center justify-center p-3 shadow-sm border border-neutral-100/50">
              <img src={iconSrc} alt="" className="w-full h-full object-contain filter grayscale brightness-50" />
            </div>
          )}

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl md:text-[32px] font-semibold text-neutral-900 leading-[1.2] tracking-tight whitespace-normal">
              {title}
            </h3>
            <p className="text-base text-neutral-500 font-normal leading-relaxed">
              {description}
            </p>
          </div>

          {/* Single column list with lighter checkmarks */}
          <div className="flex flex-col gap-4 pt-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="w-6 h-6 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center shrink-0">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="w-3 h-3 text-neutral-900 stroke-[4]" 
                    stroke="currentColor"
                  >
                    <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[15px] font-medium text-neutral-800">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image Card */}
        <div className="flex-1 w-full">
          <div className="relative rounded-[40px] flex items-center justify-center overflow-hidden">
            <img
              src={mainImageSrc}
              alt={mainImageAlt}
              className="w-full h-auto rounded-[40px]"
            />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
