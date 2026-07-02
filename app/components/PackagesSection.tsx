import { Check } from "lucide-react";
import { packages } from "../data/site";
import { SectionHeading } from "./SectionHeading";

export function PackagesSection() {
  return (
    <section id="packages" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Packages"
          title="Flexible engagement previews, priced after scope is clear."
          description="Each package is a starting point. Exact pricing can be added after real service scope, timelines, and deliverables are finalized."
          align="center"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {packages.map((item, index) => (
            <article
              key={item.title}
              className={`rounded-lg border p-6 ${
                index === 3
                  ? "border-cyan-200/40 bg-cyan-300/[0.08] shadow-[0_30px_110px_rgba(34,211,238,0.16)]"
                  : "border-white/10 bg-white/[0.045]"
              }`}
            >
              <p className="text-sm font-semibold text-cyan-200">Custom Quote</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Best for: {item.bestFor}</p>
              <ul className="mt-6 space-y-3">
                {item.includes.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-cyan-200" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-7 inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Request Quote
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
