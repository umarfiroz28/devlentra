import { projects } from "../data/site";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  return (
    <section id="work" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Editable portfolio"
          title="Selected Work & Concept Builds"
          description="Large editable concept tiles with outcome-focused copy, ready for real screenshots, metrics, and case studies."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
