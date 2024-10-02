import { HTMLAttributeAnchorTarget, ReactNode } from "react";
import TopRightArrowIcon from "../../../../icons/top-right-arrow";
import { clx } from "../../../../utils/clx";

export type LinkProps = {
  url: string;
  children: ReactNode;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
  arrowIcon?: boolean;
  as?: string;
};

function Link({ url, children, target, className, arrowIcon, as }: LinkProps) {
  const CustomTag = (as ?? "a") as keyof JSX.IntrinsicElements;
  return (
    <CustomTag
      className={clx(
        "group/link text-slate-200 transition-colors hover:text-teal-300",
        className
      )}
      href={url}
      target={target}
    >
      {children}
      {arrowIcon && (
        <TopRightArrowIcon className="transition-transform hover:translate-x-1 hover:-translate-y-1 lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
      )}
    </CustomTag>
  );
}

export default Link;
