import { Project, SkillCategory, TimelineEntry, Stat } from "./types";

export const PERSONAL_INFO = {
  name: "Mati Ur Rehman",
  titles: [
    "MERN Stack Developer",
    "React.js Developer",
    "Node.js Enthusiast",
    "Full-Stack Web Architect",
  ],
  tagline:
    "Building scalable web applications with modern JavaScript technologies.",
  location: "Lakki Marwat, KPK, Pakistan",
  email: "matiurrehmanmarwatkhan@gmail.com",
  phone: "03270950418",
  linkedin: "https://www.linkedin.com/in/mati-ur-rehman-8bbb44376/",
  github: "https://github.com/matiurrehmanmarwatkhan",
  portfolio: "https://personal-portfolio-mu-brown-49.vercel.app/",
  about:
    "I am a passionate MERN Stack Developer with expertise in building responsive and user-friendly web applications. I enjoy solving real-world problems through clean code and modern technologies. My focus is on creating efficient frontend experiences using React.js and developing robust backend systems with Node.js, Express.js, and MongoDB. I continuously learn new technologies and strive to improve my development skills through practical projects.",
  careerObjectives:
    "To leverage my MERN Stack engineering skill set in a collaborative professional workspace, solving high-impact human challenges, delivering seamless responsive user experiences, and driving optimized server operations.",
};

