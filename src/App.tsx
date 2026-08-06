import { useState } from "react";
import { motion } from "framer-motion";

import IntroLoader from "./components/sections/IntroLoader";
import Navbar from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import Benefits from "./components/sections/Benefits";
import Services from "./components/sections/Services";
import { Portfolio } from "./components/sections/Portfolio";
import { Process } from "./components/sections/Process";
import { Team } from "./components/sections/Team";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [heroReady, setHeroReady] = useState(false);

  return (
    <>
      {/* Website is always underneath */}
      <Navbar />
      <Hero heroReady={heroReady} />

      {/* Editorial Divider */}

      <div className="relative z-20 mt-8 -mb-12 flex justify-center">
        <motion.img
          src="/divider.png"
          alt=""
          aria-hidden="true"
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 0.35,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.9,
          }}
          className="pointer-events-none select-none w-[330px]"
        />
      </div>

      <Benefits />
      <Services />
      <Portfolio />
      <Process />
      <Team />
      <Contact />
      <Footer />

      {/* Loader sits on top */}
      {loading && (
        <IntroLoader
          onHeroReady={() => setHeroReady(true)}
          onComplete={() => setLoading(false)}
        />
      )}
    </>
  );
}

export default App;