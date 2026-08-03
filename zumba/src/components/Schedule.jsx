import { motion } from "framer-motion";
import {
  FaSun,
  FaMoon,
  FaCalendarDays,
  FaClock,
  FaArrowRight,
  FaWhatsapp,
  FaLaptop,
} from "react-icons/fa6";

const scheduleItems = [
  {
    title: "Early Morning Batch",
    day: "Early Morning",
    time: "5:30 AM – 6:30 AM",
    status: "Open",
    note: "High-energy early morning class to kickstart your day.",
    icon: FaSun,
    accent: "from-amber-500/25 via-pink-500/10 to-transparent",
    dot: "bg-amber-400 shadow-amber-500/40",
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
    text: "text-white",
  },
  {
    title: "Morning Batches",
    day: "Morning",
    time: "9:00 AM – 10:00 AM & 10:00 AM – 11:00 AM",
    status: "Open",
    note: "Two back-to-back morning sessions suited for your schedule.",
    icon: FaSun,
    accent: "from-pink-500/25 via-fuchsia-500/10 to-transparent",
    dot: "bg-pink-400 shadow-pink-500/40",
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
    text: "text-white",
  },
  {
    title: "Evening Batch",
    day: "Evening",
    time: "6:15 PM – 7:15 PM",
    status: "Open",
    note: "A dynamic evening session for confidence, cardio, and calorie burn.",
    icon: FaMoon,
    accent: "from-violet-500/25 via-purple-500/10 to-transparent",
    dot: "bg-violet-400 shadow-violet-500/40",
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
    text: "text-white",
  },
  {
    title: "Online Classes",
    day: "Online Class",
    time: "Flexible Schedules Available",
    status: "Available",
    note: "Work out from the comfort of home with interactive live online sessions.",
    icon: FaLaptop,
    accent: "from-cyan-500/25 via-blue-500/10 to-transparent",
    dot: "bg-cyan-400 shadow-cyan-500/40",
    badge: "bg-cyan-500/15 text-cyan-300 border-cyan-400/30",
    text: "text-white",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" },
};

export default function Schedule() {
  return (
    <motion.section
      id="schedule"
      className="bg-[#0B0B0F] py-24 px-4 sm:px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          {...fadeUp}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.45em] text-pink-400">
            Class Schedule
          </p>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Train with purpose, every day of the week
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            Premium movement, structured timing, and a studio experience designed to keep you consistent.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6 lg:p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(147,51,234,0.20),transparent_28%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-400/60 to-transparent" />

          <div className="relative">
            <div className="mb-8 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-pink-300/80">
                  Studio Flow
                </p>
                <p className="mt-1 text-sm text-slate-200">
                  Weekly class rhythm
                </p>
              </div>
              <div className="rounded-full border border-pink-400/30 bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-200">
                Premium Sessions
              </div>
            </div>

            <div className="relative space-y-4 md:space-y-6">
              <div className="absolute left-[22px] top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-pink-500 via-violet-400 to-transparent md:block" />

              {scheduleItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.day}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className="relative overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-4 sm:p-5"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.accent}`} />

                    <div className="relative flex flex-col gap-4 md:flex-row md:items-start">
                      <div className="flex items-start gap-4">
                        <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 shadow-lg shadow-black/50">
                          <div className={`absolute inset-1 rounded-full ${item.dot} blur-[1px]`} />
                          <Icon className="relative z-10 text-lg text-white" />
                        </div>

                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-pink-200">
                              {item.title}
                            </span>
                            <span className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold ${item.badge}`}>
                              {item.status}
                            </span>
                          </div>

                          <h3 className="mt-2 text-2xl font-bold text-white sm:text-[1.8rem]">
                            {item.day}
                          </h3>

                          <div className="mt-3 flex items-center gap-2 text-sm text-slate-200">
                            <FaClock className="text-pink-300" />
                            <span>{item.time}</span>
                          </div>

                          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                            {item.note}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <motion.div
              {...fadeUp}
              className="mt-6 rounded-[28px] border border-pink-400/25 bg-gradient-to-r from-pink-600/20 via-violet-600/20 to-fuchsia-500/10 p-4 shadow-[0_20px_60px_rgba(168,85,247,0.18)] backdrop-blur-md sm:p-6"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-pink-200">
                    Join the studio
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    Ready to Join She Sweats?
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-200 sm:text-base">
                    Morning and evening batches are available. Reach out on WhatsApp to confirm your slot, batch details, and current pricing.
                  </p>
                </div>

                <a
                  href="https://wa.me/919629992750?text=Hi!%20I%20would%20like%20to%20join%20She%20Sweats%20Fitness%20Studio."
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-pink-600 transition-transform duration-300 hover:scale-[1.02] sm:px-6"
                >
                  <FaWhatsapp className="text-base" />
                  <span>Check Batch Availability</span>
                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}