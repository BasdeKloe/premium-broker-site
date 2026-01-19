import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Anchor, Shield, Ship, Compass, Users, ClipboardCheck, Award, Handshake, Target } from "lucide-react";
import { useSEO, useStructuredData } from "@/utils/seo";

const About = () => {
  useSEO({
    title: 'About De Kloe Yachts | Expert Yacht Brokerage',
    description: 'Learn about De Kloe Yachts\' 340-year maritime heritage and our dedication to connecting discerning clients with world-class Dutch yacht builders.',
    keywords: 'yacht broker, Dutch yacht builder, maritime heritage, luxury yacht expert, superyacht specialist',
    url: 'https://dekloeyachts.com/about',
  });

  useStructuredData([
    {
      type: 'WebPage',
      data: {
        '@id': 'https://dekloeyachts.com/about#webpage',
        url: 'https://dekloeyachts.com/about',
        name: 'About De Kloe Yachts | Expert Yacht Brokerage',
        description: 'Learn about De Kloe Yachts and our expertise in luxury yacht brokerage.',
      },
    },
  ]);
  const expertiseItems = [{
    icon: Compass,
    title: "Technical Knowledge",
    description: "Deep understanding of yacht construction and specifications"
  }, {
    icon: Handshake,
    title: "Builder Relations",
    description: "Direct access to elite Dutch and international shipyards"
  }, {
    icon: ClipboardCheck,
    title: "Project Management",
    description: "End-to-end guidance from concept to delivery"
  }, {
    icon: Users,
    title: "Client Focus",
    description: "Tailored service for ultra-high-net-worth clientele"
  }, {
    icon: Target,
    title: "Quality Assurance",
    description: "Rigorous standards throughout the build process"
  }, {
    icon: Award,
    title: "Delivery Excellence",
    description: "Seamless handover and after-sales support"
  }];
  return <main className="overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy-800">
        <Container>
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-overline text-gold-500 block mb-4">WHO WE ARE</span>
              <h1 className="text-hero text-white mb-6">About De Kloe Yachts</h1>
              <p className="text-body-lg text-neutral-300">
                Dedicated expertise in yacht brokerage, combined with exclusive 
                access to world-class shipyards.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Our Approach Section */}
      <section className="section-padding bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <span className="text-overline text-gold-500">OUR APPROACH</span>
                <h2 className="text-h1 text-navy-800">Personal Guidance</h2>
                <div className="space-y-4 text-body text-neutral-600">
                  <p>
                    At De Kloe Yachts, we believe that acquiring a yacht is a deeply 
                    personal journey. Every client has unique requirements, preferences, 
                    and dreams that deserve individual attention.
                  </p>
                  <p>
                    Our approach is founded on building lasting relationships with our 
                    clients. We take the time to understand your vision before recommending 
                    the ideal path forward.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={0.2}>
              <div className="bg-off-white p-6 xs:p-7 sm:p-8 md:p-9 lg:p-10 rounded-sm">
                <div className="flex justify-center mb-8">
                  <div className="w-28 h-28 rounded-full border-4 border-gold-500 flex items-center justify-center bg-navy-800">
                    <Compass className="w-12 h-12 text-gold-500" />
                  </div>
                </div>
                <p className="text-center font-serif italic text-[#c1a767] text-2xl">Excellence through expertise and dedication</p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Our Network Section */}
      <section className="section-padding bg-off-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-16 items-center">
            <AnimatedSection direction="left" className="order-2 lg:order-1">
              <div className="bg-white p-6 xs:p-7 sm:p-8 md:p-9 lg:p-10 rounded-sm shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <Handshake className="w-8 h-8 text-gold-500" />
                  <div>
                    <p className="font-serif text-2xl text-navy-800">Exclusive Access</p>
                    <p className="text-body-sm text-neutral-500">World-class shipyards</p>
                  </div>
                </div>
                <p className="text-body text-neutral-600">
                  Our relationships with leading builders provide unparalleled access to 
                  the finest craftsmanship available.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={0.2} className="order-1 lg:order-2">
              <div className="space-y-6">
                <span className="text-overline text-gold-500">OUR NETWORK</span>
                <h2 className="text-h1 text-navy-800">Builder Relationships</h2>
                <div className="space-y-4 text-body text-neutral-600">
                  <p>
                    Over the years, we have cultivated direct relationships with the most 
                    prestigious shipyards in the Netherlands and beyond.
                  </p>
                  <p>
                    This network enables us to match each client with the ideal builder 
                    for their specific requirements, ensuring the best possible outcome 
                    for every project.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Our Expertise Section */}
      <section className="section-padding bg-navy-800">
        <Container>
          <SectionHeading overline="OUR EXPERTISE" title="What We Offer" subtitle="Trusted partnership throughout the entire commissioning process" light />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {expertiseItems.map((item, index) => <AnimatedSection key={item.title} direction="up" delay={index * 0.1}>
                <div className="bg-navy-900/50 p-4 xs:p-5 sm:p-6 rounded-sm border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-gold-500" />
                    </div>
                    <h4 className="font-serif text-lg text-white">{item.title}</h4>
                  </div>
                  <p className="text-body-sm text-neutral-400">{item.description}</p>
                </div>
              </AnimatedSection>)}
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <Container>
          <SectionHeading overline="OUR VALUES" title="What We Stand For" subtitle="The core values that define our service" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {[{
            icon: Shield,
            title: "Discretion",
            description: "Absolute confidentiality in every aspect of our service. Your privacy is our highest priority."
          }, {
            icon: Anchor,
            title: "Loyalty",
            description: "Unwavering dedication to our clients and their interests. We stand by your side, through every wave."
          }, {
            icon: Ship,
            title: "Excellence",
            description: "Striving for perfection in everything we do. Only the best is good enough for our clients."
          }].map((value, index) => <AnimatedSection key={value.title} direction="up" delay={index * 0.1}>
                <div className="text-center p-5 xs:p-6 sm:p-7 md:p-8 border border-neutral-100 rounded-sm hover:shadow-card-hover hover:border-gold-500/30 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-navy-800 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-gold-500" />
                  </div>
                  <h3 className="font-serif text-2xl text-navy-800 mb-4">{value.title}</h3>
                  <p className="text-body-sm text-neutral-600">{value.description}</p>
                </div>
              </AnimatedSection>)}
          </div>
        </Container>
      </section>

      {/* Motto Section */}
      <section className="py-20 bg-off-white">
        <Container>
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full border-2 border-gold-500 flex items-center justify-center">
                <Anchor className="w-10 h-10 text-gold-500" />
              </div>
              <p className="font-serif text-3xl md:text-4xl text-navy-800 italic mb-4">Salus in Adversis</p>
              <p className="text-body-lg text-neutral-600 mb-2">Salvation in Adversity</p>
              <p className="text-body-sm text-neutral-500">
                This guiding principle reminds us that true excellence is forged through 
                dedication and perseverance, especially when facing challenges.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-950">
        <Container>
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-h1 text-white mb-6">Get to Know Us</h2>
              <p className="text-body-lg text-neutral-300 mb-8 max-w-xl mx-auto">
                We invite you for a personal conversation about your dreams and ambitions.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <Footer />
    </main>;
};
export default About;