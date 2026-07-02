import { services } from "../data/services";
import { ServiceTile } from "./ServiceTile";

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-[#F5F5F7] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="apple-wide-container">
        <div className="mx-auto max-w-[920px] text-center">
          <p className="apple-eyebrow">Services</p>
          <h2 id="services-title" className="apple-section-title mt-3 text-balance">
            High-demand services at practical starter prices.
          </h2>
          <p className="apple-body mx-auto mt-5 max-w-[760px]">
            WordPress starts at Rs 1,499, Shopify at Rs 1,699, and React or
            Next.js websites at Rs 1,799. Larger API, AI, dashboard, and
            full-stack builds are scoped honestly after a quick discussion.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceTile
              key={service.title}
              service={service}
              index={index}
              featured={index < 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
