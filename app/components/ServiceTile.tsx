import type { Service } from "../data/services";
import { AppleButton } from "./AppleButton";

type ServiceTileProps = {
  service: Service;
  index: number;
};

const toneClass: Record<Service["tone"], string> = {
  blue: "from-[#EAF3FF] via-white to-[#F7FBFF]",
  green: "from-[#EAFBF2] via-white to-[#F7FFFB]",
  violet: "from-[#F5EEFF] via-white to-[#FBF7FF]",
  orange: "from-[#FFF3E5] via-white to-[#FFFBF5]",
  graphite: "from-[#F8F8FA] via-white to-[#ECECF1]",
};

const toneAccent: Record<
  Service["tone"],
  {
    icon: string;
    iconBg: string;
    priceGlow: string;
    dot: string;
    line: string;
    coin: string;
    shadow: string;
  }
> = {
  blue: {
    icon: "text-[#0066CC]",
    iconBg: "from-[#DCEEFF] to-[#FFFFFF]",
    priceGlow: "shadow-[0_18px_45px_rgba(0,113,227,0.24)]",
    dot: "bg-[#0071E3]",
    line: "bg-[#0071E3]/70",
    coin: "from-[#45A6FF] to-[#0066CC]",
    shadow: "shadow-[0_26px_55px_rgba(0,113,227,0.20)]",
  },
  green: {
    icon: "text-[#0B7F5B]",
    iconBg: "from-[#DDF8EA] to-[#FFFFFF]",
    priceGlow: "shadow-[0_18px_45px_rgba(16,185,129,0.22)]",
    dot: "bg-[#16A36B]",
    line: "bg-[#14B878]/70",
    coin: "from-[#5EE0A4] to-[#0B8F62]",
    shadow: "shadow-[0_26px_55px_rgba(20,184,120,0.18)]",
  },
  violet: {
    icon: "text-[#7A3EF2]",
    iconBg: "from-[#EEE2FF] to-[#FFFFFF]",
    priceGlow: "shadow-[0_18px_45px_rgba(122,62,242,0.20)]",
    dot: "bg-[#8A5CFF]",
    line: "bg-[#8A5CFF]/70",
    coin: "from-[#A78BFA] to-[#6D40F2]",
    shadow: "shadow-[0_26px_55px_rgba(122,62,242,0.18)]",
  },
  orange: {
    icon: "text-[#B65A00]",
    iconBg: "from-[#FFE6C7] to-[#FFFFFF]",
    priceGlow: "shadow-[0_18px_45px_rgba(245,158,11,0.24)]",
    dot: "bg-[#F59E0B]",
    line: "bg-[#F59E0B]/70",
    coin: "from-[#FFD166] to-[#D97706]",
    shadow: "shadow-[0_26px_55px_rgba(245,158,11,0.18)]",
  },
  graphite: {
    icon: "text-[#34343A]",
    iconBg: "from-[#ECECF1] to-[#FFFFFF]",
    priceGlow: "shadow-[0_18px_45px_rgba(29,29,31,0.16)]",
    dot: "bg-[#6E6E73]",
    line: "bg-[#6E6E73]/70",
    coin: "from-[#A4A4AD] to-[#34343A]",
    shadow: "shadow-[0_26px_55px_rgba(29,29,31,0.14)]",
  },
};

