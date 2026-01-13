import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import PedagogySection from '@/components/sections/PedagogySection';
import FoodSection from '@/components/sections/FoodSection';
import EnrollmentSection from '@/components/sections/EnrollmentSection';
import BoardSection from '@/components/sections/BoardSection';
import PracticalSection from '@/components/sections/PracticalSection';
import ContactSection from '@/components/sections/ContactSection';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PedagogySection />
        <FoodSection />
        <EnrollmentSection />
        <BoardSection />
        <PracticalSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
