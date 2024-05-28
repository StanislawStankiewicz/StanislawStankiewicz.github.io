import React, { useEffect, useState } from "react";
import "./header.css";

export default function Header({ children, className, sections = [] }) {
  const [scrolled, setScrolled] = useState(false);
  const [selectedId, setSelectedId] = useState(
    sections[0].toLowerCase().replace(/\s+/g, "")
  );

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 70) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // determine which section is currently active
    const sectionIds = sections.map((section) =>
      section.toLowerCase().replace(/\s+/g, "")
    );

    const X = 400; // Change this to the desired value

    for (let id of sectionIds) {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const top = rect.top + window.scrollY - X;
        const bottom = top + rect.height;

        if (offset >= top && offset < bottom) {
          setSelectedId(id);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={className || ""}
      style={
        scrolled
          ? {
              backgroundColor: "transparent",
              backdropFilter: "blur(30px)",
            }
          : {}
      }
    >
      <ul className="sections">
        {sections.map((section) => (
          <li
            className="sectionItem"
            key={section}
            onClick={() => {
              const id = section.toLowerCase().replace(/\s+/g, "");
              const element = document.getElementById(id);
              if (element) {
                const offset = 100;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
          >
            <p
              className={
                selectedId === section.toLowerCase().replace(/\s+/g, "")
                  ? "selected"
                  : ""
              }
            >
              {section}
            </p>
          </li>
        ))}
      </ul>
    </header>
  );
}
