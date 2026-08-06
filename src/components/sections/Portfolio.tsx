import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Kuumo Ramen",
    category: "Restaurant Website",
    description:
      "A warm, modern website inspired by Japanese minimalism, designed to showcase the atmosphere and menu beautifully.",
    image:
      "/kuumo-web.png",
      link: "https://kuumo-ramen-sigma.vercel.app/",
  },

  {
    title: "Café Lamha",
    category: "Café Website",
    description:
      "An editorial-inspired experience crafted to reflect warmth, comfort and thoughtful design.",
    image:
      "/cafe-lamhaa.png",
       link: "https://cafelamha-kappa.vercel.app/",
  },
];

export function Portfolio() {
  return (
   <section
  id="work"
  className="relative overflow-hidden px-6 py-32"
>
  {/* Editorial Background */}

<div className="absolute inset-0 bg-[#EEF5F7]" />
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32 text-center"
        >

          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.45em] text-[#9C8B7A]">
            SELECTED WORK
          </p>

          <h2 className="font-['Bodoni_Moda'] text-6xl leading-none text-[#4D3A2D] lg:text-8xl">
            Projects
          </h2>

        </motion.div>

        <div className="space-y-40">
                 {projects.map((project, index) => (
  <motion.article
    key={project.title}
    initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className={`grid items-center gap-16 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              {/* Image */}

             <motion.div
  whileHover={{ scale: 1.015 }}
  transition={{ duration: 0.5 }}
  className="
    group
    overflow-hidden
    rounded-[32px]
    shadow-[0_30px_80px_rgba(56,44,32,0.12)]
    transition-all
    duration-500
    hover:shadow-[0_40px_100px_rgba(56,44,32,0.18)]
  "
>

                <img
                  src={project.image}
                  alt={project.title}
                 className="
  h-[520px]
  w-full
  object-cover
  transition-transform
  duration-700
  ease-out
  group-hover:scale-105
"
                />

              </motion.div>

              {/* Content */}

              <div>

                
                <h3 className="font-['Bodoni_Moda'] text-5xl leading-none text-[#4D3A2D] lg:text-6xl">
                  {project.title}
                </h3>

<div className="mt-6">
  <span
    className="
      inline-flex
      items-center
      rounded-full
      bg-[#EAF2E8]
      px-4
      py-1.5
      text-sm
      font-medium
      tracking-wide
      text-[#6F866D]
    "
  >
    {project.category}
  </span>
</div>

                <p className="mt-8 max-w-xl text-lg leading-8 text-[#6B5A4C]">
                  {project.description}
                </p>

                <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
               className="group mt-12 inline-flex items-center gap-3 text-lg font-semibold text-[#4D3A2D] transition hover:gap-5"
                >

              

                  <span className="border-b border-[#4D3A2D] pb-1">
                    Visit Website
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </a>

              </div>

            </motion.article>
          ))}
                  </div>

        {/* Bottom Text */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <p className="mx-auto max-w-3xl text-lg leading-8 text-[#6B5A4C]">
            Every project is designed with the same philosophy:
            thoughtful design, seamless user experience and websites
            that help businesses leave a memorable first impression.
          </p>
        </motion.div>

      </div>
    </section>
  );
}