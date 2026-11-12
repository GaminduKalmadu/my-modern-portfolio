'use client';

import { AnimatePresence, motion } from 'framer-motion';
import type { SkillCategoryDefinition } from '@/data/skills';
import { getExperienceLabel } from '@/data/skills';
import SkillBadge from './SkillBadge';

type SkillCategoryCardProps = {
  category: SkillCategoryDefinition;
  selectedSkillName: string;
  reducedMotion: boolean;
  onSelectSkill: (skillName: string) => void;
};

export default function SkillCategoryCard({
  category,
  selectedSkillName,
  reducedMotion,
  onSelectSkill,
}: SkillCategoryCardProps) {
  const CategoryIcon = category.icon;
  const activeSkill = category.skills.find((skill) => skill.name === selectedSkillName) ?? category.skills[0];
  const ActiveIcon = activeSkill.icon;

  return (
    <article className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white/80 p-5 shadow-[0_20px_55px_-38px_rgba(15,23,42,0.55)] backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-slate-300 hover:shadow-[0_28px_65px_-38px_rgba(15,23,42,0.65)] dark:border-slate-800/90 dark:bg-slate-900/60 dark:hover:border-slate-700 sm:p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full blur-3xl"
        style={{ backgroundColor: category.accentSoft }}
      />
      <div className={`absolute inset-x-8 top-0 h-px bg-gradient-to-r ${category.accentGradient}`} />

      <header className="relative mb-7 flex items-start gap-4 border-b border-slate-200/80 pb-6 dark:border-slate-800/80">
        <div
          className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border shadow-sm"
          style={{
            color: category.accentColor,
            backgroundColor: category.accentSoft,
            borderColor: `${category.accentColor}33`,
          }}
        >
          <CategoryIcon aria-hidden="true" size={24} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white sm:text-2xl">
              {category.title}
            </h2>
            <span className="rounded-full border border-slate-200 bg-slate-100/80 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-500 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-400">
              {category.skills.length} skills
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            {category.description}
          </p>
        </div>
      </header>

      <div className="relative grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
        {category.skills.map((skill) => (
          <SkillBadge
            key={skill.name}
            skill={skill}
            categoryId={category.id}
            selected={skill.name === activeSkill.name}
            reducedMotion={reducedMotion}
            onSelect={() => onSelectSkill(skill.name)}
          />
        ))}
      </div>

      <div className="relative mt-6 min-h-[8.5rem]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeSkill.name}
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: reducedMotion ? 0.01 : 0.2, ease: 'easeOut' }}
            className="absolute inset-0 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/45"
            style={{ borderColor: `${activeSkill.brandColor}35` }}
          >
            <div className="flex items-center gap-3">
              <div
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white shadow-sm dark:bg-slate-900"
                style={{ boxShadow: `0 8px 22px -12px ${activeSkill.brandColor}` }}
              >
                <ActiveIcon
                  aria-hidden="true"
                  size={24}
                  className={activeSkill.monochrome ? 'text-slate-900 dark:text-white' : undefined}
                  style={activeSkill.monochrome ? undefined : { color: activeSkill.brandColor }}
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-extrabold text-slate-900 dark:text-white">
                  {activeSkill.name}
                </p>
                <p className="mt-0.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {getExperienceLabel(activeSkill.level)} practical confidence
                </p>
              </div>
              <span className="font-mono text-sm font-black" style={{ color: activeSkill.brandColor }}>
                {activeSkill.level}%
              </span>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
              <motion.div
                initial={reducedMotion ? { width: `${activeSkill.level}%` } : { width: 0 }}
                animate={{ width: `${activeSkill.level}%` }}
                transition={{ duration: reducedMotion ? 0.01 : 0.55, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${activeSkill.brandColor}, ${category.accentColor})`,
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </article>
  );
}
