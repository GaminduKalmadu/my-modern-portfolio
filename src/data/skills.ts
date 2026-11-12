import type { IconType } from 'react-icons';
import type { LucideIcon } from 'lucide-react';
import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import {
  SiDigitalocean,
  SiExpress,
  SiFirebase,
  SiGithubactions,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from 'react-icons/si';
import {
  BadgeCheck,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layout,
  Palette,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  Wrench,
} from 'lucide-react';

export type SkillDefinition = {
  name: string;
  level: number;
  icon: IconType | LucideIcon;
  brandColor: string;
  monochrome?: boolean;
};

export type SkillCategoryDefinition = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  accentSoft: string;
  accentGradient: string;
  skills: SkillDefinition[];
};

export const skillCategories: SkillCategoryDefinition[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Responsive interfaces, reusable components, and polished browser experiences.',
    icon: Layout,
    accentColor: '#2563EB',
    accentSoft: 'rgba(37, 99, 235, 0.12)',
    accentGradient: 'from-blue-600 via-cyan-500 to-sky-400',
    skills: [
      { name: 'React', level: 75, icon: FaReact, brandColor: '#61DAFB' },
      { name: 'Next.js', level: 80, icon: SiNextdotjs, brandColor: '#111827', monochrome: true },
      { name: 'TypeScript', level: 65, icon: SiTypescript, brandColor: '#3178C6' },
      { name: 'JavaScript', level: 80, icon: FaJs, brandColor: '#F7DF1E' },
      { name: 'Tailwind CSS', level: 80, icon: SiTailwindcss, brandColor: '#06B6D4' },
      { name: 'HTML5', level: 85, icon: FaHtml5, brandColor: '#E34F26' },
      { name: 'CSS3', level: 80, icon: FaCss3Alt, brandColor: '#1572B6' },
      { name: 'Vite', level: 85, icon: SiVite, brandColor: '#646CFF' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'APIs, business logic, authentication, and maintainable service architecture.',
    icon: Code2,
    accentColor: '#7C3AED',
    accentSoft: 'rgba(124, 58, 237, 0.12)',
    accentGradient: 'from-violet-600 via-purple-500 to-fuchsia-500',
    skills: [
      { name: 'Java', level: 75, icon: FaJava, brandColor: '#ED8B00' },
      { name: 'Spring Boot', level: 70, icon: SiSpringboot, brandColor: '#6DB33F' },
      { name: 'Node.js', level: 60, icon: FaNodeJs, brandColor: '#339933' },
      { name: 'Express.js', level: 50, icon: SiExpress, brandColor: '#111827', monochrome: true },
      { name: 'PHP', level: 65, icon: FaPhp, brandColor: '#777BB4' },
      { name: 'Python', level: 45, icon: FaPython, brandColor: '#3776AB' },
      { name: 'REST APIs', level: 65, icon: Workflow, brandColor: '#F97316' },
    ],
  },
  {
    id: 'database',
    title: 'Database & Storage',
    description: 'Relational and document data modelling, querying, and application integration.',
    icon: Database,
    accentColor: '#059669',
    accentSoft: 'rgba(5, 150, 105, 0.12)',
    accentGradient: 'from-emerald-600 via-teal-500 to-cyan-500',
    skills: [
      { name: 'MySQL', level: 80, icon: SiMysql, brandColor: '#00758F' },
      { name: 'MongoDB', level: 70, icon: SiMongodb, brandColor: '#47A248' },
      { name: 'PostgreSQL', level: 55, icon: SiPostgresql, brandColor: '#4169E1' },
      { name: 'Firebase', level: 80, icon: SiFirebase, brandColor: '#FFCA28' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    description: 'Development tooling used to build, inspect, collaborate, and ship reliably.',
    icon: Wrench,
    accentColor: '#EA580C',
    accentSoft: 'rgba(234, 88, 12, 0.12)',
    accentGradient: 'from-orange-600 via-amber-500 to-yellow-400',
    skills: [
      { name: 'Git', level: 70, icon: FaGitAlt, brandColor: '#F05032' },
      { name: 'GitHub', level: 75, icon: FaGithub, brandColor: '#111827', monochrome: true },
      { name: 'Docker', level: 45, icon: FaDocker, brandColor: '#2496ED' },
      { name: 'Postman', level: 60, icon: SiPostman, brandColor: '#FF6C37' },
      { name: 'GitHub Actions', level: 50, icon: SiGithubactions, brandColor: '#2088FF' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Deployment',
    description: 'Platforms and deployment workflows for taking applications into production.',
    icon: Cloud,
    accentColor: '#0284C7',
    accentSoft: 'rgba(2, 132, 199, 0.12)',
    accentGradient: 'from-sky-600 via-blue-500 to-cyan-400',
    skills: [
      { name: 'AWS', level: 35, icon: FaAws, brandColor: '#FF9900' },
      { name: 'Vercel', level: 50, icon: SiVercel, brandColor: '#111827', monochrome: true },
      { name: 'Netlify', level: 60, icon: SiNetlify, brandColor: '#00C7B7' },
      { name: 'DigitalOcean', level: 40, icon: SiDigitalocean, brandColor: '#0080FF' },
      { name: 'CI/CD', level: 50, icon: GitBranch, brandColor: '#10B981' },
    ],
  },
  {
    id: 'capabilities',
    title: 'Professional Capabilities',
    description: 'The collaborative and problem-solving practices behind sustainable delivery.',
    icon: GitBranch,
    accentColor: '#DB2777',
    accentSoft: 'rgba(219, 39, 119, 0.12)',
    accentGradient: 'from-pink-600 via-rose-500 to-orange-400',
    skills: [
      { name: 'Agile/Scrum', level: 75, icon: Target, brandColor: '#EC4899' },
      { name: 'UI/UX Design', level: 70, icon: Palette, brandColor: '#F97316' },
      { name: 'Problem Solving', level: 85, icon: ShieldCheck, brandColor: '#10B981' },
      { name: 'Team Leadership', level: 70, icon: Users, brandColor: '#3B82F6' },
      { name: 'Code Review', level: 75, icon: BadgeCheck, brandColor: '#84CC16' },
    ],
  },
];

export function getExperienceLabel(level: number) {
  if (level >= 80) return 'Advanced';
  if (level >= 65) return 'Proficient';
  if (level >= 50) return 'Comfortable';
  return 'Learning';
}
