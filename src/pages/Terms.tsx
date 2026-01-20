import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { useSEO } from "@/utils/seo";

const Terms = () => {
  useSEO({
    title: 'Terms & Conditions | De Kloe Yachts',
    description: 'Terms and conditions for brokerage services by De Kloe Yachts - Complete overview of rights and obligations.',
    keywords: 'terms and conditions, brokerage agreement, yacht services, De Kloe Yachts',
    url: 'https://dekloeyachts.com/terms',
  });

  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy-800">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-hero text-white mb-6">Terms & Conditions</h1>
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

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">Article 1 - Definitions</h2>
              <p className="text-body text-neutral-600 mb-4">
                In these terms and conditions, the following terms are used in the following meaning:
              </p>
              <ol className="list-decimal pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li><strong>De Kloe Yachts:</strong> De Kloe Yachts, operating under Bas de Kloe, registered with Chamber of Commerce 99291096</li>
                <li><strong>Client:</strong> the natural person or legal entity who commissions De Kloe Yachts for brokerage services</li>
                <li><strong>Assignment:</strong> the agreement between De Kloe Yachts and Client whereby De Kloe Yachts provides brokerage services</li>
                <li><strong>Shipyard:</strong> the shipbuilder who will construct the yacht</li>
                <li><strong>Yacht:</strong> the superyacht to be built to which the brokerage services relate</li>
                <li><strong>Construction Contract:</strong> the agreement between Client and Shipyard for the construction of the Yacht</li>
                <li><strong>Commission:</strong> the fee owed to De Kloe Yachts for brokerage services</li>
              </ol>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">Article 2 - Applicability</h2>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>These terms and conditions apply to all offers, quotations, assignments and agreements between De Kloe Yachts and Client</li>
                <li>Deviations from these terms and conditions are only valid if expressly agreed in writing or by email</li>
                <li>The applicability of any purchasing or other conditions of Client is expressly rejected</li>
              </ul>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">Article 3 - Nature of the Services</h2>
              <p className="text-body text-neutral-600 mb-4">
                De Kloe Yachts acts as a broker between Client and Shipyards for new construction projects of superyachts.
              </p>
              <p className="text-body text-neutral-600 mb-4">
                <strong>Important:</strong> De Kloe Yachts is not a party to the Construction Contract between Client and Shipyard.
              </p>
              <p className="text-body text-neutral-600 mb-4">The services of De Kloe Yachts include:</p>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Advising on suitable shipyards and yacht designs</li>
                <li>Facilitating contacts between Client and Shipyards</li>
                <li>Support in specification development</li>
                <li>Advising on market-conform prices and conditions</li>
                <li>Guidance during negotiation phase</li>
                <li>Coordination until signing of Construction Contract</li>
              </ul>
              <p className="text-body text-neutral-600 mb-6">
                De Kloe Yachts performs <strong>best efforts obligations</strong>, not result obligations.
              </p>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">Article 4 - Formation of Agreement</h2>
              <p className="text-body text-neutral-600 mb-4">An Assignment is established by:</p>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Signing of a brokerage agreement by both Parties; or</li>
                <li>Written or email confirmation by De Kloe Yachts of a verbal assignment</li>
              </ul>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">Article 5 - Exclusivity</h2>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Unless expressly agreed otherwise, the Assignment is <strong>exclusive for 12 months</strong></li>
                <li>During the exclusivity period, Client will not contact Shipyards introduced by De Kloe Yachts directly</li>
                <li>In case of breach of exclusivity, the Commission remains fully owed</li>
              </ul>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">Article 6 - Commission and Payment</h2>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">6.1 Commission Structure</h3>
              <div className="bg-off-white p-6 rounded-sm mb-6">
                <ul className="list-disc pl-6 text-body text-neutral-600 space-y-2">
                  <li><strong>5%</strong> of total contract value for projects under €50,000,000</li>
                  <li><strong>2-3%</strong> of total contract value for projects from €50,000,000</li>
                </ul>
              </div>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">6.2 Commission Lapse Period</h3>
              <p className="text-body text-neutral-600 mb-6">
                The Commission is owed if within <strong>24 months</strong> after termination of the Assignment a Construction Contract
                is established with a Shipyard that was introduced to Client by De Kloe Yachts.
              </p>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">6.3 Due Date</h3>
              <p className="text-body text-neutral-600 mb-4">The Commission becomes due:</p>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Upon signing of the Construction Contract between Client and Shipyard; or</li>
                <li>Upon payment of the first installment by Client to Shipyard</li>
              </ul>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">6.4 Payment Terms</h3>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Payment within <strong>30 days</strong> after invoice date</li>
                <li>Late payment incurs statutory commercial interest</li>
                <li>All collection costs are borne by Client</li>
              </ul>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">Article 7 - Obligations De Kloe Yachts</h2>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Execute the Assignment to the best of abilities and with due care</li>
                <li>Inform Client truthfully and completely about Shipyards and market conditions</li>
                <li>Always act in the interest of Client</li>
              </ul>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">Article 8 - Obligations Client</h2>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Provide timely all necessary information for proper execution</li>
                <li>Promptly inform De Kloe Yachts about direct contact with Shipyards</li>
                <li>Inform about changes in wishes, budget or planning</li>
                <li>Indemnify De Kloe Yachts against third party claims</li>
              </ul>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">Article 9 - Confidentiality and Discretion</h2>
              <p className="text-body text-neutral-600 mb-6">
                Parties commit to <strong>strict confidentiality</strong> of all confidential information exchanged in the context of the Assignment.
              </p>
              <p className="text-body text-neutral-600 mb-4">Confidential information includes:</p>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Identity of Client</li>
                <li>Financial data</li>
                <li>Technical specifications</li>
                <li>Commercial conditions</li>
              </ul>
              <p className="text-body text-neutral-600 mb-6">
                The confidentiality obligation continues <strong>after termination</strong> of the Assignment.
              </p>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">Article 10 - Liability</h2>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">10.1 General</h3>
              <p className="text-body text-neutral-600 mb-6">
                De Kloe Yachts is only liable for damage that is the direct result of <strong>intent or willful recklessness</strong>.
              </p>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">10.2 Not Liable For</h3>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Incorrect information provided by Shipyards or third parties</li>
                <li>Delays or problems during construction phase</li>
                <li>Quality defects in the built Yacht</li>
                <li>Breach of Construction Contract by Shipyard</li>
                <li>Indirect damage, consequential damage or lost profits</li>
              </ul>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">10.3 Limitation of Liability</h3>
              <div className="bg-gold-50 border-l-4 border-gold-500 p-6 mb-6">
                <p className="text-body text-neutral-700 font-semibold mb-2">
                  Maximum Liability
                </p>
                <p className="text-body text-neutral-600">
                  Liability is limited to the amount of the paid Commission for the relevant Assignment,
                  and never exceeds the amount paid out by professional liability insurance.
                </p>
              </div>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">Article 11 - Duration and Termination</h2>
              <p className="text-body text-neutral-600 mb-4">
                The Assignment is entered into for the duration of the exclusivity period (standard 12 months).
              </p>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Both Parties may terminate with <strong>2 months notice</strong></li>
                <li>In case of termination, the lapse period for Commission remains in effect</li>
                <li>Immediate dissolution possible in case of bankruptcy or material breach</li>
              </ul>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">Article 12 - Non-Compete Clause</h2>
              <div className="bg-navy-50 border-l-4 border-navy-800 p-6 mb-6">
                <p className="text-body text-neutral-700 mb-4">
                  During the Assignment and <strong>24 months</strong> thereafter, Client will not contact Shipyards
                  introduced by De Kloe Yachts directly, without the brokerage of De Kloe Yachts.
                </p>
                <p className="text-body text-neutral-600">
                  Breach of this clause results in a penalty of <strong>€50,000</strong> per violation,
                  without prejudice to De Kloe Yachts' right to full Commission.
                </p>
              </div>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">Article 13 - Dispute Resolution</h2>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li><strong>Dutch law</strong> applies to all Assignments and these terms and conditions</li>
                <li>All disputes will be submitted to the competent court in the <strong>Rotterdam district</strong></li>
                <li>Before resorting to court, Parties will attempt to resolve disputes through mutual consultation</li>
              </ul>

              {/* Contact Section */}
              <div className="mt-12 p-8 bg-navy-800 text-white rounded-sm">
                <h3 className="text-h3 text-white mb-4">Questions About These Terms?</h3>
                <p className="text-body-lg text-white/90 mb-6">
                  Do you have questions about our terms and conditions or the brokerage agreement?
                </p>
                <div className="space-y-2">
                  <p className="text-body text-white/90">
                    <strong>De Kloe Yachts</strong>
                  </p>
                  <p className="text-body text-white/90">Operating under: Bas de Kloe</p>
                  <p className="text-body text-white/90">Soendalaan 51</p>
                  <p className="text-body text-white/90">3131 LS Vlaardingen, Netherlands</p>
                  <p className="text-body text-white/90">Chamber of Commerce: 99291096</p>
                  <p className="text-body text-white/90">
                    Email: <a href="mailto:bas@dekloeyachts.nl" className="text-gold-400 hover:text-gold-300">bas@dekloeyachts.nl</a>
                  </p>
                </div>
              </div>

              <p className="text-caption text-neutral-500 mt-8 text-center">
                Filed with Chamber of Commerce - January 2025
              </p>

            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
};

export default Terms;
