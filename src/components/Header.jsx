import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import logo from "../assets/kalogo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Booking", path: "/booking" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
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

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ka-sand/80 bg-ka-cream/95 backdrop-blur-md">
        <div className="container-wide px-5 sm:px-8 lg:px-12">
          <div className="flex h-[4.25rem] items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">
            <Link to="/" className="shrink-0 lg:hidden">
              <img src={logo} alt="K-Aesthetic Skin" className="h-9 w-auto" />
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[11px] font-medium uppercase tracking-[0.18em] transition-colors hover:text-ka-accent ${
                    location.pathname === link.path ? "text-ka-accent" : "text-ka-primary/75"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <Link to="/" className="hidden justify-self-center lg:block">
              <img src={logo} alt="K-Aesthetic Skin" className="h-11 w-auto" />
            </Link>

            <div className="hidden items-center justify-end gap-6 lg:flex">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[11px] font-medium uppercase tracking-[0.18em] transition-colors hover:text-ka-accent ${
                    location.pathname === link.path ? "text-ka-accent" : "text-ka-primary/75"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/booking" className="btn-primary !px-5 !py-2.5 !text-[10px] !tracking-[0.16em]">
                Book
              </Link>
            </div>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ka-sand lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5 text-ka-primary" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-ka-cream lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-[4.25rem] items-center justify-between px-5">
              <img src={logo} alt="" className="h-9 w-auto" />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-ka-sand"
                aria-label="Close"
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
                    className="block py-3 font-serif text-4xl text-ka-primary"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex flex-col gap-3 px-8 pb-10">
              <a href="tel:3614948656" className="flex items-center gap-2 text-sm text-ka-muted">
                <Phone className="h-4 w-4" />
                (361) 494-8656
              </a>
              <Link to="/booking" className="btn-primary w-full justify-center" onClick={() => setMenuOpen(false)}>
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
