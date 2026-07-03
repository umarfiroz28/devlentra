import {
  Bot,
  Code2,
  Component,
  CreditCard,
  DatabaseZap,
  FileText,
  Gauge,
  Globe2,
  LayoutDashboard,
  Mail,
  Palette,
  Rocket,
  SearchCheck,
  ServerCog,
  ShoppingBag,
  Smartphone,
  Store,
  Tags,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { packages, type PackageIcon } from "../data/packages";
import { AppleButton } from "./AppleButton";

const packageIcon: Record<PackageIcon, LucideIcon> = {
  ai: Bot,
  api: ServerCog,
  checkout: CreditCard,
  cms: Globe2,
  code: Code2,
  component: Component,
  dashboard: LayoutDashboard,
  data: DatabaseZap,
  deploy: Rocket,
  form: Mail,
  pages: FileText,
  payment: CreditCard,
  performance: Gauge,
  products: ShoppingBag,
  responsive: Smartphone,
  seo: SearchCheck,
  speed: Zap,
  store: Store,
  style: Palette,
  tags: Tags,
};

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
            Starter pricing that makes sense.
          </h2>
          <p className="apple-body mx-auto mt-5 max-w-[720px]">
            These are nominal starting prices for small, clearly scoped work.
            Custom design, integrations, content volume, apps, APIs, and
            timelines are quoted after understanding the requirement.
          </p>
        </div>
        <div className="mt-12 grid auto-rows-fr items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((item) => (
            <article
              key={item.title}
              className={`apple-product-tile h-full p-4 sm:p-5 ${
                item.popular ? "ring-2 ring-[#0071E3]/20" : ""
              }`}
            >
              <div className="flex h-full min-h-[470px] flex-col">
                <div
                  role="img"
                  aria-label={item.imageAlt}
                  className="relative h-[112px] overflow-hidden rounded-[22px] bg-[#F5F5F7] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.imageSrc})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                  {item.popular ? (
                    <span className="absolute right-3 top-3 rounded-full bg-[#0071E3] px-3 py-1 text-[11px] font-semibold text-white shadow-[0_10px_24px_rgba(0,113,227,0.28)]">
                      Popular
                    </span>
                  ) : null}
                </div>

                <div className="mt-4">
                  <h3
                    className="text-[21px] font-bold leading-tight text-[#1D1D1F]"
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  className="mt-3 text-[34px] font-bold leading-none text-[#1D1D1F]"
                >
                  {item.startingAt}
                </p>
                <p className="mt-1 text-[12px] text-[#86868B]">
                  starting price
                </p>
                <p className="mt-2 min-h-[40px] text-[13px] leading-5 text-[#6E6E73]">
                  {item.bestFor}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.stack.map((stackItem) => {
                    const StackIcon = packageIcon[stackItem.icon];

                    return (
                      <span
                        key={stackItem.label}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F5F7] px-2.5 py-1 text-[11px] font-semibold text-[#1D1D1F] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]"
                      >
                        <StackIcon
                          className="h-3.5 w-3.5 text-[#0071E3]"
                          aria-hidden="true"
                        />
                        {stackItem.label}
                      </span>
                    );
                  })}
                </div>
                <ul className="mt-4 grid grid-cols-2 gap-2">
                  {item.includes.map((feature) => {
                    const FeatureIcon = packageIcon[feature.icon];

                    return (
                      <li
                        key={feature.label}
                        className="flex h-9 items-center gap-2 rounded-[12px] bg-[#F6FAFF] px-2.5 text-[12px] font-semibold leading-4 text-[#1D1D1F] shadow-[inset_0_0_0_1px_rgba(0,113,227,0.07)]"
                      >
                        <span
                          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF3FF] text-[#0071E3]"
                        >
                          <FeatureIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        <span className="truncate">
                          {feature.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-auto pt-4">
                  <AppleButton
                    href="#contact"
                    variant="primary"
                    className="w-full text-[15px] font-semibold"
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
