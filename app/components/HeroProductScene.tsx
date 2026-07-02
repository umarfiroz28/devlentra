"use client";

import {
  Activity,
  Bot,
  Braces,
  ChartNoAxesCombined,
  Code2,
  Layers3,
  ShoppingBag,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { FloatingPanel } from "./FloatingPanel";

const panels = [
  {
    title: "GenAI Workflow",
    detail: "RAG, bots, automation",
    icon: Bot,
    className: "left-0 top-10 w-[230px]",
  },
  {
    title: "Shopify Store",
    detail: "Starts at Rs 1,699",
    icon: ShoppingBag,
    className: "right-0 top-6 w-[230px]",
  },
  {
    title: "Data Insights",
    detail: "Dashboards and ML",
    icon: ChartNoAxesCombined,
    className: "left-2 bottom-[72px] w-[238px]",
  },
  {
    title: "API Layer",
    detail: "Java, Node, Go",
    icon: Braces,
    className: "right-3 bottom-20 w-[218px]",
  },
  {
    title: "React Studio",
    detail: "Starts at Rs 1,799",
    icon: Code2,
    className: "left-1/2 top-0 w-[220px] -translate-x-1/2",
  },
];

const stackRows = [
  ["React UI", "96"],
  ["Spring API", "88"],
  ["AWS Deploy", "91"],
  ["AI Flow", "84"],
];

export function HeroProductScene() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { damping: 30, stiffness: 130 });
  const springY = useSpring(pointerY, { damping: 30, stiffness: 130 });
  const rotateY = useTransform(springX, [-0.5, 0.5], reduceMotion ? [0, 0] : [-7, 7]);
  const rotateX = useTransform(springY, [-0.5, 0.5], reduceMotion ? [0, 0] : [5, -5]);

  return (
    <div
      className="surface-3d relative mx-auto h-[430px] w-full max-w-[680px] sm:h-[500px] lg:mx-0 lg:ml-auto lg:h-[560px] lg:max-w-none"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
        pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
      aria-label="Interactive product scene showing websites, AI, data, APIs, and code"
    >
      <motion.div
        className="absolute right-8 top-6 hidden h-[72%] w-[78%] rounded-[36px] border border-white/70 bg-white/34 shadow-[0_28px_90px_rgba(0,0,0,0.08)] backdrop-blur-xl lg:block"
        initial={{ opacity: 0, x: 40, rotate: 2 }}
        animate={{ opacity: 1, x: 0, rotate: -3 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-6 right-0 hidden h-[56%] w-[56%] rounded-[32px] border border-white/70 bg-[#FBFBFD]/70 shadow-[0_20px_70px_rgba(0,0,0,0.07)] backdrop-blur-xl lg:block"
        initial={{ opacity: 0, x: 30, y: 30, rotate: -4 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 4 }}
        transition={{ delay: 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute inset-x-2 top-12 mx-auto h-[330px] max-w-[650px] rounded-[34px] bg-white shadow-[0_34px_110px_rgba(0,0,0,0.18)] ring-1 ring-black/8 sm:top-[70px] sm:h-[390px] lg:inset-x-auto lg:right-8 lg:top-20 lg:h-[390px] lg:w-[580px]"
        initial={{ opacity: 0, y: 42, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="flex h-11 items-center gap-2 border-b border-[#E8E8ED] px-5">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <span className="ml-4 h-5 flex-1 rounded-full bg-[#F5F5F7]" />
        </div>
        <div className="grid h-[calc(100%-44px)] grid-cols-1 overflow-hidden rounded-b-[36px] bg-[#FBFBFD] md:grid-cols-[0.72fr_1.28fr]">
          <div className="hidden border-r border-[#E8E8ED] bg-white p-5 md:block">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF3FF] text-[#0071E3]">
                <Layers3 className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-[#1D1D1F]">
                  Devlentra Hub
                </span>
                <span className="apple-caption">Portfolio and services</span>
              </span>
            </div>
            {stackRows.map(([item, value], index) => (
              <div
                key={item}
                className="mb-3 flex items-center justify-between rounded-2xl bg-[#F5F5F7] px-4 py-3 text-sm text-[#1D1D1F]"
              >
                <span>{item}</span>
                <span className="h-2 w-12 rounded-full bg-[#0071E3]/[.18]">
                  <motion.span
                    className="block h-2 rounded-full bg-[#0071E3]"
                    initial={{ width: "26%" }}
                    animate={{ width: `${value}%` }}
                    transition={{ delay: 0.45 + index * 0.08, duration: 0.9 }}
                  />
                </span>
              </div>
            ))}
          </div>
          <div className="relative p-5 sm:p-7">
            <div className="rounded-[28px] bg-white p-5 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase text-[#86868B]">
                    Engineering stack
                  </p>
                  <p className="mt-1 text-2xl font-bold tracking-[-0.03em] text-[#1D1D1F]">
                    Devlentra
                  </p>
                </div>
                <span className="rounded-full bg-[#EAF3FF] px-3 py-1 text-sm text-[#0066CC]">
                  Ready
                </span>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[82, 64, 91].map((value, index) => (
                  <div key={value} className="rounded-3xl bg-[#F5F5F7] p-4">
                    <motion.span
                      className="block text-2xl font-bold tracking-[-0.03em] text-[#1D1D1F]"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55 + index * 0.1, duration: 0.48 }}
                    >
                      {value}%
                    </motion.span>
                    <span className="mt-1 block text-xs text-[#6E6E73]">
                      {["React", "AWS", "API"][index]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 h-28 rounded-[24px] bg-[linear-gradient(135deg,#F5F5F7,#EAF3FF)] p-4">
                <div className="flex h-full items-end gap-2">
                  {[42, 68, 56, 86, 72, 94, 78].map((height, index) => (
                    <motion.span
                      key={`${height}-${index}`}
                      className="flex-1 rounded-t-xl bg-[#0071E3]"
                      initial={{ height: "18%" }}
                      animate={{ height: `${height}%` }}
                      transition={{
                        delay: 0.35 + index * 0.06,
                        duration: 0.76,
                        repeat: reduceMotion ? 0 : Infinity,
                        repeatType: "mirror",
                        repeatDelay: 2.4,
                      }}
                      style={{ opacity: 0.42 + index * 0.06 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-3 left-4 right-4 rounded-[24px] border border-white/70 bg-white/88 p-3 shadow-[0_22px_70px_rgba(0,0,0,0.14)] backdrop-blur-2xl sm:left-auto sm:right-6 sm:w-[320px] lg:bottom-[54px] lg:right-2"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EAF3FF] text-[#0071E3]">
              <Activity className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#1D1D1F]">New project inquiry</p>
              <p className="mt-1 text-xs text-[#6E6E73]">WordPress starter + SEO setup</p>
            </div>
          </div>
          <span className="rounded-full bg-[#F5F5F7] px-3 py-1 text-xs text-[#0066CC]">
            Rs 1,499+
          </span>
        </div>
      </motion.div>

      <motion.div
        className="absolute left-4 top-[56%] hidden w-[250px] rounded-[22px] border border-white/70 bg-[#1D1D1F] p-4 text-white shadow-[0_24px_70px_rgba(0,0,0,0.2)] md:block lg:left-0"
        initial={{ opacity: 0, x: -30, rotateY: -10 }}
        animate={{ opacity: 1, x: 0, rotateY: 0 }}
        transition={{ delay: 0.72, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/55">api/status</span>
          <span className="h-2 w-2 rounded-full bg-[#30D158]" />
        </div>
        <div className="mt-4 space-y-2">
          {["deploy --prod", "cache: redis", "latency: optimized"].map((line) => (
            <p key={line} className="font-mono text-xs text-white/72">
              <span className="text-[#7DBBFF]">$</span> {line}
            </p>
          ))}
        </div>
      </motion.div>

      {panels.map((panel, index) => (
        <FloatingPanel
          key={panel.title}
          title={panel.title}
          detail={panel.detail}
          icon={panel.icon}
          className={panel.className}
          delay={0.2 + index * 0.08}
        />
      ))}
    </div>
  );
}
