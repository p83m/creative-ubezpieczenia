import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Anna Kowalska",
      role: "Klient indywidualny",
      rating: 5,
      text: "Profesjonalna obsługa i świetne ceny! Pani doradca przeprowadziła mnie przez cały proces krok po kroku. Polecam każdemu!",
      date: "2 tygodnie temu",
    },
    {
      name: "Marek Nowak",
      role: "Właściciel firmy transportowej",
      rating: 5,
      text: "Ubezpieczamy tutaj całą flotę pojazdów. Szybka realizacja, konkurencyjne ceny i świetny kontakt. Polecam!",
      date: "1 miesiąc temu",
    },
    {
      name: "Joanna Wiśniewska",
      role: "Klient indywidualny",
      rating: 5,
      text: "Najlepsze doświadczenie z ubezpieczeniami jakie miałam. Wszystko jasno wytłumaczone, bez ukrytych opłat. Świetna sprawa!",
      date: "3 tygodnie temu",
    },
    {
      name: "Piotr Kamiński",
      role: "Właściciel restauracji",
      rating: 5,
      text: "Kompleksowe ubezpieczenie dla mojej restauracji w świetnej cenie. Polecam ubezpieczhurtowo.pl!",
      date: "1 tydzień temu",
    },
    {
      name: "Katarzyna Lewandowska",
      role: "Klient indywidualny",
      rating: 5,
      text: "Bardzo pomocni i cierpliwi. Odpowiedzieli na wszystkie moje pytania i pomogli wybrać najlepszą opcję.",
      date: "5 dni temu",
    },
    {
      name: "Tomasz Zieliński",
      role: "Manager IT",
      rating: 5,
      text: "Szybka wycena online i profesjonalna realizacja. Wszystko odbyło się bez wychodzenia z domu!",
      date: "2 tygodnie temu",
    },
    {
      name: "Magdalena Sikora",
      role: "Właścicielka salonu fryzjerskiego",
      rating: 5,
      text: "Wreszcie znalazłam ubezpieczenia dopasowane do potrzeb mojego biznesu. Świetna obsługa!",
      date: "3 tygodnie temu",
    },
    {
      name: "Paweł Dąbrowski",
      role: "Klient indywidualny",
      rating: 5,
      text: "Polecam! Uczciwe podejście, przejrzyste warunki i konkurencyjne ceny. Jestem bardzo zadowolony.",
      date: "1 tydzień temu",
    },
  ];

  const itemsPerPage = 4;
  const maxIndex = Math.max(0, reviews.length - itemsPerPage);

  const nextReview = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevReview = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const visibleReviews = reviews.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="reviews" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Co mówią nasi klienci
          </h2>
          <p className="text-lg text-muted-foreground">
            Dołącz do tysięcy zadowolonych klientów
          </p>
        </div>

        {/* Reviews Grid with Carousel */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {visibleReviews.map((review, index) => (
              <div
                key={currentIndex + index}
                className="bg-card rounded-2xl shadow-soft p-6 hover:shadow-medium transition-smooth animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>

                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? "fill-accent text-accent" : "text-muted"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-sm text-foreground mb-6 leading-relaxed min-h-[100px]">
                  "{review.text}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-bold text-primary text-sm">
                    {review.name}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {review.role}
                  </div>
                  <div className="text-muted-foreground text-xs mt-1">
                    {review.date}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevReview}
              disabled={currentIndex === 0}
              className="rounded-full disabled:opacity-30"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Progress Indicator */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                {currentIndex + 1} - {Math.min(currentIndex + itemsPerPage, reviews.length)} z {reviews.length}
              </span>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextReview}
              disabled={currentIndex >= maxIndex}
              className="rounded-full disabled:opacity-30"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Google Reviews Badge */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 bg-card px-6 py-3 rounded-full shadow-soft">
              <img
                src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png"
                alt="Google"
                className="h-4"
              />
              <div className="flex items-center space-x-1">
                <span className="font-bold text-foreground">4.9</span>
                <Star className="w-4 h-4 fill-accent text-accent" />
              </div>
              <span className="text-muted-foreground text-sm">z 500+ opinii</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
