import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { socialLinks } from "@/app/config/profile";
import { profileConfig } from "@/app/config/profile";

const Footer = () => {
  return (
    <footer className="bg-white py-4 mt-10 border-t">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Social Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-600 hover:text-black" size={24} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-gray-600 hover:text-black" size={24} />
          </a>
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-gray-600 hover:text-black" size={24} />
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-gray-600">
          <span className="text-orange-600">{profileConfig.name}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
