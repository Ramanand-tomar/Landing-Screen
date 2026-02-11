export type TestimonialCardProps = {
  dataUid?: string;
  variant?: string;
  className?: string;
  primaryText?: string;
  secondaryText?: string;
  imageUrl?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  type?: "stat" | "quote" | "image" | "badge";
  layout?: "vertical" | "horizontal";
};

export const TestimonialCard = ({
  dataUid,
  className,
  primaryText,
  secondaryText,
  imageUrl,
  imageAlt,
  children,
  type,
  layout = "vertical",
}: TestimonialCardProps) => {
  const baseClasses = "relative bg-[#F9F8F6] rounded-[32px] flex flex-col w-full overflow-hidden transition-all duration-300";
  
  // Render logic based on type or props
  const renderContent = () => {
    if (children && type !== "badge") return <div className="p-8">{children}</div>;

    if (type === "stat") {
      return (
        <div className="flex flex-col items-center text-center gap-2 p-8 py-12 justify-center h-full min-h-[250px]">
          <h3 className="text-neutral-900 text-[44px] md:text-[52px] font-semibold tracking-tight leading-[1.1]">
            {primaryText}
          </h3>
          <p className="text-zinc-500 text-[14px] md:text-[16px] font-medium leading-[1.4] max-w-[200px]">
            {secondaryText}
          </p>
        </div>
      );
    }

    if (type === "quote") {
      if (layout === "horizontal") {
        return (
          <div className="flex flex-col md:flex-row h-full">
            <div className="p-8 md:p-10 flex flex-col justify-between flex-1 gap-8">
              <p className="text-neutral-900 text-[18px] md:text-[22px] font-medium leading-[1.3] font-suisse_intl_medium">
                {primaryText}
              </p>
              {secondaryText && (
                <p className="text-zinc-600 text-[14px] md:text-[15px] font-medium">
                  {secondaryText}
                </p>
              )}
            </div>
            {imageUrl && (
              <div className="w-full md:w-[45%] aspect-square md:aspect-auto">
                <img
                  src={imageUrl}
                  alt={imageAlt || ""}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        );
      }
      return (
        <div className="flex flex-col h-full">
          <div className="p-8 flex flex-col gap-4">
            <p className="text-neutral-800 text-[20px] md:text-[24px] font-[450] tracking-[-0.22px] leading-[1.2] font-suisse_intl_book">
              {primaryText}
            </p>
            {secondaryText && (
              <p className="text-zinc-600 text-[14px] md:text-[18px] font-suisse_intl_regular tracking-[-0.18px] leading-[1.5]">
                {secondaryText}
              </p>
            )}
          </div>
          {imageUrl && (
            <div className="mt-auto w-full aspect-square overflow-hidden">
              <img
                src={imageUrl}
                alt={imageAlt || ""}
                className="w-full h-full object-cover object-top"
              />
            </div>
          )}
        </div>
      );
    }

    if (type === "badge") {
      return (
        <div className="flex flex-col items-center justify-center gap-4 text-center p-8 min-h-[300px] h-full">
          <img
            src={imageUrl}
            alt={imageAlt || ""}
            className={`h-auto object-contain mx-auto ${imageAlt?.includes('Capterra') ? 'w-[140px]' : 'w-[160px]'}`}
          />
          {secondaryText && (
            <p className="text-zinc-500 text-[14px] font-medium mt-1">
              {secondaryText}
            </p>
          )}
          {children}
        </div>
      );
    }

    return null;
  };

  return (
    <div 
      data-uid={dataUid}
      className={`${baseClasses} ${className || ""}`}
    >
      {renderContent()}
    </div>
  );
};
