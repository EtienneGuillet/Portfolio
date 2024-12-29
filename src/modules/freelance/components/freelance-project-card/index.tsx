"use client";

import ContainerLink from "../../../common/components/container-link";
import Gallery from "../../../common/components/gallery";
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
          <Gallery
            className="z-10 relative"
            images={images.map((img) => ({
              src: img,
              alt: img,
              loading: "lazy",
            }))}
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
