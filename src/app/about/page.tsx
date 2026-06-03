'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, Heart, Target } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'Academic Year', value: '3rd' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'Focused on creating meaningful impact through clean, reliable, and scalable code.',
      border: 'hover:border-primary/40',
      iconBg: 'bg-primary/10 text-primary dark:bg-primary/20'
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'Genuinely love the process of exploring system designs, solving bugs, and building tools.',
      border: 'hover:border-secondary/40',
      iconBg: 'bg-secondary/10 text-secondary dark:bg-secondary/20'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Always reading documentations and applying the latest industry standards in web apps.',
      border: 'hover:border-primary/40',
      iconBg: 'bg-primary/10 text-primary dark:bg-primary/20'
    },
    {
      icon: Award,
      title: 'Quality Focused',
      description: 'Committed to writing testable, readable, and highly optimized code in all frameworks.',
      border: 'hover:border-secondary/40',
      iconBg: 'bg-secondary/10 text-secondary dark:bg-secondary/20'
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 mt-10 transition-colors duration-500 bg-white dark:bg-gray-950 relative">
      {/* Background Neon Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-primary/5 dark:bg-primary/3 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-secondary/5 dark:bg-secondary/3 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 dark:bg-primary/20 dark:text-primary-light text-xs font-bold uppercase tracking-wider">
            Who I Am
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            Software Engineering undergraduate at SLIIT, passionate full-stack developer with hands-on experience building web apps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              My Story & Journey
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
              I am currently in my 3rd academic year studying Software Engineering at SLIIT (Sri Lanka Institute of Information Technology). Over the last 2 years, I have built a strong engineering foundation centered around full stack web development, scalable code architectures, and agile project methodologies.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
              My core computer science background covers Object-Oriented Programming (OOP) concepts, Data Structures & Algorithms, and structured database design. I enjoy turning sophisticated system specifications into clean, modern layouts and high-performance server logic.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
              I love pair programming, participating in dev sessions, and staying current with TypeScript, Next.js, and Java/Spring Boot ecosystems. My goal is to build secure, robust platforms that provide optimized user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-5 space-y-6"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl text-center border border-gray-150 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 hover:border-primary/30 transition-colors duration-300 shadow-sm"
                >
                  <div className="text-4xl font-black mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            {/* High-tech SLA card */}
            <div className="p-6 rounded-2xl border border-secondary/30 bg-secondary/5 dark:bg-secondary/5 font-mono text-xs text-secondary leading-relaxed">
              <span className="font-bold text-gray-800 dark:text-gray-200">🚀 Current Focus:</span> Architecting Spring Boot API microservices, writing clean Next.js pages, and polishing web security implementations.
            </div>
          </motion.div>
        </div>

        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-extrabold text-center mb-12 text-gray-900 dark:text-white"
          >
            Core Values & Beliefs
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, index) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 ${val.border}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${val.iconBg}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
