const badges = [
  { name: "Enterprise-grade security", icon: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-3.svg" },
  { name: "SOC 2-certified", icon: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-3.svg" },
  { name: "Privacy-first", icon: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-3.svg" },
  { name: "Global compliance", icon: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-3.svg" },
  { name: "End-to-end encrypted", icon: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-3.svg" },
  { name: "GDPR-compliant", icon: "https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/icon-3.svg" },
];

const BadgeItem = ({ name }: { name: string }) => (
  <div className="flex items-center gap-3 px-6 whitespace-nowrap">
    <div className="w-[15px] h-4 flex-shrink-0">
      <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.818 1.522C11.716 1.522 9.729 1.079 7.565 0.129L7.273 0L6.98 0.129C4.816 1.079 2.829 1.522 0.727 1.522L0 1.522L0 7.34C0 14.388 7.044 16.035 7.115 16.05L7.273 16.085L7.431 16.05C7.502 16.035 14.545 14.388 14.545 7.34L14.545 1.522Z" fill="rgb(35, 35, 35)" />
        <path d="M6.022 11.3L3.335 8.613L4.364 7.585L5.978 9.199L10.139 4.676L11.209 5.661L6.022 11.3Z" fill="white" />
      </svg>
    </div>
    <span className="text-neutral-800 text-[15px] font-medium font-suisse_intl_medium">
      {name}
    </span>
  </div>
);

export const SecurityBadges = () => {
  return (
    <div className="w-full bg-white overflow-hidden py-4 border-b border-gray-100">
      <div className="relative flex items-center">
        {/* Continuous Marquee Container */}
        <div className="animate-marquee flex items-center min-w-full hover:[animation-play-state:paused] cursor-pointer">
          {/* First set of badges */}
          <div className="flex items-center">
            {badges.map((badge, index) => (
              <BadgeItem key={`badge-1-${index}`} name={badge.name} />
            ))}
          </div>
          {/* Second set of badges for seamless loop */}
          <div className="flex items-center">
            {badges.map((badge, index) => (
              <BadgeItem key={`badge-2-${index}`} name={badge.name} />
            ))}
          </div>
          {/* Third set of badges to ensure full width on large screens */}
          <div className="flex items-center">
            {badges.map((badge, index) => (
              <BadgeItem key={`badge-3-${index}`} name={badge.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
