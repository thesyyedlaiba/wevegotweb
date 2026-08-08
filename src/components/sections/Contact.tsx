import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#FDFBF7] px-6 py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.45em] text-[#9C8B7A]">
            CONTACT
          </p>

          <h2 className="font-['Bodoni_Moda'] text-4xl leading-[0.92] text-[#4D3A2D] sm:text-6xl lg:text-8xl">
            Let's Build
            <br />
            Something
            <br />
            Together.
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 text-[#6B5A4C]">
            Whether you're launching your first business,
            refreshing your brand, or ready for a website
            that truly represents your work, we'd love to
            hear about your ideas.
          </p>
        </motion.div>

        {/* Contact Grid */}

        <div className="mt-20 grid gap-14 sm:gap-20 lg:grid-cols-2"
>
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-14">

              {/* Email */}

              <div className="flex items-start gap-5">

                <div className="rounded-full border border-[#DDD3C7] p-3.5">
                  <Mail size={18} className="text-[#4D3A2D]" />
                </div>

                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#9C8B7A]">
                    Email
                  </p>

                  <a
                    href="mailto:thesyyedlaiba@gmail.com"
                    className="text-lg sm:text-xl text-[#4D3A2D] transition-colors duration-300 hover:text-[#80917D]"
                  >
                    thesyyedlaiba@gmail.com
                  </a>
                </div>

              </div>

              {/* Phone */}

              <div className="flex items-start gap-5">

                <div className="rounded-full border border-[#DDD3C7] p-3.5">
                  <Phone size={18} className="text-[#4D3A2D]" />
                </div>

                <div>

                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#9C8B7A]">
                    Phone
                  </p>


                  <a
                    href="tel:+917860211113"
                    className="block text-lg sm:text-xl text-[#4D3A2D] transition-colors duration-300 hover:text-[#80917D]"
                  >
                    +91 78602 11113
                  </a>

                </div>

              </div>

              {/* Location */}

              <div className="flex items-start gap-5">

                <div className="rounded-full border border-[#DDD3C7] p-3.5">
                  <MapPin size={18} className="text-[#4D3A2D]" />
                </div>

                <div>

                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#9C8B7A]">
                    Location
                  </p>

                  <p className="text-lg sm:text-xl text-[#4D3A2D]">
                    Based in India, working worldwide.
                  </p>

                </div>

              </div>

            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-[#E8DED2] bg-[#FFFCF8] p-8 sm:p-12 shadow-[0_20px_60px_rgba(77,58,45,0.05)]"
          >

            <div className="flex h-full flex-col items-center justify-center text-center">

              <p className="max-w-sm text-base leading-7 sm:text-lg sm:leading-8 text-[#6B5A4C]">
                Every great website starts with a conversation.
                Tell us about your project, your goals, and your vision.
              </p>

              <a
                href="https://forms.gle/Wj4t35pqoFp3jQFUA"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-12 inline-flex items-center gap-3 rounded-full bg-[#4D3A2D] px-8 py-4 text-base sm:px-10 sm:py-5 sm:text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#5B4536]"
              >
                Start Your Project

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

            </div>

          </motion.div>

        </div>

        {/* Bottom */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-28 text-center"
        >
          <p className="mx-auto max-w-3xl text-base leading-7 sm:text-lg sm:leading-8 text-[#6B5A4C]">
            Every great website starts with a conversation.
            We'd love to hear what you're building.
          </p>
        </motion.div>

      </div>
    </section>
  );
}