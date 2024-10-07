"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiFolder, FiBookOpen } from "react-icons/fi"; // Using outline icons
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip";

const navItems = [
  { id: 1, href: "/", icon: <FiHome size={20} />, label: "Home" },
  {
    id: 2,
    href: "/projects",
    icon: <FiFolder size={20} />,
    label: "Projects"
  },
  { id: 4, href: "/blogs", icon: <FiBookOpen size={20} />, label: "Blogs" }
];

const FooterNav = () => {
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <div className="fixed bottom-4 left-0 right-0 flex justify-center max-w-[500px] mx-auto">
        <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-lg border border-gray-300">
          {navItems.map((item) => (
            <Tooltip key={item.id}>
              <TooltipTrigger asChild>
                <Link href={item.href}>
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-md border ${
                      pathname === item.href
                        ? "bg-blue-500 text-white cursor-default"
                        : "bg-transparent text-gray-600 border-gray-300 hover:bg-gray-100 cursor-pointer"
                    }`}
                  >
                    {item.icon}
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent>{item.label}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default FooterNav;
