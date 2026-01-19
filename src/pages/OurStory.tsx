import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Anchor, Heart, Compass } from "lucide-react";
import { useSEO, useStructuredData } from "@/utils/seo";
import storyImage1 from "@/assets/IMG_9468.jpeg";
import yachtAerial from "@/assets/yacht-aerial.jpg";
import heroYacht from "@/assets/hero-yacht.jpg";

const OurStory = () => {
  useSEO({
    title: 'Our Story | De Kloe Yachts Heritage',
    description: 'Discover the De Kloe Yachts story: 340 years of maritime heritage, a passion for sailing, and dedication to connecting clients with world-class Dutch yacht builders.',
    keywords: 'yacht heritage, maritime history, De Kloe family, Dutch sailing tradition, yacht brokerage story',
    url: 'https://dekloeyachts.com/our-story',
    type: 'article',
  });

  useStructuredData([
    {
      type: 'WebPage',
      data: {
        '@id': 'https://dekloeyachts.com/our-story#webpage',
        url: 'https://dekloeyachts.com/our-story',
        name: 'Our Story | De Kloe Yachts Heritage',
        description: 'The story of De Kloe Yachts and our maritime heritage.',
      },
    },
  ]);
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy-800">
        <Container>
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-overline text-gold-500 block mb-4">
                DE KLOE YACHTS
              </span>
              <h1 className="text-hero text-white mb-6">Our Story</h1>
              <p className="text-body-lg text-neutral-300">
                A journey rooted in passion, heritage, and an unwavering commitment
                to excellence.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Section 1: Childhood & Sailing - Tekst + Groot Icoon */}
      <section className="section-padding bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Tekst Links */}
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <span className="text-overline text-gold-500">CHAPTER ONE</span>
                <h2 className="text-h1 text-navy-800">Born on the Water</h2>
                <div className="space-y-4 text-body text-neutral-600">
                  <p>
                    My journey in yachting didn't begin in a boardroom or showroom. It began on the water itself. Growing up aboard my parents' sailing yacht, the sea became my classroom, my playground, and ultimately my calling. Those formative years gave me more than technical knowledge. They gave me a profound understanding of what yachting truly means: freedom, craftsmanship, and the intimate bond between owner and vessel.
                  </p>
                  <p>
                    Every sunrise at anchor, every passage through changing seas, every port taught me that a yacht is far more than machinery and luxury. It's a gateway to experiences that define a lifetime. This early immersion gave me something textbooks never could: an intuitive feel for what makes a yacht exceptional, and what owners truly need from their vessel.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Afbeelding Rechts */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative h-[350px] xs:h-[400px] sm:h-[500px] md:h-[650px] lg:h-[750px] rounded-sm overflow-hidden shadow-card">
                <img
                  src={storyImage1}
                  alt="Bas de Kloe on yacht"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Section 2: Motor Yachts Evolution - Afbeelding + Tekst */}
      <section className="section-padding bg-off-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Afbeelding Rechts (reversed order op desktop) */}
            <AnimatedSection direction="right" delay={0.2} className="order-1 lg:order-2">
              <div className="relative h-[280px] xs:h-[320px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-sm overflow-hidden shadow-card">
                <img
                  src={yachtAerial}
                  alt="Motor yacht aerial view"
                  className="w-full h-full object-cover"
                />
                {/* Subtiel Heart icoon overlay */}
                <div className="absolute bottom-6 right-6 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-gold-600" />
                </div>
              </div>
            </AnimatedSection>

            {/* Tekst Links (reversed order op desktop) */}
            <AnimatedSection direction="left" className="order-2 lg:order-1">
              <div className="space-y-6">
                <span className="text-overline text-gold-500">CHAPTER TWO</span>
                <h2 className="text-h1 text-navy-800">The Evolution</h2>
                <div className="space-y-4 text-body text-neutral-600">
                  <p>
                    That childhood passion evolved into a lifelong dedication to motor yachts and the art of yacht building. My hands-on experience with motor yachts, combined with specialized studies and internships in yacht construction, gave me an insider's perspective on what truly makes a superyacht exceptional. I've walked the shipyard floors, studied the engineering, and witnessed firsthand how vision transforms into reality through meticulous craftsmanship.
                  </p>
                  <p>
                    But what truly drives me is the convergence of three passions: the thrill of open sea cruising, the fascinating complexity of yacht build projects, and the art of building meaningful client relationships. I recognized that acquiring a yacht, particularly a custom new build, is one of the most significant decisions in a person's life. It deserves a guide who doesn't just understand the technical specifications, but who shares your excitement for the journey ahead.
                  </p>
                  <p>
                    My approach is deeply personal. I immerse myself in every build project, every client vision, and every detail that transforms a contract into your dream vessel. This foundation in yacht construction, combined with genuine enthusiasm for client partnership, allows me to guide you with both expertise and authentic passion.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Section 3: Motto - Minimalist Centered */}
      <section className="py-20 bg-navy-800">
        <Container>
          <AnimatedSection direction="up">
            <div className="text-center max-w-2xl mx-auto">
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-gold-500 italic mb-4">
                Salus in Adversis
              </p>
              <p className="text-body-lg text-gold-400/80">Safety in Adversity</p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Section 4: Professional Approach - Afbeelding + Tekst */}
      <section className="section-padding bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Afbeelding Links */}
            <AnimatedSection direction="left">
              <div className="relative h-[280px] xs:h-[320px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-sm overflow-hidden shadow-card">
                <img
                  src={heroYacht}
                  alt="Professional yacht expertise"
                  className="w-full h-full object-cover object-[75%_center]"
                />
                {/* Subtiel Compass icoon overlay */}
                <div className="absolute top-6 left-6 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-navy-800/90 backdrop-blur-sm flex items-center justify-center border-2 border-gold-500">
                  <Compass className="w-7 h-7 sm:w-8 sm:h-8 text-gold-500" />
                </div>
              </div>
            </AnimatedSection>

            {/* Tekst Rechts */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-6">
                <span className="text-overline text-gold-500">CHAPTER THREE</span>
                <h2 className="text-h1 text-navy-800">Your Trusted Partner</h2>
                <div className="space-y-4 text-body text-neutral-600">
                  <p>
                    At De Kloe Yachts, I specialize in connecting discerning clients with the world's finest shipyards for bespoke yacht projects. My focus is singular: to be your trusted partner throughout the entire journey, from initial vision to final delivery and beyond. Having studied yacht construction and experienced the build process from the inside, I can anticipate challenges, celebrate milestones, and ensure your vision is realized with uncompromising quality.
                  </p>
                  <p>
                    I take pride in understanding not just what you want in a yacht, but why you want it. Every conversation, every decision, every detail is guided by a genuine passion for motor yachts and a deep respect for the journey you're undertaking.
                  </p>
                  <p>
                    Whether you're envisioning your first yacht or adding to an established fleet, you deserve a partner who combines industry knowledge, construction expertise, and authentic enthusiasm for your success. That's precisely what I offer. Not just a transaction, but a relationship built on trust, shared passion, and our mutual love for the sea.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-off-white">
        <Container>
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-h1 text-navy-800 mb-6">
                Let's Begin Your Journey Together
              </h2>
              <p className="text-body-lg text-neutral-600 mb-8">
                Ready to explore the possibilities? I'm here to guide you through
                every step of your yachting journey.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="border-gold-500 text-gold-600 hover:bg-gold-50"
                asChild
              >
                <Link to="/contact">GET IN TOUCH</Link>
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <Footer />
    </main>
  );
};

export default OurStory;
