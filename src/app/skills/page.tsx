'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaReact, 
  FaNode, 
  FaPython, 
  FaDocker, 
  FaAws, 
  FaGitAlt,
  FaJava,
  FaPhp,
  FaSass
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
  SiVite,
  SiRedux,
  SiKotlin,
  SiCplusplus,
  SiGo,
  SiSpring,
  SiAngular,
  SiJavascript,
  SiRedis
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

  const skillCategories = [
    {
      icon: Layout,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 70, icon: FaReact, color: 'from-cyan-400 to-blue-500' },
        { name: 'TypeScript', level: 60, icon: SiTypescript, color: 'from-blue-500 to-blue-700' },
        { name: 'Tailwind CSS', level: 70, icon: SiTailwindcss, color: 'from-cyan-400 to-teal-500' },
        { name: 'Next.js', level: 80, icon: SiNextdotjs, color: 'from-gray-700 to-black' }
      ],
    },
    {
      icon: Code2,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 60, icon: FaNode, color: 'from-green-500 to-green-700' },
        { name: 'Python', level: 40, icon: FaPython, color: 'from-blue-400 to-yellow-500' },
        { name: 'Express.js', level: 50, icon: SiExpress, color: 'from-gray-600 to-gray-800' },
        { name: 'REST APIs', level: 60, icon: Workflow, color: 'from-purple-500 to-pink-500' }
      ],
    },
    {
      icon: Database,
      title: 'Database & Storage',
      skills: [
        { name: 'PostgreSQL', level: 50, icon: SiPostgresql, color: 'from-blue-600 to-blue-800' },
        { name: 'MongoDB', level: 70, icon: SiMongodb, color: 'from-green-500 to-emerald-600' },
        { name: 'MySQL', level: 80, icon: SiMysql, color: 'from-orange-400 to-orange-600' },
        { name: 'Firebase', level: 83, icon: SiFirebase, color: 'from-yellow-400 to-orange-500' },
      ],
    },
    {
      icon: Wrench,
      title: 'Tools & Frameworks',
      skills: [
        { name: 'Git', level: 60, icon: FaGitAlt, color: 'from-orange-500 to-red-500' },
        { name: 'Docker', level: 40, icon: FaDocker, color: 'from-blue-500 to-blue-700' },
        { name: 'Vite', level: 88, icon: SiVite, color: 'from-purple-500 to-pink-500' },
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud & Deployment',
      skills: [
        { name: 'AWS', level: 30, icon: FaAws, color: 'from-orange-400 to-orange-600' },
        { name: 'Vercel', level: 40, icon: SiVercel, color: 'from-black to-gray-800' },
        { name: 'Netlify', level: 50, icon: SiNetlify, color: 'from-teal-400 to-cyan-500' },
        { name: 'Digital Ocean', level: 40, icon: SiDigitalocean, color: 'from-blue-500 to-blue-700' },
        { name: 'CI/CD', level: 50, icon: GitMerge, color: 'from-green-500 to-emerald-600' },
      ],
    },
    {
      icon: GitBranch,
      title: 'Other Skills',
      skills: [
        { name: 'Agile/Scrum', level: 75, icon: Target, color: 'from-indigo-500 to-purple-600' },
        { name: 'UI/UX Design', level: 70, icon: Palette, color: 'from-pink-500 to-rose-500' },
        { name: 'Problem Solving', level: 80, icon: Shield, color: 'from-emerald-500 to-teal-600' },
        { name: 'Team Leadership', level: 70, icon: Users, color: 'from-blue-500 to-indigo-600' },
        { name: 'Code Review', level: 75, icon: CheckCircle2, color: 'from-green-500 to-lime-600' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen pt-24 pb-16 mt-10 transition-colors duration-500 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 text-gray-900 dark:text-white">
            Skills & Expertise
          </h1>
          <p className="text-xl max-w-3xl mx-auto transition-colors duration-300 text-gray-600 dark:text-gray-400">
            Technologies and tools I work with to bring ideas to life
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
                className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold transition-colors duration-300 text-gray-900 dark:text-white">
                    {category.title}
                  </h2>
                </div>

                {/* Skills Icons Grid */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.div
                        key={skillIndex}
                        variants={iconVariants}
                        whileHover="hover"
                        onHoverStart={() => setHoveredSkill(skill.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        className="relative group cursor-pointer"
                      >
                        <div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg flex items-center justify-center transform transition-all duration-300 group-hover:shadow-2xl`}
                        >
                          <SkillIcon className="text-white" size={32} />
                        </div>
                        {hoveredSkill === skill.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10 shadow-lg"
                          >
                            {skill.name}
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Skill Progress Bars */}
                <div className="space-y-4 mt-8">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * skillIndex }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium transition-colors duration-300 text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold transition-colors duration-300 text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full rounded-full h-3 bg-gray-200 dark:bg-gray-700 overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: 0.2 + skillIndex * 0.1, ease: 'easeOut' }}
                          className={`bg-gradient-to-r ${skill.color} h-3 rounded-full shadow-lg relative`}
                        >
                          <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl p-12 text-center text-white shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">Always Learning</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            The tech landscape is constantly evolving, and so am I. I'm
            passionate about staying current with the latest technologies and
            best practices in web development.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
