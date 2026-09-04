import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { SignatureBoxComposer } from './components/SignatureBoxComposer';
import { ProcessSection } from './components/ProcessSection';
import { ReviewsSection } from './components/ReviewsSection';
import { CTASection } from './components/CTASection';
import { InstantQuoteCalculator } from './components/InstantQuoteCalculator';

export default function App() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenCalculator = (service?: string) => {
    if (service) setSelectedService(service);
    setCalculatorOpen(true);
  };

  return (
    <div className="min-h-screen bg-industrial-black text-industrial-light font-display">
      {/* Top Navbar */}
      <Navbar onOpenCalculator={() => handleOpenCalculator()} />

      {/* Main Sections */}
      <main>
        <HeroSection onOpenCalculator={() => handleOpenCalculator()} />
        
        <ServicesSection onSelectService={(s) => handleOpenCalculator(s)} />

        <SignatureBoxComposer />

        <ProcessSection />

        <ReviewsSection />

        <CTASection onOpenCalculator={() => handleOpenCalculator()} />
      </main>

      {/* Interactive Volumetric Calculator Modal */}
      <InstantQuoteCalculator
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
