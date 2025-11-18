import Header from "@/components/Header";
import Footer from "@/components/Footer";
import perspectiveImage from "@assets/quadrant-office.webp";

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32">
        <section className="py-20 md:py-32">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-4xl">
              <div className="text-xs font-light tracking-[0.2em] text-white/50 uppercase mb-8" data-testid="text-section-label">
                About
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white mb-12" data-testid="text-about-title">
                Creating ambitious returns by investing in meaningful and successful growth partnerships
              </h1>
              <p className="text-lg font-light text-white/70 leading-relaxed mb-8" data-testid="text-about-intro">
                Allumi partners with exceptional businesses and management teams across Asia to create long-term value through strategic growth and operational excellence.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={perspectiveImage}
                  alt="Our team"
                  className="w-full h-full object-cover"
                  data-testid="img-about-team"
                />
              </div>

              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-light leading-tight text-white" data-testid="text-philosophy-title">
                  Our Philosophy
                </h2>
                <p className="text-lg font-light text-white/70 leading-relaxed">
                  The difference between a great business and an amazing one is the people involved. That's why we approach each investment as, first and foremost, a partnership – an alignment of complementary experiences, skill sets, connections and personalities.
                </p>
                <p className="text-lg font-light text-white/70 leading-relaxed">
                  We believe in building lasting relationships with founders, owners, and families, working together to unlock the full potential of their businesses through strategic guidance, operational excellence, and access to our extensive network.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-[1400px] mx-auto px-8">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-16 text-center" data-testid="text-approach-title">
              Our Approach
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4" data-testid="card-approach-1">
                <h3 className="text-xl font-light text-white">Partnership First</h3>
                <p className="text-base font-light text-white/60 leading-relaxed">
                  We invest in people as much as businesses, fostering collaborative relationships built on trust and shared vision.
                </p>
              </div>
              
              <div className="space-y-4" data-testid="card-approach-2">
                <h3 className="text-xl font-light text-white">Strategic Growth</h3>
                <p className="text-base font-light text-white/60 leading-relaxed">
                  Our hands-on approach combines strategic guidance with operational expertise to drive sustainable growth.
                </p>
              </div>
              
              <div className="space-y-4" data-testid="card-approach-3">
                <h3 className="text-xl font-light text-white">Long-term Value</h3>
                <p className="text-base font-light text-white/60 leading-relaxed">
                  We focus on creating enduring value for all stakeholders through disciplined investment and active partnership.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
