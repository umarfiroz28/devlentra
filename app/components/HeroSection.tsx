"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { AnimatedBadge } from "./AnimatedBadge";
import { DeviceMockup } from "./DeviceMockup";
import { FloatingCard } from "./FloatingCard";
import { GradientBlob } from "./GradientBlob";
import { floatingCards, trustBadges } from "../data/site";

function Hero3DVisual() {
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 110,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 110,
    damping: 18,
  });

  return (
    <div
      className="surface-3d relative mx-auto min-h-[560px] w-full max-w-[680px]"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <GradientBlob className="-left-10 top-8 h-72 w-72 opacity-90" />
      <GradientBlob className="bottom-6 right-0 h-80 w-80 opacity-80" />
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 38, rotateX: 10 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={prefersReducedMotion ? undefined : { rotateX, rotateY }}
        className="absolute left-1/2 top-20 w-[84%] -translate-x-1/2"
      >
        <DeviceMockup />
      </motion.div>
      <div className="absolute inset-0">
        {floatingCards.map((item, index) => {
          const positions = [
            "left-0 top-10 w-56",
            "right-2 top-4 w-56",
            "left-6 bottom-28 w-60",
            "right-0 bottom-36 w-56",
            "left-20 top-[47%] w-52",
            "right-20 bottom-8 w-56",
          ];
          return (
            <div
              key={item.title}
              className={`absolute hidden sm:block ${positions[index]}`}
              style={{ transform: `translateZ(${60 + index * 18}px)` }}
            >
              <FloatingCard item={item} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F5F7_58%,#FFFFFF_100%)]" />
      <GradientBlob className="left-[8%] top-24 h-80 w-80 opacity-70" />
      <GradientBlob className="right-[4%] top-28 h-96 w-96 opacity-80" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.94fr_1.06fr]">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative z-10 max-w-3xl"
        >
          <p className="inline-flex rounded-full border border-[#D2D2D7] bg-white/75 px-4 py-2 text-sm font-medium text-[#6E6E73] shadow-sm backdrop-blur">
            India-based team. Global-quality delivery.
          </p>
          <h1 className="text-balance mt-7 text-[42px] font-semibold leading-[0.98] tracking-[-0.035em] text-[#1D1D1F] sm:text-[58px] lg:text-[82px]">
            Premium Websites, AI Tools & Full-Stack Products.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6E6E73] sm:text-xl">
            We build high-performing websites, ecommerce stores, AI automations,
            dashboards, and full-stack applications for Indian and global businesses.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              aria-label="Start a project with YourTech Studio"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0071E3] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(0,113,227,0.22)] transition hover:bg-[#0077ED] focus:outline-none focus:ring-2 focus:ring-[#0071E3] focus:ring-offset-2 focus:ring-offset-[#F5F5F7]"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#services"
              aria-label="Explore technology services"
              className="inline-flex items-center justify-center gap-1 rounded-full border border-[#D2D2D7] bg-white px-7 py-3.5 text-sm font-semibold text-[#1D1D1F] transition hover:bg-[#F5F5F7] focus:outline-none focus:ring-2 focus:ring-[#0071E3] focus:ring-offset-2 focus:ring-offset-[#F5F5F7]"
            >
              Explore Services
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 border-y border-[#E8E8ED] py-6 sm:max-w-xl">
            {[
              ["10", "core services"],
              ["Global", "delivery mindset"],
              ["Fast", "business outcomes"],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="text-2xl font-semibold tracking-tight text-[#1D1D1F]">
                  {value}
                </div>
                <div className="mt-1 text-xs font-medium text-[#86868B]">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <Hero3DVisual />
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap gap-3">
        {trustBadges.map((badge, index) => (
          <AnimatedBadge key={badge.label} label={badge.label} icon={badge.icon} index={index} />
        ))}
      </div>
    </section>
  );
}
