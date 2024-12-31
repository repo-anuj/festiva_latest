import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      </AnimatePresence>

      <div className={`bg-white pt-20 ${isLoading ? 'hidden' : ''}`}>
        <Navbar />
        <HeroSection />
        <FeatureSection />
        {/* <PortfolioSection />
        <TestimonialsSection /> */}
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default App;