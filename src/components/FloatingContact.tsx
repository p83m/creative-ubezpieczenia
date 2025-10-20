import { useState } from "react";
import { MessageCircle, Phone, Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full gradient-accent shadow-glow flex items-center justify-center hover:scale-110 transition-smooth group"
        aria-label="Kontakt szybki"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-accent-foreground" />
        ) : (
          <MessageCircle className="w-6 h-6 text-accent-foreground group-hover:scale-110 transition-smooth" />
        )}
      </button>

      {/* Options Menu */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 flex flex-col space-y-3 animate-scale-in">
          <a
            href="tel:+48123456789"
            className="flex items-center space-x-3 bg-card shadow-strong rounded-full px-4 py-3 hover:shadow-glow transition-smooth group"
          >
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-medium text-foreground pr-2">Zadzwoń</span>
          </a>

          <a
            href="mailto:kontakt@ubezpieczhurtowo.pl"
            className="flex items-center space-x-3 bg-card shadow-strong rounded-full px-4 py-3 hover:shadow-glow transition-smooth group"
          >
            <div className="w-10 h-10 rounded-full gradient-secondary flex items-center justify-center">
              <Mail className="w-5 h-5 text-secondary-foreground" />
            </div>
            <span className="font-medium text-foreground pr-2">Email</span>
          </a>

          <a
            href="https://wa.me/48123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-card shadow-strong rounded-full px-4 py-3 hover:shadow-glow transition-smooth group"
          >
            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="font-medium text-foreground pr-2">WhatsApp</span>
          </a>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default FloatingContact;
