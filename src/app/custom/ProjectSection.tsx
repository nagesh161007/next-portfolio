import React from "react";
import Link from "next/link";
import { FaFolderOpen } from "react-icons/fa";
import ProjectCard from "./ProjectCard"; // Import the ProjectCard component
import { projects } from "@/app/config/profile";

const ProjectsSection = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-4 mt-10">
        <div className="flex items-center">
          <FaFolderOpen className="text-orange-600 mr-2" size={24} />
          <h2 className="text-2xl font-bold">Projects</h2>
        </div>
        <Link href="/projects">
          <button className="flex items-center justify-between px-4 py-2 bg-gray-100 text-black font-medium rounded-lg border border-gray-300 hover:bg-gray-200 transition">
            <span className="font-medium">View Projects</span>
          </button>
        </Link>
      </div>
      <div className="p-8 bg-white border border-gray-100 rounded-xl shadow-sm max-w-6xl mx-auto">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
