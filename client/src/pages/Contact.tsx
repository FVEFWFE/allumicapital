import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32">
        <section className="py-20 md:py-32">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <div>
                <div className="text-xs font-light tracking-[0.2em] text-white/50 uppercase mb-8" data-testid="text-section-label">
                  Contact
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white mb-12" data-testid="text-contact-title">
                  Get in Touch
                </h1>
                <p className="text-lg font-light text-white/70 leading-relaxed mb-12" data-testid="text-contact-intro">
                  We're always interested in hearing from exceptional businesses and management teams. Reach out to explore partnership opportunities.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-light tracking-[0.15em] text-white/50 uppercase mb-4">Get in Touch</h3>
                    <p className="text-base font-light text-white/80" data-testid="text-contact-info">
                      Use the form to reach out and we'll respond promptly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-8 md:p-12 border border-white/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-light tracking-[0.15em] text-white/50 uppercase mb-3">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-black border-white/20 text-white focus:border-white"
                      data-testid="input-name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-light tracking-[0.15em] text-white/50 uppercase mb-3">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-black border-white/20 text-white focus:border-white"
                      data-testid="input-email"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs font-light tracking-[0.15em] text-white/50 uppercase mb-3">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-black border-white/20 text-white focus:border-white"
                      data-testid="input-company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-light tracking-[0.15em] text-white/50 uppercase mb-3">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-black border-white/20 text-white focus:border-white resize-none"
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-white text-black hover:bg-white/90 text-xs font-light tracking-[0.15em] uppercase py-6"
                    data-testid="button-submit"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
