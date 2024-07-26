import TopRightArrowIcon from "../../../../icons/top-right-arrow";
import { Experience } from "../../types/experience";
import AdditionalLinkList from "../additional-link-list";
import TecnologyList from "../technology-list";

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
    <a
      href={url}
      target="_blank"
      className="group flex gap-4 py-4 px-4 lg:px-6 rounded-md lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg"
    >
      <header className="w-3/12 my-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
        {startDate} — {endDate}
      </header>
      <main className="flex flex-col gap-2 w-9/12">
        <h3 className="group-hover:text-teal-300 font-medium leading-snug">
          {title} · {companyName}
          <TopRightArrowIcon className="group-hover:translate-x-1 group-hover:-translate-y-1" />
        </h3>
        <p className="text-sm leading-normal text-slate-500">{description}</p>
        {additionalLinks && additionalLinks.length > 0 && (
          <AdditionalLinkList additionalLinks={additionalLinks} />
        )}
        <TecnologyList technologies={technologiesUsed} />
      </main>
    </a>
  );
}

export default ExperienceCard;
