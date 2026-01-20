import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { useSEO } from "@/utils/seo";

const Disclaimer = () => {
  useSEO({
    title: 'Disclaimer | De Kloe Yachts',
    description: 'Disclaimer for De Kloe Yachts - Important information about the use of our website and services.',
    keywords: 'disclaimer, liability, website terms, De Kloe Yachts',
    url: 'https://dekloeyachts.com/disclaimer',
  });

  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy-800">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-hero text-white mb-6">Disclaimer</h1>
            <p className="text-body-lg text-neutral-300">
              Version 1.0 - January 2025
            </p>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-headings:text-navy-800 prose-p:text-neutral-600 prose-a:text-gold-600 prose-strong:text-navy-800 max-w-none">

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">1. General</h2>
              <p className="text-body text-neutral-600 mb-6">
                The information on the website www.dekloeyachts.nl is provided by De Kloe Yachts, operating under
                Bas de Kloe (Chamber of Commerce 99291096). We strive to keep this website current, complete and accurate.
                Despite these efforts, De Kloe Yachts cannot provide guarantees regarding the accuracy, completeness
                and timeliness of the information provided.
              </p>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">2. No Warranties</h2>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">2.1 General Information</h3>
              <p className="text-body text-neutral-600 mb-4">
                The information on this website is of a general nature and serves solely for information purposes.
                De Kloe Yachts provides no warranties regarding:
              </p>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Accuracy of published information</li>
                <li>Suitability for a specific purpose</li>
                <li>Timeliness of the information</li>
                <li>Completeness of the offered content</li>
              </ul>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">2.2 Technical Specifications Yachts</h3>
              <p className="text-body text-neutral-600 mb-4">
                All technical specifications, images, renderings, prices and descriptions of superyachts are:
              </p>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Indicative and subject to change</li>
                <li>Based on information from shipyards and other third parties</li>
                <li>Not binding without written confirmation</li>
                <li>Subject to availability</li>
              </ul>
              <p className="text-body text-neutral-600 mb-6">
                The final specifications are set out in the construction contract between client and shipyard.
              </p>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">2.3 Price Information</h3>
              <div className="bg-gold-50 border-l-4 border-gold-500 p-6 mb-6">
                <p className="text-body text-neutral-700 mb-2">
                  All mentioned prices are:
                </p>
                <ul className="list-disc pl-6 text-body text-neutral-600 space-y-1">
                  <li>Indicative and non-binding</li>
                  <li>Excluding VAT, unless otherwise stated</li>
                  <li>Subject to change</li>
                  <li>Dependent on specific configuration and options</li>
                  <li>Subject to currency fluctuations</li>
                </ul>
              </div>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">3. Liability</h2>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">3.1 Limitation of Liability</h3>
              <p className="text-body text-neutral-600 mb-4">De Kloe Yachts is not liable for:</p>

              <p className="text-body text-neutral-700 font-semibold mb-2">Direct Damage:</p>
              <ul className="list-disc pl-6 mb-4 text-body text-neutral-600 space-y-2">
                <li>Damage resulting from incorrect or incomplete information on this website</li>
                <li>Damage due to unavailability or technical failures of the website</li>
                <li>Damage from viruses, malware or other harmful software</li>
              </ul>

              <p className="text-body text-neutral-700 font-semibold mb-2">Indirect Damage:</p>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Lost profits or revenue</li>
                <li>Loss of data</li>
                <li>Loss of goodwill</li>
                <li>Missed business opportunities</li>
                <li>Other consequential damage</li>
              </ul>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">3.2 Third Party Information</h3>
              <p className="text-body text-neutral-600 mb-4">
                De Kloe Yachts is not responsible or liable for:
              </p>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Information provided by shipyards</li>
                <li>Technical data from manufacturers</li>
                <li>Images and renderings from designers</li>
                <li>Price information from third parties</li>
                <li>Accuracy of information from external sources</li>
              </ul>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">3.3 Not a Party to Construction Contract</h3>
              <div className="bg-navy-50 border-l-4 border-navy-800 p-6 mb-6">
                <p className="text-body text-neutral-700 font-semibold mb-4">
                  Important: De Kloe Yachts acts as a broker and is not a party to:
                </p>
                <ul className="list-disc pl-6 text-body text-neutral-600 space-y-2">
                  <li>The construction contract between client and shipyard</li>
                  <li>Warranty obligations of the shipyard</li>
                  <li>Technical specifications of the yacht to be built</li>
                  <li>Delivery times and construction planning</li>
                </ul>
              </div>

              <p className="text-body text-neutral-600 mb-4">De Kloe Yachts is not liable for:</p>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Quality defects in the built yacht</li>
                <li>Delays in the construction phase</li>
                <li>Non-performance of obligations by the shipyard</li>
                <li>Disputes between client and shipyard</li>
              </ul>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">4. Intellectual Property</h2>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">4.1 Copyright</h3>
              <p className="text-body text-neutral-600 mb-4">
                All content on this website is protected by copyright and is owned by De Kloe Yachts or licensed for use, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Texts and articles</li>
                <li>Logos and brand elements</li>
                <li>Images (as far as owned by De Kloe Yachts)</li>
                <li>Website design and layout</li>
                <li>Family coat of arms and heraldic symbols</li>
              </ul>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">4.2 Prohibited Use</h3>
              <p className="text-body text-neutral-600 mb-4">
                Without prior written consent from De Kloe Yachts, it is not permitted to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Copy, reproduce or distribute content</li>
                <li>Modify or edit content</li>
                <li>Use content commercially</li>
                <li>Use content for competing purposes</li>
                <li>Embed parts of the website on other websites</li>
              </ul>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">5. Hyperlinks</h2>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">5.1 Links to External Websites</h3>
              <p className="text-body text-neutral-600 mb-6">
                This website may contain links to external websites, including websites of shipyards, yacht designers,
                and industry associations. De Kloe Yachts has no control over the content of external websites and is
                not responsible for their content, privacy practices or availability. Users visit external websites at their own risk.
              </p>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">5.2 Links to This Website</h3>
              <p className="text-body text-neutral-600 mb-6">
                You may place links to the homepage of www.dekloeyachts.nl without prior consent, provided that the link
                does not create a misleading or negative context. Deep linking and framing are not permitted without written consent.
              </p>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">6. Website Availability</h2>
              <p className="text-body text-neutral-600 mb-4">
                De Kloe Yachts strives for continuous availability but does not guarantee this. The website may be temporarily
                unavailable due to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Scheduled maintenance</li>
                <li>Technical failures</li>
                <li>Updates and improvements</li>
                <li>Circumstances beyond our control (force majeure)</li>
              </ul>
              <p className="text-body text-neutral-600 mb-6">
                De Kloe Yachts reserves the right to modify, adapt or discontinue the website at any time without prior notice.
              </p>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">7. Use at Own Risk</h2>
              <p className="text-body text-neutral-600 mb-4">
                By using www.dekloeyachts.nl you acknowledge that:
              </p>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>You use the website at your own risk</li>
                <li>You are responsible for securing your own equipment</li>
                <li>You should use adequate antivirus software and firewalls</li>
                <li>De Kloe Yachts is not liable for viruses or malware</li>
                <li>You are responsible for backups of information you provide</li>
              </ul>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">8. No Professional Advice</h2>
              <div className="bg-gold-50 border-l-4 border-gold-500 p-6 mb-6">
                <p className="text-body text-neutral-700 mb-4">
                  The information on this website does not constitute professional advice and should not be considered as such.
                </p>
                <p className="text-body text-neutral-600">
                  For specific situations, you should seek professional advice from maritime lawyers, financial advisors,
                  tax advisors or naval architects.
                </p>
              </div>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">9. Personal Data</h2>
              <p className="text-body text-neutral-600 mb-6">
                For information on how we handle personal data, we refer to our comprehensive{' '}
                <a href="/privacy" className="text-gold-600 hover:text-gold-700 underline">Privacy Policy</a>.
              </p>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">10. Applicable Law</h2>
              <p className="text-body text-neutral-600 mb-6">
                Dutch law applies to this disclaimer. Disputes arising from or related to the use of this website will be
                submitted to the competent court in the Rotterdam district.
              </p>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">11. Final Provision</h2>
              <p className="text-body text-neutral-600 mb-6">
                By using www.dekloeyachts.nl you declare that you have taken note of this disclaimer and accept the conditions.
                If you do not agree with (parts of) this disclaimer, we request you not to use our website.
              </p>

              {/* Contact Section */}
              <div className="mt-12 p-8 bg-navy-800 text-white rounded-sm">
                <h3 className="text-h3 text-white mb-4">Questions About This Disclaimer?</h3>
                <p className="text-body-lg text-white/90 mb-6">
                  Do you have questions about this disclaimer or about the content of our website?
                </p>
                <div className="space-y-2">
                  <p className="text-body text-white/90">
                    <strong>De Kloe Yachts</strong>
                  </p>
                  <p className="text-body text-white/90">Operating under: Bas de Kloe</p>
                  <p className="text-body text-white/90">Soendalaan 51</p>
                  <p className="text-body text-white/90">3131 LS Vlaardingen, Netherlands</p>
                  <p className="text-body text-white/90">Chamber of Commerce: 99291096</p>
                  <p className="text-body text-white/90">VAT: NL005379524B64</p>
                  <p className="text-body text-white/90">
                    Email: <a href="mailto:bas@dekloeyachts.nl" className="text-gold-400 hover:text-gold-300">bas@dekloeyachts.nl</a>
                  </p>
                  <p className="text-body text-white/90">Website: www.dekloeyachts.nl</p>
                </div>
              </div>

              <p className="text-caption text-neutral-500 mt-8 text-center">
                This disclaimer is drawn up in accordance with Dutch law and was last updated in January 2025.
              </p>

            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
};

export default Disclaimer;
