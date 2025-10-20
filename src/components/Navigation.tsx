import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Strona główna", href: "#home" },
    { label: "O nas", href: "#about" },
    { label: "Oferta", href: "#offer" },
    { label: "Opinie", href: "#reviews" },
    { label: "Zespół", href: "#team" },
    { label: "Blog", href: "#blog" },
    { label: "Kontakt", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "glass-effect shadow-medium" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">U</span>
            </div>
            <div className="hidden md:block">
              <div className="font-display text-xl font-bold text-primary">
                ubezpieczhurtowo.pl
              </div>
              <div className="text-xs text-muted-foreground">Twoje bezpieczeństwo</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-smooth relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+48123456789" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-smooth">
              <Phone className="w-4 h-4" />
              <span>+48 123 456 789</span>
            </a>
            <Button className="gradient-accent shadow-glow">
              Wycena online
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 animate-slide-up glass-effect rounded-lg my-2">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-foreground hover:text-primary transition-smooth"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-border space-y-3">
                <a href="tel:+48123456789" className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+48 123 456 789</span>
                </a>
                <a href="mailto:kontakt@ubezpieczhurtowo.pl" className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>kontakt@ubezpieczhurtowo.pl</span>
                </a>
                <Button className="w-full gradient-accent">
                  Wycena online
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
