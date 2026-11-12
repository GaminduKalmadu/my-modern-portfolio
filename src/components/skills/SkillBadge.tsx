'use client';

import { motion } from 'framer-motion';
import type { SkillDefinition } from '@/data/skills';

type SkillBadgeProps = {
  skill: SkillDefinition;
  categoryId: string;
  selected: boolean;
  reducedMotion: boolean;
  onSelect: () => void;
};

export default function SkillBadge({
  skill,
  categoryId,
  selected,
  reducedMotion,
  onSelect,
}: SkillBadgeProps) {
  const SkillIcon = skill.icon;

  return (
    <motion.button
      type="button"
      aria-label={`Show ${skill.name} skill details`}
      aria-pressed={selected}
      onClick={onSelect}
      whileHover={reducedMotion ? undefined : { y: -2, scale: 1.025 }}
      whileTap={reducedMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="relative flex min-h-[4.5rem] w-full items-center gap-3 overflow-hidden rounded-2xl border border-slate-200/90 bg-white/70 p-3 text-left shadow-sm outline-none transition-[border-color,background-color,box-shadow] duration-200 hover:border-slate-300 hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:border-slate-800 dark:bg-slate-950/45 dark:hover:border-slate-700 dark:focus-visible:ring-offset-slate-950"
      style={
        selected
          ? {
              borderColor: `${skill.brandColor}80`,
              backgroundColor: `${skill.brandColor}12`,
              boxShadow: `0 12px 30px -20px ${skill.brandColor}aa`,
            }
          : undefined
      }
    >
      <span
        className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/70 bg-white shadow-sm dark:border-slate-700/80 dark:bg-slate-900"
        style={{ boxShadow: selected ? `0 8px 22px -10px ${skill.brandColor}aa` : undefined }}
      >
        <SkillIcon
          aria-hidden="true"
          size={25}
          className={skill.monochrome ? 'text-slate-900 dark:text-white' : undefined}
          style={skill.monochrome ? undefined : { color: skill.brandColor }}
        />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-extrabold text-slate-800 dark:text-slate-100">
          {skill.name}
        </span>
        <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
          {selected ? 'Selected' : 'View skill'}
        </span>
      </span>

      {selected && (
        <motion.span
          layoutId={`selected-skill-${categoryId}`}
          className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
          style={{ backgroundColor: skill.brandColor }}
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
        />
      )}
    </motion.button>
  );
}
