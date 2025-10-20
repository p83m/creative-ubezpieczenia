import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, Building2, Car, Home, Briefcase, Heart, Shield, Plane, ArrowRight } from "lucide-react";

const OfferSection = () => {
  const [activeTab, setActiveTab] = useState<"individual" | "business">("individual");

  const individualOffers = [
    {
      icon: Car,
      title: "Ubezpieczenia komunikacyjne",
      description: "OC, AC, NNW - kompleksowa ochrona Twojego pojazdu",
      features: ["OC obowiązkowe", "Autocasco", "Assistance", "NNW kierowcy"],
    },
    {
      icon: Home,
      title: "Ubezpieczenia majątkowe",
      description: "Dom, mieszkanie, ruchomości - zabezpiecz to, co najważniejsze",
      features: ["Ubezpieczenie domu", "Mieszkania", "Odpowiedzialność cywilna", "Ruchomości domowe"],
    },
    {
      icon: Heart,
      title: "Ubezpieczenia na życie",
      description: "Ochrona Ciebie i Twoich bliskich na każdym etapie życia",
      features: ["Ochrona życia", "Choroby poważne", "NNW", "Oszczędności"],
    },
    {
      icon: Plane,
      title: "Ubezpieczenia podróżne",
      description: "Bezpieczne podróże po całym świecie",
      features: ["Koszty leczenia", "Bagaż", "OC", "Rezygnacja z wyjazdu"],
    },
  ];

  const businessOffers = [
    {
      icon: Building2,
      title: "Ubezpieczenia firmowe",
      description: "Kompleksowa ochrona Twojego biznesu",
      features: ["Mienie firmy", "OC działalności", "Odpowiedzialność cywilna", "Sprzęt elektroniczny"],
    },
    {
      icon: Briefcase,
      title: "Ubezpieczenia floty",
      description: "Zarządzanie flotą pojazdów firmowych",
      features: ["OC/AC floty", "Zarządzanie polisami", "Assistance 24/7", "Raportowanie"],
    },
    {
      icon: Shield,
      title: "Ubezpieczenia pracownicze",
      description: "Ochrona dla Twoich pracowników",
      features: ["Grupowe na życie", "Grupowe medyczne", "Fundusze PPK", "Ubezpieczenia wyjazdów"],
    },
    {
      icon: Heart,
      title: "Ubezpieczenia zawodowe",
      description: "Specjalistyczne ubezpieczenia dla różnych branż",
      features: ["OC zawodowe", "Błędy i zaniechania", "D&O", "Cyber ochrona"],
    },
  ];

  const currentOffers = activeTab === "individual" ? individualOffers : businessOffers;

  return (
    <section id="offer" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Nasza oferta
          </h2>
          <p className="text-lg text-muted-foreground">
            Wybierz kategorię, która Cię interesuje
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-muted rounded-xl shadow-soft">
            <button
              onClick={() => setActiveTab("individual")}
              className={`flex items-center space-x-2 px-8 py-4 rounded-lg font-medium transition-smooth ${
                activeTab === "individual"
                  ? "gradient-primary text-primary-foreground shadow-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <User className="w-5 h-5" />
              <span>Dla osób prywatnych</span>
            </button>
            <button
              onClick={() => setActiveTab("business")}
              className={`flex items-center space-x-2 px-8 py-4 rounded-lg font-medium transition-smooth ${
                activeTab === "business"
                  ? "gradient-primary text-primary-foreground shadow-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Building2 className="w-5 h-5" />
              <span>Dla firm</span>
            </button>
          </div>
        </div>

        {/* Offer Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentOffers.map((offer, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-strong transition-smooth hover:-translate-y-2 border border-border"
            >
              <div className="w-14 h-14 rounded-xl gradient-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce">
                <offer.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-3">{offer.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{offer.description}</p>
              
              <ul className="space-y-2 mb-6">
                {offer.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full group-hover:gradient-accent group-hover:text-accent-foreground group-hover:border-transparent transition-smooth">
                Dowiedz się więcej
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Nie znalazłeś tego, czego szukasz?
          </p>
          <Button size="lg" className="gradient-accent shadow-glow">
            Porozmawiaj z doradcą
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
