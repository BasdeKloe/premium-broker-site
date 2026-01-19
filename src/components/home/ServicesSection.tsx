import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SERVICES } from "@/lib/constants";
import { Handshake, Building2, Pencil, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const iconMap: { [key: string]: React.ReactNode } = {
  handshake: <Handshake className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9" />,
  building: <Building2 className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9" />,
  pencil: <Pencil className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9" />,
};

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <Container>
        <SectionHeading
          overline="WHAT WE OFFER"
          title="Our Services"
          subtitle="From initial vision to final delivery - we guide every aspect of your yacht project"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={service.id} direction="up" delay={index * 0.1}>
              <Link
                to={`/services#${service.id}`}
                className="group block h-full bg-white border border-neutral-100 rounded-sm p-5 xs:p-6 sm:p-7 md:p-8 hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-navy-800 flex items-center justify-center text-gold-500 mb-6 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors duration-300">
                  {iconMap[service.icon]}
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl text-navy-800 mb-4 group-hover:text-gold-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-body-sm text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-gold-500 text-caption group-hover:gap-4 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
};
