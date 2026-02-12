import { useState } from "react";
import { ChevronDown, HelpCircle, FileText, Maximize } from "lucide-react";

export const DesktopMenu = ({ className = "" }: { className?: string }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div data-uid="NNaAUY5NGV3zfYVD" className={`flex items-center gap-x-8 ${className}`}>
      <a data-uid="dEwm7KzZP8bNmzNV"
        href="./product/overview"
        className="text-neutral-800 text-[15px] font-medium hover:text-black transition-colors"
      >
        Product
      </a>
      
      <div 
        data-uid="ResourcesContainer"
        className="relative py-2"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <button 
          data-uid="ResourcesButton"
          className="flex items-center gap-x-1.5 text-neutral-800 text-[15px] font-medium hover:text-black transition-colors cursor-pointer outline-none bg-transparent border-none p-0"
        >
          Resources
          <ChevronDown 
            data-uid="ChevronIcon"
            className={`w-3.5 h-3.5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
          />
        </button>

        {/* Dropdown Menu */}
        <div 
          data-uid="DropdownMenu"
          className={`absolute left-0 top-full pt-2 transition-all duration-300 z-50 ${
            isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-black/5 overflow-hidden min-w-[240px] p-2">
            <a 
              href="#" 
              className="flex items-center gap-x-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 transition-all group/item"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600 group-hover/item:bg-white group-hover/item:shadow-sm transition-all">
                <HelpCircle className="w-[18px] h-[18px]" />
              </div>
              <span className="text-[15px] text-neutral-700 font-medium">Help Center</span>
            </a>
            
            <a 
              href="#" 
              className="flex items-center gap-x-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 transition-all group/item"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600 group-hover/item:bg-white group-hover/item:shadow-sm transition-all">
                <FileText className="w-[18px] h-[18px]" />
              </div>
              <span className="text-[15px] text-neutral-700 font-medium">Blog</span>
            </a>
            
            <a 
              href="#" 
              className="flex items-center gap-x-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 transition-all group/item"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600 group-hover/item:bg-white group-hover/item:shadow-sm transition-all">
                <Maximize className="w-[18px] h-[18px]" />
              </div>
              <span className="text-[15px] text-neutral-700 font-medium">AI Video Experts</span>
            </a>
          </div>
        </div>
      </div>

      <a data-uid="NDnIIsKWhYzRb2oG"
        href="./pricing"
        className="text-neutral-800 text-[15px] font-medium hover:text-black transition-colors"
      >
        Pricing
      </a>
    </div>
  );
};
