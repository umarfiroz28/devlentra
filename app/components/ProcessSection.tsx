"use client";

import { motion, useReducedMotion } from "framer-motion";
import { processSteps } from "../data/site";
import { SectionHeading } from "./SectionHeading";

export function ProcessSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="process" className="bg-[#F5F5F7] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Process"
          title="Designed with Clarity. Built with Engineering."
          description="A simple delivery model that keeps strategy, design, development, performance, and launch support connected."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.42, delay: index * 0.05 }}
                className="apple-card relative rounded-[30px] p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-semibold text-[#D2D2D7]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF3FF] text-[#0071E3]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-semibold text-[#1D1D1F]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6E6E73]">{step.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
