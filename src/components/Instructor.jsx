import { FaArrowRight, FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import instructorVideo from "../assets/videos/instructor.mp4";

const features = [
  "Weight Management",
  "Strength Training",
  "Diastasis Recti Recovery",
  "Postpartum Fitness",
  "Lifestyle Coaching",
  "Personal Attention",
];

const stats = [
  { value: "500+", label: "Happy Members" },
  { value: "5+", label: "Years Experience" },
  { value: "1000+", label: "Classes Completed" },
];

export default function Instructor() {
  return (
    <motion.section
      id="instructor"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#050505] py-20 px-5 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1200px] grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-[360px] sm:max-w-[420px]">
            <div className="absolute inset-0 rounded-[28px] bg-pink-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-pink-400/70 bg-[#151515] p-2 shadow-[0_0_45px_rgba(247,37,133,0.18)]">
              <div className="aspect-[4/5] overflow-hidden rounded-[24px]">
                <video
                  src={instructorVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-4 left-4 rounded-full border border-pink-400/50 bg-[#151515]/90 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md shadow-lg shadow-pink-950/40">
              Certified Fitness Coach
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-[620px]"
        >
          <div className="mb-4">
            <p className="inline-flex rounded-full border border-pink-500/40 bg-pink-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[4px] text-pink-400">
              MEET YOUR COACH
            </p>

            <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl lg:text-[3.3rem]">
              Train With Coach Sindhu Raja
            </h2>

            <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-pink-500 via-pink-400 to-transparent" />
          </div>

          <p className="mt-6 max-w-[580px] text-base leading-8 text-gray-300 sm:text-lg">
            Coach, Motivator, Transformer. Helping women build strength, confidence,
            and a healthy lifestyle every day.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-[#151515] p-4 text-white transition duration-300 hover:-translate-y-1 hover:border-pink-400/50 hover:shadow-[0_0_25px_rgba(247,37,133,0.14)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-500/15 text-pink-400 ring-1 ring-pink-400/40">
                  <span className="text-sm font-bold">✓</span>
                </span>

                <span className="text-sm font-semibold sm:text-[15px]">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(247,37,133,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(247,37,133,0.55)]"
          >
            Join Today’s Class
            <FaArrowRight className="text-sm" />
          </motion.a>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-md transition duration-300 hover:border-pink-400/40 hover:bg-white/8"
              >
                <h3 className="text-3xl font-black text-pink-500 sm:text-4xl">
                  {stat.value}
                </h3>

                <p className="mt-2 text-xs uppercase tracking-[2px] text-gray-400 sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href="https://instagram.com/she_sweats_fitness_studio"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-pink-400/60 bg-[#151515] text-pink-400 transition duration-300 hover:scale-110 hover:border-pink-300 hover:text-pink-300"
            >
              <FaInstagram className="text-base" />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-pink-400/60 bg-[#151515] text-pink-400 transition duration-300 hover:scale-110 hover:border-pink-300 hover:text-pink-300"
            >
              <FaFacebookF className="text-base" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}