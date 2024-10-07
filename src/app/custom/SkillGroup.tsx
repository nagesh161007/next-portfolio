"use client";
import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import Image from "next/image";

// Sample skills data with icons
interface Skills {
  name: string;
  icon: string;
}

const SkillAvatarGroup = ({ skills }: { skills: Skills[] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxVisibleSkills = 5; // Number of skills to show when collapsed

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex items-center ml-4">
      {skills
        .slice(0, isExpanded ? skills.length : maxVisibleSkills)
        .map((skill, index) => (
          <div key={index} className="relative group -ml-2 first:ml-0">
            {/* Skill Icon in Avatar Style */}
            <div className="w-8 h-8 rounded-full flex items-center justify-center border border-white shadow-md bg-white p-1">
              <Image
                width={32}
                height={32}
                src={`/skills/${skill.icon}`}
                className="w-full h-full rounded-full object-cover"
                alt=""
              />
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs rounded py-1 px-2">
              {skill.name}
            </div>
          </div>
        ))}

      {/* "More" Icon for Hidden Skills */}
      {skills.length > maxVisibleSkills && !isExpanded && (
        <div className="relative group -ml-2" onClick={toggleExpand}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center border border-white shadow-md cursor-pointer">
            {`+`}
            {skills.length - maxVisibleSkills}
          </div>
        </div>
      )}

      {/* Collapse Icon */}
      {isExpanded && (
        <div className="relative group -ml-2" onClick={toggleExpand}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center border border-white shadow-md cursor-pointer bg-white">
            <FaChevronLeft className="text-gray-500" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillAvatarGroup;
