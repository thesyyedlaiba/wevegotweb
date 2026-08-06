import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Benefits", href: "#benefits" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/20 bg-white/70 shadow-lg backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}

          <motion.a
            href="#home"
            whileHover={{ scale: 1.04 }}
            className="text-2xl font-extrabold tracking-tight"
          >
          </motion.a>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-7 lg:flex lg:gap-9">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="group relative text-[15px] font-medium text-stone-700 transition-colors duration-300 hover:text-[#4D3A2D]"
              >
                {item.name}

                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#80917D] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* CTA */}

          <div className="hidden lg:block">
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    href="#contact"
    className="rounded-full bg-[#4D3A2D] px-6 py-3 font-medium text-white transition hover:bg-[#3E2E24]"
  >
    Start Your Project
  </motion.a>
</div>

          {/* Mobile Toggle */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
          >
            {menuOpen ? (
              <X className="h-7 w-7 text-[#4D3A2D]" />
            ) : (
              <Menu className="h-7 w-7 text-[#4D3A2D]" />
            )}
          </button>

        </div>
      </motion.nav>

      {/* Mobile Menu */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed left-0 top-20 z-40 w-full border-t border-[#EFE7DD] bg-white shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-6 p-6">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg text-stone-700 transition-colors duration-300 hover:text-[#80917D]"
                >
                  {item.name}
                </a>
              ))}

              <div className="border-t border-[#E9E1D6] pt-6">
                <a
  href="#contact"
  onClick={() => setMenuOpen(false)}
  className="block rounded-full bg-[#4D3A2D] py-3 text-center text-white transition hover:bg-[#3E2E24]"
>
  Start Your Project
</a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}