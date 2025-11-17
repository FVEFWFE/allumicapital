import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_background_business_meeting_e446aa23.png";

export default function HeroSection() {
  const handleCTAClick = () => {
    console.log('Our Story CTA clicked');
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-tight" data-testid="text-hero-title">
          Creating ambitious returns by investing in meaningful growth partnerships
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
          Building successful partnerships with likeminded founders, owners, families, and their businesses across Australia and New Zealand
        </p>
        <Button
          onClick={handleCTAClick}
          size="lg"
          className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
          data-testid="button-our-story"
        >
          Our Story
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
