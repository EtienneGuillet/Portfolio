import { Experience } from "../types/experience";

export const EXPERIENCES: Experience[] = [
  {
    startDate: "APR 2023",
    endDate: "OCT 2024",
    title: "Frontend developer",
    url: "https://packative.com/",
    additionalLinks: [
      {
        url: "https://packative.com/en",
        label: "Market place",
      },
      // {
      //   url: "https://scm.packative.com",
      //   label: "ERP",
      // },
    ],
    technologiesUsed: [
      "Next.JS",
      "React",
      "Angular",
      "Typescript",
      "NGRX",
      "Playwright",
      "Jest",
    ],
    companyName: "Packative",
    description:
      "Creation of a multi-tenant SASS CRM using state machines for handling state in React/Tailwind/Typescript. Development of a real-time supply chain manager allowing users to follow all the production steps of an item from the design to the shipping of a product using Reactflow. Lead developer for the design and implementation of a new marketplace server-side rendered using NextJs/Typescript. Development of a live packaging prices calculating system based on various options such as sizes, material, shape... Implementation of an editor allowing customers to have a 3D preview while designing their packaging. Integration of a CMS using homemade custom components with interactive UI/UX ensuring an easy publishing/writing of blog posts or pages by our marketing team. Maintenance and development of new features on our previous marketplace using Angular/Typescript and NGRX. Used Playwright and Jest for unit and end-to-end testing.",
    // letterOfRecommendationLink: "/pdf/letter-of-recommendation/packative.pdf",
  },
  {
    startDate: "SEPT",
    endDate: "MAR 2023",
    title: "Software engineer intern",
    url: "https://www.lucca.fr/gestion-rh/entretiens",
    technologiesUsed: ["Angular", ".NetCore", "NGRX", "C#"],
    companyName: "Lucca (HR and Finance software publisher)",
    description:
      "Designing and implementing key features for interview management and training request SaaS software using C#, .NET core framework, and Angular. Working in a Micro-services architecture environment between the different applications. Use of NGRX (Redux equivalent for Angular) as a store system for components and Jest for unit testing.",
    letterOfRecommendationLink: "/pdf/letter-of-recommendation/ecotropy.pdf",
  },
  {
    startDate: "2020",
    endDate: "2022",
    title: "Frontend developer",
    url: "https://www.malt.fr/profile/etienneguillet",
    technologiesUsed: ["React", "PHP", "Wordpress", "Timber"],
    companyName: "Freelance",
    description:
      "Development of web projects as a freelancer for clients. Creation of Wordpress websites with Timber extension allowing the implementation of MVC architecture in PHP. Advanced web integration in HTML and CSS. React webapp development.",
  },
  {
    title: "Software engineer intern",
    description:
      "Creation of an interface to retrieve and aggregate information from different customer databases using SQL queries in Angular and C#. This software is now used by product masters and product owners at Lucca.",
    companyName: "Lucca (HR and Finance software publisher)",
    startDate: "APR",
    endDate: "AUG 2020",
    url: "https://www.lucca.fr/gestion-rh/entretiens",
    technologiesUsed: ["Angular", "C#"],
  },
  {
    title: "Epitech Regional Assistant (tutoring)",
    description:
      "Organization of activities for the first and second year students to learn the different notions of the C et C++ programming languages and object-oriented paradigm.",
    companyName: "Epitech (school of computer science)",
    startDate: "JAN 2018",
    endDate: "MAR 2020",
    url: "https://www.epitech.eu/",
    technologiesUsed: ["C", "C++"],
  },
  {
    title: "Web developer intern",
    description:
      "Development of a dashboard with indicators for energy losses of buildings using Django framework and Javascript libraries such as Bootstrap.",
    companyName: "Ecotropy",
    startDate: "JULY",
    endDate: "DEC 2018",
    url: "https://www.ecotropy.fr",
    technologiesUsed: ["Javascript", "Django", "Bootstrap"],
    additionalLinks: [
      {
        label: "Datapool",
        url: "https://datapool.fr",
      },
    ],
    letterOfRecommendationLink: "/pdf/letter-of-recommendation/ecotropy.pdf",
  },
];
