"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "../data/site";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={prefersReducedMotion ? undefined : { y: -10, rotateX: 1.4, rotateY: -1.4 }}
      className="apple-card group overflow-hidden rounded-[34px] transition duration-300 hover:border-[#0071E3]/30"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative h-64 border-b border-[#E8E8ED] bg-[linear-gradient(135deg,#F7F7F8,#E8E4DD,#FDFDFD)]">
        <div className={`absolute inset-x-8 top-8 h-24 rounded-full bg-gradient-to-r ${project.accent} opacity-50 blur-3xl`} />
        <div className="absolute inset-6 rounded-[28px] border border-[#D2D2D7]/70 bg-white/85 p-4 shadow-[0_22px_60px_rgba(29,29,31,0.12)] backdrop-blur">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          </div>
          <div className="mt-6 grid gap-3">
            <div className={`h-4 w-3/4 rounded-full bg-gradient-to-r ${project.accent}`} />
            <div className="h-3 w-full rounded-full bg-[#E8E8ED]" />
            <div className="h-3 w-2/3 rounded-full bg-[#E8E8ED]" />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="h-16 rounded-2xl border border-[#E8E8ED] bg-[#F5F5F7]" />
            <div className="h-16 rounded-2xl border border-[#E8E8ED] bg-[#F5F5F7]" />
            <div className="h-16 rounded-2xl border border-[#E8E8ED] bg-[#F5F5F7]" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#D2D2D7] bg-[#F5F5F7] px-3 py-1 text-xs font-medium text-[#6E6E73]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-5 text-2xl font-semibold text-[#1D1D1F]">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#6E6E73]">{project.description}</p>
        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#0071E3] transition-colors hover:text-[#0077ED]"
        >
          View case study
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}
