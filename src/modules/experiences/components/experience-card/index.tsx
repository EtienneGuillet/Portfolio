import ContainerLink from "../../../common/components/container-link";
import Link from "../../../common/components/link";
import TecnologyList from "../../../common/components/technology-list";
import { Experience } from "../../types/experience";
import AdditionalLinkList from "../additional-link-list";

type ExperienceCardProps = {
  experience: Experience;
};

function ExperienceCard({
  experience: {
    url,
    title,
    startDate,
    endDate,
    companyName,
    description,
    technologiesUsed,
    additionalLinks,
  },
}: ExperienceCardProps) {
  return (
    <ContainerLink
      header={`${startDate} — ${endDate}`}
      title={`${title} · ${companyName}`}
      url={url}
      target="_blank"
    >
      <p className="text-sm leading-normal">{description}</p>
      {additionalLinks && additionalLinks.length > 0 && (
        <AdditionalLinkList additionalLinks={additionalLinks} />
      )}
      <TecnologyList technologies={technologiesUsed} />
    </ContainerLink>
  );
}

export default ExperienceCard;