export const STATISTICS: Stat[] = [
  {
    label: "Web Projects Completed",
    value: 12,
    suffix: "+",
    description: "Responsive web apps and frontend designs built from scratch.",
  },
  {
    label: "Technologies Mastered",
    value: 15,
    suffix: "",
    description: "Languages, state engines, backend APIs, and DB managers.",
  },
  {
    label: "Hours of Saylani Training",
    value: 320,
    suffix: "h",
    description: "Intensive training, live coding events, and mock exams.",
  },
  {
    label: "Commitment to Learning",
    value: 100,
    suffix: "%",
    description: "Constant exploration of full stack engineering paradigms.",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React.js", level: 90, iconName: "Code2" },
      { name: "React Native", level: 85, iconName: "Atom" },
      { name: "JavaScript (ES6+)", level: 88, iconName: "CornerDownRight" },
      { name: "Tailwind CSS", level: 95, iconName: "Palette" },
      { name: "HTML5 & CSS3", level: 95, iconName: "FileHtml" },
      { name: "Responsive Design", level: 92, iconName: "Smartphone" },
      { name: "Interactive Animation", level: 85, iconName: "Sparkles" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 82, iconName: "Cpu" },
      { name: "Express.js", level: 85, iconName: "Server" },
      { name: "RESTful APIs", level: 88, iconName: "Link" },
      { name: "Auth (JWT / Sessions)", level: 80, iconName: "Lock" },
    ],
  },
  {
    title: "Database Management",
    skills: [
      { name: "MongoDB", level: 80, iconName: "Database" },
      { name: "Mongoose ODM", level: 82, iconName: "Layers" },
    ],
  },
  {
    title: "Tools & Utilities",
    skills: [
      { name: "Git & GitHub", level: 88, iconName: "Github" },
      { name: "VS Code", level: 90, iconName: "Laptop" },
      { name: "Postman API", level: 85, iconName: "Send" },
      {
        name: "Cloud Deployment (Vercel/Render)",
        level: 80,
        iconName: "Cloud",
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "React Dashboard",
    description:
      "A highly interactive responsive admin dashboard built with React.js. Features sophisticated custom-made UI views, analytics widgets, real-time-looking data visualization graphs, dynamic tables, and highly refined structural grid configurations.",
    technologies: [
      "React.js",
      "JavaScript (ES6)",
      "Tailwind CSS",
      "Recharts",
      "Framer Motion",
    ],
    githubUrl: "https://github.com/matiurrehmanmarwatkhan/React-Dashboard",
    liveUrl: "https://matiurrehmanmarwatkhan.github.io/React-Dashboard/",
    category: "Frontend",
  },
  {
    id: "proj-2",
    title: "Hackathon E-Commerce Website",
    description:
      "A frontend e-commerce storefront system designed and coded for a high-intensity hackathon. Includes structured product browsing, checkout simulation layouts, fluid visual shopping bag feedback, and precise design values.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Flexbox/Grid",
    ],
    githubUrl:
      "https://github.com/matiurrehmanmarwatkhan/Mati-Ur-Rehman-Hackathon-Project",
    liveUrl:
      "https://matiurrehmanmarwatkhan.github.io/Mati-Ur-Rehman-Hackathon-Project/",
    category: "Frontend",
  },
  {
    id: "proj-3",
    title: "Todo App with CRUD Operations",
    description:
      "A clean, functional task manager implementing complete Create, Read, Update, and Delete actions with seamless vanilla JS DOM event bindings, state filtering (all/completed/pending), and direct task status toggles.",
    technologies: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
    githubUrl: "https://github.com/matiurrehmanmarwatkhan/Dom-Assigment-Ten",
    liveUrl: "https://matiurrehmanmarwatkhan.github.io/Dom-Assigment-Ten/",
    category: "Utilities",
  },
  {
    id: "proj-4",
    title: "The East Junction",
    description:
      "A full-stack web application for a restaurant, featuring a dynamic menu, user authentication, and an admin panel for managing orders. Built with React.js for the frontend and Node.js/Express.js for the backend, with MongoDB as the database.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
    ],
    githubUrl:
      "https://github.com/matiurrehmanmarwatkhan/The-East-Junction-Frontend",
    liveUrl: "https://the-east-junction-frontend.vercel.app",
    category: "Full-Stack",
  },
  {
    id: "proj-5",
    title: "Chief Grill",
    description:
      "A full-stack web application for a restaurant, featuring a dynamic menu, user authentication, and an admin panel for managing orders. Built with React.js for the frontend and Node.js/Express.js for the backend, with MongoDB as the database.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
    ],
    githubUrl: "https://github.com/matiurrehmanmarwatkhan/Chief-Grill-Frontend",
    liveUrl: "https://chief-grill-frontend.vercel.app",
    category: "Full-Stack",
  },
  {
    id: "proj-6",
    title: "Property Hub",
    description:
      "A full-stack web application for a real estate platform, featuring property listings, user authentication, and an admin panel for managing properties. Built with React.js for the frontend and Node.js/Express.js for the backend, with MongoDB as the database.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
    ],
    githubUrl: "#",
    liveUrl: "#",
    category: "Full-Stack",
  },
  {
    id: "proj-7",
    title: "FreelancePk",
    description:
      "A full-stack web application for a freelance platform, featuring project listings, user authentication, and an admin panel for managing projects. Built with React.js for the frontend and Node.js/Express.js for the backend, with MongoDB as the database.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
    ],
    githubUrl:
      "https://github.com/matiurrehmanmarwatkhan/Freelancer-PK-Frontend",
    liveUrl: "https://freelancer-pk.vercel.app",
    category: "Full-Stack",
  },
  {
    id: "proj-8",
    title: "NursePulse",
    description:
      "A full-stack web application for a healthcare platform, featuring patient management, appointment scheduling, and an admin panel for managing users. Built with React.js for the frontend and Node.js/Express.js for the backend, with MongoDB as the database.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
    ],
    githubUrl: "https://github.com/matiurrehmanmarwatkhan/Nurse-Pulse-Frontend",
    liveUrl: "https://nurse-pulse-frontend.vercel.app",
    category: "Full-Stack",
  },
];

export const EDUCATION: TimelineEntry[] = [
  {
    id: "edu-1",
    institution: "Saylani Mass IT Training (SMIT)",
    degree: "Web Development Diploma (Peshawar Campus)",
    period: "2025 – Present",
    description:
      "Rigorous full-stack training covering advanced JavaScript concepts, responsive modern frontend engineering with React, complex server development using Node.js and Express, database architecture utilizing MongoDB with Mongoose, and industry standard deployment pipelines under mentorship.",
  },
  {
    id: "edu-2",
    institution: "Government Higher Secondary School Darra Pezu",
    degree: "FSc (Intermediate) - Computer Science",
    period: "2023 – 2025",
    description:
      "Academic foundation in fundamental computer systems, programming methodologies, databases basics, algorithm constructs, and scientific mathematics. Explored initial coding practices that sparked the passion for developer studies.",
  },
];
