import Navbar from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import Services from "./components/sections/Services";
import { Portfolio } from "./components/sections/Portfolio";
import { Team } from "./components/sections/Team";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { FloatingWhatsapp } from "./components/sections/FloatingWhatsapp";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Editorial Divider */}
      <div className="relative z-20 mt-8 -mb-12 flex justify-center">
        <img
          src="/divider.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none w-[330px] opacity-35"
        />
      </div>

      <Services />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}

export default App;