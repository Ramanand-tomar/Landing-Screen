export type FooterColumnProps = {
  title: string;
  links: Array<{
    text: string;
    href: string;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div data-uid="KoCl5TAjo8zKMaSL" className="relative content-start items-start box-border caret-transparent gap-x-4 flex basis-auto flex-col grow-0 shrink-0 h-min justify-start gap-y-4 w-full md:basis-0 md:grow md:w-px">
      <div data-uid="cISKzOGavBS2erfO" className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
        <p data-uid="5LdqWZVquWcS0lC7" className="text-neutral-800 text-base font-[450] box-border caret-transparent tracking-[0.16px] leading-6 break-words font-suisse_intl_book font-semibold">
          {props.title}
        </p>
      </div>
      <div data-uid="I5gfK4YSwWUvEZtC" className="relative content-start items-start box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-start gap-y-2.5 w-full">
        {props.links.map((link, index) => (
          <div data-uid="YSMqI0tOqDaQe7en"
            key={index}
            className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full"
          >
            <p data-uid="vwb1fEKiEFbxMI73" className="text-zinc-600 text-[15px] box-border caret-transparent tracking-[0.3px] leading-[21px] break-words font-suisse_intl_regular">
              <a data-uid="WfcgXeS2ILrPWV1G"
                href={link.href}
                className="box-border caret-transparent break-words hover:text-neutral-800 hover:border-neutral-800"
              >
                {link.text}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
