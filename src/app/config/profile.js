import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  FaLayerGroup,
  FaCode,
  FaDesktop,
  FaServer,
  FaCloud,
  FaPalette
} from "react-icons/fa";

export const blogs = [
  {
    id: 1,
    title: "SAP Event webapp with React and BTP",
    description:
      "Gamification webapp for SAP BTP Success Event using React and BTP",
    image: "/company/sap.svg",
    link: "https://community.sap.com/t5/application-development-blog-posts/application-development-using-react-and-cap-deployed-in-btp/ba-p/13708089"
  }
];

export const workExperiences = [
  {
    id: 1,
    companyName: "SAP America Inc.",
    role: "Software Developer Intern",
    logo: "sap.svg",
    location: "Newton Square, PA",
    period: "Jan 2024 – Present",
    description: [
      "Developed an SAP UI5 and SAP BTP application for license management related to cost centers, automating data gathering from Excel files via OData services and reducing manual efforts by 40%.",
      "Architected a full-stack license approval workflow application, including comprehensive database design and end-to-end flow architecture, improving procurement efficiency by 30%.",
      "Developed a Node.js script to process over 10,000 records from the Flexera GraphQL API for SAP's third-party software licenses, enabling the software portfolio management team to reduce renewal costs by 30%.",
      "Collaborated with cross-functional teams to build an event gamification web app in two weeks for the North America BTP Success event, engaging over 500 customers using React, React Router, CAP, S/4HANA, and Cloud Foundry.",
      "Collaborated with stakeholders and conducted user interviews to gather requirements, translating insights into a Figma UI/UX design that accelerated application flow completion by 10%."
    ],
    skills: [
      { name: "React", icon: "react.svg" },
      { name: "SAP UI5", icon: "ui5.svg" },
      { name: "Node.js", icon: "nodejs.svg" },
      { name: "Figma", icon: "figma.svg" }
    ]
  },
  {
    id: 2,
    companyName: "Virtusa",
    role: "Software Engineer",
    logo: "virtusa.jpeg",
    location: "Chennai, India",
    period: "Aug 2020 - Aug 2022",
    description: [
      "Migrated the Watchtower frontend to React and TypeScript, enhancing node visualization with React Material, ESRI Maps GIS, and D3.js, reducing troubleshooting time for technicians by 15%.",
      "Developed RESTful APIs in Java Spring Boot to deliver real-time node data via WebSockets, improving network issue resolution speed by 20% and increasing customer satisfaction scores by 10%.",
      "Contributed to modularity and scalability using Nx monorepo and Storybook for isolated components, boosting code coverage by 20% using Jest, and implemented Cypress for cross-browser compatibility and end-to-end testing.",
      "Scheduled and applied technical troubleshooting to resolve problems, prioritizing 20+ ad-hoc requests within deadlines.",
      "Collaborated in Agile teams, engaged in daily scrums, code reviews, and maintained documentation for the entire migration process."
    ],
    skills: [
      { name: "Angular", icon: "angular.svg" },
      { name: "React", icon: "react.svg" },
      { name: "D3.js", icon: "d3js.svg" },
      { name: "TypeScript", icon: "typescript.svg" },
      { name: "Java", icon: "java.svg" },
      { name: "Spring Boot", icon: "springboot.png" },
      { name: "Amazon Web Services", icon: "aws.svg" }
    ]
  }
];

export const educationDetails = [
  {
    id: 1,
    institutionName: "Northeastern University",
    degree: "Master of Science, Information Systems",
    logo: "https://brand.northeastern.edu/wp-content/uploads/2022/06/seal-red.svg",
    location: "Boston, USA",
    period: "Aug 2024",
    description: [
      "Focused on software design, architecture, and cloud computing.",
      "Coursework: Application Engineering and Development, Database Management and Design, Network Structures, and Cloud Computing."
    ]
  },
  {
    id: 2,
    institutionName: "Anna University",
    degree: "Bachelor of Technology, Information Technology",
    logo: "/company/annauniversity.png",
    location: "Chennai, India",
    period: "April 2020",
    description: [
      "Focused on software design, architecture, and cloud computing.",
      "Coursework: Application Engineering and Development, Database Management and Design, Network Structures, and Cloud Computing."
    ]
  }
];

export const socialLinks = {
  github: "https://github.com/govindarajan.sn",
  linkedin: "https://www.linkedin.com/in/sneha-govindarajan"
};

