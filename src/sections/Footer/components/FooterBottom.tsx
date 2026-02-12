import { LanguageSelector } from "@/sections/Footer/components/LanguageSelector";
import { SocialLinks } from "@/sections/Footer/components/SocialLinks";

export const FooterBottom = () => {
  return (
    <div data-uid="WDzhEKdUwquuoO58" className="relative content-center items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-start gap-y-10 w-full mt-24 pt-0 md:gap-x-[normal] md:flex-row md:justify-between md:gap-y-[normal] md:pt-5">
      <div data-uid="hWKsWqQMMszu7tp3" className="relative content-start items-start box-border caret-transparent gap-x-4 flex basis-auto flex-col grow-0 shrink-0 h-min justify-start gap-y-4 w-full py-8 md:content-center md:items-center md:gap-x-10 md:basis-0 md:flex-row md:grow md:gap-y-10 md:w-px md:py-0">
        <div data-uid="1tbNFmUkqMfBytiX" className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
          <p data-uid="m933sVHT41HF9k2t" className="text-neutral-800 text-sm font-semibold box-border caret-transparent tracking-[0.28px] leading-[19.6px] text-nowrap font-suisse_intl_regular">
            © BeyondChat Inc.
          </p>
        </div>
        <div data-uid="nkvsV6LNsiZqkPrb" className="relative content-start items-start box-border caret-transparent gap-x-4 flex basis-auto flex-col grow-0 shrink-0 h-min justify-start gap-y-4 w-full md:content-center md:items-center md:gap-x-8 md:basis-0 md:flex-row md:grow md:gap-y-8 md:w-px">
          <div data-uid="oXJtrjQhmyeFSjwd" className="static box-content caret-black shrink min-h-0 min-w-0 z-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-[1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <LanguageSelector data-uid="7Sl4AtbeWnI0goGL" />
          </div>
          <div data-uid="9GXulffgJdcAhiWM" className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
            <p data-uid="AaPAfdtfuhmBwjtk" className="text-neutral-800 text-sm box-border caret-transparent tracking-[0.28px] leading-[19.6px] text-nowrap font-suisse_intl_regular">
              <a data-uid="8B52y1ln5xw3XjG9"
                href="./terms-of-service"
                className="box-border caret-transparent text-nowrap font-semibold"
              >
                Terms of Service
              </a>
            </p>
          </div>
          <div data-uid="Oi9HXQJSUKkYpc8Z" className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
            <p data-uid="OOIs5WvoXlhK5J7j" className="text-neutral-800 text-sm box-border caret-transparent tracking-[0.28px] leading-[19.6px] text-nowrap font-suisse_intl_regular">
              <a data-uid="O5uDF1brQgEBhHRL"
                href="./privacy-policy"
                className="box-border caret-transparent font-semibold text-nowrap"
              >
                Privacy Policy
              </a>
            </p>
          </div>
          <div data-uid="GT2LaheDIrO00bwe" className="relative box-border caret-transparent shrink-0 z-10">
            <button data-uid="Sj3EZPhV1YoX1mC3"
              aria-label="Cookie Trigger"
              className="text-neutral-800 text-sm bg-transparent caret-transparent flex h-full leading-[14px] text-center w-full p-0 font-suisse_intl_regular"
            >
              <span data-uid="qMDAG4xmHZADFL90" className="box-border caret-transparent block text-nowrap font-semibold">
                Cookie Settings
              </span>
            </button>
          </div>
        </div>
      </div>
      <SocialLinks data-uid="yhjUxM0MrahFbS9b" />
    </div>
  );
};
