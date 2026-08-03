import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoEmblem from "../assets/logo/logo_emblem.png";

const navigationLinks = [
  { name: "Home", href: "#home", sectionId: "home" },
  { name: "About", href: "#about", sectionId: "about" },
  { name: "Why Choose Us", href: "#features", sectionId: "features" },
  { name: "Schedule", href: "#schedule", sectionId: "schedule" },
  { name: "Gallery", href: "#gallery", sectionId: "gallery" },
  { name: "Contact", href: "#contact", sectionId: "contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);

      const sectionIds = navigationLinks.map((link) => link.sectionId);

      let currentSection = "home";

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop = section.offsetTop - 150;

          if (window.scrollY >= sectionTop) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-white/10 bg-black/85 shadow-[0_10px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-white/10 bg-black/30 backdrop-blur-md"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 ${
          isScrolled ? "py-2" : "py-3 sm:py-4"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-2.5 sm:gap-3.5"
          aria-label="Go to home section"
        >
          <img
            src={logoEmblem}
            alt="She Sweats Fitness Studio logo emblem"
            className={`w-auto object-contain transition-all duration-300 drop-shadow-[0_0_14px_rgba(236,72,153,0.5)] group-hover:scale-105 ${
              isScrolled
                ? "h-10 sm:h-12 md:h-14"
                : "h-12 sm:h-14 md:h-16"
            }`}
          />

          <div className="flex flex-col justify-center">
            <h1
              className={`font-black tracking-tight text-white transition-all duration-300 ${
                isScrolled
                  ? "text-lg sm:text-xl md:text-2xl"
                  : "text-xl sm:text-2xl md:text-3xl"
              }`}
            >
              She<span className="text-pink-500">Sweats</span>
            </h1>

            <p
              className={`font-semibold tracking-[0.22em] text-pink-400 transition-all duration-300 ${
                isScrolled
                  ? "text-[9px] sm:text-[10px] md:text-xs"
                  : "text-[10px] sm:text-xs md:text-xs"
              }`}
            >
              FITNESS STUDIO
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-7 md:flex">
          {navigationLinks.map((link) => {
            const isActive = activeSection === link.sectionId;

            return (
              <li key={link.sectionId}>
                <a
                  href={link.href}
                  className={`relative py-2 text-sm font-medium transition duration-300 ${
                    isActive
                      ? "text-pink-400"
                      : "text-gray-200 hover:text-pink-400"
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-pink-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Join Button */}
        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 px-5 py-2.5 font-semibold text-white shadow-[0_8px_25px_rgba(236,72,153,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(236,72,153,0.4)] md:inline-flex"
        >
          Join Now
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((previousValue) => !previousValue)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:border-pink-500/40 hover:bg-pink-500/10 md:hidden"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "max-h-[520px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="space-y-2 px-5 py-5">
          {navigationLinks.map((link) => {
            const isActive = activeSection === link.sectionId;

            return (
              <a
                key={link.sectionId}
                href={link.href}
                onClick={closeMenu}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 font-medium transition ${
                  isActive
                    ? "bg-pink-500/10 text-pink-400"
                    : "text-gray-200 hover:bg-white/5 hover:text-pink-400"
                }`}
              >
                {link.name}

                {isActive && (
                  <span className="h-2 w-2 rounded-full bg-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.9)]" />
                )}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-4 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 px-5 py-3 font-semibold text-white shadow-[0_8px_25px_rgba(236,72,153,0.25)]"
          >
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;