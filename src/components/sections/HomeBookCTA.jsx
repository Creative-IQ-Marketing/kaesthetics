import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import ScrollReveal from "../motion/ScrollReveal";
import OptimizedImage from "../OptimizedImage";
import { images } from "../../data/images";

const HomeBookCTA = () => (
  <section className="section-pad bg-white">
    <div className="container-custom">
      <ScrollReveal direction="scale">
        <div className="relative overflow-hidden rounded-[2rem] bg-ka-primary">
          <OptimizedImage
            src={images.bookCta}
            alt=""
            fill
            wrapperClassName="absolute inset-0 opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ka-ink via-ka-primary/95 to-ka-primary/80" />

          <div className="relative grid gap-10 px-8 py-14 md:grid-cols-2 md:items-center md:gap-12 md:px-14 md:py-20">
            <div className="text-left">
              <p className="section-label mb-4 text-ka-accent-light">Ready to glow?</p>
              <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] text-white">
                Your best skin
                <br />
                <em className="text-ka-accent-light">awaits</em>
              </h2>
              <p className="mt-4 max-w-sm text-white/65">
                Book online in minutes or call us directly. We can&apos;t wait to
                welcome you to the studio.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 sm:flex-row md:flex-col md:items-end lg:items-end">
              <Link to="/booking" className="btn-hero-solid group !px-8 !py-4 !text-[11px]">
                Book Online
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="tel:3614948656"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 transition-all hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                (361) 494-8656
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default HomeBookCTA;
