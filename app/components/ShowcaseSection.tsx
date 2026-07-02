import { ScrollStory, type ScrollStoryItem } from "./ScrollStory";

const stories: ScrollStoryItem[] = [
  {
    eyebrow: "Ecommerce",
    title: "A storefront shaped for discovery, trust, and checkout.",
    description:
      "Product storytelling, mobile-first sections, clean collections, and conversion paths become one polished commerce experience.",
    visual: "ecommerce",
  },
  {
    eyebrow: "AI Automation",
    title: "Manual work becomes a calm, useful AI workflow.",
    description:
      "Documents, messages, FAQs, and repeated tasks turn into assistants, summaries, routing, and team handoffs.",
    visual: "ai",
  },
  {
    eyebrow: "Data Platform",
    title: "Raw data becomes a product people can actually use.",
    description:
      "Disconnected sources become dashboards, APIs, predictions, and interfaces built for day-to-day decisions.",
    visual: "data",
  },
];

export function ShowcaseSection() {
  return (
    <section
      id="showcase"
      aria-labelledby="showcase-title"
      className="bg-[#FBFBFD] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="apple-wide-container">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="apple-eyebrow">Showcase</p>
          <h2 id="showcase-title" className="apple-section-title mt-3">
            From idea to product. In motion.
          </h2>
          <p className="apple-body mx-auto mt-5 max-w-[760px]">
            Scroll through how we turn business needs into polished digital
            systems.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:block lg:space-y-8">
          {stories.map((story, index) => (
            <ScrollStory key={story.eyebrow} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
