import { motion } from "framer-motion";
import heroVideo from "../assets/videos/hero.mp4";
import Aurora from "./Aurora";

export default function Hero({ onBookTrial }) {
  return (
    <section
      id="home"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Aurora */}
      <div className="absolute inset-0 opacity-60">
        <Aurora
          colorStops={["#ff2e97", "#ff6ec7", "#8b5cf6"]}
          amplitude={1.2}
          blend={0.5}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6 text-center"
      >
        <h1 className="text-6xl font-extrabold text-white md:text-8xl">
          She <span className="text-pink-500">Sweats</span>
        </h1>

        <p className="mt-6 text-xl text-gray-200 md:text-2xl">
          Sweat. Smile. Repeat.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {/* Opens Trial Modal */}
          <button
            type="button"
            onClick={onBookTrial}
            className="rounded-full bg-pink-500 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-pink-600"
          >
            Book Free Trial
          </button>

          {/* Scrolls to Gallery */}
          <a
            href="#gallery"
            className="rounded-full border border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
          >
            Watch Classes
          </a>
        </div>
      </motion.div>
    </section>
  );
}