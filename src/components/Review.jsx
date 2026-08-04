import { motion } from "framer-motion";
import reviewVideo from "../assets/videos/review.mp4";
import { FaStar } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";

const storyCards = [
  {
    title: "Confidence Boost",
    text: "Feel stronger every day.",
    icon: "⭐",
  },
  {
    title: "Weight Loss",
    text: "Visible transformation.",
    icon: "🔥",
  },
  {
    title: "Healthy Lifestyle",
    text: "Fitness became a habit.",
    icon: "❤️",
  },
];

const stats = [
  { value: "500+", label: "Happy Women" },
  { value: "1000+", label: "Classes" },
  { value: "5+", label: "Years" },
];

export default function Review() {
  return (
    <motion.section
      id="review"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[-80px] h-72 w-72 rounded-full bg-pink-500/15 blur-3xl" />
        <div className="absolute bottom-[-80px] right-[-40px] h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.15]" />
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="inline-flex rounded-full border border-pink-500/40 bg-pink-500/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[4px] text-pink-400">
            ★★★★★ SUCCESS STORY
          </p>
          <h2 className="mt-5 text-4xl font-black text-white sm:text-5xl lg:text-[3.55rem]">
            Real Women.<br className="hidden sm:block" />
            Real Transformations.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Every story begins with a small decision, a stronger mindset, and a
            coach who believes in progress. Explore the journeys that turned
            commitment into confidence, energy, and lasting change.
          </p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -80, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="group relative w-full max-w-[360px] sm:max-w-[420px]">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-[32px] bg-pink-500/20 blur-3xl"
              />
              <div className="relative overflow-hidden rounded-[32px] border border-pink-400/60 bg-[#151515] p-2 shadow-[0_0_38px_rgba(255,45,149,0.25)]">
                <div className="aspect-[4/5] overflow-hidden rounded-[28px] bg-black">
                  <video
                    src={reviewVideo}
                    controls
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="absolute inset-x-0 top-4 flex items-center justify-between px-4">
                  <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[2px] text-pink-300 backdrop-blur-md">
                    Verified Member
                  </span>
                  <span className="rounded-full border border-pink-400/50 bg-[#151515]/90 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
                    Lost 8kg
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
                  <span className="flex items-center gap-2">
                    <FaPlay className="text-[10px] text-pink-400" />
                    Play highlight
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-[620px]"
          >
            <div className="mb-6 flex items-center gap-1 text-2xl text-yellow-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>

            <div className="grid gap-4">
              {storyCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-pink-400/40 hover:bg-white/8"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500/15 text-lg ring-1 ring-pink-400/40">
                      {card.icon}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white">{card.title}</h3>
                      <p className="mt-1 text-sm text-gray-300">{card.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(255,45,149,0.35)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,45,149,0.55)]"
            >
              Become Our Next Success Story
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </motion.a>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-pink-400/35 hover:bg-white/8"
                >
                  <div className="text-3xl font-black text-pink-500 sm:text-4xl">{stat.value}</div>
                  <p className="mt-2 text-xs uppercase tracking-[2px] text-gray-400 sm:text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}