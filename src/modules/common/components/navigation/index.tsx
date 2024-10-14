"use client";
import { useEffect, useState } from "react";
import { SectionLink } from "../../../../types/section";
import ExpandLink from "../expand-link";

type NavigationProps = {
  sections: SectionLink[];
  className?: string;
};

function Navigation({ sections, className }: NavigationProps) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: document.querySelector("#sections"),
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.href);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      if (sections.length) {
        sections.forEach((section) => {
          const element = document.getElementById(section.href);
          if (element) {
            observer.unobserve(element);
          }
        });
      }
    };
  }, [sections]);

  return (
    <nav className={className}>
      <ul className="mt-16 w-max">
        {sections.map(({ label, href }, index) => (
          <li key={index}>
            <ExpandLink active={activeSection === href} url={`#${href}`}>
              {label}
            </ExpandLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
