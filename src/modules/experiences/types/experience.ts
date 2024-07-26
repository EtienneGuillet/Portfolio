import { Link } from "../../../../types/link";

export type Experience = {
  title: string;
  description: string;
  companyName: string;
  startDate: string;
  endDate: string;
  url: string;
  additionalLinks?: Link[];
  technologiesUsed: string[];
};
