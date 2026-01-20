import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { useSEO } from "@/utils/seo";

const Privacy = () => {
  useSEO({
    title: 'Privacy Policy | De Kloe Yachts',
    description: 'Privacy policy for De Kloe Yachts - How we handle and protect your personal data in accordance with GDPR.',
    keywords: 'privacy policy, GDPR, data protection, De Kloe Yachts',
    url: 'https://dekloeyachts.com/privacy',
  });

  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy-800">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-hero text-white mb-6">Privacy Policy</h1>
            <p className="text-body-lg text-neutral-300">
              Last updated: January 2025
            </p>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-headings:text-navy-800 prose-p:text-neutral-600 prose-a:text-gold-600 prose-strong:text-navy-800 max-w-none">

              <p className="text-body-lg text-neutral-600 mb-8">
                De Kloe Yachts attaches great importance to your privacy and the protection of your personal data.
                In this privacy policy we explain which personal data we collect, why we collect it, how we use it and what rights you have.
              </p>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">1. Data Controller</h2>
              <div className="bg-off-white p-6 rounded-sm mb-8">
                <p className="text-body mb-2"><strong>De Kloe Yachts</strong></p>
                <p className="text-body mb-2">Operating under: Bas de Kloe</p>
                <p className="text-body mb-2">Soendalaan 51</p>
                <p className="text-body mb-2">3131 LS Vlaardingen</p>
                <p className="text-body mb-2">Netherlands</p>
                <p className="text-body mb-2">Chamber of Commerce: 99291096</p>
                <p className="text-body mb-2">VAT: NL005379524B64</p>
                <p className="text-body mb-2">Email: bas@dekloeyachts.nl</p>
                <p className="text-body">Website: www.dekloeyachts.nl</p>
              </div>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">2. Which Personal Data Do We Collect?</h2>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">2.1 Contact Information</h3>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>First and last name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Postal address</li>
                <li>Country of origin/residence</li>
              </ul>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">2.2 Identification Data</h3>
              <p className="text-body text-neutral-600 mb-4">
                In the context of legal obligations (Dutch Anti-Money Laundering and Anti-Terrorist Financing Act):
              </p>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Copy of identity document (passport, ID card)</li>
                <li>Date and place of birth</li>
                <li>Nationality</li>
                <li>Social security number (if applicable)</li>
              </ul>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">2.3 Financial Information</h3>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Information about financial position and assets</li>
                <li>Bank account details (solely for commission payments)</li>
                <li>Information about source of wealth (legal requirement)</li>
              </ul>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">2.4 Business Preferences</h3>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Desired specifications for superyacht</li>
                <li>Budget and timeline</li>
                <li>Preference for shipyards</li>
                <li>Communication preferences</li>
                <li>Previous experience with yacht purchases</li>
              </ul>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">3. How Do We Collect Your Data?</h2>
              <ol className="list-decimal pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Directly from you: when you contact us via email, phone, contact form or during personal meetings</li>
                <li>Via our website: when you visit our website or use the contact form</li>
                <li>From third parties: with your consent we may receive information from shipyards, advisors or other business partners</li>
                <li>Public sources: for verification of identity and wealth (legal requirements)</li>
              </ol>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">4. Why Do We Process Your Data?</h2>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">4.1 Performance of Brokerage Agreement</h3>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Providing brokerage services</li>
                <li>Facilitating contact with shipyards</li>
                <li>Advising on yacht purchase</li>
                <li>Administration and invoicing</li>
              </ul>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">4.2 Legal Obligation</h3>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Compliance with Anti-Money Laundering obligations</li>
                <li>Tax obligations</li>
                <li>Compliance with court orders</li>
              </ul>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">5. With Whom Do We Share Your Data?</h2>
              <p className="text-body text-neutral-600 mb-6">
                We respect your privacy and only share your data when necessary. We <strong>NEVER</strong> sell or rent your data to third parties for marketing purposes.
              </p>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">5.1 Shipyards</h3>
              <p className="text-body text-neutral-600 mb-6">
                With your express consent we share relevant information with shipyards to facilitate the yacht purchase.
              </p>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">5.2 Professional Advisors</h3>
              <p className="text-body text-neutral-600 mb-4">Only with your consent and under confidentiality obligation:</p>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Notaries</li>
                <li>Lawyers</li>
                <li>Maritime consultants</li>
                <li>Financial advisors</li>
              </ul>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">6. Security of Your Data</h2>
              <p className="text-body text-neutral-600 mb-6">
                We take the security of your data extremely seriously and have implemented appropriate technical and organizational measures:
              </p>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">Technical Measures</h3>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>SSL/TLS encryption for all online communication</li>
                <li>Encrypted storage of sensitive documents</li>
                <li>Secure servers with regular updates</li>
                <li>Firewall and antivirus software</li>
                <li>Backup systems with encryption</li>
              </ul>

              <h3 className="text-h3 text-navy-800 mt-8 mb-4">Organizational Measures</h3>
              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-2">
                <li>Access restriction: only authorized personnel has access</li>
                <li>Confidentiality agreements for all employees</li>
                <li>Secure destruction of physical documents</li>
                <li>Incident response plan for data breaches</li>
              </ul>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">7. Your Rights Under the GDPR</h2>
              <p className="text-body text-neutral-600 mb-6">
                You have the following rights regarding your personal data:
              </p>

              <ul className="list-disc pl-6 mb-6 text-body text-neutral-600 space-y-3">
                <li><strong>Right of Access:</strong> You have the right to know which personal data we process about you</li>
                <li><strong>Right to Rectification:</strong> You can request us to correct incorrect or incomplete data</li>
                <li><strong>Right to Erasure:</strong> You can request deletion of your data (subject to legal requirements)</li>
                <li><strong>Right to Restriction:</strong> You can request temporary restriction of processing</li>
                <li><strong>Right to Data Portability:</strong> You can receive your data in a machine-readable format</li>
                <li><strong>Right to Object:</strong> You can object to processing based on legitimate interest</li>
                <li><strong>Right to Withdraw Consent:</strong> You can withdraw consent at any time</li>
              </ul>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">8. Cookies and Tracking</h2>
              <p className="text-body text-neutral-600 mb-6">
                The website of De Kloe Yachts currently <strong>DOES NOT</strong> use cookies or other tracking technologies.
              </p>
              <p className="text-body text-neutral-600 mb-6">
                Should we want to use cookies in the future, we will place a cookie banner with clear information and request your consent before non-essential cookies are placed.
              </p>

              <h2 className="text-h2 text-navy-800 mt-12 mb-6">9. Complaints</h2>
              <p className="text-body text-neutral-600 mb-6">
                Do you have a complaint about how we handle your personal data? Please contact us first via bas@dekloeyachts.nl.
                We take your complaint seriously and will investigate it carefully.
              </p>
              <p className="text-body text-neutral-600 mb-6">
                If you are not satisfied with our response, you have the right to file a complaint with:
              </p>
              <div className="bg-off-white p-6 rounded-sm mb-8">
                <p className="text-body mb-2"><strong>Dutch Data Protection Authority</strong></p>
                <p className="text-body mb-2">PO Box 93374</p>
                <p className="text-body mb-2">2509 AJ The Hague</p>
                <p className="text-body mb-2">Netherlands</p>
                <p className="text-body mb-2">Phone: +31 88 1805 250</p>
                <p className="text-body">Website: www.autoriteitpersoonsgegevens.nl</p>
              </div>

              {/* Contact Section */}
              <div className="mt-12 p-8 bg-navy-800 text-white rounded-sm">
                <h3 className="text-h3 text-white mb-4">Questions?</h3>
                <p className="text-body-lg text-white/90 mb-4">
                  Do you have questions about this privacy policy or about how we handle your data?
                </p>
                <p className="text-body text-white/90 mb-2">
                  Email: <a href="mailto:bas@dekloeyachts.nl" className="text-gold-400 hover:text-gold-300">bas@dekloeyachts.nl</a>
                </p>
                <p className="text-body text-white/90">
                  We are happy to assist you.
                </p>
              </div>

              <p className="text-caption text-neutral-500 mt-8 text-center">
                This privacy policy is drawn up in accordance with the General Data Protection Regulation (GDPR)
                and was last updated in January 2025.
              </p>

            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
};

export default Privacy;
