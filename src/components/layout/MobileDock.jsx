import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Calendar, Home, Sparkles, MessageCircle } from "lucide-react";

const links = [
  { name: "Home", path: "/", icon: Home },
  { name: "Services", path: "/services", icon: Sparkles },
  { name: "Contact", path: "/contact", icon: MessageCircle },
];

export default function MobileDock() {
  const location = useLocation();

  return (
    <div className="mobile-dock lg:hidden">
      <div className="flex items-center justify-around px-2 py-2">
        {links.map((link) => {
          const active = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 transition-colors ${
                active ? "text-ka-accent" : "text-ka-muted"
              }`}
            >
              <link.icon className="h-4 w-4" />
              <span className="text-[9px] font-medium uppercase tracking-wider">{link.name}</span>
            </Link>
          );
        })}
        <Link
          to="/booking"
          className={`flex flex-col items-center gap-0.5 rounded-2xl px-3 py-1.5 transition-colors ${
            location.pathname === "/booking"
              ? "bg-ka-accent text-white"
              : "bg-ka-primary text-white"
          }`}
        >
          <Calendar className="h-4 w-4" />
          <span className="text-[9px] font-semibold uppercase tracking-wider">Book</span>
        </Link>
      </div>
    </div>
  );
}
