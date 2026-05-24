'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { 
  FaReact, 
  FaNode, 
  FaPython, 
  FaDocker, 
  FaAws, 
  FaGitAlt 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiDigitalocean,
  SiVite
} from 'react-icons/si';
import { 
  Code2,
  Layout,
  Database,
  Cloud,
  Wrench,
  GitBranch,
  Target,
  Palette,
  Shield,
  Users,
  CheckCircle2,
  GitMerge,
  Workflow
} from 'lucide-react';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const { isDark } = useTheme();

  const skillCategories = [
    {
      icon: Layout,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 75, icon: FaReact, brandColor: '#61DAFB', color: 'from-[#61DAFB] to-[#005B94]' },
        { name: 'TypeScript', level: 65, icon: SiTypescript, brandColor: '#3178C6', color: 'from-[#3178C6] to-[#1b467a]' },
        { name: 'Tailwind CSS', level: 80, icon: SiTailwindcss, brandColor: '#06B6D4', color: 'from-[#06B6D4] to-[#005b6e]' },
        { name: 'Next.js', level: 80, icon: SiNextdotjs, brandColor: isDark ? '#FFFFFF' : '#000000', color: 'from-gray-500 to-gray-900 dark:from-gray-300 dark:to-white' }
      ],
    },
    {
      icon: Code2,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 60, icon: FaNode, brandColor: '#339933', color: 'from-[#339933] to-[#215d21]' },
        { name: 'Python', level: 45, icon: FaPython, brandColor: '#3776AB', color: 'from-[#3776AB] to-[#ffd43b]' },
        { name: 'Express.js', level: 50, icon: SiExpress, brandColor: isDark ? '#FFFFFF' : '#000000', color: 'from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-200' },
        { name: 'REST APIs', level: 65, icon: Workflow, brandColor: '#FF5733', color: 'from-[#FF5733] to-[#ff0055]' }
      ],
    },
    {
      icon: Database,
      title: 'Database & Storage',
      skills: [
        { name: 'PostgreSQL', level: 55, icon: SiPostgresql, brandColor: '#4169E1', color: 'from-[#4169E1] to-[#1b345f]' },
        { name: 'MongoDB', level: 70, icon: SiMongodb, brandColor: '#47A248', color: 'from-[#47A248] to-[#116149]' },
        { name: 'MySQL', level: 80, icon: SiMysql, brandColor: '#00758F', color: 'from-[#00758F] to-[#f29111]' },
        { name: 'Firebase', level: 80, icon: SiFirebase, brandColor: '#FFCA28', color: 'from-[#FFCA28] to-[#f5820d]' },
      ],
    },
    {
      icon: Wrench,
      title: 'Tools & Frameworks',
      skills: [
        { name: 'Git', level: 70, icon: FaGitAlt, brandColor: '#F05032', color: 'from-[#F05032] to-[#c1270d]' },
        { name: 'Docker', level: 45, icon: FaDocker, brandColor: '#2496ED', color: 'from-[#2496ED] to-[#145a8e]' },
        { name: 'Vite', level: 85, icon: SiVite, brandColor: '#646CFF', color: 'from-[#646CFF] to-[#bd34fe]' },
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud & Deployment',
      skills: [
        { name: 'AWS', level: 35, icon: FaAws, brandColor: '#FF9900', color: 'from-[#FF9900] to-[#232f3e]' },
        { name: 'Vercel', level: 50, icon: SiVercel, brandColor: isDark ? '#FFFFFF' : '#000000', color: 'from-gray-600 to-black dark:from-gray-400 dark:to-white' },
        { name: 'Netlify', level: 60, icon: SiNetlify, brandColor: '#00C896', color: 'from-[#00C896] to-[#008080]' },
        { name: 'Digital Ocean', level: 40, icon: SiDigitalocean, brandColor: '#0080FF', color: 'from-[#0080FF] to-[#004c99]' },
        { name: 'CI/CD', level: 50, icon: GitMerge, brandColor: '#10B981', color: 'from-emerald-500 to-teal-600' },
      ],
    },
    {
      icon: GitBranch,
      title: 'Other Capabilities',
      skills: [
        { name: 'Agile/Scrum', level: 75, icon: Target, brandColor: '#FF3366', color: 'from-[#FF3366] to-pink-700' },
        { name: 'UI/UX Design', level: 70, icon: Palette, brandColor: '#FF5E3A', color: 'from-[#FF5E3A] to-rose-600' },
        { name: 'Problem Solving', level: 85, icon: Shield, brandColor: '#10B981', color: 'from-emerald-500 to-teal-600' },
        { name: 'Team Leadership', level: 70, icon: Users, brandColor: '#3B82F6', color: 'from-blue-500 to-indigo-600' },
        { name: 'Code Review', level: 75, icon: CheckCircle2, brandColor: '#84CC16', color: 'from-lime-500 to-green-600' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: 'spring' as const,
        stiffness: 70
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        type: 'spring' as const,
        stiffness: 300
      },
    },
  };

  return (
    <div className="min-h-screen pt-24 pb-16 mt-10 transition-colors duration-500 bg-white dark:bg-gray-950 relative">
      {/* Background Neon Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/3 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-secondary/5 dark:bg-secondary/3 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-secondary border border-secondary/20 dark:bg-secondary/20 dark:text-secondary-light text-xs font-bold uppercase tracking-wider">
            Technical Stack
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white">
            Skills & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expertise</span>
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            A look into the technologies, databases, cloud providers, and engineering methodologies I leverage to design and deploy solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 rounded-2xl glass-card transition-all duration-300 shadow-md border border-gray-200/80 dark:border-slate-800/80 relative group/category hover:shadow-lg"
              >
                {/* Category Header */}
                <div className="flex items-center mb-8 border-b border-gray-150 dark:border-slate-800/80 pb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 border border-primary/20 dark:border-secondary/20 text-primary dark:text-secondary shadow-sm">
                    <Icon size={24} />
                  </div>
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white">
                    {category.title}
                  </h2>
                </div>

                {/* Skills Badges Grid with Authentic Colors by Default */}
                <div className="grid grid-cols-2 gap-3 mb-10">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    const isHovered = hoveredSkill === skill.name;
                    return (
                      <motion.div
                        key={skillIndex}
                        variants={iconVariants}
                        whileHover="hover"
                        onHoverStart={() => setHoveredSkill(skill.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        className="relative cursor-pointer"
                      >
                        <div
                          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50/70 border border-gray-200/80 dark:bg-slate-900/40 dark:border-slate-800/80 transition-all duration-300"
                          style={{
                            borderColor: isHovered ? skill.brandColor : undefined,
                            boxShadow: isHovered ? `0 0 20px ${skill.brandColor}33` : undefined,
                            backgroundColor: isHovered ? `${skill.brandColor}0f` : undefined
                          }}
                        >
                          <div className="flex-shrink-0">
                            <SkillIcon 
                              style={{ color: skill.brandColor }} 
                              size={22} 
                            />
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-gray-805 dark:text-gray-200 tracking-wide transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Skill Progress Bars with Brand Colors */}
                <div className="space-y-5">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3 font-mono">
                    Proficiency Metrics
                  </h3>
                  {category.skills.map((skill, skillIndex) => {
                    const isHovered = hoveredSkill === skill.name;
                    return (
                      <div
                        key={skillIndex}
                        className="p-2.5 rounded-xl transition-all duration-300 border border-transparent"
                        style={{
                          backgroundColor: isHovered ? `${skill.brandColor}0d` : 'transparent',
                          borderColor: isHovered ? `${skill.brandColor}22` : 'transparent'
                        }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-sm font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: skill.brandColor }}></span>
                            {skill.name}
                          </span>
                          <span className="text-xs font-mono font-bold text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full rounded-full h-2.5 bg-gray-150 dark:bg-gray-800 overflow-hidden shadow-inner border border-gray-100 dark:border-gray-900/60">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.2, delay: 0.1 + skillIndex * 0.05, ease: 'easeOut' }}
                            className={`bg-gradient-to-r ${skill.color} h-2.5 rounded-full shadow-sm relative`}
                            style={{
                              boxShadow: isHovered ? `0 0 10px ${skill.brandColor}` : undefined
                            }}
                          >
                            <div className="absolute inset-0 bg-white/10 opacity-30 animate-pulse"></div>
                          </motion.div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl p-12 text-center overflow-hidden border border-primary/20 bg-gradient-to-r from-primary/10 to-secondary/15 dark:from-primary/5 dark:to-secondary/10 shadow-xl"
        >
          {/* Decorative glow blob */}
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
          
          <h2 className="text-2xl sm:text-3xl font-black mb-4 text-gray-955 dark:text-white">Continuous Evolution</h2>
          <p className="text-sm sm:text-base opacity-80 max-w-2xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            The software industry is constantly developing new frameworks and methodologies. I dedicate time weekly to studying system designs, experimenting with new libraries, reading documentations, and committing code to stay at the cutting edge.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
