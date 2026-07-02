import { teamRoles } from "../data/site";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="About"
              title="Built by a Practical Tech Team."
              description="We are a growing technology team helping businesses build modern websites, AI tools, ecommerce platforms, dashboards, and full-stack applications. Our focus is simple: clean design, strong engineering, and business outcomes."
            />
            <p className="mt-7 rounded-[24px] border border-[#D2D2D7] bg-[#F5F5F7] p-5 text-sm leading-7 text-[#6E6E73]">
              Team details are placeholders and can be replaced with real qualifications,
              bios, photos, and delivery roles later.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {teamRoles.map((role, index) => (
              <article key={role} className="apple-card rounded-[30px] p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[linear-gradient(135deg,#EAF3FF,#F4ECFF,#ECFEFF)] text-sm font-bold text-[#0071E3]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#1D1D1F]">
                  {role}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6E6E73]">
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
