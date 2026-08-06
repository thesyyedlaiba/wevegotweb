import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  heroReady: boolean;
}
export function Hero({ heroReady }: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FDFBF7] px-6 pt-32 pb-20"
    >

      {/* Main Content */}

      <motion.div
 initial={{
  opacity: 0,
  scale: 0.985,
  y: 8,
}}

animate={
  heroReady
    ? {
        opacity: 1,
        scale: 1,
        y: 0,
      }
    : {
        opacity: 0,
        scale: 0.985,
        y: 8,
      }
}

transition={{
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
}}
  className="mx-auto flex w-full max-w-6xl flex-col items-center text-center"
>

        {/* Small Label */}

       <motion.div
  initial={{ opacity: 0, y: 25 }}
 animate={
  heroReady
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 25 }
}
  transition={{
  delay: 0.35,
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
}}
  className="mb-20"
>
  <div className="relative inline-block">

    {/* Highlighter */}

    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{
        delay: 0.2,
        duration: 0.7,
        ease: "easeOut",
      }}
      className="absolute left-[-10px] right-[-10px] top-1/2 h-[78%] -translate-y-1/2 origin-left rounded-[8px] bg-[#C8D3C2]/80"
    />

    <p className="relative px-2 font-['League_Spartan'] text-2xl font-medium tracking-[-0.04em] text-[#4D3A2D]">
      You run the business{" "}
      <span className="italic">
      carefree.
</span>
    </p>

  </div>
</motion.div>

        {/* Main Heading */}
<h1 className="font-['Cormorant_Garamond'] text-[#4D3A2D] leading-[0.9]">
  <motion.span
    initial={{ opacity: 0, y: 22 }}
    animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
    transition={{
      duration: 0.9,
      delay: 0.1,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="block text-[4.6rem] sm:text-[5.8rem] lg:text-[7.8rem] tracking-[-0.03em]"
  >
    We've
  </motion.span>

  <motion.span
    initial={{ opacity: 0, y: 22 }}
    animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
    transition={{
      duration: 0.9,
      delay: 0.22,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="block -mt-3 text-[4.6rem] sm:text-[5.8rem] lg:text-[7.8rem] tracking-[-0.03em]"
  >
    Got Web.
    
  </motion.span>
</h1>
       
        {/* Tagline */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
         transition={{
  delay: 0.55,
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
}}
          className="mt-8 max-w-2xl"
        >
         <p className="mt-10 font-['League_Spartan'] text-lg font-medium tracking-[0.06em] text-[#80917D]">
          Digital Design & Development Studio
        </p>
        </motion.div>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={
  heroReady
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 25 }
}
          transition={{
  delay: 0.75,
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
}}
          className="mt-16 flex flex-col items-center gap-6 sm:flex-row"
        >
         
<a
  href="#work"
  className="group relative overflow-hidden rounded-full border border-[#4D3A2D] px-9 py-4 font-['League_Spartan'] text-[#4D3A2D] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(92,64,51,0.15)] hover:text-white"
>
  <span className="absolute inset-0 origin-left scale-x-0 bg-[#4D3A2D] transition-transform duration-500 group-hover:scale-x-100" />

  <span className="relative flex items-center gap-3">
    View Our Work

    <ArrowRight
      size={20}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </span>
</a>

<a
  href="#contact"
  className="rounded-full bg-[#FFE082] px-9 py-4 font-['League_Spartan'] text-[#80917D] transition-all duration-500 hover:-translate-y-1 hover:bg-[#F7D968] hover:shadow-[0_12px_30px_rgba(92,64,51,0.15)]"
>
  Let's Talk
</a>
        



     </motion.div>


      
      </motion.div>



     {/* Paper Texture */}

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