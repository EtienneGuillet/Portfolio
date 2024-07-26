import { HTMLAttributeAnchorTarget, ReactNode } from "react";
import { clx } from "../../../../../utils/clx";

type LinkProps = {
  url: string;
  children: ReactNode;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
};

function Link({ url, children, target, className }: LinkProps) {
  return (
    <a className={clx(className)} href={url} target={target}>
      {children}
    </a>
  );
}

export default Link;
