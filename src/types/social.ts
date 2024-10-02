import { ReactNode } from "react";

export enum Social {
  GITHUB = "github",
  LINKEDIN = "linkedin",
}

export type SocialLink = {
  icon: ReactNode;
  href: string;
  title?: string;
};
