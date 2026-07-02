import { projects } from "../data/projects";
import { AppleButton } from "./AppleButton";

const toneClass = {
  blue: "from-[#EAF3FF] to-[#F5F5F7]",
  green: "from-[#EAFBF2] to-[#F5F5F7]",
  violet: "from-[#F5EEFF] to-[#F5F5F7]",
  orange: "from-[#FFF3E5] to-[#F5F5F7]",
  graphite: "from-[#ECECF1] to-[#FBFBFD]",
  cyan: "from-[#ECFEFF] to-[#F5F5F7]",
};

export function WorkSection() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="bg-[#F5F5F7] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="apple-wide-container">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="apple-eyebrow">Work</p>
          <h2 id="work-title" className="apple-section-title mt-3">
            Real projects from resume and portfolio.
          </h2>
          <p className="apple-body mx-auto mt-5 max-w-[740px]">
            Production work, portfolio builds, and machine learning projects
            across ecommerce, SaaS, AI tooling, real-estate platforms, and
            independent engineering.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="apple-product-tile min-h-[420px] p-6">
              <div
                className={`h-40 rounded-[24px] bg-gradient-to-br ${toneClass[project.tone]} p-4 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]`}
                aria-hidden="true"
              >
                <div className="h-4 w-24 rounded-full bg-white/90" />
                <div className="mt-8 grid grid-cols-3 gap-3">
                  <span className="h-20 rounded-[18px] bg-white/86" />
                  <span className="h-20 rounded-[18px] bg-white/70" />
                  <span className="h-20 rounded-[18px] bg-white/86" />
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#F5F5F7] px-3 py-1 text-xs text-[#6E6E73]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm font-semibold text-[#0066CC]">
                {project.meta}
              </p>
              <h3 className="mt-5 text-[26px] font-bold leading-[1.1] tracking-[-0.035em] text-[#1D1D1F]">
                {project.title}
              </h3>
              <p className="mt-4 text-[16px] leading-7 text-[#6E6E73]">
                {project.description}
              </p>
              <div className="mt-5">
                <AppleButton href="#contact" variant="link">
                  Discuss similar work
                </AppleButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
