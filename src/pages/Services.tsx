import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Handshake, Building2, Pencil, Settings, Package,
  CheckCircle2, ArrowRight, Clock, Users, FileCheck
} from "lucide-react";
import { useSEO, useStructuredData } from "@/utils/seo";

const Services = () => {
  useSEO({
    title: 'Yacht Brokerage Services | De Kloe Yachts',
    description: 'Comprehensive yacht brokerage services including purchase guidance, builder selection, design coordination, and project management for luxury superyacht construction.',
    keywords: 'yacht purchase, yacht builder selection, yacht design, custom yacht, superyacht services, yacht project management',
    url: 'https://dekloeyachts.com/services',
  });

  useStructuredData([
    {
      type: 'Service',
      data: {
        '@id': 'https://dekloeyachts.com/services#service',
        serviceType: 'Yacht Brokerage',
        provider: {
          '@type': 'Organization',
          name: 'De Kloe Yachts',
        },
        areaServed: 'Worldwide',
        description: 'Comprehensive yacht brokerage services for ultra-high-net-worth clients.',
      },
    },
    {
      type: 'WebPage',
      data: {
        '@id': 'https://dekloeyachts.com/services#webpage',
        url: 'https://dekloeyachts.com/services',
        name: 'Yacht Brokerage Services | De Kloe Yachts',
        description: 'Explore our comprehensive yacht brokerage services.',
      },
    },
  ]);
  const services = [
    {
      id: "purchase",
      icon: Handshake,
      title: "Purchase Brokerage",
      subtitle: "From initial vision to handover",
      description: "We guide ultra-high-net-worth clients through the complete purchase process of custom yachts.",
      details: [
        "Initial needs analysis and vision development",
        "Market analysis and price comparison",
        "Technical specification development",
        "Contract negotiations and legal guidance",
        "Project management throughout the build process",
        "Quality control and inspection guidance",
      ],
    },
    {
      id: "builder",
      icon: Building2,
      title: "Builder Selection",
      subtitle: "Finding the perfect match",
      description: "With exclusive access to the top shipyards, we match your vision with the perfect shipbuilder.",
      details: [
        "Comprehensive shipyard analysis and comparison",
        "Reputation and track record research",
        "Capacity and slot availability check",
        "Specialisation matching with your requirements",
        "Site visits and management meetings",
        "Due diligence and financial analysis",
      ],
    },
    {
      id: "design",
      icon: Pencil,
      title: "Design & Specifications",
      subtitle: "Visualising your dream yacht",
      description: "From interior concepts to technical systems, we coordinate with renowned designers and naval architects.",
      details: [
        "Designer and naval architect selection",
        "Concept development and visualisation",
        "Technical specification detailing",
        "Interior styling and material selection",
        "Cultural adaptations for international clientele",
        "Review and approval processes",
      ],
    },
    {
      id: "management",
      icon: Settings,
      title: "Project Management",
      subtitle: "Protecting your interests",
      description: "Continuous guidance throughout the entire build process with focus on quality, schedule, and budget.",
      details: [
        "Regular progress reports",
        "Quality controls and inspections",
        "Timeline monitoring and adjustments",
        "Budget tracking and cost management",
        "Communication with shipyard and suppliers",
      ],
    },
    {
      id: "delivery",
      icon: Package,
      title: "Delivery & Aftersales",
      subtitle: "A flawless handover",
      description: "From sea trials to handover and beyond - we ensure a perfect start to your yachting experience.",
      details: [
        "Sea trials guidance and evaluation",
        "Final inspection and punch list resolution",
        "Documentation and certification",
        "Personal after-sales delivery till 80ft.",
        "Warranty management",
      ],
    },
  ];

  return (
    <main className="overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy-800">
        <Container>
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-overline text-gold-500 block mb-4">WHAT WE OFFER</span>
              <h1 className="text-hero text-white mb-6">Our Services</h1>
              <p className="text-body-lg text-neutral-300">
                From initial vision to final delivery - we guide every aspect 
                of your yacht project with unparalleled expertise and dedication.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 mb-20">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} direction="up" delay={index * 0.1}>
                <a
                  href={`#${service.id}`}
                  className="block p-4 xs:p-5 sm:p-6 border border-neutral-100 rounded-sm hover:border-gold-500/50 hover:shadow-card-hover transition-all duration-300 text-center group"
                >
                  <service.icon className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 text-gold-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif text-lg text-navy-800">{service.title}</h3>
                </a>
              </AnimatedSection>
            ))}
          </div>

          {/* Detailed Services */}
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-32">
                <AnimatedSection direction={index % 2 === 0 ? "left" : "right"}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-full bg-navy-800 flex items-center justify-center">
                          <service.icon className="w-7 h-7 text-gold-500" />
                        </div>
                        <div>
                          <span className="text-caption text-gold-500 block">{service.subtitle}</span>
                          <h2 className="font-serif text-3xl text-navy-800">{service.title}</h2>
                        </div>
                      </div>
                      <p className="text-body text-neutral-600 mb-8">{service.description}</p>
                    </div>
                    
                    <div className={`bg-off-white p-5 xs:p-6 sm:p-7 md:p-8 rounded-sm ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <h4 className="font-serif text-xl text-navy-800 mb-6">What's included:</h4>
                      <ul className="space-y-4">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                            <span className="text-body-sm text-neutral-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Summary */}
      <section className="section-padding bg-off-white">
        <Container>
          <SectionHeading
            overline="THE JOURNEY"
            title="From Dream to Reality"
            subtitle="Your yacht is more than a vessel—it's your legacy. I'm here to ensure it's realised perfectly."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {[
              { icon: Users, value: "1-on-1", label: "Personal Guidance" },
              { icon: Clock, value: "24h", label: "Response" },
              { icon: FileCheck, value: "100%", label: "Transparency" },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} direction="up" delay={index * 0.1}>
                <div className="text-center p-5 xs:p-6 sm:p-7 md:p-8 bg-white rounded-sm shadow-card">
                  <stat.icon className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 text-gold-500 mx-auto mb-4" />
                  <div className="font-serif text-4xl text-navy-800 mb-2">{stat.value}</div>
                  <div className="text-body-sm text-neutral-500">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-950">
        <Container>
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-h1 text-white mb-6">Ready to Get Started?</h2>
              <p className="text-body-lg text-neutral-300 mb-8 max-w-xl mx-auto">
                Contact us for a no-obligation conversation about your project.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
