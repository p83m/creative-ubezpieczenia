import { useEffect, useRef, useState } from "react";
import { Award, Target, Heart, Sparkles } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 15000, suffix: "+", label: "Zadowolonych klientów" },
    { value: 14, suffix: " lat", label: "Doświadczenia na rynku" },
    { value: 98, suffix: "%", label: "Pozytywnych rekomendacji" },
    { value: 50, suffix: "+", label: "Produktów ubezpieczeniowych" },
  ];

  const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, end]);

    return (
      <span className="text-5xl font-bold text-primary font-display">
        {count}
        {suffix}
      </span>
    );
  };

  const values = [
    {
      icon: Award,
      title: "Doświadczenie",
      description: "14 lat obecności na rynku ubezpieczeń to gwarancja profesjonalizmu i zaufania",
    },
    {
      icon: Target,
      title: "Indywidualne podejście",
      description: "Każdy klient jest wyjątkowy - dostosowujemy ofertę do Twoich potrzeb",
    },
    {
      icon: Heart,
      title: "Troska o klienta",
      description: "Jesteśmy z Tobą na każdym etapie - od wyceny po wypłatę odszkodowania",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">O nas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Twoje bezpieczeństwo to nasza misja
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Od 2010 roku pomagamy tysiącom klientów odnaleźć idealne ubezpieczenia. 
            Łączymy wiedzę ekspercką z nowoczesną technologią, aby proces był prosty i transparentny.
          </p>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-smooth"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-3">
                {isVisible && <Counter end={stat.value} suffix={stat.suffix} />}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl gradient-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <value.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
