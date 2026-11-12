'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Braces,
  Database,
  LayoutTemplate,
  Monitor,
  MousePointer2,
  Network,
  PenTool,
  ServerCog,
  Sparkles,
} from 'lucide-react';

type ExpertiseIconProps = {
  reducedMotion?: boolean;
};

type IconStageProps = ExpertiseIconProps & {
  children: ReactNode;
  gradient: string;
  glow: string;
  orbit: string;
};

function IconStage({ children, gradient, glow, orbit, reducedMotion }: IconStageProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative grid h-24 w-24 shrink-0 place-items-center rounded-[1.75rem] border bg-gradient-to-br ${gradient} shadow-2xl transition-transform duration-500 group-hover:scale-[1.04]`}
    >
      <div className={`pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] blur-2xl transition-opacity duration-500 ${glow}`} />
      <motion.div
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className={`pointer-events-none absolute -inset-2 rounded-[2rem] border border-dashed ${orbit}`}
      />
      <div className="pointer-events-none absolute inset-[1px] rounded-[1.65rem] bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.28)]" />
      {children}
    </div>
  );
}

export function FullStackIcon({ reducedMotion }: ExpertiseIconProps) {
  return (
    <IconStage
      reducedMotion={reducedMotion}
      gradient="from-blue-600/95 via-indigo-600/95 to-cyan-500/90 border-blue-300/35"
      glow="bg-blue-500/35 opacity-60 group-hover:opacity-90"
      orbit="border-cyan-300/45"
    >
      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -2, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 text-white drop-shadow-lg"
      >
        <Monitor size={43} strokeWidth={1.65} />
        <Braces className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 text-cyan-100" size={18} strokeWidth={2.2} />
      </motion.div>

      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -4, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        className="absolute -bottom-1 -right-1 z-20 rounded-xl border border-emerald-200/40 bg-emerald-500 p-2 text-white shadow-[0_8px_22px_rgba(16,185,129,0.45)]"
      >
        <Database size={18} strokeWidth={2} />
      </motion.div>

      {!reducedMotion && (
        <motion.span
          animate={{ x: [0, 42, 42, 0], y: [0, 0, 42, 42], opacity: [0.2, 1, 1, 0.2] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-3 top-3 h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(165,243,252,1)]"
        />
      )}
    </IconStage>
  );
}

export function ScalableSystemsIcon({ reducedMotion }: ExpertiseIconProps) {
  const nodes = [
    { className: 'left-3 top-3', delay: 0 },
    { className: 'right-3 top-3', delay: 0.45 },
    { className: 'bottom-3 left-1/2 -translate-x-1/2', delay: 0.9 },
  ];

  return (
    <IconStage
      reducedMotion={reducedMotion}
      gradient="from-emerald-600/95 via-teal-600/95 to-cyan-500/90 border-emerald-300/35"
      glow="bg-emerald-500/35 opacity-60 group-hover:opacity-90"
      orbit="border-emerald-200/45"
    >
      <svg className="pointer-events-none absolute inset-2 h-20 w-20" viewBox="0 0 80 80" fill="none">
        <defs>
          <linearGradient id="expertise-network-gradient" x1="10" y1="10" x2="70" y2="70">
            <stop stopColor="#a7f3d0" />
            <stop offset="1" stopColor="#67e8f9" />
          </linearGradient>
        </defs>
        <motion.path
          d="M20 20L40 40L60 20M40 40V62"
          stroke="url(#expertise-network-gradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={false}
          animate={reducedMotion ? { pathLength: 1, opacity: 0.75 } : { pathLength: [0.2, 1, 1], opacity: [0.35, 1, 0.55] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>

      {nodes.map((node) => (
        <motion.span
          key={node.className}
          animate={reducedMotion ? undefined : { scale: [1, 1.45, 1], opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: node.delay }}
          className={`absolute h-3 w-3 rounded-full border border-white/60 bg-cyan-200 shadow-[0_0_12px_rgba(103,232,249,0.9)] ${node.className}`}
        />
      ))}

      <motion.div
        animate={reducedMotion ? undefined : { scale: [1, 1.06, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 rounded-2xl border border-white/25 bg-slate-950/30 p-3 text-white shadow-xl backdrop-blur-sm"
      >
        <ServerCog size={30} strokeWidth={1.8} />
      </motion.div>
      <Network className="absolute bottom-2 right-2 text-emerald-100" size={17} />
      <Activity className="absolute left-2 top-1/2 text-cyan-100" size={16} />
    </IconStage>
  );
}

export function CreativeDesignIcon({ reducedMotion }: ExpertiseIconProps) {
  return (
    <IconStage
      reducedMotion={reducedMotion}
      gradient="from-violet-600/95 via-fuchsia-600/95 to-orange-400/90 border-fuchsia-300/35"
      glow="bg-fuchsia-500/35 opacity-60 group-hover:opacity-90"
      orbit="border-orange-200/50"
    >
      <motion.svg className="pointer-events-none absolute inset-1 h-[5.5rem] w-[5.5rem]" viewBox="0 0 88 88" fill="none">
        <motion.path
          d="M15 64C27 31 48 72 72 25"
          stroke="#fde68a"
          strokeWidth="1.6"
          strokeLinecap="round"
          initial={false}
          animate={reducedMotion ? { pathLength: 1, opacity: 0.75 } : { pathLength: [0, 1, 1], opacity: [0.2, 1, 0.45] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.svg>

      <motion.div
        animate={reducedMotion ? undefined : { rotate: [0, -3, 3, 0], y: [0, -2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 rounded-2xl border border-white/25 bg-slate-950/25 p-3 text-white shadow-xl backdrop-blur-sm"
      >
        <LayoutTemplate size={30} strokeWidth={1.7} />
        <PenTool className="absolute -bottom-2 -left-2 rounded-lg bg-orange-400 p-1 text-white shadow-lg" size={20} strokeWidth={2} />
      </motion.div>

      <motion.div
        animate={reducedMotion ? undefined : { x: [-7, 7, 2, -7], y: [7, -4, 5, 7], rotate: [-8, 3, -2, -8] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-2 right-2 z-20 text-white drop-shadow-lg"
      >
        <MousePointer2 size={20} fill="rgba(255,255,255,0.22)" />
      </motion.div>

      <motion.div
        animate={reducedMotion ? undefined : { scale: [0.75, 1.25, 0.75], rotate: [0, 25, 0], opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 2.3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-2 top-2 text-yellow-200"
      >
        <Sparkles size={18} />
      </motion.div>
    </IconStage>
  );
}