export const profileConfig = {
  name: "Sneha Govindarajan",
  title: "Software Engineer Intern at SAP",
  introduction:
    "Software Engineer with 3+ years of experience, dedicated to building high-performance, user-centric web applications in JavaScript. Known for creating intuitive interfaces and excelling in problem-solving and effective communication.",
  emoji: "👋",
  company: {
    name: ""
  },
  location: {
    address: "United States"
  },
  profiles: [
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/sneha-govindarajan",
      id: "sneha-govindarajan",
      icon: <FaLinkedin className="text-blue-600" />
    },
    {
      name: "GitHub",
      link: "https://github.com/govindarajansn",
      id: "govindarajansn",
      icon: <FaGithub className="text-gray-800" />
    },
    {
      name: "Mail",
      link: "mailto:snerajan6@gmail.com",
      id: "snerajan6@gmail.com",
      icon: "/gmail.svg"
    }
  ],
  profileImage: "/profile/sneha.jpg"
};

export const projects = [
  {
    id: 1,
    title: "Customizable Car",
    image: "/projects/car-thumbnail.png",
    link: "https://car-model-threejs.vercel.app/",
    date: "March 2023",
    description: "Customize your car using three.js and React."
  },
  {
    id: 2,
    title: "FoodGram",
    image: "/projects/foodgram.png",
    link: "https://cook-book-mealdb.vercel.app/",
    date: "April 2023",
    description: "Get your recipe in one click - Yaaaay :-;"
  },
  {
    id: 3,
    title: "Tic-Tac-Toe 3D",
    image: "/projects/tic-tac-toe-game.png",
    link: "https://tic-tac-toe-3d-snowy.vercel.app/",
    date: "May 2023",
    description: "Are you bored? Just click and play."
  },
  {
    id: 4,
    title: "Cloud Deployment",
    image: "/projects/cloud.jpeg",
    link: "https://github.com/csye-snehagovindarajan/webapp",
    date: "June 2023",
    description: "AWS CI/CD Web App with React and Node.js."
  },
  {
    id: 5,
    title: "Happify",
    image: "/projects/music.jpeg",
    link: "https://happify-music-db.vercel.app/",
    date: "July 2023",
    description: "Music app using Spotify API."
  },
  {
    id: 6,
    title: "Huggy Buddy",
    image: "/projects/HuggyBuddy.png",
    link: "https://huggy-buddy.vercel.app/",
    date: "August 2023",
    description: "Sentiment Analysis App."
  },
  {
    id: 7,
    title: "Active Pay",
    image: "/projects/activepay-thumbnail.jpeg",
    link: "https://github.com/neu-mis-info6150-fall-2022/final-project-quadsquad",
    date: "September 2023",
    description: "Re-paying credit card bill and getting return rewards."
  },
  {
    id: 8,
    title: "Travelling Salesman Problem",
    image: "/projects/tsp.jpeg",
    link: "https://github.com/govindarajansn/FinalProject-INFO6205",
    date: "October 2023",
    description: "Optimized solution for the Travelling Salesman Problem."
  },
  {
    id: 9,
    title: "Online Book Store",
    image: "/projects/book-store.jpeg",
    link: "https://github.com/govindarajansn/ScanbuyApp",
    date: "November 2023",
    description:
      "Fetch books using ISBN, title, or author from Google Books API."
  }
];

export const techSkills = [
  {
    category: "Languages",
    skills: ["JavaScript", "Java", "Python", "TypeScript"],
    icon: <FaCode className="text-gray-400" />
  },
  {
    category: "Frontend",
    skills: [
      "React",
      "Angular",
      "Next.js",
      "SAP Fiori",
      "Three.js",
      "HTML5",
      "CSS3",
      "Storybook",
      "SASS",
      "Tailwind CSS",
      "Webpack",
      "Redux",
      "Cypress",
      "Jest"
    ],
    icon: <FaDesktop className="text-gray-400" />
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "Apache Maven",
      "Spring MVC",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "S/4 HANA"
    ],
    icon: <FaServer className="text-gray-400" />
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS",
      "SAP BTP",
      "Docker",
      "GitHub Actions (CI/CD)",
      "Linux",
      "Terraform",
      "S3",
      "Route 53",
      "Kubernetes"
    ],
    icon: <FaCloud className="text-gray-400" />
  },
  {
    category: "Testing",
    skills: ["Jest", "Cypress", "React Testing Library", "Puppeteer"],
    icon: <FaLayerGroup className="text-gray-400" />
  },
  {
    category: "Design",
    skills: ["Figma"],
    icon: <FaPalette className="text-gray-400" />
  }
];