export function ServiceTile({ service, index }: ServiceTileProps) {
  const Icon = service.icon;
  const accent = toneAccent[service.tone];
  const price = service.startingAt.replace("Starts at ", "");
  const priceNumber = Number(price.replace(/[^\d]/g, ""));
  const badgeLabel = priceNumber <= 1799 ? "Low starter price" : "Starter price";

  return (
    <article
      className="apple-product-tile min-h-[280px] p-5 sm:p-6"
      style={{ animationDelay: `${Math.min(index * 45, 280)}ms` }}
    >
      <div className="relative z-10 grid h-full gap-5 md:grid-cols-[minmax(0,1fr)_230px] md:items-stretch xl:grid-cols-[minmax(0,1fr)_260px]">
        <div className="flex min-w-0 flex-col">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <span className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-gradient-to-br ${accent.iconBg} ${accent.shadow} ring-1 ring-white/90`}>
                <span className="absolute inset-[1px] rounded-[19px] bg-white/45" />
                <Icon className={`relative h-6 w-6 ${accent.icon}`} aria-hidden="true" />
              </span>
              <span className="rounded-full bg-[#F5F5F7] px-3 py-1 text-[11px] font-bold uppercase leading-none tracking-[0.11em] text-[#6E6E73] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
                {badgeLabel}
              </span>
            </div>
            <div className={`rounded-[22px] bg-[#1D1D1F] px-4 py-3 text-right text-white ${accent.priceGlow}`}>
              <p className="text-[10px] font-bold uppercase leading-none tracking-[0.12em] text-white/58">
                Starts at
              </p>
              <p className="mt-1 text-[28px] font-bold leading-none tracking-[-0.045em] sm:text-[31px]">
                {price}
              </p>
            </div>
          </div>
          <h3 className="mt-6 max-w-[460px] text-[28px] font-bold leading-[1.08] tracking-[-0.04em] text-[#1D1D1F] sm:text-[32px]">
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
        <div className="min-h-[190px] md:min-h-0">
          <div
            className={`surface-3d relative h-full min-h-[190px] overflow-hidden rounded-[24px] bg-gradient-to-br ${toneClass[service.tone]} shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]`}
            aria-hidden="true"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/62 blur-2xl" />
            <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/70 blur-2xl" />
            <div className="absolute left-5 top-5 flex gap-2">
              <span className={`h-3 w-3 rounded-full ${accent.dot} shadow-[0_5px_18px_rgba(0,0,0,0.12)]`} />
              <span className="h-3 w-3 rounded-full bg-white shadow-[0_5px_18px_rgba(0,0,0,0.10)]" />
              <span className="h-3 w-3 rounded-full bg-[#1D1D1F]/18 shadow-[0_5px_18px_rgba(0,0,0,0.08)]" />
            </div>
            <div className="absolute left-7 top-14 h-24 w-28 rotate-[-8deg] rounded-[28px] bg-white/82 shadow-[0_28px_60px_rgba(0,0,0,0.14)] backdrop-blur-xl">
              <div className={`absolute -right-4 -top-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${accent.coin} text-white shadow-[0_18px_32px_rgba(0,0,0,0.18)]`}>
                <Icon className="h-6 w-6" />
              </div>
              <div className="absolute bottom-5 left-5 right-5 grid gap-2">
                <span className={`h-2 rounded-full ${accent.line}`} />
                <span className="h-2 w-4/5 rounded-full bg-[#1D1D1F]/12" />
                <span className="h-2 w-3/5 rounded-full bg-[#1D1D1F]/10" />
              </div>
            </div>
            <div className="absolute bottom-5 right-5 h-28 w-36 rotate-[5deg] rounded-[26px] bg-white/72 shadow-[0_30px_70px_rgba(0,0,0,0.16)] backdrop-blur-xl">
              <div className="absolute left-4 right-4 top-4 h-3 rounded-full bg-[#1D1D1F]/10" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end gap-2">
                {[42, 66, 54, 82].map((height, barIndex) => (
                  <span
                    key={`${service.title}-${barIndex}`}
                    className={`flex-1 rounded-t-2xl ${barIndex === 1 ? accent.line : "bg-[#1D1D1F]/14"}`}
                    style={{ height: `${height}px` }}
                  />
                ))}
              </div>
            </div>
            <div className="absolute right-8 top-10 h-12 w-12 rounded-full bg-white/70 shadow-[0_18px_44px_rgba(0,0,0,0.12)]" />
            <div className={`absolute right-14 top-24 h-8 w-8 rounded-full bg-gradient-to-br ${accent.coin} opacity-90 shadow-[0_14px_28px_rgba(0,0,0,0.16)]`} />
            <div className="absolute bottom-8 left-8 h-5 w-16 rounded-full bg-white/80 shadow-[0_12px_28px_rgba(0,0,0,0.10)]" />
            <div className="absolute bottom-14 left-24 h-4 w-12 rounded-full bg-white/55 shadow-[0_12px_28px_rgba(0,0,0,0.08)]" />
            <div className="absolute inset-x-5 bottom-4 h-px bg-gradient-to-r from-transparent via-[#1D1D1F]/12 to-transparent" />
          </div>
        </div>
      </div>
    </article>
  );
}
