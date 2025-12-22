export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  details?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  type: string;
  githubUrl?: string; // Link to specific GitHub repo
  demoUrl?: string;   // Link to live demo
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export type AIChatRole = 'user' | 'assistant' | 'model' | 'system';

export interface ChatMessage {
  role: AIChatRole;
  text: string;
  isError?: boolean;
}

export interface AIProviderConfig {
  provider: 'gemini' | 'openai' | 'groq' | 'openrouter';
  apiKey: string;
  model?: string;
  baseUrl?: string;
}

export type CertificationCategory = 'Certification' | 'Internship' | 'Event';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string; // External verification link
  logo?: string; // URL to issuer logo
  image?: string; // URL to the certificate image (for the viewer)
  category: CertificationCategory;
}