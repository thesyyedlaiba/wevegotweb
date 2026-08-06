import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Website Design",
    description:
      "Thoughtfully designed websites that leave a lasting first impression.",
  },
  {
    number: "02",
    title: "Website Development",
    description:
      "Fast, responsive websites built to grow with your business.",
  },
  {
    number: "03",
    title: "Google & SEO Setup",
    description:
      "Helping customers discover your business with confidence.",
  },
  {
    number: "04",
    title: "Website Care & Maintenance",
    description:
      "Keeping your website secure, up-to-date, and performing at its best.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-[#FDFBF7] px-6 py-24 sm:py-28 lg:px-10 lg:py-36"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#EFE5DA]/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mb-20 flex flex-col items-center text-center sm:mb-24 lg:mb-32"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.45em] text-[#9C8B7A] sm:text-sm">
            SERVICES
          </p>

          <h2
            id="services-heading"
            className="font-['Bodoni_Moda'] leading-[0.9] text-[#4D3A2D]"
          >
            <span className="block text-5xl sm:text-6xl lg:text-8xl">
             How We Help
            </span>

            <span className="block text-5xl sm:text-6xl lg:text-8xl">
              Businesses Grow.
            </span>
          </h2>
        </motion.div>

        {/* Services */}

        <div className="divide-y divide-[#DDD3C7]">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -4 }}
              className="group relative py-10 transition-all duration-500 sm:py-12"
            >
              <div className="grid items-start gap-10 lg:grid-cols-[110px_1fr]">
                {/* Number */}

                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="font-['Bodoni_Moda'] text-5xl text-[#C8B59B] transition-colors duration-500 group-hover:text-[#4D3A2D] sm:text-6xl">
                    {service.number}
                  </span>
                </motion.div>

                {/* Content */}

                <div>
                 <motion.h3
  whileHover={{ x: 8 }}
  transition={{ duration: 0.3 }}
  className="
    font-['Cormorant_Garamond']
    text-4xl
    leading-tight
    text-[#4D3A2D]
    sm:text-5xl
  "
>
                    {service.title}
                  </motion.h3>

                  <p className="mt-4 max-w-3xl text-base leading-8 text-[#6B5A4C] sm:text-lg">
                    {service.description}
                  </p>
                </div>

                

                {/* Hover Line */}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#4D3A2D] transition-all duration-700 group-hover:w-full" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Text */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="mx-auto mt-20 max-w-3xl text-center sm:mt-24 lg:mt-28"
        >
        <div className="relative inline-block">
  <div
    className="
      absolute
      inset-x-0
      top-1/2
      h-[80%]
      -translate-y-1/2
      rounded-full
      bg-[#D3E3CF]
      opacity-40
      blur-xl
      z-0
    "
  />

  <p className="relative z-10 text-lg leading-8 text-[#6B5A4C]">
    Whether you're launching your first business or refreshing an existing one,
    we build websites that feel intentional, perform beautifully, and leave a
    lasting impression.
  </p>
</div>
        </motion.div>
      </div>
    </section>
  );
}