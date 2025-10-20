import { Mail, Phone, Linkedin } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Anna Kowalska",
      role: "Dyrektor ds. Klientów Indywidualnych",
      description: "10 lat doświadczenia w ubezpieczeniach osobowych",
      email: "anna.kowalska@ubezpieczhurtowo.pl",
      phone: "+48 123 456 701",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    },
    {
      name: "Marek Nowak",
      role: "Dyrektor ds. Klientów Biznesowych",
      description: "12 lat w ubezpieczeniach dla firm",
      email: "marek.nowak@ubezpieczhurtowo.pl",
      phone: "+48 123 456 702",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    },
    {
      name: "Joanna Wiśniewska",
      role: "Specjalista ds. Komunikacji",
      description: "Ekspert w ubezpieczeniach komunikacyjnych",
      email: "joanna.wisniewska@ubezpieczhurtowo.pl",
      phone: "+48 123 456 703",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    },
    {
      name: "Piotr Kamiński",
      role: "Doradca Ubezpieczeniowy",
      description: "Specjalista od ubezpieczeń majątkowych",
      email: "piotr.kaminski@ubezpieczhurtowo.pl",
      phone: "+48 123 456 704",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Nasz zespół
          </h2>
          <p className="text-lg text-muted-foreground">
            Poznaj ekspertów, którzy zadbają o Twoje bezpieczeństwo
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-smooth hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-4">
                  <div className="flex space-x-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary-light transition-smooth"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary-light transition-smooth"
                    >
                      <Phone className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-1">
                  {member.name}
                </h3>
                <div className="text-sm font-medium text-secondary mb-3">
                  {member.role}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
