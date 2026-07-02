import { AppleButton } from "./AppleButton";
import { HeroProductScene } from "./HeroProductScene";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="overflow-hidden bg-[#F5F5F7] px-4 py-10 sm:px-6 lg:h-[calc(100vh-var(--apple-nav-height))] lg:px-8 lg:py-0"
    >
      <div className="apple-wide-container grid h-full min-h-0 items-center gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
        <div className="relative z-10 max-w-[610px] text-center lg:text-left">
          <p className="text-[18px] font-semibold leading-tight tracking-[-0.01em] text-[#6E6E73]">
            Devlentra.
          </p>
          <h1
            id="hero-title"
            className="mt-3 max-w-[620px] text-[clamp(42px,5.4vw,74px)] font-bold leading-[0.98] tracking-[-0.055em] text-[#1D1D1F] text-balance"
          >
            Full-stack software, websites, AI, and automation built beautifully.
          </h1>
          <p className="mt-4 max-w-[570px] text-[17px] leading-7 tracking-[-0.012em] text-[#6E6E73] text-balance sm:text-[18px]">
            Full-stack software and automation services for businesses that need
            fast websites, React interfaces, Java and Node APIs, Go services,
            AWS systems, GenAI workflows, and affordable launch-ready builds.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
            <AppleButton href="#contact" variant="primary">
              Start a Project
            </AppleButton>
            <AppleButton href="#services" variant="link">
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
                className="rounded-[18px] bg-white/78 p-3 shadow-[0_12px_36px_rgba(0,0,0,0.07),inset_0_0_0_1px_rgba(0,0,0,0.06)] backdrop-blur-xl"
              >
                <p className="text-sm font-semibold text-[#1D1D1F]">{label}</p>
                <p className="mt-1 text-xs text-[#6E6E73]">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative lg:-mr-8 xl:-mr-12">
          <HeroProductScene />
        </div>
      </div>
    </section>
  );
}
