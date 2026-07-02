import { ScrollStory, type ScrollStoryItem } from "./ScrollStory";

const stories: ScrollStoryItem[] = [
  {
    eyebrow: "Property10X / Superspace",
    title: "Commerce and real-estate products with real user flows.",
    description:
      "Property listings, location-aware catalogs, product discovery, responsive interfaces, Firebase flows, and business-friendly browsing experiences.",
    visual: "ecommerce",
  },
  {
    eyebrow: "AutoStack / GenAI Assistant",
    title: "AI workflows that reduce setup, triage, and documentation work.",
    description:
      "LLM workflows, RAG over codebases, support-ticket classification, generated scaffolds, CI/CD templates, and practical automation.",
    visual: "ai",
  },
  {
    eyebrow: "IBM / ML Projects",
    title: "Backend, data, and ML systems built for measurable outcomes.",
    description:
      "Java Spring Boot services, Kafka workflows, Redis caching, dashboards, wafer fault detection, and cement strength prediction.",
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
            From resume to real product work.
          </h2>
          <p className="apple-body mx-auto mt-5 max-w-[760px]">
            A closer look at the kind of engineering behind the projects,
            services, and case studies in this portfolio.
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
