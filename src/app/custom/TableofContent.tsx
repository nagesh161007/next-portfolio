"use client"; // This is a client-side component

import React from "react";
import { usePathname } from "next/navigation"; // Import usePathname

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
        <a
          href="#introduction"
          className="block text-gray-800 hover:text-gray-500 hover:bg-gray-100 rounded px-2 py-2"
        >
          Introduction
        </a>
        <a
          href="#work-experience"
          className="block text-gray-800 hover:text-gray-500 hover:bg-gray-100 rounded px-2 py-2"
        >
          Work Experience
        </a>
        <a
          href="#skills"
          className="block text-gray-800 hover:text-gray-500 hover:bg-gray-100 rounded px-2 py-2"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="block text-gray-800 hover:text-gray-500 hover:bg-gray-100 rounded px-2 py-2"
        >
          Projects
        </a>
        <a
          href="#education"
          className="block text-gray-800 hover:text-gray-500 hover:bg-gray-100 rounded px-2 py-2"
        >
          Education
        </a>
        <a
          href="#blogs"
          className="block text-gray-800 hover:text-gray-500 hover:bg-gray-100 rounded px-2 py-2"
        >
          Blogs
        </a>
      </nav>
    </div>
  );
};

export default TableOfContentsList;
