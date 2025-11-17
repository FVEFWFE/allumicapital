import { Link } from "wouter";
import placeholderLogo from "@assets/stock_images/placeholder_company__ac6c9c85.jpg";

export default function PortfolioSection() {
  const portfolioCompanies = [
    "Carlisle Health", "Motor One", "Prime100", "Burson Auto Parts",
    "Tower Software", "Seniors Money", "OGL", "MyMC",
    "Barbeques Galore", "ATF", "Amart", "Craveable Brands",
    "IPG", "Summerset", "Virtus Health", "Isentia",
    "City Farmers", "CQMS Razer", "APN Outdoor", "Estia Health",
    "RPF", "Hunter St", "Journey Beyond", "Fitness Lifestyle Group",
    "Peter Warren", "Junior Adventures", "QMS", "TGI Sport",
    "ProbeCX", "TDG", "Partnered Health", "Jaybro",
    "Aidacare", "Love to Dream", "Grays", "Adore Beauty",
    "Papinelle", "Care Associates", "Southern Star", "Seertech",
    "Bastion", "Circuitwise", "Connetico", "Canva",
    "Fitzpatrick", "NZ Health Group", "Birch & Waite", "Ritebite",
    "Affinity Education", "Kathmandu", "Quad Lock", "Icon",
    "APM", "CDC", "TEEG", "Zip Water",
    "Modibodi", "ARQ", "TSA Riley", "Qscan",
    "Evolution Surgical", "EMM", "Superior Food", "Enrich Health",
    "Mazzucchellis", "Tyrecorp", "Herron Todd White", "Legal Vision",
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6" data-testid="text-portfolio-title">
            Funds & Investments
          </h2>
          <p className="text-lg font-light text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="text-portfolio-subtitle">
            Allumi's portfolio of managed funds/investments has enabled exponential growth for companies based in Australia and New Zealand.
          </p>
          <Link href="/funds-investments" data-testid="link-view-all">
            <span className="inline-block text-xs font-light tracking-[0.2em] text-white uppercase border-b border-white/40 hover:border-white pb-1 cursor-pointer transition-colors">
              View All Funds & Investments
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-px bg-white/5 border border-white/5 mt-16">
          {portfolioCompanies.map((company, index) => (
            <div
              key={index}
              className="aspect-square bg-black flex items-center justify-center p-8 hover:bg-white/5 transition-colors cursor-pointer group"
              data-testid={`card-portfolio-${index}`}
            >
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  src={placeholderLogo}
                  alt={company}
                  className="w-16 h-16 object-contain opacity-40 group-hover:opacity-70 transition-opacity grayscale"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
