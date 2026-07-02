import { Check } from "lucide-react";
import { packages } from "../data/packages";
import { AppleButton } from "./AppleButton";

export function PricingSection() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="bg-[#F5F5F7] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="apple-wide-container">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="apple-eyebrow">Pricing</p>
          <h2 id="pricing-title" className="apple-section-title mt-3">
            Choose the right starting point.
          </h2>
          <p className="apple-body mx-auto mt-5 max-w-[720px]">
            Each package is a practical baseline. Scope, timelines, and pricing
            are finalized after we understand the product properly.
          </p>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {packages.map((item) => (
            <article
              key={item.title}
              className={`apple-product-tile p-6 ${
                item.popular ? "bg-[#1D1D1F] text-white shadow-[0_28px_80px_rgba(0,0,0,0.2)]" : ""
              }`}
            >
              <div className="flex min-h-[410px] flex-col">
                <div className="flex items-center justify-between gap-4">
                  <h3
                    className={`text-[26px] font-bold leading-tight tracking-[-0.035em] ${
                      item.popular ? "text-white" : "text-[#1D1D1F]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  {item.popular ? (
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#1D1D1F]">
                      Popular
                    </span>
                  ) : null}
                </div>
                <p
                  className={`mt-4 text-[15px] leading-6 ${
                    item.popular ? "text-white/72" : "text-[#6E6E73]"
                  }`}
                >
                  {item.bestFor}
                </p>
                <ul className="mt-7 grid gap-3">
                  {item.includes.map((feature) => (
                    <li key={feature} className="flex gap-3 text-[15px] leading-6">
                      <Check
                        className={`mt-1 h-4 w-4 shrink-0 ${
                          item.popular ? "text-[#7DBBFF]" : "text-[#0071E3]"
                        }`}
                        aria-hidden="true"
                      />
                      <span className={item.popular ? "text-white/82" : "text-[#1D1D1F]"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <AppleButton
                    href="#contact"
                    variant={item.popular ? "primary" : "outline"}
                    className="w-full"
                  >
                    Start here
                  </AppleButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
