"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Bot, DatabaseZap, ShoppingBag } from "lucide-react";
import { showcaseStories, type ShowcaseStory } from "../data/site";
import { SectionHeading } from "./SectionHeading";

function StoryVisual({ story }: { story: ShowcaseStory }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0.15, 0.55, 0.9], [0.94, 1.02, 0.98]);
  const polishedOpacity = useTransform(scrollYProgress, [0.2, 0.55], [0.08, 1]);
  const rawOpacity = useTransform(scrollYProgress, [0.2, 0.6], [1, 0.1]);
  const Icon =
    story.visual === "commerce" ? ShoppingBag : story.visual === "ai" ? Bot : DatabaseZap;

  return (
    <div ref={ref} className="relative">
      {/* Future frame sequence mount point:
          public/frames/shopify/frame_0001.jpg
          public/frames/shopify/frame_0002.jpg
          public/frames/ai/frame_0001.jpg
          public/frames/data/frame_0001.jpg
          Replace the simulated layers below with an image/canvas sequence reader. */}
      <motion.div
        style={prefersReducedMotion ? undefined : { scale }}
        className="relative min-h-[440px] overflow-hidden rounded-lg border border-white/10 bg-[#070b18] p-5 shadow-[0_30px_120px_rgba(2,132,199,0.16)]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),transparent_35%),linear-gradient(315deg,rgba(167,139,250,0.16),transparent_38%)]" />
        <motion.div
          style={prefersReducedMotion ? undefined : { opacity: rawOpacity }}
          className="absolute inset-5 grid gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-cyan-100">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="grid flex-1 gap-2">
              <span className="h-3 w-2/3 rounded-full bg-white/16" />
              <span className="h-3 w-1/2 rounded-full bg-white/10" />
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="rounded-lg border border-dashed border-white/15 bg-white/[0.035] p-4"
              >
                <div className="h-3 w-2/3 rounded-full bg-white/12" />
                <div className="mt-4 h-16 rounded-lg bg-white/[0.045]" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={prefersReducedMotion ? undefined : { opacity: polishedOpacity }}
          className="absolute inset-5"
        >
          <div className="grid h-full gap-4">
            <div className="flex items-center justify-between rounded-lg border border-cyan-200/20 bg-slate-950/75 p-4">
              <div>
                <p className="text-xs font-medium text-cyan-200">{story.eyebrow}</p>
                <p className="mt-1 text-lg font-semibold text-white">Production-ready flow</p>
              </div>
              <span className="rounded-full bg-emerald-300/15 px-3 py-1 text-xs font-semibold text-emerald-100">
                Optimized
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
                <div className="h-28 rounded-lg bg-gradient-to-br from-cyan-300 via-blue-400 to-violet-400" />
                <div className="mt-4 h-3 w-3/4 rounded-full bg-white/20" />
                <div className="mt-3 h-3 w-1/2 rounded-full bg-white/12" />
              </div>
              <div className="grid gap-3">
                {[82, 68, 91, 74].map((width, index) => (
                  <div key={width} className="rounded-lg border border-white/10 bg-slate-950/70 p-3">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>{["Conversion", "Automation", "Latency", "Insights"][index]}</span>
                      <span>{width}%</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
                        style={{ width: `${width}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function MotionStory({ story }: { story: ShowcaseStory }) {
  return (
    <article className="grid gap-8 py-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
      <div className="lg:sticky lg:top-28">
        <p className="text-sm font-semibold text-cyan-200">{story.eyebrow}</p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
          {story.title}
        </h3>
        <p className="mt-5 text-base leading-8 text-slate-300">{story.story}</p>
        <p className="mt-4 text-sm leading-7 text-slate-400">{story.description}</p>
        <p className="mt-6 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-xs leading-6 text-slate-400">
          Future frames: {story.framePath.replace("frame_0001.jpg", "frame_0001.jpg, frame_0002.jpg")}
        </p>
      </div>
      <StoryVisual story={story} />
    </article>
  );
}

export function MotionShowcaseSection() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_30%,rgba(34,211,238,0.1),transparent_28%),radial-gradient(circle_at_82%_62%,rgba(167,139,250,0.12),transparent_32%)]" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Motion showcase prototype"
          title="Cinematic scroll stories without heavy video files."
          description="For the first prototype, Framer Motion transforms layered UI mockups on scroll. The component is prepared for future Kling stills, videos, or frame sequences."
          align="center"
        />
        <div className="mt-6 divide-y divide-white/10">
          {showcaseStories.map((story) => (
            <MotionStory key={story.title} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}
