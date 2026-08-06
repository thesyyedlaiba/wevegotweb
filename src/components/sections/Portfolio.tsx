import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
   
  title: "Kuumo Ramen",
  category: "Restaurant Website",
  description:
    "A warm, modern website inspired by Japanese minimalism, designed to showcase the atmosphere and menu beautifully.",
  desktopImage: "/kuumo-web.png",
  mobileImage: "/ramenphone.jpeg",
  link: "https://kuumo-ramen-sigma.vercel.app/",
},
  {
  title: "Café Lamha",
  category: "Café Website",
  description:
    "An editorial-inspired experience crafted to reflect warmth, comfort and thoughtful design.",
  desktopImage: "/cafe-lamhaa.png",
  mobileImage: "/cafephone.jpeg",
  link: "https://cafelamha-kappa.vercel.app/",
},
];

export function Portfolio() {
  return (
   <section
  id="work"
  className="relative overflow-hidden px-6 py-20 sm:py-28 lg:py-32"
>
  {/* Editorial Background */}

<div className="absolute inset-0 bg-[#EEF6EF]" />
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center sm:mb-24 lg:mb-32 mx-auto"
        >

          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.45em] text-[#9C8B7A]">
            SELECTED WORK
          </p>

          <h2 className="font-['Bodoni_Moda'] text-5xl sem:text-6xl leading-none text-[#4D3A2D] lg:text-8xl">
            Projects
          </h2>

        </motion.div>

        <div className="space-y-24 sm:space-y-32 lg:space-y-40">
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
              className={`grid items-center gap-10 lg:gap-16 lg:grid-cols-2 ${
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
    rounded-[24px] sm:rounded-[32px]
    shadow-[0_30px_80px_rgba(56,44,32,0.12)]
    transition-all
    duration-500
    hover:shadow-[0_40px_100px_rgba(56,44,32,0.18)]
  "
>

      <>
  {/* Desktop Preview */}
  <img
    src={project.desktopImage}
    alt={`${project.title} desktop`}
    className="
      hidden
      lg:block
      w-full
      rounded-[32px]
      transition-transform
      duration-700
      ease-out
      group-hover:scale-105
    "
  />

  {/* Mobile Preview */}
  <img
    src={project.mobileImage}
    alt={`${project.title} mobile`}
    className="
      block
      lg:hidden
      w-full
      rounded-[24px]
      transition-transform
      duration-700
      ease-out
      group-hover:scale-105
    "
  />
</>
          

              </motion.div>

              {/* Content */}

              <div>

                
                <h3 className="font-['Bodoni_Moda'] text-4xl sm:text-5xl lg:text-6xl leading-none text-[#4D3A2D]">
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

                <p className="mt-8 max-w-xl text-base sm:text-lg leading-7 sm:leading-8">
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
        
        </motion.div>

      </div>
    </section>
  );
}