import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-ka-accent/10 blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="block">
              <h2 className="font-serif text-4xl font-bold text-white tracking-tight">
                K-Aesthetic.
              </h2>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Dedicated to delivering result-driven treatments designed to promote healthy, radiant skin.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/k_aestheticskin/" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-serif text-xl mb-8 text-ka-accent">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-400 group">
                <MapPin className="w-5 h-5 mt-1 text-gray-500 group-hover:text-ka-accent transition-colors" />
                <span className="leading-relaxed group-hover:text-white transition-colors">
                  1826 North Loop 1604 West<br />
                  Access Road, Suite 31<br />
                  San Antonio, TX 78248
                </span>
              </li>
              <li className="flex items-center gap-4 text-gray-400 group">
                <Phone className="w-5 h-5 text-gray-500 group-hover:text-ka-accent transition-colors" />
                <a href="tel:3614948656" className="group-hover:text-white transition-colors">
                  (361) 494-8656
                </a>
              </li>
              <li className="flex items-center gap-4 text-gray-400 group">
                <Mail className="w-5 h-5 text-gray-500 group-hover:text-ka-accent transition-colors" />
                <a href="mailto:Kaestheticsatx@gmail.com" className="group-hover:text-white transition-colors">
                  Kaestheticsatx@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-8 text-ka-accent">Explore</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Booking", path: "/booking" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-xl mb-8 text-ka-accent">Hours</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span>Mon - Fri</span>
                <span className="text-white">8:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span>Saturday</span>
                <span className="text-white">9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span>Sunday</span>
                <span className="text-gray-600">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} K-Aesthetic Skin. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
