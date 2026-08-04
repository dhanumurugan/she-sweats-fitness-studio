import { FaHeart, FaFire, FaDumbbell, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import aboutImage from "../assets/image/about.jpg";

const featureCards = [
  {
    title: "High Energy",
    description: "Fast-paced dance sessions that keep your motivation soaring.",
    icon: FaFire,
  },
  {
    title: "Healthy Lifestyle",
    description: "Build lasting wellness habits through joyful movement.",
    icon: FaHeart,
  },
  {
    title: "Full Body Workout",
    description: "Tone, sweat, and strengthen every part of your body.",
    icon: FaDumbbell,
  },
];

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative overflow-hidden bg-[#0B0B0F] px-4 py-20 sm:px-6 lg:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7 }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-pink-500/15 blur-3xl" />
        <div className="absolute bottom-6 right-0 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
          >
            <div className="absolute -left-8 top-8 h-56 w-56 rounded-full bg-pink-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-pink-400/40 bg-gradient-to-br from-pink-500/40 via-fuchsia-400/20 to-transparent p-[1px] shadow-[0_30px_80px_rgba(0,0,0,0.48)]">
              <div className="relative overflow-hidden rounded-[31px] bg-[#12070d]">
                <img
                  src={aboutImage}
                  alt="Coach Sindhu Raja - She Sweats Fitness Studio Coach, Motivator & Transformer"
                  className="relative z-10 h-auto w-full rounded-[31px] object-cover bg-[#12070d]"
                />
                <div className="absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-black via-black/80 to-transparent" />
              </div>
            </div>

            <div className="absolute bottom-4 left-4 z-30 rounded-full border border-pink-300/40 bg-black/50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.34em] text-pink-100 backdrop-blur-xl">
              LADIES ONLY
            </div>

            <div className="absolute right-4 top-4 z-30 rounded-full border border-pink-300/40 bg-black/50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-pink-100 backdrop-blur-xl">
              Certified Coach
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative rounded-[30px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-7 lg:p-8"
          >
            <div className="absolute inset-0 rounded-[30px] bg-[radial-gradient(circle_at_top_right,rgba(244,114,182,0.24),transparent_35%)]" />
            <div className="relative">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.42em] text-pink-400">
                ABOUT SHE SWEATS
              </p>

              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
                Fitness That Feels <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-pink-300 bg-clip-text text-transparent">Fun</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-[15px]">
                She Sweats Fitness Studio is a place where fitness meets fun.
                Our energetic Zumba sessions help you stay healthy, burn calories,
                reduce stress, and enjoy every workout with music and movement.
              </p>

              <div className="relative mt-6 overflow-hidden rounded-[22px] border border-pink-400/25 bg-gradient-to-r from-pink-500/12 to-violet-500/12 px-5 py-4 shadow-[0_12px_28px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                <div className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-pink-300 to-fuchsia-500" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-6xl font-black text-pink-400/20 leading-none">
                  “
                </span>
                <p className="relative pl-4 text-sm font-semibold text-pink-50 sm:text-base">
                  Stronger. Healthier. Happier You.
                </p>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-[15px]">
                Whether you're just starting your fitness journey or already
                love dancing, our classes are designed for everyone.
                Experience high-energy workouts, supportive coaching,
                and an inspiring community led by Coach Sindhu Raja.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {featureCards.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                      whileHover={{ y: -4 }}
                      className="group flex h-full min-h-[154px] flex-col items-center justify-center rounded-[20px] border border-white/10 bg-white/[0.045] p-4 text-center shadow-[0_12px_30px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-300 hover:border-pink-400/40 hover:shadow-[0_16px_34px_rgba(236,72,153,0.12)]"
                    >
                      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-pink-400/35 bg-pink-500/10 text-pink-300 shadow-[0_0_18px_rgba(236,72,153,0.24)] transition-transform duration-300 group-hover:scale-110">
                        <Icon className="text-lg" />
                      </div>
                      <h3 className="text-sm font-semibold text-white sm:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[12px] leading-5 text-slate-300">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6">
                <a
                  href="#schedule"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(236,72,153,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(236,72,153,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F]"
                >
                  Explore Our Classes
                  <FaArrowRight className="text-xs" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}