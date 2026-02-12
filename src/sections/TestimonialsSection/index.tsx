import { TestimonialCard } from "./components/TestimonialCard";

const Star = ({ fill = "#FFB400" }: { fill?: string }) => (
  <svg width="20" height="19" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]">
    <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill={fill} />
  </svg>
);

const HalfStar = () => (
  <svg width="20" height="19" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]">
    <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#E5E7EB" />
    <path d="M8 0V11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FFB400" />
  </svg>
);

export const TestimonialsSection = () => {
  return (
    <section className="w-full flex flex-col items-center py-20 md:py-20 px-5 md:px-[60px] max-w-[1220px] mx-auto gap-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Row 1: Stat (1 col) + Cade Kirkhart (2 cols) */}
        <TestimonialCard
          type="stat"
          primaryText="12 billion+"
          secondaryText="minutes of secure AI video calling provided so far"
        />
        <TestimonialCard
          type="quote"
          layout="horizontal"
          className="md:col-span-2"
          primaryText="“A phenomenal platform that has continued to give back in numerous ways.”"
          secondaryText="Cade Kirkhart, LCPC-S"
          imageUrl="https://framerusercontent.com/images/TF6vUlJzXZqhqDYU3b79eRV8rQ.jpg?width=560&height=560"
          imageAlt="Cade Kirkhart"
        />

        {/* Row 2: Three Badges */}
        <TestimonialCard
          type="badge"
          imageUrl="https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/16.webp"
          imageAlt="GetApp Category Leaders 2025"
        />
        <TestimonialCard
          type="badge"
          imageUrl="https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/20.png"
          imageAlt="Capterra"
          secondaryText="1,000+ reviews"
        >
          <div className="flex items-center gap-1.5 mt-1 border-neutral-100">
            <Star />
            <Star />
            <Star />
            <Star />
            <HalfStar />
            <span className="text-neutral-800 font-semibold text-lg ml-1">4.6</span>
          </div>
        </TestimonialCard>
        <TestimonialCard
          type="badge"
          imageUrl="https://c.animaapp.com/mlgk6ag9Ar1CYd/assets/17.webp"
          imageAlt="G2 Easiest To Use Winter 2025"
        />

        {/* Row 3: Hilary Jackson (2 cols) + Stat (1 col) */}
        <TestimonialCard
          type="quote"
          layout="horizontal"
          className="md:col-span-2"
          primaryText="“It meets ALL of my needs as a sole practitioner. Thank you so much!”"
          secondaryText="Hilary Jackson, Owner, Goodtherapy"
          imageUrl="https://framerusercontent.com/images/JMMZL9CfCWNyowhb04Iz8JhMu4.png?width=1200&height=896"
          imageAlt="Hilary Jackson"
        />
        <TestimonialCard
          type="stat"
          primaryText="1.3 million"
          secondaryText="weekly sessions delivered with BeyondChat"
        />
      </div>
    </section>
  );
};
