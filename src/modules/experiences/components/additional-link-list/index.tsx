import LinkIcon from "../../../../icons/link";
import { Link as LinkType } from "../../../../types/link";
import Link from "../../../common/components/link";

type AdditionalLinkListProps = {
  additionalLinks: LinkType[];
};

function AdditionalLinkList({ additionalLinks }: AdditionalLinkListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {additionalLinks.map(({ label, url }, index) => (
        <Link
          className="flex gap-1 items-center hover:text-teal-300 text-sm font-medium"
          key={index}
          url={url}
          target="_blank"
        >
          <LinkIcon />
          {label}
        </Link>
      ))}
    </div>
  );
}

export default AdditionalLinkList;
