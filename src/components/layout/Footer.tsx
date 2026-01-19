import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Linkedin, Mail, Phone, Anchor } from "lucide-react";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-navy-950 text-white">
      {/* Main Footer */}
      <div className="py-16 md:py-20 border-b border-white/10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            {/* Column 1: Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex flex-col items-start mb-6">
                <span className="font-serif text-2xl font-bold tracking-wide text-gold-500">
                  DE KLOE
                </span>
                <span className="font-serif text-base tracking-[0.3em] text-white/80 -mt-1">
                  YACHTS
                </span>
              </Link>
              <p className="text-body-sm text-neutral-400 mb-6">
                Exclusive brokerage in yachts. Connecting visionary owners with the world's most prestigious shipbuilders.
              </p>
              <div className="flex items-center gap-2 text-gold-500">
                <Anchor className="w-4 h-4" />
                <span className="text-caption">SALUS IN ADVERSIS</span>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h4 className="font-serif text-lg text-white mb-6">Navigation</h4>
              <nav className="flex flex-col gap-3">
                {NAV_LINKS.map(link => <Link key={link.href} to={link.href} className="text-body-sm text-neutral-400 hover:text-gold-500 transition-colors">
                    {link.label}
                  </Link>)}
              </nav>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="font-serif text-lg text-white mb-6">Services</h4>
              <nav className="flex flex-col gap-3">
                <Link to="/services#purchase" className="text-body-sm text-neutral-400 hover:text-gold-500 transition-colors">
                  Purchase Brokerage
                </Link>
                <Link to="/services#builder" className="text-body-sm text-neutral-400 hover:text-gold-500 transition-colors">
                  Builder Selection
                </Link>
                <Link to="/services#design" className="text-body-sm text-neutral-400 hover:text-gold-500 transition-colors">
                  Design & Specifications
                </Link>
                <Link to="/services#management" className="text-body-sm text-neutral-400 hover:text-gold-500 transition-colors">
                  Project Management
                </Link>
              </nav>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="font-serif text-lg text-white mb-6">Contact</h4>
              <div className="flex flex-col gap-4">
                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 text-body-sm text-neutral-400 hover:text-gold-500 transition-colors">
                  <Mail className="w-4 h-4 text-gold-500" />
                  {SITE_CONFIG.email}
                </a>
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-body-sm text-neutral-400 hover:text-gold-500 transition-colors">
                  <Phone className="w-4 h-4 text-gold-500" />
                  {SITE_CONFIG.phone}
                </a>
                <a href="https://www.linkedin.com/company/de-kloe-yachts/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-body-sm text-neutral-400 hover:text-gold-500 transition-colors">
                  <Linkedin className="w-4 h-4 text-gold-500" />
                  LinkedIn
                </a>
              </div>
              <p className="mt-6 text-caption text-neutral-500">
                All enquiries are handled with the utmost discretion
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="py-6">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-sm text-neutral-500">
              © {currentYear} De Kloe Yachts. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-neutral-500">
              <Link to="/privacy" className="hover:text-gold-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-gold-500 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>;
};