export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  tagline: string;
  about: string;
  experience: number;
  currentRole: string;
  highlights: string[];
  skills: SkillCategory[];
  projects: Project[];
  contact: ContactInfo;
}