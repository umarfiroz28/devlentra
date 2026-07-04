import { Mail, Phone } from "lucide-react";
import { brand } from "../data/site";
import { AppleButton } from "./AppleButton";
import { HeroProductScene } from "./HeroProductScene";

const phoneHref = `tel:${brand.phone.replace(/[^\d+]/g, "")}`;
const emailHref = `mailto:${brand.email}`;

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="overflow-hidden bg-[#F5F5F7] px-4 py-12 sm:px-6 sm:py-14 lg:min-h-[calc(100svh-var(--apple-nav-height))] lg:px-8 lg:py-10 xl:py-12"
    >
      <div className="apple-wide-container grid min-h-0 items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
        <div className="relative z-10 max-w-[610px] text-center lg:text-left">
          <h1
            id="hero-title"
            className="max-w-[620px] text-[clamp(42px,5vw,68px)] font-bold leading-[1] tracking-normal text-[#1D1D1F] text-balance"
          >
            Full-stack software, websites, AI, and automation built beautifully.
          </h1>
          <p className="mt-4 max-w-[570px] text-[17px] leading-7 tracking-normal text-[#6E6E73] text-balance sm:text-[18px]">
            Full-stack software and automation services for businesses that need
            fast websites, React interfaces, Java and Node APIs, Go services,
            AWS systems, GenAI workflows, and affordable launch-ready builds.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <AppleButton href="#contact" variant="primary">
              Start a Project
            </AppleButton>
            <AppleButton href="#services" variant="link" className="min-h-11">
              View starter pricing
            </AppleButton>
          </div>
          <div className="mt-6 grid gap-3 text-left sm:grid-cols-3 lg:max-w-[560px]">
            {[
              ["WordPress", "from Rs 1,499"],
              ["Shopify", "from Rs 1,699"],
              ["React", "from Rs 1,799"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[18px] bg-white/84 p-3 shadow-[0_12px_36px_rgba(0,0,0,0.07),inset_0_0_0_1px_rgba(0,113,227,0.08)] backdrop-blur-xl"
              >
                <p className="text-sm font-semibold text-[#1D1D1F]">{label}</p>
                <p className="mt-2 inline-flex rounded-full bg-[#EAF3FF] px-2.5 py-1 text-xs font-bold text-[#0066CC]">
                  {value}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[13px] font-semibold lg:justify-start">
            <a
              href={phoneHref}
              className="apple-focus inline-flex min-h-9 items-center gap-2 rounded-full bg-white px-3 text-[#1D1D1F] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] transition hover:bg-[#EAF3FF]"
            >
              <Phone className="h-3.5 w-3.5 text-[#0071E3]" aria-hidden="true" />
              {brand.phone}
            </a>
            <a
              href={emailHref}
              className="apple-focus inline-flex min-h-9 items-center gap-2 rounded-full bg-white px-3 text-[#1D1D1F] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] transition hover:bg-[#EAF3FF]"
            >
              <Mail className="h-3.5 w-3.5 text-[#0071E3]" aria-hidden="true" />
              {brand.email}
            </a>
          </div>
        </div>
        <div className="relative">
          <HeroProductScene />
        </div>
      </div>
    </section>
  );
}
