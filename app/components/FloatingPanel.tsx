"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type FloatingPanelProps = {
  title: string;
  detail: string;
  icon: LucideIcon;
  className?: string;
  delay?: number;
};

export function FloatingPanel({
  title,
  detail,
  icon: Icon,
  className = "",
  delay = 0,
}: FloatingPanelProps) {
  return (
    <motion.div
      className={`absolute z-30 hidden rounded-[22px] border border-white/80 bg-white/94 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.14)] md:block ${className}`}
      initial={{ opacity: 0, y: 24, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      whileHover={{
        y: -8,
        scale: 1.035,
        boxShadow: "0 24px 64px rgba(0,113,227,0.20)",
        transition: { type: "spring", stiffness: 340, damping: 26 },
      }}
      transition={{ delay, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F5F5F7] text-[#0071E3] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-sm font-semibold leading-tight text-[#1D1D1F]">
            {title}
          </span>
          <span className="mt-1 block text-xs leading-tight text-[#6E6E73]">
            {detail}
          </span>
        </span>
      </div>
    </motion.div>
  );
}
