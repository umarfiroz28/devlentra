import Image from "next/image";
import {
  Code2,
  Globe2,
  ServerCog,
  Store,
  type LucideIcon,
} from "lucide-react";
import { services } from "../data/services";
import { ServiceTile } from "./ServiceTile";

type ServiceHighlight = {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
  itemClassName: string;
  iconClassName: string;
};

const serviceHighlights: ServiceHighlight[] = [
  {
    label: "WordPress",
    value: "Starts at Rs 1,499",
    detail: "Business sites, blogs, forms, and SEO basics.",
    icon: Globe2,
    itemClassName: "bg-[#F4F0FF] shadow-[inset_0_0_0_1px_rgba(99,74,255,0.13)]",
    iconClassName: "bg-white text-[#6E56CF]",
  },
  {
    label: "Shopify",
    value: "Starts at Rs 1,699",
    detail: "Starter stores, products, collections, and checkout polish.",
    icon: Store,
    itemClassName: "bg-[#EFFAF4] shadow-[inset_0_0_0_1px_rgba(33,150,83,0.13)]",
    iconClassName: "bg-white text-[#1F8A4C]",
  },
  {
    label: "React / Next.js",
    value: "Starts at Rs 1,799",
    detail: "Modern landing pages, portfolios, and SaaS-style sites.",
    icon: Code2,
    itemClassName: "bg-[#EFF6FF] shadow-[inset_0_0_0_1px_rgba(0,113,227,0.14)]",
    iconClassName: "bg-white text-[#0071E3]",
  },
  {
    label: "API, AI, dashboard",
    value: "Scoped honestly",
    detail: "Full-stack builds after a quick requirement discussion.",
    icon: ServerCog,
    itemClassName: "bg-[#FFF7ED] shadow-[inset_0_0_0_1px_rgba(234,88,12,0.14)]",
    iconClassName: "bg-white text-[#C75A12]",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-[#F5F5F7] px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="apple-wide-container">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(360px,1fr)]">
          <div className="max-w-[720px] text-center lg:text-left">
            <p className="apple-eyebrow">Services</p>
            <h2 id="services-title" className="apple-section-title mt-3 text-balance">
              High-demand services at practical starter prices.
            </h2>
            <ul className="mx-auto mt-7 grid max-w-[760px] gap-3 sm:grid-cols-2 lg:mx-0">
              {serviceHighlights.map((item) => {
                const HighlightIcon = item.icon;

                return (
                  <li
                    key={item.label}
                    className={`flex min-h-[112px] items-start gap-3 rounded-[24px] p-4 text-left ${item.itemClassName}`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full shadow-[0_12px_28px_rgba(0,0,0,0.08)] ${item.iconClassName}`}
                    >
                      <HighlightIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[13px] font-bold uppercase leading-none text-[#6E6E73]">
                        {item.label}
                      </span>
                      <span className="mt-2 block text-[19px] font-bold leading-6 text-[#1D1D1F]">
                        {item.value}
                      </span>
                      <span className="mt-1 block text-[13px] leading-5 text-[#6E6E73]">
                        {item.detail}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className="relative min-h-[300px] overflow-hidden rounded-[32px] bg-white shadow-[0_28px_80px_rgba(0,0,0,0.12),inset_0_0_0_1px_rgba(0,0,0,0.06)] sm:min-h-[340px] lg:min-h-[390px]"
            role="img"
            aria-label="Lightweight service interface showing web, ecommerce, AI, and analytics panels."
          >
            <Image
              src="/images/devlentra-services-3d.png"
              alt="3D illustration of web, ecommerce, code, analytics, and chat service panels with rupee coins."
              fill
              unoptimized
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 max-w-[220px] rounded-[24px] bg-white/88 px-4 py-3 text-left shadow-[0_18px_50px_rgba(0,0,0,0.15)] backdrop-blur-xl">
              <p className="text-[11px] font-bold uppercase leading-none tracking-[0.12em] text-[#0071E3]">
                Entry builds from
              </p>
              <p className="mt-1 text-[34px] font-bold leading-none tracking-[-0.045em] text-[#1D1D1F]">
                Rs 799
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {services.map((service, index) => (
            <ServiceTile
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
