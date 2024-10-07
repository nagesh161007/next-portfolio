import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import { FaBriefcase } from "react-icons/fa";
import SkillAvatarGroup from "./SkillGroup";
import { workExperiences } from "@/app/config/profile";
import Image from "next/image";

const WorkExperienceAccordion = () => {
  return (
    <div className="max-w-4xl mx-auto p-2">
      {/* Heading Section with Icon */}
      <div className="flex items-center mb-4">
        <FaBriefcase className="text-orange-600 mr-2" size={24} />
        <h2 className="text-2xl font-bold">Work Experience</h2>
      </div>

      {/* Accordion Section */}
      <Accordion type="single" collapsible className="space-y-4 rounded-md">
        {workExperiences.map((experience) => (
          <AccordionItem
            key={experience.id}
            value={`item-${experience.id}`}
            className="border shadow-sm rounded-md"
          >
            <AccordionTrigger className="flex items-center justify-between p-4 bg-white hover:bg-gray-100 focus:outline-none rounded-md w-full">
              <div className="flex items-center space-x-4 flex-1">
                <Image
                  unoptimized
                  width={32}
                  height={32}
                  src={`company/${experience.logo}`}
                  alt={`company/${experience.companyName} logo`}
                  className="w-10 h-10 object-cover"
                />
                <div className="flex flex-col items-start">
                  <h3 className="text-md font-medium">{experience.role}</h3>
                  <p className="text-gray-500">
                    {experience.companyName} • {experience.location}
                  </p>
                </div>
              </div>
              <div className="text-gray-500 text-sm mr-2 hidden sm:block">
                {experience.period}
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-gray-50 text-gray-700">
              <ul className="list-disc pl-5 space-y-2 mb-4">
                {experience.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              {/* Skills Section */}
              <SkillAvatarGroup skills={experience.skills}></SkillAvatarGroup>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default WorkExperienceAccordion;
