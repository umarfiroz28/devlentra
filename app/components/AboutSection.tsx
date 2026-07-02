import { profileHighlights } from "../data/site";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-[#FBFBFD] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="apple-container">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="apple-eyebrow">About</p>
            <h2 id="about-title" className="apple-section-title mt-3 text-balance">
              Built for practical full-stack product work.
            </h2>
            <p className="apple-body mt-5">
              Devlentra builds React interfaces, Java Spring Boot services,
              Node.js APIs, Go services, AWS-ready systems, GenAI workflows,
              data products, and affordable websites for real businesses.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {profileHighlights.map((highlight, index) => (
              <article key={highlight} className="apple-card p-6">
                <p className="apple-caption">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-[22px] font-bold leading-tight tracking-[-0.03em] text-[#1D1D1F]">
                  {[
                    "Delivery",
                    "Stack",
                    "Impact",
                    "AI Engineering",
                    "Achievements",
                  ][index]}
                </h3>
                <p className="mt-3 text-[15px] leading-6 text-[#6E6E73]">
                  {highlight}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
