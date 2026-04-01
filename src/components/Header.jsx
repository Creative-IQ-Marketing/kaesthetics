import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/kalogo.png"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Booking", path: "/booking" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#F5EFE6]/80 backdrop-blur-md transition-all duration-300">
        <div className="container-custom">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-3xl font-bold tracking-tight text-ka-primary relative z-50"
            >
              <img src={logo} alt="K-Aesthetic" className="w-70 h-auto" />
            </Link>

            {/* Desktop nav — centered absolutely */}
            <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-800 text-sm font-medium hover:text-ka-accent transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop right */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex flex-col items-end text-right">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
                  Call Us
                </span>
                <a
                  href="tel:3614948656"
                  className="text-ka-primary font-sans font-medium hover:text-ka-accent transition-colors"
                >
                  (361) 494-8656
                </a>
              </div>
              <Link
                to="/booking"
                className="bg-ka-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-ka-accent transition-colors duration-300"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile hamburger — sits above overlay via z-50 only when menu is closed */}
            <button
              className={`lg:hidden p-2 text-ka-primary ${menuOpen ? "invisible" : "relative z-50"}`}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <div className="space-y-1.5">
                <span className="block w-8 h-0.5 bg-current" />
                <span className="block w-8 h-0.5 bg-current" />
                <span className="block w-8 h-0.5 bg-current" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — completely separate from header, owns full z-50 stack */}
      <div
        className={`fixed inset-0 z-50 bg-[#F5EFE6] flex flex-col lg:hidden
          transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Close button — top right, inside the overlay */}
        <div className="flex items-center justify-between px-6 h-24 shrink-0">
          <Link
            to="/"
            className="font-serif text-3xl font-bold tracking-tight text-ka-primary"
            onClick={() => setMenuOpen(false)}
          >
            <img src={logo} alt="K-Aesthetic" className="w-60 h-auto" />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 text-ka-primary"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links — vertically centered in remaining space */}
        <nav className="flex-1 flex flex-col items-center justify-center gap-8 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-serif text-4xl text-ka-primary hover:text-ka-accent transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Footer of overlay */}
        <div className="shrink-0 flex flex-col items-center gap-4 pb-12">
          <a
            href="tel:3614948656"
            className="text-base font-medium text-gray-500 tracking-wide"
          >
            (361) 494-8656
          </a>
          <Link
            to="/booking"
            className="bg-ka-primary text-white px-10 py-3.5 rounded-full text-base font-medium hover:bg-ka-accent transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}
