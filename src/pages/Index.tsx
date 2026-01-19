import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { HeritageSection } from "@/components/home/HeritageSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ImageBreak } from "@/components/home/ImageBreak";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ContactCTA } from "@/components/home/ContactCTA";
import { useSEO, useStructuredData, organizationSchema, localBusinessSchema } from "@/utils/seo";

const Index = () => {
  useSEO({
    title: 'De Kloe Yachts | Exclusive Dutch Yacht Brokerage',
    description: 'De Kloe Yachts connects the world\'s most distinguished families with the finest Dutch yacht builders. Expert yacht brokerage with exclusive access to world-class shipyards.',
    keywords: 'yacht brokerage, Dutch yachts, superyacht, motor yacht, yacht builder, luxury yachts, yacht broker, Netherlands, De Kloe',
    url: 'https://dekloeyachts.com',
  });

  useStructuredData([
    organizationSchema,
    localBusinessSchema,
    {
      type: 'WebPage',
      data: {
        '@id': 'https://dekloeyachts.com/#webpage',
        url: 'https://dekloeyachts.com',
        name: 'De Kloe Yachts | Exclusive Dutch Yacht Brokerage',
        description: 'Home page of De Kloe Yachts, connecting distinguished families with world-class Dutch yacht builders.',
        isPartOf: {
          '@id': 'https://dekloeyachts.com/#website',
        },
      },
    },
  ]);

  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <IntroSection />
      <HeritageSection />
      <ServicesSection />
      <ImageBreak />
      <ProcessSection />
      <ContactCTA />
      <Footer />
    </main>
  );
};

export default Index;
