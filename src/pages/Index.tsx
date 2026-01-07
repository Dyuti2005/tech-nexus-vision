import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FoundersSection from "@/components/FoundersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FoundersSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
};

export default Index;
