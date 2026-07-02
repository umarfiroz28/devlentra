"use client";

import { services } from "../data/site";
import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-[#F5F5F7] px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-[#E8E8ED]" />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="Everything a modern business needs to launch, automate, and scale."
            description="Premium frontend design, practical engineering, AI automation, ecommerce, data, and full-stack delivery in one focused team."
          />
          <p className="max-w-sm text-sm leading-7 text-[#86868B]">
            Clean reusable data keeps the service offer easy to refine as real packages,
            case studies, and proof points are added.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
