import { CheckCircle2 } from "lucide-react";
import { whyPoints } from "../data/site";
import { SectionHeading } from "./SectionHeading";

export function WhyChooseSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Why choose us"
          title="Why Clients Choose Us"
          description="The prototype positions the team around quality, capability, and clear outcomes instead of generic freelance promises."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {whyPoints.map((point) => (
            <div
              key={point}
              className="flex items-start gap-3 rounded-lg border border-white/10 bg-slate-950/40 p-4"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-cyan-200" aria-hidden="true" />
              <span className="text-sm leading-6 text-slate-200">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
