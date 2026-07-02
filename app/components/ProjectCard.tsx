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
      className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] transition-colors hover:border-cyan-200/45 hover:bg-white/[0.07]"
    >
      <div className="relative h-52 border-b border-white/10 bg-slate-950">
        <div className={`absolute inset-x-8 top-8 h-20 rounded-lg bg-gradient-to-r ${project.accent} opacity-90 blur-2xl`} />
        <div className="absolute inset-5 rounded-lg border border-white/10 bg-slate-900/80 p-4 shadow-2xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          </div>
          <div className="mt-6 grid gap-3">
            <div className={`h-4 w-3/4 rounded-full bg-gradient-to-r ${project.accent}`} />
            <div className="h-3 w-full rounded-full bg-white/10" />
            <div className="h-3 w-2/3 rounded-full bg-white/10" />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="h-14 rounded-lg border border-white/10 bg-white/[0.05]" />
            <div className="h-14 rounded-lg border border-white/10 bg-white/[0.05]" />
            <div className="h-14 rounded-lg border border-white/10 bg-white/[0.05]" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors hover:text-white"
        >
          View case study
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}
