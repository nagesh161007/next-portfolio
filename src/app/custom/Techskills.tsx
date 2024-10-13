import React from "react";
import { FaLayerGroup } from "react-icons/fa"; // Import icons
import { techSkills } from "../config/profile";

const TechSkills = () => {
  return (
    <>
      <div className="flex items-center mb-4 mt-6">
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
