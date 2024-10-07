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
  title: "Nageshwara Sairam",
  description: "Frontend Engineer at Spectro Cloud",
  openGraph: {
    type: "website",
    url: "https://nageshsairam.com",
    title: "Nagesh Sairam",
    description: "Frontend Engineer at Spectro Cloud",
    images: [
      {
        url: "/preview.png",
        width: 800,
        height: 600,
        alt: "Nagesh Sairam"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle", // Replace with your Twitter handle if applicable
    title: "Nageshwara Sairam",
    description: "Frontend Engineer at Spectro Cloud",
    images: ["/preview.png"]
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
