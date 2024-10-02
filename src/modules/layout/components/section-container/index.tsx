import { ReactNode } from "react";
import Link, { LinkProps } from "../../../common/components/link";

type SectionContainerProps = {
  title: string;
  children: ReactNode;
  id?: string;
  footerLink?: Omit<LinkProps, "className">;
};

function SectionContainer({
  children,
  id,
  title,
  footerLink,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className="last:mb-0 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {title}
        </h2>
      </div>
      {children}
      {footerLink && (
        <div className="mt-12">
          <Link className="font-semibold text-base" {...footerLink} />
        </div>
      )}
    </section>
  );
}

export default SectionContainer;
