import { useState } from "react";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="md:hidden">
      <a
            href="https://doxy.me/v2/provider-selector/?accountType=free"
            className="flex h-[40px] items-center justify-center bg-white hover:bg-[#58bdb1] text-neutral-800 px-5 md:px-8 rounded-[10px] text-[15px] md:rounded-xl font-suisse_intl_medium text-[14px] md:text-[15px] font-medium tracking-tight md:tracking-wide transition-colors w-auto shadow-sm"
          >
            Sign in
          </a>
    </div>
      <button data-uid="IvL459CRvp106QqW"
        onClick={() => setIsOpen(!isOpen)}
        className="relative md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center"
        aria-label="Toggle menu"
      >
        <span data-uid="vzhc0GOzookLJyaG" className={`w-6 h-0.5 bg-neutral-800 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span data-uid="qXAdccZHDfM3Imxa" className={`w-6 h-0.5 bg-neutral-800 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
        <span data-uid="JeMSrFgWcG31pe9s" className={`w-6 h-0.5 bg-neutral-800 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {isOpen && (
        <div data-uid="6MI63MuOedTVnpTb" className="fixed md:hidden top-[70px] left-0 right-0 bg-stone-100 border-t border-black/10 shadow-lg z-40">
          <div data-uid="mkl57r3rq4DoSBpT" className="flex flex-col p-5 gap-4">
            <a data-uid="mavJNdhkpPzrWLm9"
              href="./product/overview"
              className="text-neutral-800 text-base font-medium font-suisse_intl_medium"
              onClick={() => setIsOpen(false)}
            >
              Product
            </a>
            <div data-uid="K9xGY7RJvDSu611R" className="text-neutral-800 text-base font-medium font-suisse_intl_medium">
              Pricing
            </div>
            <div data-uid="K9xGY7RJvDSu611R" className="text-neutral-800 text-base font-medium font-suisse_intl_medium">
              Help Center
            </div>
            <div data-uid="K9xGY7RJvDSu611R" className="text-neutral-800 text-base font-medium font-suisse_intl_medium">
              Blog
            </div>
            <a data-uid="viBNncZZxQBKtExN"
              href="./pricing"
              className="text-neutral-800 text-base font-medium font-suisse_intl_medium"
              onClick={() => setIsOpen(false)}
            >
              TeleHealth.org
            </a>
            <div data-uid="rSgUh0AACyRMjJiJ" className="flex flex-col gap-3 pt-4">
              <a data-uid="u3mjLjqjzsYcvYGH"
                href="https://doxy.me/v2/sign-in"
                className="text-neutral-800 text-base font-medium bg-white shadow-[rgba(15,12,12,0.01)_0px_4px_6px_-6px,rgba(16,12,12,0.08)_0px_0px_0px_1px,rgba(0,0,0,0.07)_0px_0.361312px_0.216787px_-1.25px,rgba(0,0,0,0.06)_0px_1.37312px_0.823872px_-2.5px,rgba(0,0,0,0.03)_0px_6px_3.6px_-3.75px] px-6 py-3 rounded-lg text-center font-suisse_intl_medium"
                onClick={() => setIsOpen(false)}
              >
                Sign in
              </a>
              <a data-uid="7jGgGw8LSteHs9p8"
                href="https://doxy.me/sign-up?accountType=free"
                className="text-neutral-800 text-base font-medium bg-[#63D1C4] shadow-[rgba(255,255,255,0.15)_0px_4px_6px_0px_inset,rgba(0,0,0,0.05)_0px_1px_2px_0px,rgba(0,0,0,0.06)_0px_1px_0px_0px] px-6 py-3 rounded-lg text-center border border-black/10 font-suisse_intl_medium"
                onClick={() => setIsOpen(false)}
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
