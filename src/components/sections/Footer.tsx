import { motion } from "framer-motion";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Benefits", href: "#benefits" },
  { label: "Services", href: "#services" },
  { label: "Selected Work", href: "#work" },
  { label: "Our Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Website Design",
  "Website Development",
  "Google & SEO Setup",
  "Website Care & Maintenance",
];

export function Footer() {
  return (
    <footer className="bg-[#4D3A2D] px-6 pt-32 pb-16 text-[#FDFBF7]">
      <div className="mx-auto max-w-7xl">

        {/* Brand */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="font-['Bodoni_Moda'] text-5xl leading-[0.95] lg:text-7xl">
            You run the
            <br />
            business carefree.
          </h2>

          <p className="mt-10 font-['League_Spartan'] text-2xl font-light text-[#E7DDD2]">
            We've got web.
          </p>

        </motion.div>

        {/* Grid */}

        <div className="mt-28 grid gap-20 lg:grid-cols-3">

          {/* Navigation */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="mb-8 text-sm font-semibold uppercase tracking-[0.4em] text-[#D8CCBE]">
              Navigation
            </p>

            <nav className="space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    block
                    w-fit
                    text-lg
                    text-[#FDFBF7]
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-[#E7D6BF]
                  "
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="mb-8 text-sm font-semibold uppercase tracking-[0.4em] text-[#D8CCBE]">
              Contact
            </p>

            <div className="space-y-5 text-lg">

              <a
  href="mailto:thesyyedlaiba@gmail.com"
  className="block transition-colors duration-300 hover:text-[#E7D6BF]"
>
  thesyyedlaiba@gmail.com
</a>

              <div className="space-y-2">

  <a
    href="tel:+917080301299"
    className="block text-lg transition-colors duration-300 hover:text-[#E7D6BF]"
  >
    +91 70803 01299
  </a>

  <a
    href="tel:+917860211113"
    className="block text-lg transition-colors duration-300 hover:text-[#E7D6BF]"
  >
    +91 78602 11113
  </a>

</div>

              <p className="text-[#DDD3C7]">
                Based in India.
              </p>

            </div>
          </motion.div>

          {/* Services */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="mb-8 text-sm font-semibold uppercase tracking-[0.4em] text-[#D8CCBE]">
              Services
            </p>

            <div className="space-y-4">
              {services.map((service) => (
                <p
                  key={service}
                  className="text-lg text-[#FDFBF7]"
                >
                  {service}
                </p>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Divider */}

        <div className="my-20 h-px w-full bg-white/10" />

        {/* Bottom */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-6 text-center text-[15px] text-[#D8CCBE] lg:flex-row"
        >

          <p>
            © 2026 We've Got Web. All rights reserved.
          </p>

          <p>
            Designed &amp; Developed with care.
          </p>

        </motion.div>

      </div>
    </footer>
  );
}