"use client";

import { motion } from "framer-motion";

export type ScrollStoryItem = {
  eyebrow: string;
  title: string;
  description: string;
  visual: "ecommerce" | "ai" | "data";
};

type ScrollStoryProps = {
  story: ScrollStoryItem;
  index: number;
};

const visualBars = {
  ecommerce: [36, 58, 82, 64, 74],
  ai: [72, 44, 88, 56, 92],
  data: [46, 78, 66, 94, 84],
};

export function ScrollStory({ story, index }: ScrollStoryProps) {
  return (
    <motion.article
      className="grid min-h-[520px] gap-8 rounded-[28px] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08),inset_0_0_0_1px_rgba(0,0,0,0.08)] md:grid-cols-[0.9fr_1.1fr] md:p-8 lg:sticky lg:top-20"
      style={{ top: `${76 + index * 14}px` }}
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col justify-center">
        <p className="text-sm font-semibold text-[#0066CC]">{story.eyebrow}</p>
        <h3 className="mt-4 max-w-[520px] text-[34px] font-bold leading-[1.08] tracking-[-0.04em] text-[#1D1D1F] sm:text-[44px]">
          {story.title}
        </h3>
        <p className="mt-5 max-w-[560px] text-[19px] leading-8 tracking-[-0.012em] text-[#6E6E73]">
          {story.description}
        </p>
      </div>
      <div className="relative min-h-[300px] overflow-hidden rounded-[28px] bg-[#F5F5F7] p-5">
        {/* Future frames: public/frames/ecommerce/ */}
        {/* Future frames: public/frames/ai-automation/ */}
        {/* Future frames: public/frames/data-platform/ */}
        <div className="rounded-[24px] bg-white p-5 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between">
            <span className="h-4 w-28 rounded-full bg-[#E8E8ED]" />
            <span className="h-7 w-20 rounded-full bg-[#EAF3FF]" />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[1, 2, 3].map((item) => (
              <span key={item} className="h-20 rounded-[18px] bg-[#F5F5F7]" />
            ))}
          </div>
          <div className="mt-6 flex h-32 items-end gap-3 rounded-[22px] bg-[linear-gradient(135deg,#FBFBFD,#EAF3FF)] p-4">
            {visualBars[story.visual].map((height, barIndex) => (
              <span
                key={`${story.visual}-${barIndex}`}
                className="flex-1 rounded-t-2xl bg-[#0071E3]"
                style={{ height: `${height}%`, opacity: 0.42 + barIndex * 0.09 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
