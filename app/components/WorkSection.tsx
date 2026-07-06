import { BadgeCheck, Star } from "lucide-react";
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

function ProjectVisual({
  project,
  isFeatured,
}: {
  project: (typeof projects)[number];
  isFeatured: boolean;
}) {
  const Icon = project.icon;

  return (
    <div
      className={`relative h-36 overflow-hidden rounded-[22px] bg-gradient-to-br ${toneClass[project.tone]} p-3 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]`}
      role="img"
      aria-label={project.imageAlt}
    >
      <div className="absolute inset-x-6 top-5 h-20 rounded-full bg-white/50 blur-2xl" />
      <div
        className="absolute inset-3 rounded-[20px] bg-cover bg-center shadow-[0_22px_58px_rgba(29,29,31,0.14)]"
        style={{ backgroundImage: `url(${project.imageSrc})` }}
      />
      <div className="absolute inset-3 rounded-[20px] bg-gradient-to-t from-white/78 via-white/12 to-transparent" />
      <div className="absolute right-7 top-12 flex h-14 w-14 items-center justify-center rounded-[20px] bg-white shadow-[0_18px_36px_rgba(0,0,0,0.14)]">
        <Icon className={`h-6 w-6 ${toneAccent[project.tone].split(" ")[0]}`} aria-hidden="true" />
      </div>
      <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/88 px-2.5 py-1 text-[11px] font-semibold text-[#1D1D1F] shadow-[0_12px_28px_rgba(0,0,0,0.12)] backdrop-blur-xl">
          <Star className="h-3.5 w-3.5 fill-[#FFD60A] text-[#D89B00]" aria-hidden="true" />
          {isFeatured ? "Most requested" : "Client proof"}
        </span>
      </div>
    </div>
  );
}

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
            across ecommerce, SaaS, AI tooling, GTM platforms, real-estate
            products, and independent engineering.
          </p>
        </div>
        <div className="mt-12 grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const details = [
              ["Problem", project.problem],
              ["Does", project.whatItDoes],
              ["Outcome", project.outcome],
            ];
            const visibleTags = project.tags.slice(0, 3);
            const hiddenTagCount = project.tags.length - visibleTags.length;
            const isFeatured = index < 3;

            return (
              <article key={project.title} className="apple-product-tile flex h-full min-w-0 flex-col p-4 sm:p-5">
                <ProjectVisual project={project} isFeatured={isFeatured} />
                <div className="mt-4 flex flex-wrap gap-2">
                  {visibleTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#F5F5F7] px-2.5 py-1 text-[11px] font-medium text-[#6E6E73]"
                    >
                      {tag}
                    </span>
                  ))}
                  {hiddenTagCount > 0 ? (
                    <span className="rounded-full bg-[#F5F5F7] px-2.5 py-1 text-[11px] font-medium text-[#6E6E73]">
                      +{hiddenTagCount}
                    </span>
                  ) : null}
                </div>
                <div className="mt-4 grid gap-2">
                  <div className="flex items-center gap-2 text-[12px] font-semibold text-[#0066CC]">
                    <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                    <span className="min-w-0 text-clamp-1">Client: {project.clientName}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="max-w-full rounded-full bg-[#EAF8EF] px-2.5 py-1 text-[11px] font-semibold text-[#126B35]">
                      {project.deliveryStatus}
                    </span>
                    <span className="max-w-full rounded-full bg-[#EAF3FF] px-2.5 py-1 text-[11px] font-semibold text-[#0066CC]">
                      {project.demandSignal}
                    </span>
                  </div>
                </div>
                <h3 className="mt-4 text-[23px] font-bold leading-[1.1] text-[#1D1D1F] text-clamp-1">
                  {project.title}
                </h3>
                <p className="mt-2 text-[14px] leading-6 text-[#6E6E73] text-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 grid min-w-0 gap-2 rounded-[18px] bg-[#F5F5F7] p-3 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]">
                  {details.map(([label, value]) => (
                    <div key={label} className="grid min-w-0 grid-cols-[minmax(58px,72px)_minmax(0,1fr)] gap-2">
                      <p className="break-words text-[10px] font-semibold uppercase tracking-normal text-[#0066CC] sm:text-[11px] sm:tracking-[0.06em]">
                        {label}
                      </p>
                      <p className="min-w-0 break-words text-[12px] leading-5 text-[#6E6E73] text-clamp-2">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-[12px] font-semibold text-[#86868B] text-clamp-1">
                  {project.meta}
                </p>
                <div className="mt-auto pt-4">
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
