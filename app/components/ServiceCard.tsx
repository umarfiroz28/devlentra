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
      whileHover={prefersReducedMotion ? undefined : { y: -10, rotateX: 2, rotateY: -2 }}
      className="apple-card group min-h-[330px] rounded-[32px] p-7 transition duration-300 hover:border-[#0071E3]/30 hover:shadow-[0_34px_80px_rgba(0,113,227,0.12)]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${service.accent} text-[#0071E3] shadow-sm`}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-8 text-2xl font-semibold tracking-[-0.02em] text-[#1D1D1F]">
        {service.title}
      </h3>
      <p className="mt-4 text-[15px] leading-7 text-[#6E6E73]">{service.description}</p>
      <a
        href="#contact"
        className="mt-7 inline-flex items-center gap-1 text-sm font-semibold text-[#0071E3] transition-colors hover:text-[#0077ED]"
      >
        Explore service
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </motion.article>
  );
}
