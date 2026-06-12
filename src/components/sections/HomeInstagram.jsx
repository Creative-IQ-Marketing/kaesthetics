import React from "react";
import { motion } from "framer-motion";
import { Instagram, ArrowUpRight } from "lucide-react";
import InstagramEmbed from "../InstagramEmbed";
import InstagramFeedWidget from "../InstagramFeedWidget";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  INSTAGRAM_POSTS,
  INSTAGRAM_HIGHLIGHTS,
  INSTAGRAM_FEED_EMBED_SRC,
} from "../../data/instagram";

const HomeInstagram = () => {
  const hasEmbeds = INSTAGRAM_POSTS.length > 0;
  const hasLiveFeed = Boolean(INSTAGRAM_FEED_EMBED_SRC);

  return (
    <section className="bg-ka-primary py-24 md:py-32">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          >
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-ka-accent transition-opacity hover:opacity-80"
            >
              <Instagram className="h-4 w-4" />
              @{INSTAGRAM_HANDLE}
            </a>
            <h2 className="font-serif text-4xl leading-[1.05] text-white md:text-5xl lg:text-6xl">
              Follow the
              <br />
              <span className="italic text-ka-accent">Ritual</span>
            </h2>
          </motion.div>

          <motion.a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-ka-accent px-8 py-4 text-sm font-semibold text-white md:self-auto"
          >
            Follow on Instagram
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>
        </div>

        {/* Live feed widget — when embed URL is configured */}
        {hasLiveFeed && (
          <InstagramFeedWidget
            src={INSTAGRAM_FEED_EMBED_SRC}
            className="mb-6 bg-white/5"
          />
        )}

        {/* Highlight grid — fallback when no live widget */}
        {!hasLiveFeed && (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {INSTAGRAM_HIGHLIGHTS.map((item, i) => (
            <motion.a
              key={item.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
                delay: i * 0.08,
              }}
              whileHover={{ y: -4 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 transition-opacity group-hover:from-black/90" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                <p className="font-serif text-lg text-white md:text-xl">{item.title}</p>
                <p className="mt-1 text-xs text-white/60">{item.subtitle}</p>
              </div>
              <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                <ArrowUpRight className="h-3.5 w-3.5 text-white" />
              </div>
            </motion.a>
          ))}
        </div>
        )}

        {/* Individual post embeds — when post URLs are configured */}
        {hasEmbeds && (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INSTAGRAM_POSTS.map((url) => (
              <InstagramEmbed key={url} url={url} />
            ))}
          </div>
        )}

        {/* Footer line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center text-sm text-white/40 md:text-left"
        >
          Behind-the-scenes treatments, skincare tips, and exclusive offers —
          updated weekly on Instagram.
        </motion.p>
      </div>
    </section>
  );
};

export default HomeInstagram;
