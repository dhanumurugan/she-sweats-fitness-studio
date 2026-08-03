import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Instructor from "./components/Instructor";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
import Review from "./components/Review";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import LoadingScreen from "./components/LoadingScreen";
import TrialModal from "./components/TrialModal";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTrialOpen, setIsTrialOpen] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen overflow-x-hidden bg-[#070707] text-white">
          <Navbar />

          <main>
            <Hero onBookTrial={() => setIsTrialOpen(true)} />
            <About />
            <Features />
            <Instructor />
            <Schedule />
            <Gallery />
            <Review />
            <Contact />
          </main>

          <Footer />
          <WhatsappButton />

          <TrialModal
            isOpen={isTrialOpen}
            onClose={() => setIsTrialOpen(false)}
          />
        </div>
      )}
    </>
  );
}

export default App;