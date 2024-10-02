"use client";

import { ReactNode, useEffect } from "react";
import useHash from "../../../../hooks/use-hash";
import { scrollToHash } from "../../../../utils/scroll-to-hash";

type HashContainerProps = {
  children: ReactNode;
  id: string;
  className?: string;
};

function HashContainer({ children, className, id }: HashContainerProps) {
  const hash = useHash();

  useEffect(() => {
    const section = hash?.replace("#", "");
    if (section) {
      scrollToHash(section);
    }
  }, [hash]);

  return (
    <div className={className} id={id}>
      {children}
    </div>
  );
}

export default HashContainer;
