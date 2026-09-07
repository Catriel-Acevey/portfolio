export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface SkillCategory {
  name: string;
  skills: { name: string; icon?: string; level?: number; url?: string }[];
}

export interface UserProfile {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  location: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
  cvUrl: string;
  cvLinks?: {
    es: string;
    en: string;
  };
}
