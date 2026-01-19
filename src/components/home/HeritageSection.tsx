import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Anchor, Ship, Shield, Compass } from "lucide-react";
export const HeritageSection = () => {
  return <section className="section-padding bg-off-white">
      <Container>
        <SectionHeading overline="CRAFTSMANSHIP MEETS PRECISION" title="Yacht Expertise" subtitle="Where knowledge meets access" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Expertise Story */}
          <AnimatedSection direction="up">
            <div className="space-y-6 text-body text-neutral-600">
              <p>With more than 5 years of experience in the yacht industry, De Kloe Yachts has developed an intimate knowledge of custom yacht constructions. Our expertise spans technical specifications, design coordination, and builder selection.</p>
              <p>
                We maintain direct relationships with the world's most
                prestigious shipyards, providing our clients with exclusive
                access to unparalleled craftsmanship. This network ensures that
                every project is matched with the ideal builder.
              </p>
              <p>
                Our approach combines meticulous attention to detail with a
                profound understanding of what discerning clients expect from a
                truly exceptional yacht.
              </p>
            </div>
          </AnimatedSection>

          {/* Right Column - Philosophy & Values */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="bg-white p-6 md:p-12 rounded-sm shadow-card">
              {/* Expertise Icon */}
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gold-500 flex items-center justify-center bg-navy-800">
                  <Compass className="w-10 h-10 md:w-14 md:h-14 text-gold-500" />
                </div>
              </div>

              {/* Motto */}
              <div className="text-center mb-6 md:mb-8">
                <p className="font-serif text-lg md:text-3xl italic mb-2 text-[#b39751]">
                  Salus in Adversis
                </p>
                <p className="text-body-sm text-neutral-500">
                  Salvation in Adversity
                </p>
              </div>

              {/* Core Values */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full bg-navy-800/5 flex items-center justify-center">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-gold-600" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-600">
                    Discretion
                  </span>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full bg-navy-800/5 flex items-center justify-center">
                    <Anchor className="w-4 h-4 sm:w-5 sm:h-5 text-gold-600" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-600">
                    Loyalty
                  </span>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full bg-navy-800/5 flex items-center justify-center">
                    <Ship className="w-4 h-4 sm:w-5 sm:h-5 text-gold-600" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-600">
                    Excellence
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>;
};