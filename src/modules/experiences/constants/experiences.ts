import { Experience } from "../types/experience";

export const EXPERIENCES: Experience[] = [
  {
    startDate: "2023",
    endDate: "PRESENT",
    title: "Frontend developper",
    url: "https://packative.com/",
    additionalLinks: [
      {
        url: "https://scm.packative.com",
        label: "ERP",
      },
    ],
    technologiesUsed: [],
    companyName: "Packative",
    description:
      "Creation of a multi-tenant SASS CRM using state machines for handling state in React/Tailwind/Typescript. Development of a real-time supply chain manager allowing users to follow all the production steps of an item from the design to the shipping of a product using Reactflow. Lead developer for the design and implementation of a new marketplace server-side rendered using NextJs/Typescript. Development of a live packaging prices calculating system based on various options such as sizes, material, shape... Implementation of an editor allowing customers to have a 3D preview while designing their packaging. Integration of a CMS using homemade custom components with interactive UI/UX ensuring an easy publishing/writing of blog posts or pages by our marketing team. Maintenance and development of new features on our previous marketplace using Angular/Typescript and NGRX. Used Playwright and Jest for unit and end-to-end testing.",
  },
  {
    startDate: "SEPT",
    endDate: "MAR 2023",
    title: "Software engineer intern",
    url: "https://www.lucca-hr.com/",
    technologiesUsed: [],
    additionalLinks: [],
    companyName: "Lucca (HR and Finance software publisher)",
    description:
      "Designing and implementing key features for interview management and training request SaaS software using C#, .NET core framework, and Angular. Working in a Micro-services architecture environment between the different applications. Use of NGRX (Redux equivalent for Angular) as a store system for components and Jest for unit testing.",
  },
  {
    startDate: "2020",
    endDate: "2022",
    title: "Frontend developer",
    url: "https://www.malt.fr/profile/etienneguillet",
    technologiesUsed: ["Next.JS", "React"],
    companyName: "Freelance",
    description:
      "Development of web projects as a freelancer for clients. Creation of Wordpress websites with Timber extension allowing the implementation of MVC architecture in PHP. Advanced web integration in HTML and CSS. React webapp development.",
  },
];
