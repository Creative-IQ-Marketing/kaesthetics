import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import heroVideo from "../../assets/hero-treatment.mp4";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring", stiffness: 58, damping: 20, delay },
});

const HomeHero = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => video.play().catch(() => {});

    const restart = () => {
      video.currentTime = 0;
      play();
    };

    video.addEventListener("ended", restart);

    const onVisibility = () => {
      if (document.visibilityState === "visible") play();
    };
    document.addEventListener("visibilitychange", onVisibility);

    play();

    return () => {
      video.removeEventListener("ended", restart);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <section className="relative h-[100svh] max-h-[100svh] overflow-hidden bg-[#F3F0EA]">
      {/* ── Full-bleed video (one canvas, no column split) ── */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover object-[62%_center] lg:object-[68%_center]"
        />
      </div>

      {/* ── Unified wash: wide multi-stop blend, no hard edge ── */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              108deg,
              #F3F0EA 0%,
              #F3F0EA 22%,
              rgba(243, 240, 234, 0.97) 32%,
              rgba(243, 240, 234, 0.82) 42%,
              rgba(243, 240, 234, 0.55) 52%,
              rgba(243, 240, 234, 0.28) 62%,
              rgba(243, 240, 234, 0.1) 72%,
              transparent 82%
            ),
            linear-gradient(
              to top,
              rgba(26, 26, 46, 0.35) 0%,
              rgba(26, 26, 46, 0.08) 18%,
              transparent 42%
            ),
            radial-gradient(
              ellipse 70% 55% at 88% 38%,
              rgba(201, 169, 110, 0.14),
              transparent 65%
            )
          `,
        }}
      />

      {/* Mobile: extra readability at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#F3F0EA] via-[#F3F0EA]/80 to-transparent lg:hidden" />

      {/* Film grain — ties both halves together */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content — locked inside viewport */}
      <div className="container-custom relative z-10 flex h-full flex-col pt-24 pb-5 lg:pb-6">
        <div className="flex min-h-0 flex-1 flex-col justify-center">
          <div className="max-w-xl lg:max-w-2xl">
            <motion.div
              {...fade(0.05)}
              className="mb-5 inline-flex items-center gap-3 lg:mb-6"
            >
              <span className="h-px w-10 bg-ka-accent" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-ka-accent">
                San Antonio · Licensed Skin Expert
              </p>
            </motion.div>

            <motion.div {...fade(0.15)} className="mb-5 lg:mb-6">
              <h1 className="font-serif leading-[0.92] tracking-tight text-ka-primary">
                <span className="block text-[clamp(2.75rem,8.5vw,6.5rem)] font-medium">
                  Skincare,
                </span>
                <span className="mt-1 block text-[clamp(3rem,10vw,7rem)] font-normal italic text-ka-primary/75">
                  Redefined.
                </span>
              </h1>
            </motion.div>

            <motion.p
              {...fade(0.3)}
              className="max-w-md text-base leading-relaxed text-gray-600 lg:text-[1.05rem]"
            >
              17 years of result-driven treatments by Kassandra — devoted to
              healthy, radiant skin that lasts.
            </motion.p>

            <motion.div
              {...fade(0.42)}
              className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7 sm:gap-4"
            >
              <Link
                to="/services"
                className="group inline-flex items-center gap-2.5 rounded-full bg-ka-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_36px_rgba(26,26,46,0.22)] transition-all hover:bg-ka-accent"
              >
                Find the Best Service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/booking"
                className="inline-flex items-center rounded-full border border-ka-primary/15 bg-white/50 px-7 py-3.5 text-sm font-semibold text-ka-primary backdrop-blur-md transition-all hover:border-ka-primary/30 hover:bg-white/70"
              >
                Book Online
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom strip — pinned inside hero, never bleeds out */}
        <motion.div
          {...fade(0.55)}
          className="mt-4 flex shrink-0 flex-col gap-4 rounded-2xl border border-white/40 bg-white/30 px-4 py-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between lg:mt-5 lg:px-5 lg:py-4"
        >
          <div className="flex flex-wrap gap-8 sm:gap-12">
            {[
              { value: "17+", label: "Years" },
              { value: "5.0", label: "Rating" },
              { value: "SA, TX", label: "Studio" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <span className="font-serif text-2xl text-ka-primary">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-gray-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={toggleMute}
            className="flex items-center gap-3 self-start rounded-full border border-ka-primary/10 bg-white/50 px-4 py-2.5 text-sm text-gray-600 backdrop-blur-sm transition-colors hover:bg-white/80 sm:self-auto"
            aria-label={muted ? "Unmute video" : "Mute video"}
          >
            <span className="hidden h-1.5 w-1.5 animate-pulse rounded-full bg-ka-accent sm:inline-block" />
            <span className="text-xs sm:text-sm">Korean Skin Infusion</span>
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
