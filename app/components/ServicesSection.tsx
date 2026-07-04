import Image from "next/image";
import { services } from "../data/services";
import { ServiceTile } from "./ServiceTile";

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
            <p className="apple-body mx-auto mt-5 max-w-[760px] lg:mx-0">
              WordPress starts at Rs 1,499, Shopify at Rs 1,699, and React or
              Next.js websites at Rs 1,799. Larger API, AI, dashboard, and
              full-stack builds are scoped honestly after a quick discussion.
            </p>
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
