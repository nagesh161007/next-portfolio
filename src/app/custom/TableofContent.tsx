"use client"; // This is a client-side component

import React from "react";
import { usePathname } from "next/navigation";

// app/config/tableOfContentsConfig.js

export const tableOfContentsItems = [
  { href: "#introduction", label: "Introduction" },
  { href: "#work-experience", label: "Work Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#blogs", label: "Blogs" }
];

const TableOfContentsList = () => {
  const pathname = usePathname();

  // Conditionally render the ToC only on the homepage
  if (pathname !== "/") {
    return null; // Do not render ToC on other routes
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
      <nav className="space-y-2">
        {tableOfContentsItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="block text-gray-500 hover:text-gray-300 hover:bg-gray-100 rounded px-2 py-2"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default TableOfContentsList;
