import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <div data-uid="XS2QStwWc6klXDqg" className="relative content-center items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center max-w-[1220px] gap-y-0 w-full overflow-clip pt-16 pb-5 px-5 md:gap-x-[120px]  md:px-[60px]">
      {/* <h2 className="w-full text-left text-neutral-800 text-[24px] md:text-[32px] font-bold tracking-tight font-suisse_intl_book">
        Beyond<span className="text-[#49D0B5]">Chat</span>
      </h2> */}
      <div data-uid="wrrmTP9cbAcGhMhU" className="relative content-start items-start box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-center gap-y-10 w-full">
        <FooterLogo data-uid="K7VIi9tgseA92eza" />
        <div data-uid="4hoJbg2VVN9LRG7O" className="relative bg-black/10 box-border caret-transparent shrink-0 h-px w-full overflow-clip"></div>
        <FooterLinks data-uid="3uPA65rnXJWKApkF" />
      </div>
      <FooterBottom data-uid="SBXCWRIBjvYNQHJH" />
    </div>
  );
};
