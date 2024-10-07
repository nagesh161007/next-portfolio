import React from "react";
import Link from "next/link";
import { projects } from "@/app/config/profile";
import Image from "next/image";

import { FaFolderOpen, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsList = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-4 mt-10">
        <div className="flex items-center">
          <FaFolderOpen className="text-orange-600 mr-2" size={24} />
          <h2 className="text-2xl font-bold">Projects</h2>
        </div>
      </div>
      <div className="p-2 sm:p-8 bg-white border border-gray-100 rounded-xl shadow-sm max-w-6xl mx-auto">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} passHref>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-transform duration-300 cursor-pointer transform hover:scale-105">
                {/* Project Image */}
                <Image
                  unoptimized
                  width={32}
                  height={32}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />

                {/* Project Details */}
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-semibold mb-2">
                      {project.title}
                    </h3>
                    <FaExternalLinkAlt className="text-gray-600" />
                  </div>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsList;
