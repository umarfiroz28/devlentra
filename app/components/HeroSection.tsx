"use client";

import { ArrowRight, PlayCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedBadge } from "./AnimatedBadge";
import { FloatingCard } from "./FloatingCard";
import { floatingCards, trustBadges } from "../data/site";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_22%_18%,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(139,92,246,0.18),transparent_30%),linear-gradient(180deg,#020617_0%,#050816_56%,#030712_100%)]" />
      <div className="absolute inset-x-0 top-16 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
            India-based technology team for global-quality delivery
          </p>
          <h1 className="mt-7 text-4xl font-semibold leading-[1.04] text-white sm:text-5xl lg:text-6xl">
            Premium Websites, AI Solutions & Full-Stack Products for Modern Businesses.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            We design and build high-performing websites, ecommerce stores, AI-powered tools,
            data products, and full-stack applications for Indian and global clients.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_18px_60px_rgba(59,130,246,0.28)] transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-200/60 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <PlayCircle className="h-4 w-4" aria-hidden="true" />
              View Services
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 border-y border-white/10 py-6 sm:max-w-xl">
            {[
              ["12+", "service lines"],
              ["India", "global clients"],
              ["Fast", "prototype-ready"],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="text-2xl font-semibold text-white">{value}</div>
                <div className="mt-1 text-xs text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative min-h-[540px] lg:min-h-[620px]" aria-label="Technology service cards">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_42%,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_68%_70%,rgba(167,139,250,0.16),transparent_30%)]" />
          <div className="absolute left-6 right-6 top-6 rounded-lg border border-white/10 bg-slate-950/80 p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">Delivery OS</span>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-200">
                Live pipeline
              </span>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400"
                initial={prefersReducedMotion ? false : { width: "20%" }}
                animate={prefersReducedMotion ? undefined : { width: ["20%", "78%", "54%"] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
              />
            </div>
          </div>
          <div className="relative grid h-full gap-4 px-5 pb-6 pt-28 sm:grid-cols-2">
            {floatingCards.map((item, index) => (
              <FloatingCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap gap-3">
        {trustBadges.map((badge, index) => (
          <AnimatedBadge key={badge.label} label={badge.label} icon={badge.icon} index={index} />
        ))}
      </div>
    </section>
  );
}
