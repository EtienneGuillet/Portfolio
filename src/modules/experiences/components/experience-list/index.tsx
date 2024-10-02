import { EXPERIENCES } from "../../constants/experiences";
import ExperienceCard from "../experience-card";

function ExperienceList() {
  return (
    <ul className="flex flex-col gap-4 group/highlight-hover">
      {EXPERIENCES.map((experience, index) => (
        <li className="highlight-hover" key={index}>
          <ExperienceCard experience={experience} />
        </li>
      ))}
    </ul>
  );
}

export default ExperienceList;
