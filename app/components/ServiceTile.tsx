import type { Service } from "../data/services";
import { AppleButton } from "./AppleButton";

type ServiceTileProps = {
  service: Service;
  index: number;
};

const toneClass: Record<Service["tone"], string> = {
  blue: "from-[#EAF3FF] via-white to-[#F5F5F7]",
  green: "from-[#EAFBF2] via-white to-[#F5F5F7]",
  violet: "from-[#F5EEFF] via-white to-[#F5F5F7]",
  orange: "from-[#FFF3E5] via-white to-[#F5F5F7]",
  graphite: "from-[#F5F5F7] via-white to-[#ECECF1]",
};

export function ServiceTile({ service, index }: ServiceTileProps) {
  const Icon = service.icon;

  return (
    <article
      className="apple-product-tile min-h-[220px] p-5 sm:p-6"
      style={{ animationDelay: `${Math.min(index * 45, 280)}ms` }}
    >
      <div className="relative z-10 grid h-full gap-5 md:grid-cols-[minmax(0,1fr)_210px] md:items-stretch xl:grid-cols-[minmax(0,1fr)_240px]">
        <div className="flex min-w-0 flex-col">
          <div className="flex items-center justify-between gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] bg-[#F5F5F7] text-[#0071E3] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="rounded-full bg-[#EAF3FF] px-3 py-1 text-xs font-semibold text-[#0066CC]">
              {service.startingAt}
            </span>
          </div>
          <h3 className="mt-5 max-w-[460px] text-[28px] font-bold leading-[1.08] tracking-[-0.04em] text-[#1D1D1F] sm:text-[32px]">
            {service.title}
          </h3>
          <p className="mt-3 max-w-[560px] text-[16px] leading-6 text-[#6E6E73]">
            {service.description}
          </p>
          <div className="mt-auto pt-4">
            <AppleButton href="#contact" variant="link">
              Learn more
            </AppleButton>
          </div>
        </div>
        <div className="min-h-[142px] md:min-h-0">
          <div
            className={`relative h-full min-h-[142px] overflow-hidden rounded-[22px] bg-gradient-to-br ${toneClass[service.tone]} shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]`}
            aria-hidden="true"
          >
            <div className="absolute left-4 top-4 h-4 w-20 rounded-full bg-white/90 shadow-sm" />
            <div className="absolute right-4 top-4 h-4 w-12 rounded-full bg-[#0071E3]/20" />
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-4 gap-2">
              {[38, 66, 52, 78].map((height, barIndex) => (
                <span
                  key={`${service.title}-${barIndex}`}
                  className="rounded-t-2xl bg-[#0071E3]/70"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
            <div className="absolute right-5 top-12 h-14 w-14 rounded-[20px] bg-white/80 shadow-[0_18px_40px_rgba(0,0,0,0.08)]" />
          </div>
        </div>
      </div>
    </article>
  );
}
