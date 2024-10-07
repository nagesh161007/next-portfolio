import React from "react";
import Link from "next/link";
import { profileConfig } from "@/app/config/profile";
import Image from "next/image";

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
        <p className="text-sm text-gray-500 mt-2">{profileConfig.title}</p>
        <p className="text-sm text-gray-600 mt-2">
          {profileConfig.company.name}
        </p>
      </div>

      {/* Dashed Divider */}
      <hr className="border-dashed border-gray-300 mb-4" />

      {/* Location Section */}
      <div className="text-center mb-4">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-sm text-gray-600">
            <span className="text-sm mr-2">🇺🇸</span>
            {profileConfig.location.address}
          </span>
        </div>
      </div>

      {/* Dashed Divider */}
      <hr className="border-dashed border-gray-300 mb-4" />

      {/* Profiles Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Profiles</h3>
        <ul className="mt-2 space-y-3">
          {profileConfig.profiles.map((profile, index) => (
            <li key={index} className="flex items-center space-x-4">
              <Link
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-800  hover:bg-gray-100 rounded-lg p-2 transition w-full"
              >
                <span className="text-2xl">{profile.icon}</span>

                {/* Title and Description */}
                <div className="text-left">
                  <p className="text-sm text-gray-500">{profile.id}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Dashed Divider */}
      <hr className="border-dashed border-gray-300 mb-4" />

      {/* Download Resume Button at the end */}
      {/* <div className="mt-auto">
        <Link href="/path-to-resume.pdf" download>
          <button className="w-full flex items-center justify-center px-4 py-3 bg-gray-100 text-black font-medium rounded-lg border border-gray-300 hover:bg-gray-200 transition mt-4">
            <FaFileDownload className="mr-4" size={16} /> Resume
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default ProfileCard;
