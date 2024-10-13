import ProfileIntro from "@/app/custom/ProfileInfo";
import WorkExperience from "@/app/custom/WorkExperience";
import Divider from "@/app/custom/Divider";
import TechSkills from "@/app/custom/Techskills";
import Projects from "@/app/custom/Projects";
import Education from "@/app/custom/Education";
import Blogs from "@/app/custom/Blog";
import FadeInSection from "@/app/custom/FadeInSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sneha Govindarajan | Software Engineer",
  description:
    "Software Engineer with 3+ years of experience in building high-performance, user-centric web applications in JavaScript and modern web technologies.",
  openGraph: {
    type: "website",
    url: "https://sneha-portfolio-six.vercel.app", // Adjust if needed based on your actual portfolio URL
    title: "Sneha Govindarajan | Software Engineer",
    description:
      "Experienced Software Engineer specializing in frontend development using React, JavaScript, and cloud technologies.",
    images: [
      {
        url: "/profile/sneha.png", // Make sure this is the correct image path
        width: 800,
        height: 600,
        alt: "Sneha Govindarajan"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@govindarajansn", // Adjust to your actual Twitter handle
    title: "Sneha Govindarajan | Software Engineer",
    description:
      "Software Engineer with expertise in building responsive web applications using React, JavaScript, and cloud technologies.",
    images: ["/profile/sneha.png"] // Ensure this path is correct
  }
};

export default function Home() {
  const sections = [
    { component: <ProfileIntro />, id: "introduction" },
    { component: <WorkExperience />, id: "work-experience" },
    { component: <TechSkills />, id: "skills" },
    { component: <Projects />, id: "projects" },
    { component: <Education />, id: "education" },
    { component: <Blogs />, id: "blogs" }
  ];

  return (
    <>
      {sections.map(({ component, id }, index) => (
        <div key={id}>
          <FadeInSection>
            <div id={id}>{component}</div>
          </FadeInSection>
          {index < sections.length - 1 && <Divider />}
        </div>
      ))}
    </>
  );
}
