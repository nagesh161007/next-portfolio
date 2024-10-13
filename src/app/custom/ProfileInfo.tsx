import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { profileConfig } from "@/app/config/profile"; // Import the config

const ProfileIntro = () => {
  return (
    <div className="text-center space-y-6">
      {/* Wave Emoji and Title */}
      <div className="flex items-center justify-center mt-4">
        <span className="text-4xl mr-4 wave-animation">
          {profileConfig.emoji}
        </span>
        <h1 className="text-2xl font-bold">
          Hi, I&apos;m {profileConfig.name}, a {profileConfig.title}
        </h1>
      </div>

      {/* Name, Role, and Location */}
      <div className="flex items-center justify-center space-x-2 text-gray-500">
        <FaMapMarkerAlt />
        <p>{profileConfig.location.address}</p>
      </div>

      {/* Introduction Paragraph */}
      <p className="text-gray-600 max-w-2xl mx-auto">
        {profileConfig.introduction}
      </p>
    </div>
  );
};

export default ProfileIntro;
