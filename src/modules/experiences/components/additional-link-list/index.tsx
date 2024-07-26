import { Link as LinkType } from "../../../../../types/link";
import LinkIcon from "../../../../icons/link";
import Link from "../../../common/components/link";

type AdditionalLinkListProps = {
  additionalLinks: LinkType[];
};

function AdditionalLinkList({ additionalLinks }: AdditionalLinkListProps) {
  return (
    <div>
      {additionalLinks.map(({ label, url }, index) => (
        <Link
          className="flex gap-1 items-center"
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
