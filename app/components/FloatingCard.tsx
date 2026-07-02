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
      className="group rounded-[22px] border border-[#D2D2D7]/80 bg-white/90 p-4 shadow-[0_24px_60px_rgba(29,29,31,0.12)] backdrop-blur-xl transition hover:border-[#0071E3]/30"
    >
      <div className="flex items-center gap-3">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-[#0071E3] shadow-sm`}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-sm font-semibold text-[#1D1D1F]">{item.title}</h3>
          <p className="mt-1 text-xs leading-5 text-[#6E6E73]">{item.detail}</p>
        </div>
      </div>
    </motion.article>
  );
}
