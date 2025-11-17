import { Link } from "wouter";
import perspectiveImage from "@assets/generated_images/Perspective_section_office_team_8f9e8783.png";

export default function PerspectiveSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-black">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={perspectiveImage}
              alt="Allumi team collaboration"
              className="w-full h-full object-cover"
              data-testid="img-perspective"
            />
          </div>

          <div className="space-y-8">
            <div className="text-xs font-light tracking-[0.2em] text-white/50 uppercase" data-testid="text-section-label">
              Perspective
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-white" data-testid="text-perspective-title">
              The difference between a great business and an amazing one is the people involved.
            </h2>
            <p className="text-lg font-light text-white/70 leading-relaxed" data-testid="text-perspective-description">
              That's why every single one of our investments is, first and foremost, a partnership – an alignment of complementary experiences, skill sets, connections and personalities.
            </p>
            <Link href="/about" data-testid="link-about">
              <span className="inline-block text-xs font-light tracking-[0.2em] text-white uppercase border-b border-white/40 hover:border-white pb-1 cursor-pointer transition-colors mt-4">
                ABOUT
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
