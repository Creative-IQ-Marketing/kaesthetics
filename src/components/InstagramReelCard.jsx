import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Volume2, VolumeX } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../data/instagram";

export default function InstagramReelCard({
  src,
  poster,
  title = "Korean Skin Infusion",
  subtitle = "Nano Infusion · Targeted Serums",
  featured = false,
  className = "",
}) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <motion.a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 60, damping: 18 }}
      whileHover={{ y: -6 }}
      className={`group relative block overflow-hidden rounded-2xl bg-ka-primary shadow-[0_20px_60px_rgba(26,26,46,0.25)] ${featured ? "aspect-[9/14]" : "aspect-[9/14]"} ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30" />

      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-md">
          <Instagram className="h-3.5 w-3.5 text-white" />
          <span className="text-[11px] font-medium text-white tracking-wide">
            @{INSTAGRAM_HANDLE}
          </span>
        </div>
        <button
          type="button"
          onClick={toggleMute}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60"
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-sm font-semibold text-white leading-tight">{title}</p>
        <p className="mt-1 text-[11px] text-white/70">{subtitle}</p>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/15 transition-all duration-300 group-hover:ring-white/30" />
    </motion.a>
  );
}
