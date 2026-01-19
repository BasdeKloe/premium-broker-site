import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Shield, Clock, Lock } from "lucide-react";

export const ContactCTA = () => {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <AnimatedSection direction="up">
          <div className="max-w-3xl mx-auto text-center">
            {/* Heading */}
            <span className="text-overline text-gold-500 block mb-4">
              BEGIN YOUR JOURNEY
            </span>
            <h2 className="text-h1 text-white mb-6">
              Ready to Realise Your Vision?
            </h2>
            <p className="text-body-lg text-neutral-300 mb-10">
              Contact us discreetly for a no-obligation conversation about your
              dream yacht. All enquiries are handled with the utmost
              confidentiality.
            </p>

            {/* CTA Button */}
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>

            {/* Trust Indicators */}
            <div className="mt-12 pt-12 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center gap-3 text-neutral-400">
                  <Shield className="w-5 h-5 text-gold-500" />
                  <span className="text-body-sm">Complete Discretion</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-neutral-400">
                  <Clock className="w-5 h-5 text-gold-500" />
                  <span className="text-body-sm">Response within 24 hours</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-neutral-400">
                  <Lock className="w-5 h-5 text-gold-500" />
                  <span className="text-body-sm">NDA Available</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};
