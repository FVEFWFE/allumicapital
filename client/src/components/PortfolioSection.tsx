import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import placeholderLogo from "@assets/stock_images/placeholder_company__ac6c9c85.jpg";

export default function PortfolioSection() {
  const handleViewAllClick = () => {
    console.log('View All Funds & Investments clicked');
  };

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
  ];

  return (
    <section className="py-20 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4" data-testid="text-portfolio-title">
            Funds & Investments
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto" data-testid="text-portfolio-subtitle">
            Quadrant's portfolio of managed funds and investments has enabled exponential growth for companies based in Australia and New Zealand
          </p>
          <Button
            variant="outline"
            onClick={handleViewAllClick}
            data-testid="button-view-all"
          >
            View All Funds & Investments
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-12">
          {portfolioCompanies.map((company, index) => (
            <Card
              key={index}
              className="aspect-square flex items-center justify-center p-6 hover-elevate cursor-pointer transition-all grayscale hover:grayscale-0"
              data-testid={`card-portfolio-${index}`}
            >
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  src={placeholderLogo}
                  alt={company}
                  className="w-12 h-12 object-contain opacity-60"
                />
                <span className="text-xs font-medium text-center text-muted-foreground">
                  {company}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
