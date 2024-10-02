import { ReactNode } from "react";
import { clx } from "../../../../utils/clx";

type ExpandLinkProps = {
  url: string;
  children: ReactNode;
  active?: boolean;
};

function ExpandLink({ url, children, active }: ExpandLinkProps) {
  return (
    <a className="group flex items-center gap-4 py-3" href={url}>
      <span
        className={clx(
          "group-hover:w-16 h-[1px] group-hover:h-0.5 w-8 transition-all bg-slate-600 group-hover:bg-white content-['']",
          {
            "w-16 bg-white h-0.5": active,
          }
        )}
      />
      <span
        className={clx(
          "text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200",
          {
            "text-slate-200": active,
          }
        )}
      >
        {children}
      </span>
    </a>
  );
}

export default ExpandLink;
