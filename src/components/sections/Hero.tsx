import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
   <section
  id="home"
 className="relative flex min-h-[70h] justify-center overflow-hidden bg-[#FDFBF7] px-6 pt-24 pb-16 sm:min-h-screen sm:items-center sm:pt-32 sm:pb-20"
 >
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      
  className="mx-auto mt-8 sm:mt-0 flex w-full max-w-6xl flex-col items-center text-center"
>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-10 sm:mb-20"
        >
          <div className="relative inline-block">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="absolute left-[-10px] right-[-10px] top-1/2 h-[78%] -translate-y-1/2 origin-left rounded-[8px] bg-[#C8D3C2]/80"
            />
            <p className="relative px-2 font-['League_Spartan'] text-lg sm:text-xl lg:text-2xl font-medium tracking-[-0.04em] text-[#4D3A2D]">
              You run the business <span className="italic">carefree.</span>
            </p>
          </div>
        </motion.div>

        {/* Heading */}
        <h1 className="font-['Cormorant_Garamond'] text-[#4D3A2D] leading-[1.02]">
          <motion.span
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="block text-[3.8rem] sm:text-[5.3rem] lg:text-[7.6rem] tracking-[-0.03em]"
          >
            We've
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.8 }}
            className="block mt-2 sm:-mt-2 lg:-mt-3 text-[3.8rem] sm:text-[5.3rem] lg:text-[7.6rem] tracking-[-0.03em]"
          >
            Got Web.
          </motion.span>
        </h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-8 max-w-2xl"
        >
          <p className="mt-8 font-['League_Spartan'] text-base sm:text-lg font-medium tracking-[0.06em] text-[#80917D]">
            Digital Design &amp; Development Studio
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-14 flex w-full flex-col items-center gap-5 sm:mt-16 sm:w-auto sm:flex-row"
        >
          <a
            href="#work"
            className="group flex w-full max-w-[320px] items-center justify-center gap-3 overflow-hidden rounded-full border border-[#4D3A2D] px-9 py-4 font-['League_Spartan'] text-[#4D3A2D] transition-all duration-500 hover:-translate-y-1 hover:bg-[#4D3A2D] hover:text-white sm:w-auto"
          >
            View Our Work
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

         <a
  href="https://forms.gle/PV3yzPsqri3fro1S8"
  target="_blank"
  rel="noopener noreferrer"
  className="flex w-full max-w-[320px] items-center justify-center rounded-full bg-[#FFE082] px-9 py-4 font-['League_Spartan'] text-[#80917D] transition-all duration-500 hover:-translate-y-1 hover:bg-[#F7D968] sm:w-auto"
>
  Start Your Project
</a>
        </motion.div>
      </motion.div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(92,64,51,.08) 1px, transparent 1px),
            radial-gradient(circle at 80% 40%, rgba(92,64,51,.06) 1px, transparent 1px),
            radial-gradient(circle at 30% 80%, rgba(92,64,51,.05) 1px, transparent 1px),
            radial-gradient(circle at 70% 70%, rgba(92,64,51,.04) 1px, transparent 1px)
          `,
          backgroundSize: "140px 140px",
        }}
      />
    </section>
  );
}
