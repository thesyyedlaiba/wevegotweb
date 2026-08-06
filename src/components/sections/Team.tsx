import { motion } from "framer-motion";

const team = [
  {
    name: "Laiba",
    role: "Lead Designer & Developer",
    skills: [
      "Website Strategy",
      "UI Design",
      "UX Design",
      "Front-end Development",
      "Brand Identity",
    ],
  },
  {
    name: "Abhishek",
    role: "Business Development & Operations",
    skills: [
      "Client Relations",
      "Business Development",
      "Project Management",
      "Operations",
    ],
  },
  {
    name: "Zahra",
    role: "Design Operations",
    skills: [
      "Design Systems",
      "Asset Management",
      "Content Organization",
      "Visual QA",
    ],
  },
  {
    name: "Ishaan",
    role: "Technical Support & QA",
    skills: [
      "Website Testing",
      "Cross-browser Testing",
      "Performance Checks",
      "Bug Tracking",
    ],
  },
];

export function Team() {
  return (
    <section
      id="team"
      className="bg-[#FBF6EF] px-6 py-36"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.45em] text-[#9C8B7A]">
            WHO WE ARE
          </p>

          <h2 className="font-['Bodoni_Moda'] text-6xl leading-[0.92] text-[#4D3A2D] lg:text-8xl">
            Meet
            <br />
            The Team
          </h2>
        </motion.div>

        {/* Cards */}

        <div className="space-y-10">

          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -2,
              }}
              className="
                rounded-[32px]
                border
                border-[#ECE4DA]
                bg-[#FFFDFC]
                px-10
                py-10
                transition-all
                duration-500
                hover:border-[#DDD1C3]
                hover:shadow-[0_18px_60px_rgba(77,58,45,0.05)]
                lg:px-12
              "
            >
              <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

                {/* Left */}

                <div>

                  <h3 className="font-['Bodoni_Moda'] text-5xl text-[#4D3A2D] lg:text-6xl">
                    {member.name}
                  </h3>

                  <p className="mt-3 text-xl font-medium text-[#8A6A48]">
                    {member.role}
                  </p>

                </div>

                {/* Right */}

                <div className="lg:border-l lg:border-[#EEE4D8] lg:pl-10">

                  <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#9C8B7A]">
                    Focus
                  </p>

                  <div className="flex flex-wrap gap-3">

                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          rounded-full
                          border
                          border-[#DDD3C8]
                          bg-white
                          px-4
                          py-2.5
                          text-sm
                          font-medium
                          text-[#4D3A2D]
                          shadow-[0_6px_18px_rgba(77,58,45,0.04)]
                          transition-all
                          duration-300
                          hover:border-[#80917D]
                          hover:bg-[#F8FAF7]
                        "
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="mx-auto max-w-3xl text-lg leading-8 text-[#6B5A4C]">
            A small team with a shared goal of creating thoughtful,
            high quality websites that help businesses build a meaningful
            online presence.
          </p>
        </motion.div>

      </div>
    </section>
  );
}