import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { GlobalNav } from "./components/GlobalNav";
import { HeroSection } from "./components/HeroSection";
import { PricingSection } from "./components/PricingSection";
import { ProcessSection } from "./components/ProcessSection";
import { ServicesSection } from "./components/ServicesSection";
import { ShowcaseSection } from "./components/ShowcaseSection";
import { WorkSection } from "./components/WorkSection";

export default function Home() {
  return (
    <>
      <GlobalNav />
      <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
        <HeroSection />
        <ServicesSection />
        <ShowcaseSection />
        <WorkSection />
        <ProcessSection />
        <PricingSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
