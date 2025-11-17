import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription submitted');
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4" data-testid="text-footer-brand">
              Quadrant
            </h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed" data-testid="text-footer-tagline">
              Creating ambitious returns through meaningful partnerships and strategic investments
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4" data-testid="text-footer-links-title">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" data-testid="link-footer-about">
                  <span className="text-sm text-primary-foreground/80 hover:text-primary-foreground cursor-pointer">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/funds-investments" data-testid="link-footer-investments">
                  <span className="text-sm text-primary-foreground/80 hover:text-primary-foreground cursor-pointer">
                    Our Portfolio
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" data-testid="link-footer-contact">
                  <span className="text-sm text-primary-foreground/80 hover:text-primary-foreground cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4" data-testid="text-footer-contact-title">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80" data-testid="text-footer-email">
                info@quadrantpe.com
              </li>
              <li className="text-sm text-primary-foreground/80" data-testid="text-footer-location">
                Sydney, Australia
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4" data-testid="text-footer-newsletter-title">Stay Connected</h4>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Email address"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                data-testid="input-newsletter-email"
              />
              <Button
                type="submit"
                variant="secondary"
                className="w-full"
                data-testid="button-newsletter-submit"
              >
                Subscribe
              </Button>
            </form>
            <div className="flex gap-3 mt-4">
              <Button
                size="icon"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-social-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-social-email"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p data-testid="text-copyright">
              © 2024 Quadrant Private Equity. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" data-testid="link-footer-privacy">
                <span className="hover:text-primary-foreground cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
              <Link href="/terms" data-testid="link-footer-terms">
                <span className="hover:text-primary-foreground cursor-pointer">
                  Terms of Service
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
