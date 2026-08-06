import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import dragonfly from "../../assets/dragonfly.png";

interface IntroLoaderProps {
  onHeroReady: () => void;
  onComplete: () => void;
}

const DRAGONFLY_TIME = 5000;
const LOADER_FADE_TIME = 5000;
const COMPLETE_TIME = 5100;

export default function IntroLoader({
  onHeroReady,
  onComplete,
}: IntroLoaderProps) {
  const [visible, setVisible] = useState(true);


  useEffect(() => {
    const timers: number[] = [];

   
   timers.push(
  window.setTimeout(() => {
    onHeroReady();
  }, DRAGONFLY_TIME)
);
    timers.push(
      window.setTimeout(() => {
        setVisible(false);
      }, LOADER_FADE_TIME)
    );

    timers.push(
      window.setTimeout(() => {
        onComplete();
      }, COMPLETE_TIME)
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [onComplete, onHeroReady]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="
            fixed
            inset-0
            z-[9999]
            overflow-hidden
            bg-[#FDFBF7]
          "
        >
          <div className="relative h-full w-full">
            {/* ---------------- Dragonfly ---------------- */}

            <motion.div
              className="
                absolute
                top-[24%]
                left-0
                w-full
                pointer-events-none
              "
              animate={{
                y: [0, -14, 10, -8, 0],
              }}
              transition={{
                duration: 5.2,
                ease: "easeInOut",
              }}
            >
             <motion.img
  src={dragonfly}
  alt=""
  aria-hidden="true"
  draggable={false}
  className="
    absolute
    right-[-18vw]
    w-[120px]
    sm:w-[140px]
    md:w-[170px]
    select-none
  "
  animate={{
    x: [
      "0vw",
      "-18vw",
      "-38vw",
      "-58vw",
      "-78vw",
      "-98vw",
      "-120vw",
    ],

    rotate: [-4, 2, -2, 3, -1],

    scale: [1, 1.02, 0.99, 1.02, 1],

    opacity: [1, 1, 1, 1, 1, 1, 0],
  }}
  transition={{
    x: {
      duration: 5.2,
      ease: [0.34, 0.02, 0.19, 0.99],
    },

    rotate: {
      duration: 1.8,
      repeat: Infinity,
      ease: "easeInOut",
    },

    scale: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },

    opacity: {
      duration: 5.2,
      times: [0, 0.3, 0.6, 0.8, 0.92, 0.97, 1],
      ease: "linear",
    },
  }}
/>
            </motion.div>

              {/* Optional subtle background vignette */}

            <motion.div
              aria-hidden="true"
              className="
                absolute
                inset-0
                pointer-events-none
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
              style={{
                background:
                  "radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.04) 100%)",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}