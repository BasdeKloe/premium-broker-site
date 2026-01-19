import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { PROCESS_STEPS } from "@/lib/constants";

export const ProcessSection = () => {
  return (
    <section className="section-padding bg-background">
      <Container>
        <SectionHeading
          overline="HOW WE WORK"
          title="The Process"
          subtitle="From initial introduction to handing over the keys"
        />

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

          <div className="grid grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <AnimatedSection key={step.step} direction="up" delay={index * 0.1}>
                <div className="relative text-center">
                  {/* Step Number */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-navy-800 border-4 border-background flex items-center justify-center relative z-10">
                    <span className="font-serif text-2xl text-gold-500">
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <h4 className="font-serif text-xl text-navy-800 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-body-sm text-neutral-600">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-gold-500/30">
            {PROCESS_STEPS.map((step, index) => (
              <AnimatedSection
                key={step.step}
                direction="left"
                delay={index * 0.1}
              >
                <div className="relative pb-10 last:pb-0">
                  {/* Step Number */}
                  <div className="absolute -left-[41px] w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center">
                    <span className="font-serif text-lg text-gold-500">
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="ml-4">
                    <h4 className="font-serif text-xl text-navy-800 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-body-sm text-neutral-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
