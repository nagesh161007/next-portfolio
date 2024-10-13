import React from "react";
import Link from "next/link";
import { profileConfig } from "@/app/config/profile";
import Image from "next/image";
import { FaFileDownload, FaSuitcase, FaMapMarkerAlt } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip";

const ProfileCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-xs h-full flex flex-col border border-gray-200 overflow-y-auto">
      {/* Profile Photo and Title Section */}
      <div className="text-center mb-4">
        <Image
          unoptimized
          src={profileConfig.profileImage}
          alt="Profile Picture"
          className="w-28 h-28 rounded-full mx-auto border-4 "
          width={32}
          height={32}
        />
        <h2 className="text-2xl font-bold text-gray-800 mt-2">
          {profileConfig.name}
        </h2>
        <p className="text-sm text-gray-500 mt-2 inline-flex items-center">
          <span className="mr-2">
            <FaSuitcase />
          </span>
          {profileConfig.title}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          {profileConfig.company.name}
        </p>
        <p className="text-sm text-gray-500 flex items-center">
          <span className="mr-2">
            <FaMapMarkerAlt />
          </span>
          {profileConfig.location.address}
        </p>
      </div>

      {/* Dashed Divider */}
      <hr className="border-dashed border-gray-300 mb-4" />

      {/* Profiles Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Profiles</h3>
        <TooltipProvider>
          <ul className="flex items-center mt-2 space-x-2">
            {profileConfig.profiles.map((profile, index) => (
              <li key={index} className="flex items-center">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={profile.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:bg-gray-100 rounded-lg p-2 transition"
                    >
                      {typeof profile.icon === "string" ? (
                        <img
                          src={profile.icon}
                          alt={`${profile.name} logo`}
                          className="w-8 h-8 object-cover"
                        />
                      ) : (
                        <span className="text-3xl">{profile.icon} </span>
                      )}
                      {/* Increased icon size */}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="bg-black text-white p-1 rounded shadow-md">
                    {profile.id}
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </TooltipProvider>
      </div>

      {/* Dashed Divider */}
      <hr className="border-dashed border-gray-300 mb-4" />

      {/* Download Resume Button at the end */}
      <div className="mt-auto">
        <Link href="/resume/resume.pdf" download target="_blank">
          <button className="w-full flex items-center cursor-pointer justify-center px-4 py-3 bg-orange-500 text-white font-medium rounded-lg border border-orange-600 hover:bg-orange-600 transition mt-4">
            <FaFileDownload className="mr-4 " size={16} /> Resume
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
