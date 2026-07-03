import { projects } from "../data/projects";
import { AppleButton } from "./AppleButton";

const toneClass = {
  blue: "from-[#EAF3FF] via-white to-[#F7FBFF]",
  green: "from-[#EAFBF2] via-white to-[#F7FFFB]",
  violet: "from-[#F5EEFF] via-white to-[#FBF7FF]",
  orange: "from-[#FFF3E5] via-white to-[#FFFBF5]",
  graphite: "from-[#ECECF1] via-white to-[#FBFBFD]",
  cyan: "from-[#ECFEFF] via-white to-[#F7FFFF]",
};

const toneAccent = {
  blue: "text-[#0066CC] shadow-[0_18px_36px_rgba(0,113,227,0.20)]",
  green: "text-[#0B7F5B] shadow-[0_18px_36px_rgba(20,184,120,0.18)]",
  violet: "text-[#7A3EF2] shadow-[0_18px_36px_rgba(122,62,242,0.18)]",
  orange: "text-[#B65A00] shadow-[0_18px_36px_rgba(245,158,11,0.20)]",
  graphite: "text-[#34343A] shadow-[0_18px_36px_rgba(29,29,31,0.14)]",
  cyan: "text-[#087B8E] shadow-[0_18px_36px_rgba(6,182,212,0.18)]",
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
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article key={project.title} className="apple-product-tile min-h-[460px] p-6">
                <div
                  className={`relative h-44 overflow-hidden rounded-[24px] bg-gradient-to-br ${toneClass[project.tone]} p-3 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]`}
                  role="img"
                  aria-label={project.imageAlt}
                >
                  <div className="absolute inset-x-6 top-5 h-20 rounded-full bg-white/50 blur-2xl" />
                  <div
                    className="absolute inset-3 rounded-[20px] bg-cover bg-center shadow-[0_22px_58px_rgba(29,29,31,0.16)]"
                    style={{ backgroundImage: `url(${project.imageSrc})` }}
                  />
                  <div className="absolute inset-3 rounded-[20px] bg-gradient-to-t from-white/82 via-white/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-white/88 backdrop-blur-xl ${toneAccent[project.tone]}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="hidden h-8 w-24 rounded-full bg-white/78 shadow-[0_14px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:block" />
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
