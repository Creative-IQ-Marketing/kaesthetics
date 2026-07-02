import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "../../assets/kalogo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Booking", path: "/booking" },
  { name: "Contact", path: "/contact" },
];

export default function HeroHeader({ light = true }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const textClass = light
    ? "text-white/90 hover:text-white"
    : "text-ka-primary/80 hover:text-ka-primary";

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-30 px-5 pt-6 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1400px] items-start justify-between">
          <Link to="/" className="group shrink-0">
            <img
              src={logo}
              alt="K-Aesthetic Skin"
              className={`h-11 w-auto transition-opacity sm:h-12 ${light ? "brightness-0 invert" : ""}`}
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] font-medium uppercase tracking-[0.2em] transition-colors ${textClass} ${
                  location.pathname === link.path ? "!text-white" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:3614948656"
              className={`hidden text-[11px] tracking-wide sm:block ${light ? "text-white/70 hover:text-white" : "text-ka-muted"}`}
            >
              (361) 494-8656
            </a>
            <Link
              to="/booking"
              className="btn-hero-solid hidden sm:inline-flex"
            >
              Book
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className={`flex h-10 w-10 items-center justify-center rounded-full md:hidden ${
                light ? "bg-white/10 text-white backdrop-blur-sm" : "bg-ka-sand text-ka-primary"
              }`}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-ka-ink"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between px-5 pt-6">
              <img src={logo} alt="" className="h-10 brightness-0 invert" />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-1 px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={link.path}
                    className="block py-4 font-serif text-4xl text-white/90 hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex flex-col gap-4 px-8 pb-12">
              <a href="tel:3614948656" className="flex items-center gap-2 text-sm text-white/60">
                <Phone className="h-4 w-4" />
                (361) 494-8656
              </a>
              <Link
              to="/booking"
              className="btn-hero-solid w-full justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Book Appointment
            </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
