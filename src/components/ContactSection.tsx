import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "individual",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Wiadomość wysłana! Skontaktujemy się wkrótce.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      insuranceType: "individual",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Skontaktuj się z nami
          </h2>
          <p className="text-lg text-muted-foreground">
            Masz pytania? Chętnie pomożemy!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Dane kontaktowe
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Adres</div>
                    <div className="text-muted-foreground">
                      ul. Przykładowa 123
                      <br />
                      00-001 Warszawa
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Telefon</div>
                    <a href="tel:+48123456789" className="text-primary hover:text-primary-light transition-smooth">
                      +48 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Email</div>
                    <a href="mailto:kontakt@ubezpieczhurtowo.pl" className="text-primary hover:text-primary-light transition-smooth">
                      kontakt@ubezpieczhurtowo.pl
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Godziny otwarcia</div>
                    <div className="text-muted-foreground">
                      Pn - Pt: 9:00 - 17:00
                      <br />
                      Sb - Nd: Zamknięte
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-medium h-64 bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.2828890201396!2d21.012228776892654!3d52.22967717198104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sPalace%20of%20Culture%20and%20Science!5e0!3m2!1sen!2spl!4v1710000000000!5m2!1sen!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja ubezpieczhurtowo.pl"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Wyślij wiadomość
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Imię i nazwisko *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Jan Kowalski"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Adres email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="jan.kowalski@email.com"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Telefon *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+48 123 456 789"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="insuranceType">Rodzaj ubezpieczenia *</Label>
                <select
                  id="insuranceType"
                  name="insuranceType"
                  value={formData.insuranceType}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="individual">Ubezpieczenia indywidualne</option>
                  <option value="business">Ubezpieczenia firmowe</option>
                  <option value="other">Inne</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message">Wiadomość *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Opisz czego potrzebujesz..."
                  className="mt-2 min-h-[120px]"
                />
              </div>

              <Button type="submit" size="lg" className="w-full gradient-accent shadow-glow">
                Wyślij wiadomość
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Odpowiadamy zwykle w ciągu 24 godzin
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
