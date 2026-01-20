import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  return <>
      <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", isScrolled ? "bg-navy-950/95 backdrop-blur-md shadow-elevated" : "bg-transparent")}>
        <Container>
          <nav className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex flex-col items-start group" aria-label={SITE_CONFIG.name}>
              <span className="font-serif text-xl md:text-2xl font-bold tracking-wide text-gold-500 group-hover:text-gold-400 transition-colors">
                DE KLOE
              </span>
              <span className="font-serif text-sm md:text-base tracking-[0.3em] -mt-1 text-[#c1a767]">
                YACHTS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map(link => <Link key={link.href} to={link.href} className={cn("text-caption text-white/80 hover:text-gold-500 transition-colors relative group", location.pathname === link.href && "text-gold-500")}>
                  {link.label}
                  <span className={cn("absolute -bottom-1 left-0 h-px bg-gold-500 transition-all duration-300", location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full")} />
                </Link>)}
              <Button variant="hero" size="sm" asChild>
                <Link to="/contact">Contact</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden text-white hover:text-gold-500 transition-colors p-2" aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={cn("fixed inset-0 z-50 lg:hidden transition-all duration-500", isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-navy-950/95 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} />

        {/* Menu Content */}
        <div className={cn("absolute top-0 right-0 h-full w-full max-w-sm bg-navy-950 shadow-elevated transition-transform duration-500", isMobileMenuOpen ? "translate-x-0" : "translate-x-full")}>
          <div className="flex flex-col h-full p-6">
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-gold-500 transition-colors p-2" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-6 flex-1">
              {NAV_LINKS.map(link => <Link key={link.href} to={link.href} className={cn("font-serif text-2xl text-white/80 hover:text-gold-500 transition-colors", location.pathname === link.href && "text-gold-500")}>
                  {link.label}
                </Link>)}

              {/* Contact Button in Mobile Menu */}
              <div className="mt-4">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link to="/contact">Contact</Link>
                </Button>
              </div>
            </nav>

            {/* Footer */}
            <div className="mt-auto pt-8 border-t border-white/10">
              <p className="text-body-sm text-white/70">
                {SITE_CONFIG.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>;
};
