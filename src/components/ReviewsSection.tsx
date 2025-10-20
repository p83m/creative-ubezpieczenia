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
  ];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(nextReview, 5000);
    return () => clearInterval(timer);
  }, []);

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

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative bg-card rounded-3xl shadow-strong p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-24 h-24 text-primary" />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < reviews[currentIndex].rating
                      ? "fill-accent text-accent"
                      : "text-muted"
                  }`}
                />
              ))}
            </div>

            {/* Review Text */}
            <blockquote className="text-xl md:text-2xl text-center text-foreground mb-8 font-medium leading-relaxed min-h-[120px] flex items-center justify-center">
              "{reviews[currentIndex].text}"
            </blockquote>

            {/* Author */}
            <div className="text-center">
              <div className="font-bold text-primary text-lg">
                {reviews[currentIndex].name}
              </div>
              <div className="text-muted-foreground text-sm">
                {reviews[currentIndex].role}
              </div>
              <div className="text-muted-foreground text-xs mt-1">
                {reviews[currentIndex].date}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevReview}
                className="rounded-full hover:gradient-primary hover:text-primary-foreground hover:border-transparent transition-smooth"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-smooth ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-muted hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextReview}
                className="rounded-full hover:gradient-primary hover:text-primary-foreground hover:border-transparent transition-smooth"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
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
