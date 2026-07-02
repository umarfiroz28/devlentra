import type { Service } from "../data/services";
import { AppleButton } from "./AppleButton";

type ServiceTileProps = {
  service: Service;
  featured?: boolean;
  index: number;
};

const toneClass: Record<Service["tone"], string> = {
  blue: "from-[#EAF3FF] via-white to-[#F5F5F7]",
  green: "from-[#EAFBF2] via-white to-[#F5F5F7]",
  violet: "from-[#F5EEFF] via-white to-[#F5F5F7]",
  orange: "from-[#FFF3E5] via-white to-[#F5F5F7]",
  graphite: "from-[#F5F5F7] via-white to-[#ECECF1]",
};

export function ServiceTile({ service, featured = false, index }: ServiceTileProps) {
  const Icon = service.icon;

  return (
    <article
      className={`apple-product-tile min-h-[360px] p-7 sm:p-8 ${
        featured ? "md:col-span-2 md:min-h-[430px]" : ""
      }`}
      style={{ animationDelay: `${Math.min(index * 45, 280)}ms` }}
    >
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-[#F5F5F7] text-[#0071E3] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="rounded-full bg-[#EAF3FF] px-3 py-1 text-xs font-semibold text-[#0066CC]">
            {service.startingAt}
          </span>
        </div>
        <h3 className="apple-card-title mt-7 max-w-[560px]">{service.title}</h3>
        <p className="mt-4 max-w-[600px] text-[17px] leading-7 text-[#6E6E73]">
          {service.description}
        </p>
        <div className="mt-5">
          <AppleButton href="#contact" variant="link">
            Learn more
          </AppleButton>
        </div>
        <div className="mt-auto pt-8">
          <div
            className={`relative h-32 overflow-hidden rounded-[26px] bg-gradient-to-br ${toneClass[service.tone]} shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] ${
              featured ? "sm:h-40" : ""
            }`}
            aria-hidden="true"
          >
            <div className="absolute left-5 top-5 h-5 w-24 rounded-full bg-white/90 shadow-sm" />
            <div className="absolute right-5 top-5 h-5 w-14 rounded-full bg-[#0071E3]/20" />
            <div className="absolute bottom-5 left-5 right-5 grid grid-cols-4 gap-2">
              {[42, 72, 58, 88].map((height, barIndex) => (
                <span
                  key={`${service.title}-${barIndex}`}
                  className="rounded-t-2xl bg-[#0071E3]/70"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
            <div className="absolute right-7 top-14 h-16 w-16 rounded-[22px] bg-white/80 shadow-[0_18px_40px_rgba(0,0,0,0.08)]" />
          </div>
        </div>
      </div>
    </article>
  );
}
