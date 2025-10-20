import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import OfferSection from "@/components/OfferSection";
import ReviewsSection from "@/components/ReviewsSection";
import TeamSection from "@/components/TeamSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      <OfferSection />
      <ReviewsSection />
      <TeamSection />
      <BlogSection />
      <ContactSection />
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
