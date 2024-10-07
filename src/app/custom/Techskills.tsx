import React from "react";
import {
  FaLayerGroup,
  FaCode,
  FaDesktop,
  FaServer,
  FaCloud,
  FaPalette
} from "react-icons/fa"; // Import icons

const techSkills = [
  {
    category: "Languages",
    skills: ["JavaScript", "Go"],
    icon: <FaCode className="text-gray-400" />
  },
  {
    category: "Frontend",
    skills: [
      "React",
      "React Native",
      "Typescript",
      "Next.js",
      "Ember.js",
      "Docusaurus",
      "Gatsby",
      "Three.js",
      "SASS",
      "Redux",
      "D3.js",
      "Webpack",
      "Vite"
    ],
    icon: <FaDesktop className="text-gray-400" />
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Gin",
      "Express.js",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Flask"
    ],
    icon: <FaServer className="text-gray-400" />
  },
  {
    category: "DevOps",
    skills: [
      "AWS",
      "Docker",
      "Jenkins",
      "Git Actions CI/CD",
      "Nginx",
      "Linux",
      "Terraform",
      "Kubernetes"
    ],
    icon: <FaCloud className="text-gray-400" />
  },
  {
    category: "Testing",
    skills: ["Jest", "Puppeteer", "React Testing Library", "Playwright"],
    icon: <FaLayerGroup className="text-gray-400" />
  },
  {
    category: "Design",
    skills: ["Figma"],
    icon: <FaPalette className="text-gray-400" />
  }
];

const TechSkills = () => {
  return (
    <>
      <div className="flex items-center mb-4 mt-10">
        <FaLayerGroup className="text-orange-600 mr-2" size={24} />
        <h2 className="text-2xl font-bold">Skills</h2>
      </div>
      <div className="bg-white max-w-4xl p-4 rounded-lg">
        {/* Skills Table */}
        <table className="w-full border-collapse rounded-lg overflow-hidden">
          <tbody>
            {techSkills.map((tech, index) => (
              <tr
                key={tech.category}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } ${"border border-gray-300"}`}
              >
                <td className="py-2 px-4 flex items-center border-r border-gray-300">
                  {tech.icon}
                  <span className="ml-2 font-semibold">{tech.category}</span>
                </td>
                <td className="py-2 px-4">{tech.skills.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TechSkills;
