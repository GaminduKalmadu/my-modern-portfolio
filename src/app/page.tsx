'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Cpu, Palette, Github, ExternalLink, Star, Terminal, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const skillsList = [
  'React & Next.js Developer',
  'Full-stack Engineer',
  'Java & Spring Boot Specialist',
  'UI/UX Design Enthusiast',
  'SLIIT Software Engineering Student'
];

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSkill = skillsList[skillIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentSkill.substring(0, typedText.length + 1));
        if (typedText === currentSkill) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setTypedText(currentSkill.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setSkillIndex((prev) => (prev + 1) % skillsList.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, skillIndex]);

  const competencies = [
    {
      icon: Layers,
      title: 'Full-Stack Development',
      description: 'Bridging the gap between sleek user interfaces and robust, scalable server architectures.',
      color: 'from-primary/20 to-primary/5',
      borderColor: 'border-primary/30',
      isPrimary: true
    },
    {
      icon: Cpu,
      title: 'Scalable Systems',
      description: 'Implementing efficient data handling, OOP principles, and clean API design methodologies.',
      color: 'from-secondary/20 to-secondary/5',
      borderColor: 'border-secondary/30',
      isPrimary: false
    },
    {
      icon: Palette,
      title: 'Creative UI/UX',
      description: 'Crafting responsive layout flows, micro-interactions, and visual designs that delight users.',
      color: 'from-primary/20 to-secondary/20',
      borderColor: 'border-primary/20',
      isPrimary: true
    },
  ];

  const featuredProjects = [
    {
      title: 'Care Pro Healthcare System',
      category: 'Full-Stack Web Application',
      description: 'A comprehensive digital healthcare management platform facilitating patient-doctor communication, appointment booking, medical records management, and automated billing.',
      summary: 'Key Details: Features patient portals, doctor dashboard scheduling, secure medical history logs, and instant invoice generation with MySQL database integration.',
      image: '/home.jpeg',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/kiruluchamika/SLIIT-IWT-Project-2024',
      demo: 'https://github.com/kiruluchamika/SLIIT-IWT-Project-2024',
      isPrimary: true
    },
    {
      title: 'Flexiride Vehicle Rental System',
      category: 'Enterprise Java Application',
      description: 'A modern vehicle rental system enabling customers to search, book, and review vehicle listings, featuring custom billing algorithms and a full-featured admin management dashboard.',
      summary: 'Key Details: Developed as a SLIIT academic project implementing OOP principles, secure user authentication, interactive maps, and real-time fleet availability status.',
      image: '/car-rental-BL1p-RFW.webp',
      tags: ['HTML', 'JavaScript', 'Tailwind CSS', 'Java', 'MySQL'],
      github: 'https://github.com/GaminduKalmadu/flexiride-vehicle-rental-system',
      demo: 'https://github.com/GaminduKalmadu/flexiride-vehicle-rental-system',
      isPrimary: false
    },
    {
      title: 'Ceylon Brew - Tea plantation Management System',
      category: 'Next.js & Spring Boot ERP',
      description: 'An enterprise resource planning (ERP) platform designed for tea plantation owners to optimize crop harvesting, employee payroll, logistics, and processing workflows.',
      summary: 'Key Details: Features a Spring Boot microservice backend, robust Next.js frontend, crop-to-shipment tracking log, and interactive plantation maps.',
      image: '/ceylonbrew.png',
      tags: ['Next.js', 'Tailwind CSS', 'Spring Boot', 'MySQL', 'TypeScript'],
      github: '#',
      demo: '#',
      isPrimary: true
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16">
        {/* Neon Backdrop Patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[140px] animate-pulse"></div>
          <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-secondary/10 dark:bg-secondary/5 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Cyberpunk dot grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 dark:bg-primary/20 dark:text-primary-light text-xs sm:text-sm font-bold tracking-wider uppercase mb-2">
                  <Star size={14} className="animate-spin-slow" />
                  Software Engineering Undergraduate
                </div>
                
                <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none text-gray-900 dark:text-white">
                  Hello, I'm <br />
                  <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient font-extrabold pb-2">
                    Gamindu Kalmadu
                  </span>
                </h1>

                {/* Console Typing Box */}
                <div className="max-w-xl mx-auto lg:mx-0 mt-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/40 backdrop-blur-md p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-3 border-b border-gray-200/60 dark:border-gray-800 pb-2">
                    <Terminal size={14} className="text-primary" />
                    <span className="text-xs font-mono text-gray-400">bash_session_active</span>
                    <div className="ml-auto flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                    </div>
                  </div>
                  <div className="min-h-[48px] flex items-center font-mono text-base sm:text-lg">
                    <span className="text-secondary mr-2">{'>'}</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {typedText}
                      <span className="animate-pulse font-bold text-primary">|</span>
                    </span>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed pt-2">
                  A creative software developer bridging elegant UI styling with scalable backend code. Specializing in building exceptional full-stack products with React, Java, and Spring Boot.
                </p>
              </motion.div>

              {/* Call to Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="/projects"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.03] overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Explore Projects
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
                </Link>
                <a
                  href="/gamindu_updated26.pdf"
                  download="Gamindu_Kalmadu_CV.pdf"
                  className="inline-flex items-center justify-center px-8 py-4 font-bold text-gray-900 dark:text-white rounded-xl transition-all duration-300 hover:scale-[1.03] bg-white border border-gray-200 hover:border-primary/50 hover:bg-gray-50 dark:bg-gray-900 dark:border-gray-800 dark:hover:border-secondary/50 dark:hover:bg-gray-800/80 shadow-sm gap-2"
                >
                  <Download size={20} className="text-primary dark:text-secondary" />
                  Download CV
                </a>
              </motion.div>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-8 justify-center lg:justify-start pt-6 border-t border-gray-100 dark:border-gray-900/60"
              >
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">2+</div>
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">10+</div>
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wider">Projects Completed</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">3rd</div>
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wider">Academic Year</div>
                </div>
              </motion.div>
            </div>

            {/* Avatar Section (Futuristic Cybernetic Hologram Frame) */}
            <div className="lg:col-span-5 flex justify-center items-center relative py-10 sm:py-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: 'spring' }}
                className="relative group cursor-pointer"
              >
                {/* Slow outer rotating ring with dashes */}
                <div className="absolute -inset-8 rounded-full border border-dashed border-primary/45 animate-[spin_32s_linear_infinite] pointer-events-none"></div>
                {/* Mid-speed inner rotating ring with dot indicator */}
                <div className="absolute -inset-5 rounded-full border border-dotted border-secondary/35 animate-[spin_18s_linear_infinite_reverse] pointer-events-none"></div>
                {/* Inner target ticks */}
                <div className="absolute -inset-1 rounded-full border-2 border-primary/20 animate-pulse pointer-events-none"></div>
                
                {/* Glowing neon halo behind image */}
                <div className="absolute -inset-3 bg-gradient-to-tr from-primary via-secondary to-primary rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>

                {/* Main profile picture container (Perfect circle sci-fi scan) */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(29,78,216,0.3)]">
                  {/* Dynamic 3D mouse parallax hover on photo */}
                  <motion.img
                    src="/profile1.jpeg"
                    alt="Gamindu Kalmadu"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  />
                  
                  {/* Holographic grid scanner overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(29,78,216,0.05)_1px,transparent_1px)] bg-[size:100%_6px] pointer-events-none mix-blend-overlay"></div>
                </div>

                {/* Available for work badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gray-950/90 dark:bg-gray-900/90 text-white px-5 py-2 rounded-full border border-secondary/40 shadow-2xl flex items-center gap-2 whitespace-nowrap backdrop-blur-md"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
                  </span>
                  <span className="text-[10px] font-extrabold tracking-wider uppercase">Available for Hire</span>
                </motion.div>

                {/* Floating technology tags */}
                <div className="hidden sm:block absolute -right-12 top-10 bg-white/70 dark:bg-slate-900/80 backdrop-blur-md rounded-xl p-2.5 border border-primary/20 shadow-md text-[10px] font-extrabold text-gray-700 dark:text-gray-300">
                  🚀 microservices
                </div>
                <div className="hidden sm:block absolute -left-12 bottom-10 bg-white/70 dark:bg-slate-900/80 backdrop-blur-md rounded-xl p-2.5 border border-secondary/20 shadow-md text-[10px] font-extrabold text-gray-700 dark:text-gray-300">
                  🎨 next.js ui
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="py-24 relative bg-gray-50/50 dark:bg-gray-900/30 border-y border-gray-100 dark:border-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Core Expertise</h2>
            <p className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">
              What I Bring to the Table
            </p>
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
              Combining technical depth with creative design to engineer exceptional software.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {competencies.map((comp, index) => {
              const Icon = comp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group p-8 rounded-2xl border ${comp.isPrimary ? 'border-primary/20 hover:border-primary/45' : 'border-secondary/20 hover:border-secondary/45'} bg-white dark:bg-gray-900/50 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden`}
                >
                  {/* Subtle inner background glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${comp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                  
                  <div className="relative mb-6">
                    {/* Shadow Projection */}
                    <div className={`absolute -inset-2 bg-gradient-to-r ${comp.isPrimary ? 'from-primary to-primary/40' : 'from-secondary to-secondary/40'} rounded-2xl blur-lg opacity-20 group-hover:opacity-60 transition-opacity duration-500`}></div>
                    {/* Solid custom gradient shape */}
                    <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${
                      comp.isPrimary ? 'from-primary/25 to-primary/10 border-primary/30' : 'from-secondary/25 to-secondary/10 border-secondary/30'
                    } border text-gray-800 dark:text-white group-hover:from-primary group-hover:to-secondary group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-md group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon size={28} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-primary">
                    {comp.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed transition-colors duration-300 relative z-10 font-medium">
                    {comp.description}
                  </p>

                  <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-secondary">Best Work</h2>
            <p className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">
              Featured Projects
            </p>
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
              Explore key projects displaying my engineering capabilities, database coordination, and frontend UI design.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`flex flex-col rounded-2xl overflow-hidden bg-gray-50/60 dark:bg-slate-900/60 border border-gray-200/85 dark:border-slate-800/80 backdrop-blur-md transition-all duration-300 group hover:-translate-y-2.5 ${
                  project.isPrimary
                    ? 'hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-[0_0_30px_rgba(29,78,216,0.15)]'
                    : 'hover:border-secondary/50 dark:hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]'
                }`}
              >
                {/* Project Image Container */}
                <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border shadow-sm backdrop-blur-md ${
                      project.isPrimary
                        ? 'bg-primary/10 text-primary border-primary/20'
                        : 'bg-secondary/10 text-secondary border-secondary/20'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className={`text-xl font-extrabold text-gray-900 dark:text-white transition-colors duration-300 ${
                      project.isPrimary ? 'group-hover:text-primary' : 'group-hover:text-secondary'
                    }`}>
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-355 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Developer Generated Summary Block */}
                    <div className="p-3.5 rounded-lg bg-gray-100/50 dark:bg-gray-950/60 border border-gray-250/50 dark:border-gray-800/80 text-xs font-medium text-gray-700 dark:text-gray-300 leading-relaxed font-mono">
                      {project.summary}
                    </div>

                    {/* Tags */}
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

                  {/* Links */}
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
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary hover:border-primary/50 dark:hover:text-secondary dark:hover:border-secondary/50 transition-all duration-300 group"
            >
              See All My Projects
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 border-t border-gray-100 dark:border-gray-900/40">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            Interested in Collaboration?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Let's translate your requirements into beautiful layouts and efficient codes. Reach out for consultations, inquiries, or internship opportunities.
          </p>
          <motion.div whileHover={{ scale: 1.03 }} className="inline-block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-xl shadow-xl hover:shadow-secondary/20 transition-all duration-300"
            >
              Start a Conversation
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
