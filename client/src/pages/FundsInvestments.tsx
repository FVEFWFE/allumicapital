import Header from "@/components/Header";
import Footer from "@/components/Footer";
import placeholderLogo from "@assets/stock_images/placeholder_company__ac6c9c85.jpg";
import { useState } from "react";

export default function FundsInvestments() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["All", "Healthcare", "Technology", "Consumer", "Industrial", "Financial Services"];

  const portfolioCompanies = [
    { name: "Carlisle Health", category: "Healthcare" },
    { name: "Motor One", category: "Consumer" },
    { name: "Prime100", category: "Consumer" },
    { name: "Burson Auto Parts", category: "Industrial" },
    { name: "Tower Software", category: "Technology" },
    { name: "Seniors Money", category: "Financial Services" },
    { name: "OGL", category: "Industrial" },
    { name: "MyMC", category: "Consumer" },
    { name: "Barbeques Galore", category: "Consumer" },
    { name: "ATF", category: "Technology" },
    { name: "Amart", category: "Consumer" },
    { name: "Craveable Brands", category: "Consumer" },
    { name: "IPG", category: "Healthcare" },
    { name: "Summerset", category: "Healthcare" },
    { name: "Virtus Health", category: "Healthcare" },
    { name: "Isentia", category: "Technology" },
    { name: "City Farmers", category: "Consumer" },
    { name: "CQMS Razer", category: "Industrial" },
    { name: "APN Outdoor", category: "Consumer" },
    { name: "Estia Health", category: "Healthcare" },
    { name: "RPF", category: "Financial Services" },
    { name: "Hunter St", category: "Financial Services" },
    { name: "Journey Beyond", category: "Consumer" },
    { name: "Fitness Lifestyle Group", category: "Consumer" },
    { name: "Peter Warren", category: "Consumer" },
    { name: "Junior Adventures", category: "Consumer" },
    { name: "QMS", category: "Technology" },
    { name: "TGI Sport", category: "Consumer" },
    { name: "ProbeCX", category: "Technology" },
    { name: "TDG", category: "Technology" },
    { name: "Partnered Health", category: "Healthcare" },
    { name: "Jaybro", category: "Industrial" },
    { name: "Aidacare", category: "Healthcare" },
    { name: "Love to Dream", category: "Consumer" },
    { name: "Grays", category: "Industrial" },
    { name: "Adore Beauty", category: "Consumer" },
    { name: "Papinelle", category: "Consumer" },
    { name: "Care Associates", category: "Healthcare" },
    { name: "Southern Star", category: "Healthcare" },
    { name: "Seertech", category: "Technology" },
    { name: "Bastion", category: "Technology" },
    { name: "Circuitwise", category: "Technology" },
    { name: "Connetico", category: "Technology" },
    { name: "Canva", category: "Technology" },
    { name: "Fitzpatrick", category: "Industrial" },
    { name: "NZ Health Group", category: "Healthcare" },
    { name: "Birch & Waite", category: "Consumer" },
    { name: "Ritebite", category: "Consumer" },
  ];

  const filteredCompanies = selectedCategory === "all" 
    ? portfolioCompanies 
    : portfolioCompanies.filter(c => c.category.toLowerCase() === selectedCategory);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32">
        <section className="py-20 md:py-32">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="text-center mb-16">
              <div className="text-xs font-light tracking-[0.2em] text-white/50 uppercase mb-8" data-testid="text-section-label">
                Portfolio
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white mb-8" data-testid="text-portfolio-title">
                Funds & Investments
              </h1>
              <p className="text-lg font-light text-white/70 leading-relaxed max-w-3xl mx-auto" data-testid="text-portfolio-subtitle">
                Allumi's portfolio of managed funds and investments has enabled exponential growth for companies based in Australia and New Zealand.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                  className={`px-6 py-2 text-xs font-light tracking-[0.15em] uppercase border transition-colors ${
                    selectedCategory === category.toLowerCase()
                      ? 'bg-white text-black border-white'
                      : 'bg-transparent text-white/70 border-white/20 hover:border-white/40 hover:text-white'
                  }`}
                  data-testid={`button-filter-${category.toLowerCase()}`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-px bg-white/5 border border-white/5">
              {filteredCompanies.map((company, index) => (
                <div
                  key={index}
                  className="aspect-square bg-black flex flex-col items-center justify-center p-8 hover:bg-white/5 transition-colors cursor-pointer group"
                  data-testid={`card-company-${index}`}
                >
                  <img
                    src={placeholderLogo}
                    alt={company.name}
                    className="w-16 h-16 object-contain opacity-40 group-hover:opacity-70 transition-opacity grayscale mb-4"
                  />
                  <span className="text-xs font-light text-white/40 text-center group-hover:text-white/60 transition-colors">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
