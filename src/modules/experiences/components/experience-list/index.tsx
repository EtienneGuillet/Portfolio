import { EXPERIENCES } from "../../constants/experiences";
import ExperienceCard from "../experience-card";

function ExperienceList() {
  return (
    <ul className="">
      {EXPERIENCES.map((experience, index) => (
        <li key={index}>
          <ExperienceCard experience={experience} />
        </li>
      ))}
    </ul>
  );
}

export default ExperienceList;
