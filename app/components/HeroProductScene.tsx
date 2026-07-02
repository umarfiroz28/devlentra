"use client";

import {
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
    className: "left-2 top-12 w-[230px] -translate-z-8",
  },
  {
    title: "Shopify Store",
    detail: "Starts at Rs 1,699",
    icon: ShoppingBag,
    className: "right-0 top-8 w-[230px]",
  },
  {
    title: "Data Insights",
    detail: "Dashboards and ML",
    icon: ChartNoAxesCombined,
    className: "-left-1 bottom-20 w-[238px]",
  },
  {
    title: "API Layer",
    detail: "Java, Node, Go",
    icon: Braces,
    className: "right-5 bottom-24 w-[218px]",
  },
  {
    title: "React Studio",
    detail: "Starts at Rs 1,799",
    icon: Code2,
    className: "left-1/2 top-0 w-[220px] -translate-x-1/2",
  },
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
      className="surface-3d relative mx-auto mt-14 h-[430px] w-full max-w-[1060px] sm:h-[520px] lg:mt-18"
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
        className="absolute inset-x-4 top-14 mx-auto h-[330px] max-w-[760px] rounded-[36px] bg-white shadow-[0_34px_110px_rgba(0,0,0,0.18)] ring-1 ring-black/8 sm:top-20 sm:h-[390px]"
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
            {["WordPress", "Shopify", "React", "AI/ML"].map((item, index) => (
              <div
                key={item}
                className="mb-3 flex items-center justify-between rounded-2xl bg-[#F5F5F7] px-4 py-3 text-sm text-[#1D1D1F]"
              >
                <span>{item}</span>
                <span className="h-2 w-12 rounded-full bg-[#0071E3]/[.18]">
                  <span
                    className="block h-2 rounded-full bg-[#0071E3]"
                    style={{ width: `${42 + index * 13}%` }}
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
                    Umar Firoz
                  </p>
                </div>
                <span className="rounded-full bg-[#EAF3FF] px-3 py-1 text-sm text-[#0066CC]">
                  Ready
                </span>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[82, 64, 91].map((value, index) => (
                  <div key={value} className="rounded-3xl bg-[#F5F5F7] p-4">
                    <span className="block text-2xl font-bold tracking-[-0.03em] text-[#1D1D1F]">
                      {value}%
                    </span>
                    <span className="mt-1 block text-xs text-[#6E6E73]">
                      {["React", "AWS", "API"][index]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 h-28 rounded-[24px] bg-[linear-gradient(135deg,#F5F5F7,#EAF3FF)] p-4">
                <div className="flex h-full items-end gap-2">
                  {[42, 68, 56, 86, 72, 94, 78].map((height, index) => (
                    <span
                      key={`${height}-${index}`}
                      className="flex-1 rounded-t-xl bg-[#0071E3]"
                      style={{ height: `${height}%`, opacity: 0.42 + index * 0.06 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
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
