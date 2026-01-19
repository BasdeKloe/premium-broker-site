import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SITE_CONFIG } from "@/lib/constants";
import { Mail, Phone, Linkedin, Shield, Clock, Lock, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import contactProfile from "@/assets/contact-profile.jpg";
import { useSEO, useStructuredData } from "@/utils/seo";

const Contact = () => {
  useSEO({
    title: 'Contact De Kloe Yachts | Get in Touch',
    description: 'Contact De Kloe Yachts for expert yacht brokerage services. Connect with us to discuss your luxury yacht purchase or custom build project.',
    keywords: 'contact yacht broker, yacht inquiry, luxury yacht consultation, superyacht expert',
    url: 'https://dekloeyachts.com/contact',
  });

  useStructuredData([
    {
      type: 'WebPage',
      data: {
        '@id': 'https://dekloeyachts.com/contact#webpage',
        url: 'https://dekloeyachts.com/contact',
        name: 'Contact De Kloe Yachts | Get in Touch',
        description: 'Contact page for De Kloe Yachts.',
      },
    },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
    privacy: false
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      toast.error("Please accept the privacy policy to continue");
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mreebykl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          projectType: formData.projectType || "Not specified",
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Your message has been sent. We will contact you shortly.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <main className="overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy-800">
        <Container>
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-overline text-gold-500 block mb-4">GET IN TOUCH</span>
              <h1 className="text-hero text-white mb-6">Contact</h1>
              <p className="text-body-lg text-neutral-300">
                ​Interested in discussing your (super) yacht vision? Contact us for information or to schedule a consultation at your convenience.


              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-16">
            {/* Contact Form */}
            <AnimatedSection direction="left">
              {isSubmitted ? <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold-500/10 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-gold-500" />
                  </div>
                  <h3 className="font-serif text-2xl text-navy-800 mb-4">Message Received</h3>
                  <p className="text-body text-neutral-600 mb-6">
                    Thank you for your interest. We will contact you within 24 hours.
                  </p>
                  <Button variant="default" onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  projectType: "",
                  message: "",
                  privacy: false
                });
              }}>
                    New Message
                  </Button>
                </div> : <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" placeholder="Your full name" value={formData.name} onChange={e => handleChange("name", e.target.value)} required className="border-neutral-200 focus:border-gold-500 focus:ring-gold-500" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={e => handleChange("email", e.target.value)} required className="border-neutral-200 focus:border-gold-500 focus:ring-gold-500" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="+31 6 41308918" value={formData.phone} onChange={e => handleChange("phone", e.target.value)} className="border-neutral-200 focus:border-gold-500 focus:ring-gold-500" />
                    </div>
                    <div className="space-y-2">
                      <Label>Project Type</Label>
                      <Select value={formData.projectType} onValueChange={value => handleChange("projectType", value)}>
                        <SelectTrigger className="border-neutral-200 focus:border-gold-500 focus:ring-gold-500">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new-build">New Build Project</SelectItem>
                          <SelectItem value="purchase">Purchase Guidance</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" placeholder="Tell us about your project or enquiry..." value={formData.message} onChange={e => handleChange("message", e.target.value)} required rows={5} className="border-neutral-200 focus:border-gold-500 focus:ring-gold-500 resize-none" />
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox id="privacy" checked={formData.privacy} onCheckedChange={checked => handleChange("privacy", checked as boolean)} className="mt-1 border-neutral-300 data-[state=checked]:bg-gold-500 data-[state=checked]:border-gold-500" />
                    <Label htmlFor="privacy" className="text-body-sm text-neutral-600 leading-relaxed cursor-pointer">
                      I agree to the privacy policy and understand that my data 
                      will be treated confidentially. *
                    </Label>
                  </div>

                  <Button type="submit" variant="default" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>}
                  </Button>
                </form>}
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-2xl text-navy-800 mb-6">Contact Information</h3>
                  
                  {/* Profile Photo */}
                  <div className="mb-6">
                    <img
                      src={contactProfile}
                      alt="De Kloe Yachts representative"
                      className="w-full max-w-[220px] xs:max-w-[240px] sm:max-w-[260px] md:max-w-[280px] h-auto rounded-sm object-cover"
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center shrink-0 group-hover:bg-gold-500 transition-colors">
                        <Mail className="w-5 h-5 text-gold-500 group-hover:text-navy-950" />
                      </div>
                      <div>
                        <span className="text-caption text-neutral-500 block mb-1">Email</span>
                        <span className="text-body text-navy-800 group-hover:text-gold-600 transition-colors">
                          {SITE_CONFIG.email}
                        </span>
                      </div>
                    </a>

                    <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center shrink-0 group-hover:bg-gold-500 transition-colors">
                        <Phone className="w-5 h-5 text-gold-500 group-hover:text-navy-950" />
                      </div>
                      <div>
                        <span className="text-caption text-neutral-500 block mb-1">Phone</span>
                        <span className="text-body text-navy-800 group-hover:text-gold-600 transition-colors">
                          {SITE_CONFIG.phone}
                        </span>
                      </div>
                    </a>

                    <a href="https://www.linkedin.com/company/de-kloe-yachts/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center shrink-0 group-hover:bg-gold-500 transition-colors">
                        <Linkedin className="w-5 h-5 text-gold-500 group-hover:text-navy-950" />
                      </div>
                      <div>
                        <span className="text-caption text-neutral-500 block mb-1">LinkedIn</span>
                        <span className="text-body text-navy-800 group-hover:text-gold-600 transition-colors">
                          Follow us on LinkedIn
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="p-5 xs:p-6 sm:p-7 md:p-8 bg-off-white rounded-sm">
                  <h4 className="font-serif text-xl text-navy-800 mb-6">Our Promise</h4>
                  <div className="space-y-4">
                    {[{
                    icon: Shield,
                    text: "Complete discretion guaranteed"
                  }, {
                    icon: Clock,
                    text: "Response within 24 hours"
                  }, {
                    icon: Lock,
                    text: "NDA available upon request"
                  }].map((item, index) => <div key={index} className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-gold-500" />
                        <span className="text-body-sm text-neutral-600">{item.text}</span>
                      </div>)}
                  </div>
                </div>

                {/* What to Expect */}
                <div className="p-5 xs:p-6 sm:p-7 md:p-8 bg-navy-800 rounded-sm">
                  <h4 className="font-serif text-xl text-white mb-6">What can you expect?</h4>
                  <ol className="space-y-4">
                    {["We receive your message and confirm within 24 hours", "A personal introduction is scheduled", "No-obligation consultation about your requirements", "Tailored proposal if desired"].map((step, index) => <li key={index} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center shrink-0 text-sm font-medium">
                          {index + 1}
                        </span>
                        <span className="text-body-sm text-neutral-300">{step}</span>
                      </li>)}
                  </ol>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <Footer />
    </main>;
};
export default Contact;