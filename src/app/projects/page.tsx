import React from "react";
import { FaBriefcase } from "react-icons/fa";
import ProjectCard from "@/app/custom/ProjectCard";
import { projects } from "@/app/config/profile";

const ProjectsPage = () => {
  return (
    <>
      <div className="text-center mb-10 mt-10">
        <FaBriefcase className="text-orange-600 mx-auto mb-10" size={40} />
        <h1 className="text-3xl font-bold">Projects I &apos; ve Worked On!</h1>
        <p className="text-gray-500 mt-8">
          In my past experience, I have had the opportunity to work on diverse
          projects and collaborate with renowned brands.
        </p>
      </div>
      <div className="p-8 bg-white max-w-6xl mx-auto mt-10">
        {/* Icon and Heading Section */}

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

export default ProjectsPage;
