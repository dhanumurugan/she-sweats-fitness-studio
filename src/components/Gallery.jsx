import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaTimes,
} from "react-icons/fa";

import gallery1 from "../assets/image/photo1.png";
import gallery2 from "../assets/image/photo2.png";
import gallery3 from "../assets/image/photo3.png";
import gallery4 from "../assets/image/photo4.png";
import gallery5 from "../assets/image/photo5.png";
import gallery6 from "../assets/image/photo6.png";

const galleryImages = [
  {
    image: gallery1,
    title: "High Energy Workouts",
  },
  {
    image: gallery2,
    title: "Strength and Fitness",
  },
  {
    image: gallery3,
    title: "Fun Group Sessions",
  },
  {
    image: gallery4,
    title: "Ladies Fitness Community",
  },
  {
    image: gallery5,
    title: "Daily Motivation",
  },
  {
    image: gallery6,
    title: "Sweat, Smile and Repeat",
  },
];

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const isLightboxOpen = selectedIndex !== null;

  function openLightbox(index) {
    setSelectedIndex(index);
  }

  function closeLightbox() {
    setSelectedIndex(null);
  }

  function showPreviousImage() {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === 0) {
        return galleryImages.length - 1;
      }
      return currentIndex - 1;
    });
  }

  function showNextImage() {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === galleryImages.length - 1) {
        return 0;
      }
      return currentIndex + 1;
    });
  }

  useEffect(() => {
    function handleKeyboard(event) {
      if (!isLightboxOpen) {
        return;
      }

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    }

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [isLightboxOpen]);

  useEffect(() => {
    document.body.style.overflow = isLightboxOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLightboxOpen]);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#070707] px-5 py-24 text-white sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-pink-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-pink-500">
            Our Gallery
          </p>

          <h2 className="text-3xl font-black sm:text-4xl md:text-5xl">
            Feel the Energy of{" "}
            <span className="bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
              She Sweats
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            Explore our workouts, community moments and the positive energy
            inside She Sweats Fitness Studio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <motion.button
              key={item.title}
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left shadow-xl"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -6 }}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-pink-400">
                    She Sweats
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition group-hover:bg-pink-600">
                  <FaExpand />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 px-4 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close gallery"
              className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl text-white transition hover:bg-pink-600"
            >
              <FaTimes />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPreviousImage();
              }}
              aria-label="Previous image"
              className="absolute left-3 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-pink-600 sm:left-8"
            >
              <FaChevronLeft />
            </button>

            <motion.div
              key={selectedIndex}
              className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#111]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={galleryImages[selectedIndex].image}
                alt={galleryImages[selectedIndex].title}
                className="max-h-[75vh] w-full object-contain"
              />

              <div className="border-t border-white/10 bg-black/80 px-6 py-4 text-center">
                <p className="font-semibold text-white">
                  {galleryImages[selectedIndex].title}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {selectedIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNextImage();
              }}
              aria-label="Next image"
              className="absolute right-3 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-pink-600 sm:right-8"
            >
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;