import { CheckCircle2 } from "lucide-react";
import { whyPoints } from "../data/site";
import { GradientBlob } from "./GradientBlob";
import { SectionHeading } from "./SectionHeading";

export function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#E8E8ED] bg-white px-4 py-24 sm:px-6 lg:px-8">
      <GradientBlob className="-right-16 top-10 h-80 w-80 opacity-70" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Why choose us"
          title="Global Quality, Practical Execution."
          description="A premium product mindset with realistic delivery: clean design, solid engineering, AI capability, and communication that keeps projects moving."
        />
        <div className="surface-3d grid gap-4 sm:grid-cols-2">
          {whyPoints.map((point, index) => (
            <div
              key={point}
              className="apple-card flex items-start gap-3 rounded-[26px] p-5"
              style={{ transform: `translateZ(${index % 2 === 0 ? 20 : 42}px)` }}
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#0071E3]" aria-hidden="true" />
              <span className="text-sm font-medium leading-6 text-[#1D1D1F]">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
