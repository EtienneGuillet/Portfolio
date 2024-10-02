"use client";

import { HTMLAttributeAnchorTarget, ReactNode } from "react";
import { useView } from "../../../../hooks/use-view";
import { clx } from "../../../../utils/clx";
import Link from "../link";

type ContainerLinkProps = {
  children: ReactNode;
  header: ReactNode;
  title: ReactNode;
  url: string;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
};

function ContainerLink({
  children,
  header,
  title,
  url,
  target,
  className,
}: ContainerLinkProps) {
  const { isDesktopView } = useView();
  const cardContent = (
    <div
      className={clx(
        "group max-sm:flex-col flex gap-x-4 gap-y-2 py-4 lg:px-6",
        className
      )}
    >
      <header className="w-full sm:w-3/12 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
        {header}
      </header>
      <main className="flex flex-col gap-2 w-full lg:w-9/12">
        <h3 className="font-medium leading-snug">
          <Link
            className="lg:group-hover:text-teal-300"
            target={target}
            url={url}
            arrowIcon
            as={isDesktopView ? "span" : undefined}
          >
            {title}
          </Link>
        </h3>
        {children}
      </main>
    </div>
  );

  return isDesktopView ? (
    <a href={url} target="_blank">
      {cardContent}
    </a>
  ) : (
    cardContent
  );
}

export default ContainerLink;
