import { Link } from "wouter";
import logoImage from "@assets/allumi_1_-removebg-preview_1763377431447.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" data-testid="link-footer-logo">
              <img src={logoImage} alt="Allumi" className="h-8 w-auto mb-6 cursor-pointer" data-testid="img-footer-logo" />
            </Link>
            <p className="text-sm font-light text-white/60 leading-relaxed" data-testid="text-footer-tagline">
              Creating ambitious returns through meaningful partnerships and strategic investments.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-light tracking-[0.15em] uppercase text-white/50 mb-6" data-testid="text-footer-links-title">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" data-testid="link-footer-about">
                  <span className="text-sm font-light text-white/70 hover:text-white cursor-pointer transition-colors">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/investment-criteria" data-testid="link-footer-investments">
                  <span className="text-sm font-light text-white/70 hover:text-white cursor-pointer transition-colors">
                    Funds & Investments
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" data-testid="link-footer-contact">
                  <span className="text-sm font-light text-white/70 hover:text-white cursor-pointer transition-colors">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-light tracking-[0.15em] uppercase text-white/50 mb-6" data-testid="text-footer-contact-title">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="text-sm font-light text-white/70" data-testid="text-footer-email">
                Jan@Allumi.com
              </li>
              <li className="text-sm font-light text-white/70" data-testid="text-footer-address">
                Capital Square<br />
                23 Church Street<br />
                Singapore 049481
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-xs font-light text-white/40" data-testid="text-copyright">
            © {new Date().getFullYear()} Allumi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
