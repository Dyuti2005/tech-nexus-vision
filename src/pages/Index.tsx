import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FoundersSection from "@/components/FoundersSection";
import EventsSection from "@/components/EventsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FoundersSection />
      <EventsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
};

export default Index;
