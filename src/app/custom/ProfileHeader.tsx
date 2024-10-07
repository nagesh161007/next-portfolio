import { profileConfig as profile } from "@/app/config/profile";
import Image from "next/image";

const ProfileHeader = () => {
  return (
    <div className="flex items-center justify-between bg-white px-3 py-2 border rounded-full border-gray-200 shadow-l mb-4">
      {/* Profile Image */}
      <div className="flex items-center space-x-4">
        <Image
          unoptimized
          width={32}
          height={32}
          src={profile.profileImage}
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />

        {/* Name and Role */}
        <div>
          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <p className="text-gray-500">{profile.title}</p>
        </div>
      </div>

      <div className="flex space-x-6 items-center ">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        ></a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        ></a>
      </div>
    </div>
  );
};

export default ProfileHeader;
