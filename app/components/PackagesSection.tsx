import { Check } from "lucide-react";
import { packages } from "../data/site";
import { SectionHeading } from "./SectionHeading";

export function PackagesSection() {
  return (
    <section id="packages" className="bg-[#F5F5F7] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Packages"
          title="Custom quotes for the right level of build."
          description="Start simple, grow into a business website, launch ecommerce, or build a custom AI/product system."
          align="center"
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {packages.map((item, index) => (
            <article
              key={item.title}
              className={`apple-card relative rounded-[32px] p-7 ${
                index === 1 || index === 3 ? "ring-1 ring-[#0071E3]/25" : ""
              }`}
            >
              {index === 1 || index === 3 ? (
                <span className="absolute right-6 top-6 rounded-full bg-[#EAF3FF] px-3 py-1 text-xs font-semibold text-[#0071E3]">
                  Popular
                </span>
              ) : null}
              <p className="text-sm font-semibold text-[#0071E3]">Custom Quote</p>
              <h3 className="mt-4 text-2xl font-semibold text-[#1D1D1F]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#6E6E73]">Best for: {item.bestFor}</p>
              <ul className="mt-7 space-y-3">
                {item.includes.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-[#6E6E73]">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-[#0071E3]" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="apple-btn apple-btn-primary mt-8 w-full focus:outline-none focus:ring-2 focus:ring-[#0071E3] focus:ring-offset-2 focus:ring-offset-[#F5F5F7]"
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
