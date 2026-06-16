export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: "Full-Stack" | "Frontend" | "Utilities";
}

export interface Skill {
  name: string;
  level: number; // 0-100 indicating competency
  iconName: string; // reference to Lucide-react icon
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface TimelineEntry {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}
