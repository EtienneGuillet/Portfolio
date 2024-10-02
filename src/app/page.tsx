import { SECTION_LINKS } from "../constants/section";
import { SOCIALS_LINKS } from "../constants/socials";
import Link from "../modules/common/components/link";
import Navigation from "../modules/common/components/navigation";
import ExperienceList from "../modules/experiences/components/experience-list";
import FreelanceProjectList from "../modules/freelance/components/freelance-project-list";
import SectionContainer from "../modules/layout/components/section-container";
import { Section } from "../types/section";

export default function Home() {
  return (
    <section className="lg:flex lg:justify-between gap-4">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Etienne Guillet
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Frontend Engineer
          </h2>
          <p className="leading-normal mt-4 max-w-xs">
            I build visually flawless, engaging, and accessible digital
            experiences.
          </p>
          <Navigation sections={SECTION_LINKS} className="max-lg:hidden" />
        </div>
        <ul className="flex-wrap gap-5 ml-1 mt-8 flex items-center">
          {SOCIALS_LINKS.map(({ href, icon, title }, index) => (
            <li key={index} className="shrink-0">
              <a
                title={title ?? href}
                className="text-slate-400 transition-colors hover:text-slate-200"
                href={href}
                target="_blank"
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </header>
      <main className="pt-24 lg:w-1/2 lg:py-24 text-slate-200">
        <SectionContainer id={Section.ABOUT} title="About">
          <div className="flex flex-col gap-4">
            <p>
              Detail-oriented Frontend Developer with a master degree in
              Computer Science and 4 years of experience. I am passionate about
              creating robust, reusable components that enhance user experience
              and reinforce the company&apos;s brand image. I take pride in my
              ability to meticulously develop websites, ensuring optimal
              functionality and aesthetic appeal.
            </p>
            <p>
              Recently, I have been working for one of the leaders in Europe in
              the HRIS SaaS industry,{" "}
              <Link target="_blank" url={"https://www.lucca-hr.com"}>
                Lucca
              </Link>
              , but also a really promising startup in the packaging industry in
              Seoul,{" "}
              <Link target="_blank" url={"https://packative.com/en"}>
                Packative
              </Link>
              .
            </p>
            <p>
              I also operate as a freelancer. You can check my availability on
              my{" "}
              <Link
                target="_blank"
                url={"https://www.malt.fr/profile/etienneguillet"}
              >
                Malt profile
              </Link>
              .
            </p>
          </div>
        </SectionContainer>
        <SectionContainer
          id={Section.EXPERIENCES}
          title="Experiences"
          footerLink={{
            url: "pdf/resume.pdf",
            children: "View Full Résumé",
            arrowIcon: true,
            target: "_blank",
          }}
        >
          <ExperienceList />
        </SectionContainer>
        <SectionContainer id={Section.FREELANCE} title="Freelance">
          <FreelanceProjectList />
        </SectionContainer>
      </main>
    </section>
  );
}
