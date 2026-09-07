import { UserProfile, Project, Experience, SkillCategory } from '@/types';

export const userProfile: UserProfile = {
  name: "Catriel Acevey",
  title: "Full Stack Developer",
  subtitle: "Building robust and scalable web experiences",
  bio: "Full Stack developer passionate about software engineering, clean architecture, and building efficient, memorable digital products.",
  location: "Argentina",
  email: "aceveycatriel@gmail.com",
  socials: {
    github: "https://github.com/Catriel-Acevey",
    linkedin: "https://www.linkedin.com/in/catriel-acevey/",
  },
  cvUrl: "/assets/docs/CV.pdf",
  cvLinks: {
    es: "",
    en: "/assets/docs/CV.pdf",
  },
};

export const projectsData: Project[] = [
  {
    id: "challenge-notifications",
    title: "Challenge Notifications",
    description: "REST microservice using FastAPI, PostgreSQL, and SQLAlchemy, with a React SPA (Vite, TypeScript, TailwindCSS) for notification management. Features JWT auth, multi-channel delivery strategy (Email, SMS, Push), and automated Pytest suite.",
    image: "/images/challenge-notifications.jpg",
    tags: ["FastAPI", "Python", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "SQLAlchemy", "Pytest"],
    demoUrl: "https://challenge-notifications.web.app",
    githubUrl: "https://github.com/Catriel-Acevey/challenge",
    featured: true,
  },
  {
    id: "countries-app",
    title: "Countries App",
    description: "Single-page application to explore countries, filter by continent, sort by population, and manage custom tourism activities.",
    image: "/images/countries-app.png",
    tags: ["React", "Redux", "Node.js", "Express", "PostgreSQL", "Sequelize"],
    demoUrl: "",
    githubUrl: "https://github.com/Catriel-Acevey",
    featured: true,
  },
  {
    id: "weather-app",
    title: "Weather App",
    description: "Real-time weather tracking application with city search, extended forecasts, and fully responsive layout.",
    image: "/images/weather-app.png",
    tags: ["React", "JavaScript", "CSS3", "REST APIs"],
    demoUrl: "https://catriel-weather.web.app/",
    githubUrl: "https://github.com/Catriel-Acevey/Weather-APP",
    featured: false,
  },
  {
    id: "tgif-page",
    title: "TGIF Congressional Data Portal",
    description: "Interactive data analytics platform featuring dynamic tables, legislative statistics, and multi-criteria filters.",
    image: "/images/tgif-page.png",
    tags: ["JavaScript", "HTML5", "CSS3", "Bootstrap"],
    demoUrl: "https://tgif-page.web.app/",
    githubUrl: "https://github.com/Catriel-Acevey/TGIF",
    featured: false,
  },
];

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    role: "Full Stack Developer",
    company: "42mate",
    period: "Feb 2021 - Present",
    description: [
      "Developed web applications using React and Next.js for frontend.",
      "Built RESTful APIs and backend systems with FastAPI and Python.",
      "Implemented payment solutions integrating Stripe.",
      "Managed version control using Git with tagging for releases and deployments.",
      "Managed PostgreSQL database and relational data.",
      "Used Docker and Lando for development and production environments.",
      "Developed custom components with Vue.js for Laravel Nova.",
      "Implemented analytics and event tracking with Segment.",
      "Collaborated in agile teams using Scrum methodologies."
    ],
    skills: ["JavaScript", "TypeScript", "Python", "React", "Next.js", "FastAPI", "Redux", "Tailwind", "Sass", "Pytest", "PostgreSQL", "Docker", "Lando", "Stripe", "Segment", "Git", "Scrum"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend & Languages",
    skills: [
      { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", url: "https://www.typescriptlang.org/docs/" },
      { name: "React", url: "https://react.dev/" },
      { name: "Next.js", url: "https://nextjs.org/docs" },
      { name: "Redux", url: "https://redux.js.org/" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/docs" },
      { name: "Sass", url: "https://sass-lang.com/documentation/" },
      { name: "HTML5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" }
    ]
  },
  {
    name: "Backend & DevOps",
    skills: [
      { name: "Python", url: "https://docs.python.org/3/" },
      { name: "FastAPI", url: "https://fastapi.tiangolo.com/" },
      { name: "PostgreSQL", url: "https://www.postgresql.org/docs/" },
      { name: "SQLAlchemy", url: "https://docs.sqlalchemy.org/" },
      { name: "Docker", url: "https://docs.docker.com/" },
      { name: "Git", url: "https://git-scm.com/doc" },
      { name: "Agile / Scrum", url: "https://www.scrum.org/resources/scrum-guide" }
    ]
  }
];
