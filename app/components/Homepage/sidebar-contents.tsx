"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface SidebarContentsProps {
  sections: { id: string; title: string }[];
}

const SidebarContents = ({ sections }: SidebarContentsProps) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= 100) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <nav
      className={`fixed left-16 z-50
        transform top-1/2 -translate-y-1/2
        lg:block hidden
        border-l-2 ${
          activeSection === "faq" || activeSection === "contact-us"
            ? "border-white"
            : "border-gray-400"
        }
        `}
    >
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              href={`#${section.id}`}
              className={`block px-4 py-1 rounded text-sm ${
                activeSection === section.id ? "text-gray-900 font-bold" : ""
              } ${
                activeSection === "faq" || activeSection === "contact-us"
                  ? "text-white"
                  : ""
              }`}
            >
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarContents;
