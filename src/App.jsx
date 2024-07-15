import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { FeatureSection } from './components/FeatureSection';
import { WorkflowSection } from './components/WorkflowSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialSection } from './components/TestimonialSection';
import { Footer } from './components/Footer';

import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkflowSection />
        <PricingSection />
        <TestimonialSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
