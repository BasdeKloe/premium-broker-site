import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { STATS } from "@/lib/constants";
import { Calendar, Diamond, Flag, Crown } from "lucide-react";
const iconMap: {
  [key: string]: React.ReactNode;
} = {
  calendar: <Calendar className="w-6 h-6" />,
  diamond: <Diamond className="w-6 h-6" />,
  flag: <Flag className="w-6 h-6" />,
  crown: <Crown className="w-6 h-6" />
};
export const IntroSection = () => {
  return <section id="intro" className="section-padding bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <AnimatedSection direction="left">
            <p className="text-neutral-600 leading-relaxed text-body-sm">
              With deep expertise in yachts and exclusive access to world-class shipyards, we deliver an unmatched service founded on discretion, craftsmanship, and a profound understanding of exceptional expectations.
            </p>
          </AnimatedSection>

          {/* Right Column - Stats */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {STATS.map((stat, index) => <div key={index} className="group bg-neutral-50 p-4 sm:p-6 rounded-sm border border-neutral-100 hover:border-gold-500/30 hover:shadow-card-hover transition-all duration-300">
                  <div className="text-gold-500 mb-2 sm:mb-3">
                    {iconMap[stat.icon]}
                  </div>
                  <div className="font-serif text-lg sm:text-xl text-navy-800 mb-1 whitespace-nowrap">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-500">
                    {stat.label}
                  </div>
                </div>)}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>;
};