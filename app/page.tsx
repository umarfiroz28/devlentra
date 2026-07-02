import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { MotionShowcaseSection } from "./components/MotionShowcaseSection";
import { PackagesSection } from "./components/PackagesSection";
import { ProcessSection } from "./components/ProcessSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ServicesSection } from "./components/ServicesSection";
import { WhyChooseSection } from "./components/WhyChooseSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
        <HeroSection />
        <ServicesSection />
        <MotionShowcaseSection />
        <ProjectsSection />
        <ProcessSection />
        <WhyChooseSection />
        <PackagesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
