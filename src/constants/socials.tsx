import GmailIcon from "../icons/socials/gmail";
import LinkedinIcon from "../icons/socials/linkedin";
import MaltIcon from "../icons/socials/malt";
import PhoneIcon from "../icons/socials/phone";
import { SocialLink } from "../types/social";

export const SOCIALS_LINKS: SocialLink[] = [
  // {
  //   icon: <GithubIcon />,
  //   href: "https://github.com/EtienneGuillet",
  // },
  {
    icon: <LinkedinIcon />,
    href: "https://www.linkedin.com/in/etienne-guillet",
  },
  {
    icon: <MaltIcon />,
    href: "https://www.malt.fr/profile/etienneguillet",
  },
  {
    icon: <GmailIcon />,
    href: "mailto:guilletetienne.pro@gmail.com",
    title: "guilletetienne.pro@gmail.com",
  },
  {
    icon: <PhoneIcon />,
    href: "tel:+821097812756",
    title: "+821097812756",
  },
];
