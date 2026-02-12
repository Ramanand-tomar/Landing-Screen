export const FinalCTA = () => {
  return (
    <div className="w-full bg-white ">
      <div className="w-full bg-white rounded-t-[48px] md:rounded-t-[80px] py-20 px-5 flex flex-col items-center justify-center gap-8 md:gap-10">
        <h2 className="text-neutral-800 font-semibold text-[36px] md:text-[50px] font-[450] tracking-[-0.03em] leading-[1.1] text-center font-suisse_intl_book max-w-[800px]">
          Start meeting smarter today
        </h2>
        
        <div className="flex flex-row items-center  justify-center gap-3 md:gap-4 w-full md:w-auto">
          {/* Primary CTA */}
          <a
            href="#"
            className="flex h-[40px] md:h-[45px] items-center border border-black/10 justify-center bg-[#63D1C4] hover:bg-[#58bdb1] text-neutral-800 px-5 md:px-5 rounded-[14px] md:rounded-xl font-suisse_intl_medium text-[14px] md:text-[15px] font-medium tracking-tight md:tracking-wide transition-colors w-auto shadow-sm"
          >
            Get started for free
          </a>

          {/* Secondary CTA */}
          <a
            href="./pricing"
            className="flex h-[40px] md:h-[45px] items-center border border-black/10 justify-center bg-white border border-zinc-200 hover:bg-stone-50 text-neutral-800 px-5 md:px-8 rounded-[14px] md:rounded-xl font-suisse_intl_medium text-[14px] md:text-[15px] font-medium tracking-tight md:tracking-wide transition-colors w-auto shadow-sm gap-2"
          >
            Explore plans
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform translate-y-[0.5px]">
              <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
