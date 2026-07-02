"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Service } from "../data/site";

type ServiceCardProps = {
  service: Service;
  index: number;
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = service.icon;

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
      whileHover={prefersReducedMotion ? undefined : { y: -6 }}
      className="group rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.22)] backdrop-blur transition-colors hover:border-cyan-200/45 hover:bg-white/[0.07]"
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${service.accent} text-slate-950 shadow-[0_0_34px_rgba(34,211,238,0.18)]`}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-6 text-lg font-semibold text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
      <a
        href="#contact"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors hover:text-white"
      >
        Explore service
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </motion.article>
  );
}
