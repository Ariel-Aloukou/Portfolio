import { PortfolioHero } from "./components/sections/PortfolioHero";
import { HowItWorks } from "./components/sections/HowItWorks";
import { FeaturesGrid } from "./components/sections/FeaturesGrid";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { Faq } from "./components/sections/Faq";
import { Footer } from "./components/sections/Footer";
import { LoadingScreen } from "./components/sections/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main>
        <PortfolioHero />
        <HowItWorks />
        <FeaturesGrid />
        <ProjectsSection />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
