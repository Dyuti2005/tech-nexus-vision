import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import FloatingSocialSidebar from "@/components/FloatingSocialSidebar";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <FloatingSocialSidebar />
      <HeroSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
};

export default Index;
