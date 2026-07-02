"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { FloatingCardItem } from "../data/site";

type FloatingCardProps = {
  item: FloatingCardItem;
  index: number;
};

export function FloatingCard({ item, index }: FloatingCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = item.icon;
  const yOffset = index % 2 === 0 ? -8 : 8;

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
      animate={
        prefersReducedMotion
          ? undefined
          : { opacity: 1, y: [0, yOffset, 0], scale: 1 }
      }
      transition={{
        opacity: { duration: 0.45, delay: index * 0.06 },
        scale: { duration: 0.45, delay: index * 0.06 },
        y: {
          duration: 4.8 + index * 0.18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: index * 0.08,
        },
      }}
      whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.02 }}
      className="group rounded-lg border border-white/10 bg-slate-950/70 p-4 shadow-[0_18px_80px_rgba(14,165,233,0.12)] backdrop-blur-xl transition-colors hover:border-cyan-300/40"
    >
      <div className="flex items-center gap-3">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${item.accent} text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.22)]`}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-sm font-semibold text-white">{item.title}</h3>
          <p className="mt-1 text-xs leading-5 text-slate-400">{item.detail}</p>
        </div>
      </div>
    </motion.article>
  );
}
