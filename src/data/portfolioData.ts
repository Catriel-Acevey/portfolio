import { UserProfile, Project, Experience, SkillCategory } from '@/types';

export const userProfile: UserProfile = {
  name: "Catriel Acevey",
  title: "Full Stack Developer",
  subtitle: "Construyendo experiencias web robustas y escalables",
  bio: "Desarrollador Full Stack apasionado por la ingeniería de software, el diseño limpio y la creación de productos digitales eficientes y memorables.",
  location: "Argentina",
  email: "catriel.acevey@gmail.com",
  socials: {
    github: "https://github.com/CatrielAcevey",
    linkedin: "https://www.linkedin.com/in/catriel-acevey/",
  },
  cvLinks: {
    es: "/assets/docs/CV_Catriel_Acevey_ES.pdf",
    en: "/assets/docs/CV_Catriel_Acevey_EN.pdf",
  },
};

export const projectsData: Project[] = [
  {
    id: "countries-app",
    title: "Countries App",
    description: "Aplicación web SPA para explorar países, filtrar por regiones, ordenar por población y crear actividades turísticas.",
    image: "/images/countries-app.png",
    tags: ["React", "Redux", "Node.js", "Express", "PostgreSQL", "Sequelize"],
    demoUrl: "",
    githubUrl: "https://github.com/CatrielAcevey",
    featured: true,
  },
  {
    id: "weather-app",
    title: "Weather App",
    description: "Aplicación del clima en tiempo real con búsqueda de ciudades, pronóstico extendido y diseño responsivo.",
    image: "/images/weather-app.png",
    tags: ["React", "JavaScript", "CSS", "API Rest"],
    demoUrl: "",
    githubUrl: "https://github.com/CatrielAcevey",
    featured: true,
  },
  {
    id: "tgif-page",
    title: "TGIF Frontend Project",
    description: "Sitio web interactivo con tablas dinámicas, filtros avanzados y consumo de datos legislativos.",
    image: "/images/tgif-page.png",
    tags: ["JavaScript", "HTML5", "CSS3", "Bootstrap"],
    demoUrl: "",
    githubUrl: "https://github.com/CatrielAcevey",
    featured: false,
  },
];

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    role: "Full Stack Developer",
    company: "Proyectos Independientes",
    period: "2021 - Presente",
    description: [
      "Desarrollo de aplicaciones web completas utilizando tecnologías modernas como React, Node.js y PostgreSQL.",
      "Optimización de rendimiento y experiencia de usuario en interfaces responsivas.",
      "Integración de APIs y despliegue en plataformas cloud."
    ],
    skills: ["React", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React / Next.js" },
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Redux" },
      { name: "HTML5 / CSS3" }
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "PostgreSQL" },
      { name: "Sequelize" },
      { name: "Firebase" },
      { name: "REST APIs" }
    ]
  },
  {
    name: "Herramientas & Otros",
    skills: [
      { name: "Git / GitHub" },
      { name: "Postman" },
      { name: "Jest" },
      { name: "Metodologías Ágiles" }
    ]
  }
];
