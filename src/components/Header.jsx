import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Booking", path: "/booking" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5EFE6]/80 backdrop-blur-md transition-all duration-300">
      <div className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo - Left */}
          <Link
            to="/"
            className="font-serif text-3xl font-bold tracking-tight text-ka-primary z-50 relative"
          >
            K-Aesthetic.
          </Link>

          {/* Desktop Nav - Center */}
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

          {/* Contact/CTA - Right */}
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

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-ka-primary z-50 relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-8 h-0.5 bg-current transition-transform duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-8 h-0.5 bg-current transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-8 h-0.5 bg-current transition-transform duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`fixed inset-0 bg-[#F5EFE6] z-40 flex flex-col items-center justify-center transition-opacity duration-300 lg:hidden ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-serif text-3xl text-ka-primary hover:text-ka-accent transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-8 flex flex-col items-center gap-4">
              <a
                href="tel:3614948656"
                className="text-lg font-medium text-gray-600"
              >
                (361) 494-8656
              </a>
              <Link
                to="/booking"
                className="bg-ka-primary text-white px-8 py-3 rounded-full text-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
