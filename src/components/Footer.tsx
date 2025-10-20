import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">U</span>
              </div>
              <div className="font-display text-xl font-bold">
                ubezpieczhurtowo.pl
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Kompleksowe ubezpieczenia dla klientów indywidualnych i firm. 
              Twoje bezpieczeństwo to nasza misja.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-smooth group"
              >
                <Facebook className="w-5 h-5 group-hover:text-accent-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-smooth group"
              >
                <Instagram className="w-5 h-5 group-hover:text-accent-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-smooth group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-accent-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Szybkie linki</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-accent transition-smooth">
                  O nas
                </a>
              </li>
              <li>
                <a href="#offer" className="text-primary-foreground/70 hover:text-accent transition-smooth">
                  Oferta
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-primary-foreground/70 hover:text-accent transition-smooth">
                  Opinie
                </a>
              </li>
              <li>
                <a href="#team" className="text-primary-foreground/70 hover:text-accent transition-smooth">
                  Zespół
                </a>
              </li>
              <li>
                <a href="#blog" className="text-primary-foreground/70 hover:text-accent transition-smooth">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-accent transition-smooth">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Usługi</h3>
            <ul className="space-y-3">
              <li>
                <a href="#offer" className="text-primary-foreground/70 hover:text-accent transition-smooth">
                  Ubezpieczenia komunikacyjne
                </a>
              </li>
              <li>
                <a href="#offer" className="text-primary-foreground/70 hover:text-accent transition-smooth">
                  Ubezpieczenia majątkowe
                </a>
              </li>
              <li>
                <a href="#offer" className="text-primary-foreground/70 hover:text-accent transition-smooth">
                  Ubezpieczenia na życie
                </a>
              </li>
              <li>
                <a href="#offer" className="text-primary-foreground/70 hover:text-accent transition-smooth">
                  Ubezpieczenia firmowe
                </a>
              </li>
              <li>
                <a href="#offer" className="text-primary-foreground/70 hover:text-accent transition-smooth">
                  Ubezpieczenia podróżne
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-accent" />
                <div className="text-primary-foreground/70">
                  ul. Przykładowa 123<br />
                  00-001 Warszawa
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-accent" />
                <a href="tel:+48123456789" className="text-primary-foreground/70 hover:text-accent transition-smooth">
                  +48 123 456 789
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-accent" />
                <a href="mailto:kontakt@ubezpieczhurtowo.pl" className="text-primary-foreground/70 hover:text-accent transition-smooth">
                  kontakt@ubezpieczhurtowo.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/70 text-sm">
              © {currentYear} ubezpieczhurtowo.pl. Wszelkie prawa zastrzeżone.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-smooth">
                Polityka prywatności
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-smooth">
                Regulamin
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-smooth">
                RODO
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
