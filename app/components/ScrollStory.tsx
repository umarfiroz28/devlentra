"use client";

import { motion } from "framer-motion";

export type ScrollStoryItem = {
  eyebrow: string;
  title: string;
  description: string;
  visual: "ecommerce" | "ai" | "data";
  imageSrc: string;
  imageAlt: string;
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

const visualAccent = {
  ecommerce: "from-[#EAF3FF] via-[#ECFEFF] to-[#FFF7EA]",
  ai: "from-[#F4ECFF] via-[#EAF3FF] to-[#ECFEFF]",
  data: "from-[#ECFEFF] via-[#EAFBF2] to-[#F4ECFF]",
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
      <div className={`relative min-h-[300px] overflow-hidden rounded-[28px] bg-gradient-to-br ${visualAccent[story.visual]} p-4 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] sm:p-5`}>
        <div className="absolute inset-x-8 top-8 h-28 rounded-full bg-white/50 blur-3xl" />
        <div className="relative h-full min-h-[300px] overflow-hidden rounded-[24px] bg-white shadow-[0_26px_70px_rgba(29,29,31,0.13),inset_0_0_0_1px_rgba(0,0,0,0.06)]">
          <div
            role="img"
            aria-label={story.imageAlt}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${story.imageSrc})` }}
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/92 via-white/28 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
            <div className="rounded-[18px] bg-white/82 px-3 py-2 shadow-[0_14px_34px_rgba(0,0,0,0.16)] backdrop-blur-xl">
              <div className="flex h-14 items-end gap-1.5">
                {visualBars[story.visual].map((height, barIndex) => (
                  <span
                    key={`${story.visual}-${barIndex}`}
                    className="w-4 rounded-t-xl bg-[#0071E3]"
                    style={{ height: `${height / 2}%`, opacity: 0.38 + barIndex * 0.1 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
