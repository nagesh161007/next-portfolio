import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  image: string;
  link: string;
  date: string;
  description: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link href={`/projects/${project.id}`} passHref>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-transform duration-300 cursor-pointer transform hover:scale-105">
        {/* Project Image */}
        <Image
          width={32}
          height={32}
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />

        {/* Project Details */}
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <FaExternalLinkAlt className="text-gray-600" />
          </div>
          <p className="text-gray-600">{project.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
