"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type AnimatedBadgeProps = {
  label: string;
  icon: LucideIcon;
  index?: number;
};

export function AnimatedBadge({ label, icon: Icon, index = 0 }: AnimatedBadgeProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-slate-200 shadow-[0_0_30px_rgba(56,189,248,0.08)] backdrop-blur"
    >
      <Icon className="h-4 w-4 text-cyan-200" aria-hidden="true" />
      {label}
    </motion.div>
  );
}
