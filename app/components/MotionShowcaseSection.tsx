"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Bot, DatabaseZap, ShoppingBag } from "lucide-react";
import { showcaseStories, type ShowcaseStory } from "../data/site";
import { GradientBlob } from "./GradientBlob";
import { SectionHeading } from "./SectionHeading";

function StoryVisual({ story }: { story: ShowcaseStory }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const frameRotate = useTransform(scrollYProgress, [0.05, 0.5, 0.92], [9, -2, 2]);
  const frameScale = useTransform(scrollYProgress, [0.05, 0.55, 0.92], [0.9, 1.04, 0.98]);
  const rawOpacity = useTransform(scrollYProgress, [0.12, 0.46], [1, 0.08]);
  const polishedOpacity = useTransform(scrollYProgress, [0.28, 0.62], [0, 1]);
  const cardLift = useTransform(scrollYProgress, [0.18, 0.62], [42, -10]);
  const nodeSpread = useTransform(scrollYProgress, [0.18, 0.62], [34, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0.15, 0.62], [0.35, 1]);
  const Icon =
    story.visual === "commerce" ? ShoppingBag : story.visual === "ai" ? Bot : DatabaseZap;

  const metrics =
    story.visual === "commerce"
      ? ["Storefront", "Checkout", "Revenue"]
      : story.visual === "ai"
        ? ["Assistant", "Docs", "Tasks"]
        : ["Data", "APIs", "ML"];

  return (
    <div ref={ref} className="surface-3d relative min-h-[480px]">
      {/* Future Kling frame-sequence integration:
          Folders:
          public/frames/ecommerce/
          public/frames/ai-automation/
          public/frames/data-platform/

          Future logic:
          - read scrollYProgress from this story container
          - map progress to a frame index
          - render the matching image in the device frame
          - preload nearby frames to avoid flicker
          - keep this CSS mockup as the mobile/reduced-motion fallback */}
      <GradientBlob className="left-6 top-8 h-80 w-80 opacity-80" />
      <motion.div
        style={
          prefersReducedMotion
            ? undefined
            : { rotateY: frameRotate, scale: frameScale, opacity: bgOpacity }
        }
        className="relative min-h-[480px] overflow-hidden rounded-[38px] border border-[#D2D2D7] bg-white p-5 shadow-[0_34px_90px_rgba(29,29,31,0.12)]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#EAF3FF,#F4ECFF,#ECFEFF)] opacity-70" />
        <motion.div
          style={prefersReducedMotion ? undefined : { opacity: rawOpacity }}
          className="absolute inset-6 grid gap-4"
        >
          <div className="flex items-center gap-3 rounded-[26px] border border-dashed border-[#D2D2D7] bg-white/70 p-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F5F7] text-[#0071E3]">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div className="grid flex-1 gap-2">
              <span className="h-3 w-2/3 rounded-full bg-[#D2D2D7]" />
              <span className="h-3 w-1/2 rounded-full bg-[#E8E8ED]" />
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                style={prefersReducedMotion ? undefined : { y: nodeSpread }}
                className="rounded-[24px] border border-dashed border-[#D2D2D7] bg-white/60 p-4"
              >
                <div className="h-3 w-2/3 rounded-full bg-[#D2D2D7]" />
                <div className="mt-4 h-20 rounded-[18px] bg-[#F5F5F7]" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={prefersReducedMotion ? undefined : { opacity: polishedOpacity }}
          className="absolute inset-6"
        >
          <div className="grid h-full gap-4">
            <div className="rounded-[28px] border border-[#D2D2D7] bg-white/90 p-5 shadow-[0_20px_50px_rgba(29,29,31,0.08)] backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#0071E3]">{story.eyebrow}</p>
                  <p className="mt-1 text-xl font-semibold text-[#1D1D1F]">
                    Product-ready flow
                  </p>
                </div>
                <span className="rounded-full bg-[#EAF3FF] px-3 py-1 text-xs font-semibold text-[#0071E3]">
                  Live
                </span>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
              <motion.div
                style={prefersReducedMotion ? undefined : { y: cardLift, rotateX: frameRotate }}
                className="rounded-[28px] border border-[#D2D2D7] bg-white p-4 shadow-[0_20px_60px_rgba(29,29,31,0.1)]"
              >
                <div className="h-36 rounded-[24px] bg-[linear-gradient(135deg,#F7F7F8,#E8E4DD,#FDFDFD)]" />
                <div className="mt-4 h-3 w-3/4 rounded-full bg-[#D2D2D7]" />
                <div className="mt-3 h-3 w-1/2 rounded-full bg-[#E8E8ED]" />
              </motion.div>
              <div className="grid gap-3">
                {[84, 71, 93].map((width, index) => (
                  <motion.div
                    key={metrics[index]}
                    style={prefersReducedMotion ? undefined : { y: cardLift }}
                    className="rounded-[24px] border border-[#D2D2D7] bg-white/90 p-4 shadow-[0_16px_42px_rgba(29,29,31,0.08)]"
                  >
                    <div className="flex items-center justify-between text-xs font-medium text-[#6E6E73]">
                      <span>{metrics[index]}</span>
                      <span>{width}%</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-[#E8E8ED]">
                      <div
                        className="h-2 rounded-full bg-[#0071E3]"
                        style={{ width: `${width}%` }}
                      />
                    </div>
                  </motion.div>
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
    <article className="grid gap-9 py-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
      <div className="lg:sticky lg:top-28">
        <p className="text-sm font-semibold text-[#0071E3]">{story.eyebrow}</p>
        <h3 className="apple-title text-balance mt-3 text-[34px] sm:text-[48px]">
          {story.title}
        </h3>
        <p className="mt-5 text-lg leading-8 text-[#6E6E73]">{story.story}</p>
        <p className="mt-4 text-sm leading-7 text-[#86868B]">{story.description}</p>
        <p className="mt-6 rounded-[22px] border border-[#D2D2D7] bg-white p-4 text-xs leading-6 text-[#86868B]">
          Future frames: {story.framePath.replace("frame_0001.jpg", "frame_0001.jpg, frame_0002.jpg")}
        </p>
      </div>
      <StoryVisual story={story} />
    </article>
  );
}

export function MotionShowcaseSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="3D motion showcase"
          title="Product-story sections that reveal the transformation."
          description="Sticky desktop scroll scenes simulate the future frame-sequence experience with lightweight 3D CSS and Framer Motion transforms."
          align="center"
        />
        <div className="mt-10 divide-y divide-[#E8E8ED]">
          {showcaseStories.map((story) => (
            <MotionStory key={story.title} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}
