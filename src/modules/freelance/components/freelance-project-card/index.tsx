import Image from "next/image";
import ContainerLink from "../../../common/components/container-link";
import TecnologyList from "../../../common/components/technology-list";
import { FreelanceProject } from "../../types/freelance";

type FreelanceProjectCardProps = {
  freelanceProject: FreelanceProject;
};

function FreelanceProjectCard({
  freelanceProject: { title, description, technologiesUsed, images, url },
}: FreelanceProjectCardProps) {
  return (
    <ContainerLink
      className="max-sm:flex-col-reverse"
      header={
        images &&
        images.length > 0 && (
          <Image
            className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            width={200}
            height={48}
            src={images[0]}
            alt={"test"}
          />
        )
      }
      title={title}
      url={url}
      target="_blank"
    >
      <p className="text-sm leading-normal">{description}</p>
      <TecnologyList technologies={technologiesUsed} />
    </ContainerLink>
  );
}

export default FreelanceProjectCard;
