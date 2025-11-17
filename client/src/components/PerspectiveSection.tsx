import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import perspectiveImage from "@assets/generated_images/Perspective_section_office_team_8f9e8783.png";

export default function PerspectiveSection() {
  const handleAboutClick = () => {
    console.log('About link clicked');
  };

  return (
    <section id="about" className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[3/4] rounded-md overflow-hidden">
            <img
              src={perspectiveImage}
              alt="Quadrant team collaboration"
              className="w-full h-full object-cover"
              data-testid="img-perspective"
            />
          </div>

          <div className="space-y-6">
            <div className="text-sm font-medium tracking-widest text-muted-foreground uppercase" data-testid="text-section-label">
              Perspective
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight" data-testid="text-perspective-title">
              The difference between a great business and an amazing one is the people involved
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-perspective-description">
              That's why every single one of our investments is, first and foremost, a partnership – an alignment of complementary experiences, skill sets, connections and personalities.
            </p>
            <Button
              variant="outline"
              onClick={handleAboutClick}
              className="mt-4"
              data-testid="button-about"
            >
              About
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
