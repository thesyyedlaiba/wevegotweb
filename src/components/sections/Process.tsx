import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We take time to understand your business, audience and goals before designing a single screen.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Layouts, typography and interactions are crafted to create a refined experience that feels unmistakably yours.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Every website is responsive, lightning fast and built with clean, scalable code that grows with your business.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Once everything feels perfect, we launch with confidence and continue supporting your website long after it's live.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="bg-[#FDFBF7] px-6 py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.45em] text-[#8F826F]">
            OUR PROCESS
          </p>

          <h2
            id="process-heading"
            className="font-['Bodoni_Moda'] text-5xl leading-none text-[#4D3A2D] sm:text-6xl lg:text-8xl"
          >
            Thoughtfully
            <br />
            Built.
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-[#6B5A4C]">
            Every project begins with curiosity, grows through collaboration,
            and ends with a website that feels timeless.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative overflow-hidden rounded-[48px]">
          {/* Background */}

          <div className="absolute inset-0 bg-[#DCEBCA]" />

          {/* Soft Overlay */}

          <div className="absolute inset-0 bg-[#FDFBF7]/35 backdrop-blur-[2px]" />

          <div className="relative px-8 py-10 sm:px-12 lg:px-20 lg:py-16">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                className={`group ${
                  index !== 0 ? "border-t border-white/35" : ""
                }`}
              >
                <div className="grid gap-8 py-12 lg:grid-cols-[150px_1fr] lg:gap-14 lg:py-14">
                  {/* Number */}

                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="font-['Bodoni_Moda'] text-6xl text-[#95A287] transition-colors duration-300 group-hover:text-[#4D3A2D] lg:text-7xl">
                      {step.number}
                    </span>
                  </motion.div>

                 {/* Content */}

<div
  className="
    rounded-[28px]
    p-6
    transition-all
    duration-500
    group-hover:bg-[#FDFBF7]/20
    group-hover:backdrop-blur-sm
    group-hover:shadow-[0_10px_30px_rgba(77,58,45,0.05)]
    group-hover:translate-x-2
  "
>
  <motion.h3
    whileHover={{ x: 4 }}
    transition={{ duration: 0.25 }}
    className="font-['Bodoni_Moda'] text-3xl text-[#4D3A2D] sm:text-4xl lg:text-5xl"
  >
    {step.title}
  </motion.h3>

  <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5C4B3F]">
    {step.description}
  </p>
</div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom Text */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="mx-auto max-w-3xl text-lg leading-8 text-[#6B5A4C]">
            Every website follows the same philosophy. Understand deeply.
            Design intentionally. Build precisely. Launch confidently.
          </p>
        </motion.div>
      </div>
    </section>
  );
}