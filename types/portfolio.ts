export interface NavItem {
  label: string;
  href: string;
}

export interface MetricItem {
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export interface ProfileData {
  name: string;
  roles: string[];
  badgeText: string;
  summary: string;
  aboutMission: string;
  careerGoal: string;
  learningPhilosophy: string;
  location: string;
  email: string;
  phonePlaceholder: string;
  github: string;
  linkedin: string;
  kaggle: string;
  resumeUrl: string;
  metrics: MetricItem[];
}

export interface AboutPillar {
  title: string;
  description: string;
  iconName: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    iconName?: string;
    featured?: boolean;
  }[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problemStatement: string;
  solution: string;
  techStack: string[];
  keyFeatures: string[];
  challenges: string[];
  futureImprovements: string[];
  githubUrl: string;
  demoUrl: string;
  imagePlaceholder: string;
  category: "Machine Learning" | "Data Science" | "Computer Vision" | "AI Application" |"Data Analytist";
  featured: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  expectedGraduation: string;
  status: string;
  highlights: string[];
}

export interface CertificateItem {
  title: string;
  issuer: string;
  issueDate: string;
  credentialIdPlaceholder: string;
  verifyUrl: string;
  skillsLearned: string[];
  featured: boolean;
}