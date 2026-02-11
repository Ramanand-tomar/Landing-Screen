import { useState, useEffect } from "react";
import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";
import { NavbarActions } from "@/sections/Navbar/components/NavbarActions";
import { MobileMenu } from "@/sections/Navbar/components/MobileMenu";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar if scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } 
      // Hide navbar if scrolling down and past a threshold
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      data-uid="juaPz9UssZUroofc" 
      className={`fixed box-border caret-transparent shrink-0 order-[-1000] z-50 top-0 inset-x-0 bg-stone-100/90 backdrop-blur transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div data-uid="i7ORvwuzbfer6Hob" className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex h-min justify-center gap-y-2.5 w-full overflow-clip">
        <div data-uid="PhBeS7I7CI080Kye" className="relative content-center items-center box-border caret-transparent gap-x-6 flex shrink-0 h-min justify-between max-w-[1220px] gap-y-6 w-full overflow-clip p-5 md:px-[60px]">
          <div data-uid="j9ghRmHdb8UVuFNX" className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-start gap-y-2.5 overflow-clip">
            <NavbarLogo data-uid="gbZpdTCN0J96q1W1" />
          </div>
          <DesktopMenu data-uid="GRazN9nztGXybvhm" className="!hidden md:!flex" />
          <div className="flex items-center gap-x-3">
            <NavbarActions data-uid="Xq6sEsm25FxTabLy" className="hidden md:flex" />
            <MobileMenu data-uid="FbbdwxEmBHnx4AX8" />
          </div>
        </div>
      </div>
    </div>
  );
};
