import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#070707]"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.6,
        },
      }}
    >
      <div className="flex flex-col items-center px-5 text-center">
        {/* Small top text */}
        <motion.p
          className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-pink-500"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
          }}
        >
          Welcome to
        </motion.p>

        {/* Studio name */}
        <motion.h1
          className="text-4xl font-black uppercase tracking-wide text-white sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >
          She{" "}
          <span className="bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
            Sweats
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="mt-3 text-sm tracking-[0.2em] text-gray-400 sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
          }}
        >
          SWEAT • SMILE • REPEAT
        </motion.p>

        {/* Loading bar */}
        <div className="mt-8 h-[3px] w-56 overflow-hidden rounded-full bg-white/10 sm:w-72">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Loading text */}
        <motion.p
          className="mt-3 text-xs uppercase tracking-[0.3em] text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
        >
          Loading
        </motion.p>
      </div>

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/10 blur-[100px]" />
    </motion.div>
  );
}

export default LoadingScreen;