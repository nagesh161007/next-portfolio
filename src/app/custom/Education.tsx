import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import { FaGraduationCap } from "react-icons/fa";
import { educationDetails } from "@/app/config/profile";
import Image from "next/image";

const EducationAccordion = () => {
  return (
    <div>
      {/* Heading Section with Icon */}
      <div className="flex items-center mb-4 mt-6">
        <FaGraduationCap className="text-orange-600 mr-2" size={24} />
        <h2 className="text-2xl font-bold">Education</h2>
      </div>

      {/* Accordion Section */}
      <Accordion type="single" collapsible className="space-y-4">
        {educationDetails.map((education) => (
          <AccordionItem
            key={education.id}
            value={`item-${education.id}`}
            className="border shadow-sm rounded-md"
          >
            <AccordionTrigger className="flex items-center justify-between p-4 bg-white hover:bg-gray-100 focus:outline-none  rounded-md">
              <div className="flex items-center space-x-4 flex-1">
                <Image
                  unoptimized
                  width={32}
                  height={32}
                  src={education.logo}
                  alt={`${education.institutionName} logo`}
                  className="w-12 h-12"
                />
                <div className="flex flex-col items-start">
                  <h3 className="text-md font-medium">{education.degree}</h3>{" "}
                  {/* Degree */}
                  <p className="text-gray-500">
                    {education.institutionName} • {education.location}
                  </p>{" "}
                  {/* Institution and Location */}
                </div>
              </div>
              <div className="text-gray-500 text-sm mr-8 hidden sm:block">
                {/* Year on the right */}
                {education.period}
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-gray-50 text-gray-700">
              <ul className="list-disc pl-5 space-y-2">
                {education.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default EducationAccordion;
