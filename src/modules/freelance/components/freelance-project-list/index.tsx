import { FREELANCE_PROJECTS } from "../../constants/freelance";
import FreelanceProjectCard from "../freelance-project-card";

function FreelanceProjectList() {
  return (
    <ul className="flex flex-col gap-4 group/highlight-hover">
      {FREELANCE_PROJECTS.map((freelanceProject, index) => (
        <li className="highlight-hover" key={index}>
          <FreelanceProjectCard freelanceProject={freelanceProject} />
        </li>
      ))}
    </ul>
  );
}

export default FreelanceProjectList;
