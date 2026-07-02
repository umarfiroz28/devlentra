import { teamRoles } from "../data/site";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="About"
              title="Built by a Practical Tech Team"
              description="We are a growing technology team helping businesses build modern websites, AI tools, ecommerce platforms, dashboards, and full-stack applications. Our focus is simple: clean design, strong engineering, and business outcomes."
            />
            <p className="mt-6 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-slate-400">
              Team details are placeholders and can be replaced with real qualifications,
              bios, photos, and delivery roles later.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {teamRoles.map((role, index) => (
              <article
                key={role}
                className="rounded-lg border border-white/10 bg-white/[0.045] p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-300 to-violet-400 text-sm font-bold text-slate-950">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{role}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Placeholder profile ready for real experience, ownership, and project
                  responsibilities.
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
