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
      className="inline-flex items-center gap-2 rounded-full border border-[#D2D2D7] bg-white/80 px-4 py-2 text-sm font-medium text-[#1D1D1F] shadow-[0_12px_30px_rgba(29,29,31,0.06)] backdrop-blur"
    >
      <Icon className="h-4 w-4 text-[#0071E3]" aria-hidden="true" />
      {label}
    </motion.div>
  );
}
