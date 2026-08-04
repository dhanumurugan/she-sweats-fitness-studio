import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import logo from "../assets/logo/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-pink-500/20 py-12 px-6">

      <div className="max-w-7xl mx-auto text-center">

        <img
          src={logo}
          alt="She Sweats Fitness Studio logo"
          className="mx-auto h-20 sm:h-24 w-auto object-contain drop-shadow-[0_0_20px_rgba(236,72,153,0.35)] mb-4"
        />

        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          She Sweats
        </h2>

        <p className="text-pink-500 mt-2 font-medium tracking-wide">
          Sweat. Smile. Repeat.
        </p>

        <div className="flex justify-center gap-6 mt-8">

          <a
            href="https://instagram.com/she_sweats_fitness_studio"
            target="_blank"
            rel="noreferrer"
            className="text-pink-500 text-3xl hover:scale-125 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="text-pink-500 text-3xl hover:scale-125 transition"
          >
            <FaFacebook />
          </a>

          <a
            href="https://wa.me/919629992750"
            target="_blank"
            rel="noreferrer"
            className="text-green-500 text-3xl hover:scale-125 transition"
          >
            <FaWhatsapp />
          </a>

        </div>

        <p className="text-gray-500 mt-8">
          © 2026 She Sweats Fitness Studio. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}