import { AppleButton } from "./AppleButton";
import { HeroProductScene } from "./HeroProductScene";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="overflow-hidden bg-[#F5F5F7] px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8"
    >
      <div className="apple-wide-container grid min-h-[calc(100vh-44px)] items-center gap-10 py-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 lg:py-10">
        <div className="relative z-10 max-w-[640px] text-center lg:text-left">
          <p className="apple-eyebrow">Devlentra by Umar Firoz.</p>
          <h1 id="hero-title" className="apple-headline mt-4 max-w-[680px] text-balance">
            Full-stack software, websites, AI, and automation built beautifully.
          </h1>
          <p className="apple-body mt-6 max-w-[620px] text-balance">
            I am a full-stack software engineer with 3.5 years of experience across
            IBM, Leadzen.ai, and Glabbr Technologies, building React interfaces,
            Java and Node APIs, Go services, AWS systems, GenAI workflows, and
            affordable business websites.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <AppleButton href="#contact" variant="primary">
              Start a Project
            </AppleButton>
            <AppleButton href="#services" variant="link">
              View starter pricing
            </AppleButton>
          </div>
          <div className="mt-9 grid gap-3 text-left sm:grid-cols-3 lg:max-w-[600px]">
            {[
              ["WordPress", "from Rs 1,499"],
              ["Shopify", "from Rs 1,699"],
              ["React", "from Rs 1,799"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[22px] bg-white/78 p-4 shadow-[0_12px_36px_rgba(0,0,0,0.07),inset_0_0_0_1px_rgba(0,0,0,0.06)] backdrop-blur-xl"
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
