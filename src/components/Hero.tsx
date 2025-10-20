import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Users, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-insurance.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Szczęśliwa rodzina przed domem - bezpieczne ubezpieczenia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl animate-slide-up">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm text-white font-medium">Zaufane ubezpieczenia od 2010</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Bezpieczeństwo,
            <br />
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent/70">
              które możesz dotknąć
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Kompleksowe ubezpieczenia dla osób indywidualnych i firm. 
            Profesjonalne doradztwo, konkurencyjne ceny, szybka realizacja.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="gradient-accent shadow-glow text-lg px-8 py-6 group">
              Bezpłatna wycena
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6">
              Poznaj ofertę
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl">
            <div className="text-center glass-effect rounded-xl p-4">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-accent mr-2" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">15000+</div>
              <div className="text-sm text-white/70">Zadowolonych klientów</div>
            </div>
            <div className="text-center glass-effect rounded-xl p-4">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-accent mr-2" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">14 lat</div>
              <div className="text-sm text-white/70">Doświadczenia</div>
            </div>
            <div className="text-center glass-effect rounded-xl p-4">
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 text-accent mr-2" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-white/70">Pozytywnych opinii</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
