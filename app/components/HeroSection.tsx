import { AppleButton } from "./AppleButton";
import { HeroProductScene } from "./HeroProductScene";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="overflow-hidden bg-[#F5F5F7] px-4 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8"
    >
      <div className="mx-auto max-w-[1060px] text-center">
        <p className="apple-eyebrow">Websites. AI. Data. Full-stack products.</p>
        <h1 id="hero-title" className="apple-headline mx-auto mt-4 max-w-[980px] text-balance">
          Build your next digital product beautifully.
        </h1>
        <p className="apple-body mx-auto mt-6 max-w-[760px] text-balance">
          Premium websites, AI automations, ecommerce stores, dashboards, and
          full-stack applications for Indian and global businesses.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <AppleButton href="#contact" variant="primary">
            Start a Project
          </AppleButton>
          <AppleButton href="#services" variant="link">
            Explore services
          </AppleButton>
        </div>
      </div>
      <HeroProductScene />
    </section>
  );
}
