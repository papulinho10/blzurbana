import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Offer from './components/Offer';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ContactStrip from './components/ContactStrip';
import ServiceDetail from './components/ServiceDetail';
import { SERVICES } from './constants';

function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);

  const handleServiceSelect = (id: number) => {
    setSelectedServiceId(id);
  };

  const handleBackToHome = () => {
    setSelectedServiceId(null);
  };

  const selectedService = SERVICES.find(s => s.id === selectedServiceId);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 overflow-x-hidden font-sans">
      <Header onNavigateHome={handleBackToHome} isHomePage={!selectedServiceId} />
      
      <main>
        {selectedServiceId && selectedService ? (
          <ServiceDetail service={selectedService} onBack={handleBackToHome} />
        ) : (
          <>
            <Hero />
            <Benefits />
            <Offer />
            <Services onServiceClick={handleServiceSelect} />
            <About />
            <Gallery />
            <ContactStrip />
            <Testimonials />
            <FAQ />
          </>
        )}
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;