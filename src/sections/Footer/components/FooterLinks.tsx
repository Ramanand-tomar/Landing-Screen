import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterLinks = () => {
  return (
    <div data-uid="Dt1gWeuvzBDAxfXc" className="relative content-start items-start box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-center gap-y-10 w-full pt-5 md:gap-x-[120px] md:flex-row md:gap-y-[120px]">
      <FooterColumn data-uid="UvYVtq0o6Pa9lzW2"
        title="Product"
        links={[
          { text: "Overview", href: "./product/overview" },
          { text: "Pricing", href: "./pricing" },
        ]}
      />
      <FooterColumn data-uid="wrfZORFIrt0zqe0w"
        title="Company"
        links={[
          { text: "About", href: "./about/who-we-are" },
          { text: "Careers", href: "./about/careers" },
          { text: "Security", href: "./security" },
          { text: "Ventures", href: "./ventures" },
          { text: "Contact", href: "./about/contact" },
        ]}
      />
      <FooterColumn data-uid="plhuG6NK6l4op2SO"
        title="Resources"
        links={[
          { text: "Help center", href: "https://help.doxy.me/en/" },
          { text: "Telehealth.org", href: "https://telehealth.org/" },
          { text: "Blog", href: "./media/blog" },
          { text: "Status", href: "https://status.doxy.me/" },
        ]}
      />
    </div>
  );
};
