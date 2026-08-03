import { motion } from "framer-motion";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaLocationDot,
} from "react-icons/fa6";

export default function Contact() {
  const whatsappNum = import.meta.env.VITE_WHATSAPP_NUMBER || "919629992750";
  const phoneNum = import.meta.env.VITE_CONTACT_PHONE || "+919629992750";
  const emailAddr = import.meta.env.VITE_CONTACT_EMAIL || "sindhuraja04044@gmail.com";
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com/she_sweats_fitness_studio";
  const facebookUrl = import.meta.env.VITE_FACEBOOK_URL || "#";
  const mapEmbedUrl = import.meta.env.VITE_GOOGLE_MAPS_EMBED || "https://www.google.com/maps/embed?pb=!4v1784026138995!6m8!1m7!1sKm8Oli8PStfbpPPOg3jCXQ!2m2!1d8.796982165492855!2d78.15233489385453!3f294.27845862947447!4f1.1835486173061156!5f0.7820865974627469";
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="contact"
      className="bg-[#0B0B0F] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-pink-500 uppercase tracking-[4px] font-semibold">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Get In Touch
          </h2>

          <p className="text-gray-300 mt-6">
            We'd love to welcome you to She Sweats Fitness Studio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">

            <div className="space-y-8">

              <div className="flex items-center gap-5">
                <FaLocationDot className="text-pink-500 text-3xl" />
                <div>
                  <h3 className="text-white font-bold">Address</h3>
                  <p className="text-gray-300">
                    Snows Colony, A Block,
                    <br />
                    Thoothukudi
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaPhone className="text-pink-500 text-3xl" />
                <div>
                  <h3 className="text-white font-bold">Phone</h3>
                  <a
                    href={`tel:${phoneNum}`}
                    className="text-gray-300 hover:text-pink-400 transition"
                  >
                    {phoneNum.replace("+91", "").trim() || phoneNum}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaWhatsapp className="text-green-500 text-3xl" />
                <div>
                  <h3 className="text-white font-bold">WhatsApp</h3>
                  <a
                    href={`https://wa.me/${whatsappNum}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-400 hover:underline"
                  >
                    Chat on WhatsApp ({phoneNum})
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaEnvelope className="text-pink-500 text-3xl" />
                <div>
                  <h3 className="text-white font-bold">Email</h3>
                  <a
                    href={`mailto:${emailAddr}`}
                    className="text-gray-300 hover:text-pink-400 transition"
                  >
                    {emailAddr}
                  </a>
                </div>
              </div>

              <div className="flex gap-5 pt-4">

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center hover:scale-110 transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center hover:scale-110 transition"
                >
                  <FaFacebook />
                </a>

              </div>

            </div>

          </div>

          {/* Map Placeholder */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-pink-500/20">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="She Sweats Fitness Studio"
              className="rounded-3xl"
            />
          </div>

        </div>

      </div>
    </motion.section>
  );
}