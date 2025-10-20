import { Calendar, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const posts = [
    {
      title: "Jak wybrać najlepsze ubezpieczenie OC i AC?",
      excerpt: "Kompleksowy przewodnik po ubezpieczeniach komunikacyjnych. Dowiedz się, na co zwrócić uwagę przy wyborze.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
      category: "Ubezpieczenia komunikacyjne",
      date: "15 marca 2024",
      readTime: "5 min",
    },
    {
      title: "Ubezpieczenie firmy - co warto wiedzieć?",
      excerpt: "Podstawowe informacje o ubezpieczeniach dla przedsiębiorców. Sprawdź, jak zabezpieczyć swój biznes.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      category: "Ubezpieczenia biznesowe",
      date: "10 marca 2024",
      readTime: "7 min",
    },
    {
      title: "Ubezpieczenie na życie - dla kogo?",
      excerpt: "Dlaczego warto pomyśleć o ubezpieczeniu życiowym? Poznaj korzyści i najważniejsze aspekty.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      category: "Ubezpieczenia życiowe",
      date: "5 marca 2024",
      readTime: "6 min",
    },
    {
      title: "Ubezpieczenia podróżne - co powinny zawierać?",
      excerpt: "Planując wyjazd, nie zapomnij o ubezpieczeniu. Zobacz, na co zwrócić uwagę przy jego wyborze.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
      category: "Ubezpieczenia podróżne",
      date: "1 marca 2024",
      readTime: "4 min",
    },
  ];

  return (
    <section id="blog" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Blog i porady
          </h2>
          <p className="text-lg text-muted-foreground">
            Najnowsze artykuły i porady eksperckie
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-smooth hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center space-x-1 bg-accent px-3 py-1 rounded-full text-xs font-medium text-accent-foreground">
                    <Tag className="w-3 h-3" />
                    <span>{post.category}</span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-primary-light transition-smooth line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <button className="flex items-center text-sm font-medium text-primary hover:text-primary-light transition-smooth group">
                  Czytaj więcej
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Zobacz wszystkie artykuły
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
