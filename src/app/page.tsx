'use client';

import Link from 'next/link';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const skills = [
    'React Developer',
    'Next.js Expert',
    'TypeScript Pro',
    'UI/UX Designer',
    'Problem Solver',
    'Full-stack Developer'
  ];

  useEffect(() => {
    const currentSkill = skills[skillIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentSkill.substring(0, typedText.length + 1));
        if (typedText === currentSkill) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(currentSkill.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setSkillIndex((prev) => (prev + 1) % skills.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, skillIndex]);

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable solutions',
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating beautiful user experiences',
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized for speed and efficiency',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center pt-20 transition-colors duration-500 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-6 animate-fade-in">
              <div className="space-y-6">
                <h2 className="text-sm md:text-base font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase animate-fade-in">
                  👋 Welcome to my portfolio
                </h2>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight">
                  <span className="block text-gray-900 dark:text-white transition-colors duration-300 mb-3">
                    Hello, I'm
                  </span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_auto] animate-gradient">
                    Gamindu Kalmadu
                  </span>
                </h1>
                
                {/* Typing Effect */}
                <div className="min-h-[100px] flex items-center justify-center lg:justify-start">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    <span className="text-blue-600 dark:text-cyan-400">{typedText}</span>
                    <span className="animate-pulse text-blue-600 dark:text-cyan-400">|</span>
                  </p>
                </div>
                
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 transition-colors duration-300 leading-relaxed">
                  Creative Problem Solver passionate about building elegant solutions and exceptional user experiences with cutting-edge technologies
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Link
                  href="/projects"
                  className="group inline-flex items-center justify-center px-10 py-5 text-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
                >
                  View My Work
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={22} />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 bg-white text-gray-900 hover:bg-gray-50 border-2 border-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:border-gray-700"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1 opacity-0 group-hover:opacity-100" size={22} />
                </Link>
              </div>

              {/* Social proof or stats - optional */}
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-6">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-extrabold text-gray-900 dark:text-white">5+</div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-extrabold text-gray-900 dark:text-white">50+</div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">Projects Done</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-extrabold text-gray-900 dark:text-white">30+</div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in">
              <div className="relative group">
                {/* Decorative corner accents */}
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-blue-600 dark:border-cyan-500 rounded-tl-3xl opacity-60"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-cyan-600 dark:border-blue-500 rounded-br-3xl opacity-60"></div>
                
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Profile Image Container - Square with rounded corners */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                  <img
                    src="/profile1.jpeg"
                    alt="Gamindu Kalmadu"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Animated Status Badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl px-6 py-3 shadow-2xl border-2 border-white dark:border-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-green-500/50">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      <div className="absolute top-0 left-0 w-3 h-3 bg-white rounded-full animate-ping"></div>
                    </div>
                    <span className="text-sm font-bold text-white whitespace-nowrap tracking-wide">
                      Available for Work
                    </span>
                  </div>
                </div>

                {/* Floating skill badges */}
                <div className="hidden lg:block absolute -right-8 top-1/4 bg-white dark:bg-gray-800 rounded-xl px-4 py-2 shadow-xl border border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:scale-110 animate-float">
                  <span className="text-sm font-semibold text-blue-600 dark:text-cyan-400">⚡ Fast Learner</span>
                </div>
                
                <div className="hidden lg:block absolute -left-8 bottom-1/4 bg-white dark:bg-gray-800 rounded-xl px-4 py-2 shadow-xl border border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:scale-110 animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-sm font-semibold text-cyan-600 dark:text-blue-400">🎨 Creative</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 transition-colors duration-500 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What I Bring to the Table
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Combining technical expertise with creative thinking to deliver exceptional results
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl transition-all duration-500 bg-gray-50 hover:bg-white dark:bg-gray-800 dark:hover:bg-gray-700 hover:shadow-2xl transform hover:-translate-y-2 border border-transparent hover:border-blue-500/20 dark:hover:border-blue-400/20"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-blue-600 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    <div className="relative w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {feature.title}
                  </h3>
                  
                  <p className="text-base leading-relaxed transition-colors duration-300 text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>

                  {/* Decorative bottom border */}
                  <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full transition-all duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
