export enum Section {
  ABOUT = "about",
  EXPERIENCES = "experiences",
  FREELANCE = "freelance",
}

export type SectionLink = {
  label: string;
  href: Section;
};
