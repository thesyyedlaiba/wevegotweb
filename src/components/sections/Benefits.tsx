import { motion } from "framer-motion";
import {
  MapPinned,
  Star,
  Smartphone,
  Images,
  MessageCircle,
  Search,
  ClipboardList,
  Clock3,
  
} from "lucide-react";

const benefitCards = [
  {
    icon: MapPinned,
    title: "Easy to Find",
    description:
      "Help customers find your business instantly with integrated Google Maps.",
  },
  {
    icon: Star,
    title: "Build Trust",
    description:
      "Show reviews that make people confident before they ever visit.",
  },
  {
    icon: Smartphone,
    title: "Looks Great Everywhere",
    description:
      "Beautiful on every phone, tablet and desktop screen.",
  },
  {
    icon: Images,
    title: "Showcase Your Business",
    description:
      "Display your products, food, services or space beautifully.",
  },
  {
    icon: MessageCircle,
    title: "Instant Contact",
    description:
      "Let customers reach you instantly through WhatsApp or phone.",
  },
  {
    icon: Search,
    title: "Be Found on Google",
    description:
      "Improve your visibility and help more people discover your business.",
  },
  {
    icon: Clock3,
    title: "Always Working",
    description:
      "Your website works for you 24 hours a day, even while you sleep.",
  },
  {
    icon: ClipboardList,
    title: "What You Offer",
    description:
      "Help customers explore everything you offer before they visit.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-[#F7EFE5] pt-20 pb-32"
    >
      {/* Soft Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-48
          h-[450px]
          w-[450px]
          -translate-x-1/2
          rounded-full
          bg-[#B9BCBC]
          opacity-[0.10]
          blur-[160px]
        "
      />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2
            className="
              font-['Cormorant_Garamond']
              text-[#4D3A2D]
              text-5xl
              sm:text-6xl
              lg:text-7xl
              leading-[0.94]
              tracking-[-0.03em]
            "
          >
            Every Great Place
            <br />
            Deserves a Beautiful Website.
          </h2>

          <p
            className="
              mx-auto
              mt-10
              max-w-2xl
              font-['League_Spartan']
              text-lg
              leading-8
              text-[#6F6A65]
            "
          >
            A website should do more than just exist. It should help people discover you, trust your business, and choose you before they ever walk through your doors.
          </p>

          <div className="mt-16 flex items-center justify-center gap-5">
            <div className="h-px w-24 bg-[#DDD3C8]" />

            <span className="text-xl text-[#80917D]">
              ✦
            </span>

            <div className="h-px w-24 bg-[#DDD3C8]" />
          </div>


{/* Grid + Sage Glow */}



<div className="relative mt-20">

  {/* Sage Glow */}
  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      h-[1200px]
      w-[1200px]
      rounded-full
      bg-[#80917D]
      opacity-[0.40]
      blur-[300px]
      -z-10
    "
  />

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.8,
      delay: 0.2,
    }}
    className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4"
  >


  {benefitCards.map((card, index) => {
    const Icon = card.icon;

    return (
      <motion.div
        key={card.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.08,
          duration: 0.6,
        }}
        whileHover={{
          y: -8,
        }}
     className={`
  group
  relative
  overflow-hidden
  rounded-[30px]
  border
  border-[#E9E1D6]
  p-8
  transition-all
  duration-500
  hover:-translate-y-2
  hover:border-[#B9BCBC]
  hover:shadow-[0_18px_50px_rgba(77,58,45,0.06)]



  ${
    card.title === "Build Trust"
      ? "lg:col-span-2"
      : ""
  }

  ${
    card.title === "Showcase Your Business"
      ? "lg:col-span-2"
      : ""
  }

  ${
    card.title === "Instant Contact"
      ? "lg:col-span-2"
      : ""
  }

  ${
    card.title === "Always Working"
      ? "lg:col-span-2 lg:col-start-2"
      : ""
  }
`}
style={{
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(250,247,242,0.95))",
}}
      >
        
      <div
  className="
    absolute
    inset-0
    opacity-0
    transition-opacity
    duration-500
    group-hover:opacity-100
  "
>
  <div
    className="
      absolute
      -top-16
      -right-16
      h-44
      w-44
      rounded-full
      bg-[#B9BCBC]/10
      blur-3xl
    "
  />
</div>

        <p
  className="
    mb-5
    font-['League_Spartan']
    text-xs
    tracking-[0.35em]
    text-[#B8AEA3]
    uppercase
  "
>
  {(index + 1).toString().padStart(2, "0")}
</p>

        <div
          className="
            mb-7
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#EEF2EF]
            transition-all
            duration-300
            group-hover:bg-[#80917D]
          "
        >
        <Icon
  size={24}
  className="
    text-[#80917D]
    transition-all
    duration-300
    group-hover:text-white
    group-hover:scale-110
    group-hover:rotate-6
  "
/>
        </div>

        <h3
          className="
            font-['Cormorant_Garamond']
            text-3xl
            leading-tight
            text-[#4D3A2D]
          "
        >
          {card.title}
        </h3>

        <p
          className="
            mt-5
            font-['League_Spartan']
            leading-7
            text-[#6F6A65]
          "
        >
          {card.description}
        </p>
      </motion.div>
    );


   })}
  </motion.div>
</div>

        </motion.div>
      </div>
    </section>
  );
}