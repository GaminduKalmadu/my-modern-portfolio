'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Care Pro Healthcare System',
      category: 'Full-Stack Web Application',
      description:
        'A comprehensive digital healthcare management platform facilitating patient-doctor communication, appointment booking, medical records management, and automated pharmacy billing.',
      image: '/home.jpeg',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/kiruluchamika/SLIIT-IWT-Project-2024',
      demo: 'https://github.com/kiruluchamika/SLIIT-IWT-Project-2024',
      isPrimary: true
    },
    {
      title: 'Flexiride Vehicle Rental System',
      category: 'Enterprise Java Application',
      description:
        'A modern vehicle rental system enabling customers to search, book, and review vehicle listings, featuring custom billing algorithms and a full-featured admin management dashboard.',
      image: '/car-rental-BL1p-RFW.webp',
      tags: ['HTML', 'JavaScript', 'Tailwind CSS', 'Java', 'MySQL'],
      github: 'https://github.com/GaminduKalmadu/flexiride-vehicle-rental-system',
      demo: 'https://github.com/GaminduKalmadu/flexiride-vehicle-rental-system',
      isPrimary: false
    },
    {
      title: 'Ceylon Brew - Tea plantation Management System',
      category: 'Next.js & Spring Boot ERP',
      description:
        'An enterprise resource planning (ERP) platform designed for tea plantation owners to optimize crop harvesting, employee payroll, logistics, and processing workflows.',
      image: '/ceylonbrew.png',
      tags: ['Next.js', 'Tailwind CSS', 'Spring Boot', 'MySQL', 'TypeScript'],
      github: '#',
      demo: '#',
      isPrimary: true
    },
    {
      title: 'My Portfolio Website',
      category: 'Frontend & UI Portfolio',
      description:
        'A personal portfolio website designed to showcase my software engineering projects, technical stack, and academic progress with premium animations.',
      image: '/portfolio1.png',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/GaminduKalmadu/my-modern-portfolio',
      demo: 'https://github.com/GaminduKalmadu/my-modern-portfolio',
      isPrimary: false
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, type: 'spring' as const, stiffness: 80 }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 mt-10 transition-colors duration-500 bg-white dark:bg-gray-950 relative">
      {/* Background Neon Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-primary/5 dark:bg-primary/3 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-secondary/5 dark:bg-secondary/3 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 dark:bg-primary/20 dark:text-primary-light text-xs font-bold uppercase tracking-wider">
            My Portfolio
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white">
            Creative <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            A curated log of web applications, database coordination systems, and software engineering projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`rounded-2xl overflow-hidden border bg-gray-50/60 dark:bg-slate-900/60 border-gray-200/85 dark:border-slate-800/80 backdrop-blur-md transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-2 group ${
                project.isPrimary
                  ? 'hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-[0_0_30px_rgba(249,91,246,0.15)]'
                  : 'hover:border-secondary/50 dark:hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(83,207,153,0.15)]'
              }`}
            >
              {/* Image box */}
              <div className="relative h-48 overflow-hidden bg-gray-150 dark:bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm border backdrop-blur-md ${
                    project.isPrimary
                      ? 'bg-primary/10 text-primary border-primary/20'
                      : 'bg-secondary/10 text-secondary border-secondary/20'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
                <div className="space-y-4">
                  <h3 className={`text-xl font-extrabold text-gray-900 dark:text-white transition-colors duration-300 ${
                    project.isPrimary ? 'group-hover:text-primary' : 'group-hover:text-secondary'
                  }`}>
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                    {project.description}
                  </p>
                  
                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-lg border transition-all duration-300 ${
                          project.isPrimary
                            ? 'bg-primary/5 text-primary border-primary/10 dark:bg-primary/10 dark:text-primary dark:border-primary/20'
                            : 'bg-secondary/5 text-secondary border-secondary/10 dark:bg-secondary/10 dark:text-secondary dark:border-secondary/20'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-5 mt-5 border-t border-gray-150 dark:border-slate-800/80">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center flex-1 py-2.5 rounded-xl text-xs font-bold uppercase border transition-all duration-300 ${
                      project.isPrimary
                        ? 'border-gray-200 dark:border-slate-800 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white hover:border-primary dark:hover:bg-primary dark:hover:text-white'
                        : 'border-gray-200 dark:border-slate-800 text-gray-700 dark:text-gray-300 hover:bg-secondary hover:text-white hover:border-secondary dark:hover:bg-secondary dark:hover:text-white'
                    }`}
                  >
                    <Github size={14} className="mr-1.5" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center flex-1 py-2.5 rounded-xl text-xs font-bold uppercase border transition-all duration-300 ${
                      project.isPrimary
                        ? 'border-gray-200 dark:border-slate-800 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white hover:border-primary dark:hover:bg-primary dark:hover:text-white'
                        : 'border-gray-200 dark:border-slate-800 text-gray-700 dark:text-gray-300 hover:bg-secondary hover:text-white hover:border-secondary dark:hover:bg-secondary dark:hover:text-white'
                    }`}
                  >
                    <ExternalLink size={14} className="mr-1.5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
