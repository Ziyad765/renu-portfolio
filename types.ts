export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface Education {
  degree: string;
  institution: string;
  yearOrScore: string;
}

export interface Project {
  title: string;
  subtitle: string;
  description: string[];
  technologies: string[];
  category: 'Web' | 'AI/ML' | 'Security' | 'VR';
}

export interface Internship {
  role: string;
  company: string;
  duration: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SkillMetric {
  subject: string;
  A: number;
  fullMark: number;
}

export interface ResumeData {
  name: string;
  title: string;
  objective: string;
  contact: ContactInfo;
  education: Education[];
  projects: Project[];
  internships: Internship[];
  skills: {
    technical: SkillCategory[];
    chartData: SkillMetric[];
  };
  volunteer: string[];
}