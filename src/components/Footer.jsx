import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, Phone, ArrowUpRight, Clock } from "lucide-react";
import ScrollReveal from "./motion/ScrollReveal";
import logo from "../assets/kalogo.png";

export default function Footer() {
  return (
    <footer className="bg-ka-ink text-white">
      <div className="border-b border-white/10 bg-ka-primary">
        <div className="container-custom flex flex-col items-start justify-between gap-6 px-5 py-12 sm:flex-row sm:items-center sm:px-8 lg:px-10">
          <ScrollReveal direction="left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-ka-accent-light">
              San Antonio · Skincare Studio
            </p>
            <p className="mt-2 font-serif text-2xl text-white md:text-3xl">
              Ready for your next ritual?
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.08}>
            <Link to="/booking" className="btn-hero-solid group shrink-0">
              Book Your Visit
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </ScrollReveal>
        </div>
      </div>

      <div className="container-custom section-pad !pb-12 !pt-14 md:!pt-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="min-w-0 lg:col-span-1">
            <Link to="/">
              <img
                src={logo}
                alt="K-Aesthetic Skin"
                width={140}
                height={44}
                className="h-11 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/55">
              Result-driven facials and skin treatments by Kassandra — 17 years
              of expertise in a private San Antonio studio.
            </p>
            <a
              href="https://www.instagram.com/k_aestheticskin/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <Instagram className="h-4 w-4" />
              @k_aestheticskin
            </a>
          </div>

          <div className="min-w-0">
            <h4 className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-ka-accent-light" />
              Visit
            </h4>
            <address className="not-italic text-sm leading-relaxed text-white/65">
              1826 N Loop 1604 W Access Rd
              <br />
              Suite 31, San Antonio TX 78248
            </address>
            <a
              href="https://maps.google.com/?q=1826+N+Loop+1604+W+Access+Rd+Suite+31+San+Antonio+TX+78248"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-ka-accent-light hover:underline"
            >
              Get directions
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          <div className="min-w-0">
            <h4 className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
              <Phone className="h-3.5 w-3.5 shrink-0 text-ka-accent-light" />
              Reach us
            </h4>
            <ul className="space-y-2 text-sm text-white/65">
              <li>
                <a href="tel:3614948656" className="hover:text-white">
                  (361) 494-8656
                </a>
              </li>
              <li>
                <a
                  href="mailto:Kaestheticsatx@gmail.com"
                  className="inline-flex items-center gap-2 break-all hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  Kaestheticsatx@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
              <Clock className="h-3.5 w-3.5 shrink-0 text-ka-accent-light" />
              Hours
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                ["Mon – Fri", "9am – 5pm"],
                ["Saturday", "9am – 4pm"],
                ["Sunday", "Closed"],
              ].map(([day, time]) => (
                <li
                  key={day}
                  className="flex justify-between gap-4 border-b border-white/8 py-2 text-white/65 last:border-0"
                >
                  <span className="shrink-0">{day}</span>
                  <span className={time === "Closed" ? "text-white/35" : "text-white"}>
                    {time}
                  </span>
                </li>
              ))}
            </ul>
            <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-wider text-white/45">
              {[
                ["Home", "/"],
                ["Services", "/services"],
                ["Booking", "/booking"],
                ["Contact", "/contact"],
              ].map(([label, path]) => (
                <Link key={path} to={path} className="hover:text-white">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[11px] text-white/35 md:flex-row">
          <p>&copy; {new Date().getFullYear()} K-Aesthetic Skin. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-white/70">
              Privacy
            </Link>
            <Link to="/terms-conditions" className="hover:text-white/70">
              Terms
            </Link>
            <a
              href="https://creativeiqmarketing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 uppercase tracking-wider transition-colors hover:text-white/70"
            >
              Powered by{" "}
              <span className="font-semibold text-white/45 group-hover:text-white/80">
                Creative IQ
              </span>
              <ArrowUpRight className="h-3 w-3 -translate-y-px transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
