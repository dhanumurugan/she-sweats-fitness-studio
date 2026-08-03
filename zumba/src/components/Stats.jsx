import { motion } from "framer-motion";
import {
  FaUsers,
  FaDumbbell,
  FaHeart,
  FaMedal,
} from "react-icons/fa6";

const stats = [
  {
    icon: FaUsers,
    value: 500,
    suffix: "+",
    title: "Happy Members",
    description: "Women who trained, transformed, and grew stronger with us.",
  },
  {
    icon: FaDumbbell,
    value: 1500,
    suffix: "+",
    title: "Classes Completed",
    description: "Energetic fitness sessions delivered with passion.",
  },
  {
    icon: FaHeart,
    value: 100,
    suffix: "%",
    title: "Ladies Only",
    description: "A safe, comfortable, and supportive fitness space.",
  },
  {
    icon: FaMedal,
    value: 10,
    suffix: "+",
    title: "Years Experience",
    description: "Helping women stay healthy, confident, and active.",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-white sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-pink-500">
            Our Impact
          </p>

          <h2 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Numbers That Tell{" "}
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              Our Story
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400 sm:text-lg">
            A growing community built through confidence, consistency and
            positive energy.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;

            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl transition duration-300 hover:border-pink-500/40 ${
                  index === 1 || index === 3 ? "lg:translate-y-8" : ""
                }`}
              >
                <div className="absolute left-6 right-6 top-0 h-[3px] rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-transparent" />

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-500/30 bg-pink-500/10 text-xl text-pink-400">
                  <IconComponent />
                </div>

                <h3 className="text-5xl font-black tracking-tight sm:text-6xl">
                  <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
                    {stat.value}
                    {stat.suffix}
                  </span>
                </h3>

                <h4 className="mt-4 text-xl font-bold text-white">
                  {stat.title}
                </h4>

                <p className="mt-3 leading-6 text-gray-400">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}