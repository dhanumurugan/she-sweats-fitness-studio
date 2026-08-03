import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes, FaWhatsapp } from "react-icons/fa";

function TrialModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    batch: "Morning",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "919629992750";

    const message = `Hi Coach Sindhu Raja! 👋

I would like to book a free trial at She Sweats Fitness Studio.

Name: ${formData.name}
Phone: ${formData.phone}
Preferred Batch: ${formData.batch}

Please share the available trial class details.

Thank you!`;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[#111111] p-6 shadow-2xl sm:p-8"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-pink-600/20 blur-[90px]" />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-pink-600"
            >
              <FaTimes className="pointer-events-none text-xl" />
            </button>

            <div className="relative">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-pink-500">
                Free Trial
              </p>

              <h2 className="text-3xl font-black text-white sm:text-4xl">
                Start Your Fitness Journey
              </h2>

              <p className="mt-4 leading-7 text-gray-400">
                Fill in your details and connect with She Sweats to check the
                next available trial class.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="trial-name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="trial-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="trial-phone"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Phone Number
                  </label>

                  <input
                    id="trial-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="trial-batch"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Preferred Batch
                  </label>

                  <select
                    id="trial-batch"
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-[#181818] px-4 py-3.5 text-white outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
                  >
                    <option value="Early Morning (5:30 AM - 6:30 AM)">Early Morning Batch (5:30 AM – 6:30 AM)</option>
                    <option value="Morning (9:00 AM - 11:00 AM)">Morning Batch (9:00 AM – 10:00 AM & 10:00 AM – 11:00 AM)</option>
                    <option value="Evening (6:15 PM - 7:15 PM)">Evening Batch (6:15 PM – 7:15 PM)</option>
                    <option value="Online Class">Online Class</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-600 to-fuchsia-600 px-6 py-4 font-bold text-white shadow-[0_12px_35px_rgba(219,39,119,0.3)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(219,39,119,0.45)]"
                >
                  <FaWhatsapp className="text-xl" />
                  Book Free Trial
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default TrialModal;