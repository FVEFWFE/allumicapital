import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PerspectiveSection from "@/components/PerspectiveSection";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PerspectiveSection />
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  );
}
