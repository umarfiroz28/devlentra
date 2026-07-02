"use client";

import { motion, useReducedMotion } from "framer-motion";
import { processSteps } from "../data/site";
import { SectionHeading } from "./SectionHeading";

export function ProcessSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="process" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Process"
          title="How We Turn Ideas Into Products"
          description="A focused delivery path from business clarity to a polished website, AI tool, dashboard, or full-stack product."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.42, delay: index * 0.05 }}
                className="relative rounded-lg border border-white/10 bg-white/[0.045] p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-100">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
