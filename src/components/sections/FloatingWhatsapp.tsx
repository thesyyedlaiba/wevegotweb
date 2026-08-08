import { motion } from "framer-motion";

export function FloatingWhatsapp() {
  return (
    <motion.a
      href="https://wa.me/917860211113?text=Hi%20We%27ve%20Got%20Web!%20I%27d%20like%20to%20ask%20a%20quick%20question."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-3
        rounded-full
        border border-[#DDD3C7]
        bg-[#FFFCF8]
        px-4 py-3
        shadow-[0_8px_30px_rgba(77,58,45,0.10)]
        transition-shadow duration-300
        hover:shadow-[0_12px_35px_rgba(77,58,45,0.16)]
        sm:bottom-8 sm:right-8
      "
      aria-label="Chat with us on WhatsApp"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4D3A2D]">
        <span className="text-[17px] leading-none text-white">
          ♥
        </span>
      </span>

      <span className="text-sm font-medium tracking-wide text-[#4D3A2D]">
        Chat with us
      </span>
    </motion.a>
  );
}