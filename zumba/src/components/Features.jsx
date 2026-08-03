import { motion } from "framer-motion";
import {
  FaAppleWhole,
  FaDumbbell,
  FaHandSparkles,
  FaHeartPulse,
  FaPersonRunning,
  FaStar,
  FaUserShield,
  FaWeightScale,
} from "react-icons/fa6";

const features = [
  {
    title: "Weight Loss",
    desc: "Burn calories through energetic dance workouts.",
    icon: FaWeightScale,
  },
  {
    title: "Inch Loss",
    desc: "Tone your body and improve overall fitness.",
    icon: FaHeartPulse,
  },
  {
    title: "Ladies Only",
    desc: "Train in a comfortable and supportive environment.",
    icon: FaHandSparkles,
  },
  {
    title: "Beginner Friendly",
    desc: "Simple workouts suitable for every fitness level.",
    icon: FaPersonRunning,
  },
  {
    title: "Strength Training",
    desc: "Improve strength, stamina, and flexibility.",
    icon: FaDumbbell,
  },
  {
    title: "Healthy Meal Guidance",
    desc: "Practical nutrition guidance for better results.",
    icon: FaAppleWhole,
  },
  {
    title: "Personal Attention",
    desc: "Individual support and guidance during each class.",
    icon: FaUserShield,
  },
  {
    title: "Daily Motivation",
    desc: "Stay consistent with encouragement and positive energy.",
    icon: FaStar,
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-black py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.42em] text-pink-400">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Why Choose She Sweats?
          </h2>

          <p className="mx-auto mt-4 text-sm leading-6 text-slate-300 sm:text-base">
            Everything you need to begin your fitness journey in one supportive
            place.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-5 text-left shadow-[0_14px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-colors duration-300 hover:border-pink-400/50 sm:p-6"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.14),transparent_30%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-400/30 bg-pink-500/10 text-pink-300 shadow-[0_0_20px_rgba(236,72,153,0.18)]">
                      <Icon className="text-xl" />
                    </div>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}