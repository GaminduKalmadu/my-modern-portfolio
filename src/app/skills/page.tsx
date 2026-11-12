'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Sparkles } from 'lucide-react';
import { useState } from 'react';
import SkillCategoryCard from '@/components/skills/SkillCategoryCard';
import { skillCategories } from '@/data/skills';

const initialSelections = Object.fromEntries(
  skillCategories.map((category) => [category.id, category.skills[0].name]),
);

export default function Skills() {
  const [selectedSkills, setSelectedSkills] = useState<Record<string, string>>(initialSelections);
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <main className="relative min-h-screen overflow-hidden bg-white pb-16 pt-32 transition-colors duration-500 dark:bg-gray-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-32 h-[32rem] w-[32rem] rounded-full bg-blue-500/10 blur-[140px] dark:bg-blue-500/5" />
        <div className="absolute -right-40 top-1/3 h-[34rem] w-[34rem] rounded-full bg-emerald-500/10 blur-[150px] dark:bg-emerald-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(29,78,216,0.07)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)] dark:bg-[radial-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.55, ease: 'easeOut' }}
          className="mx-auto mb-16 max-w-3xl space-y-5 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
            <Sparkles aria-hidden="true" size={14} />
            Technical Stack
          </div>
          <h1 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white md:text-6xl">
            Skills &amp;{' '}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary bg-clip-text text-transparent">
              Expertise
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
            Technologies and engineering practices I use to turn product ideas into reliable, maintainable software.
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
            Select any badge to view its current proficiency
          </p>
        </motion.header>

        <div className="grid gap-8 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.06,
                ease: 'easeOut',
              }}
            >
              <SkillCategoryCard
                category={category}
                selectedSkillName={selectedSkills[category.id] ?? category.skills[0].name}
                reducedMotion={shouldReduceMotion}
                onSelectSkill={(skillName) => {
                  setSelectedSkills((current) => ({ ...current, [category.id]: skillName }));
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.section
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.55, ease: 'easeOut' }}
          className="relative mt-16 overflow-hidden rounded-[1.75rem] border border-primary/20 bg-gradient-to-br from-primary/10 via-white to-secondary/10 p-8 shadow-xl dark:via-slate-950 dark:from-primary/10 dark:to-secondary/10 sm:p-12"
        >
          <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative flex flex-col items-center gap-7 text-center md:flex-row md:text-left">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-primary/20 bg-white/70 text-primary shadow-lg backdrop-blur-md dark:bg-slate-900/70 dark:text-blue-300">
              <BookOpen aria-hidden="true" size={30} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-black text-gray-900 dark:text-white sm:text-3xl">
                Continuous Evolution
              </h2>
              <p className="mt-3 max-w-3xl text-sm font-medium leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
                I dedicate time every week to system design, new libraries, technical documentation, and practical projects—because a useful engineering toolkit should keep evolving.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/25 bg-secondary/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
              Always learning
              <ArrowUpRight aria-hidden="true" size={15} />
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
