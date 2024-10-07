"use client"; // This allows client-side interactivity in this component

import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import { FaBars } from "react-icons/fa"; // Import the menu icon

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Menu Icon for Mobile Screens */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-full shadow-md"
        onClick={toggleSidebar}
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar: Profile Card */}
      <aside
        className={`fixed lg:sticky top-0 lg:top-0 lg:flex lg:flex-[2] lg:justify-end lg:overflow-y-auto ${
          isSidebarOpen ? "block" : "hidden"
        } lg:block bg-white z-40 h-full lg:h-auto p-4 shadow-md`}
        style={{ height: isSidebarOpen ? "100vh" : "calc(100vh - 3rem)" }}
      >
        <ProfileCard />
      </aside>
    </>
  );
};

export default Sidebar;
