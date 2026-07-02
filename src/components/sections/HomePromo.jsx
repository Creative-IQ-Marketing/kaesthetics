import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import ScrollReveal from "../motion/ScrollReveal";
import OptimizedImage from "../OptimizedImage";
import { images } from "../../data/images";

const HomePromo = () => (
  <section className="section-pad bg-ka-pink-soft">
    <div className="container-custom">
      <div className="premium-card overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <ScrollReveal direction="left" className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
            <p className="section-label mb-4">The Studio</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.08] text-ka-primary">
              Skincare that
              <br />
              <em className="text-accent-italic">loves you back</em>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ka-muted">
              Every treatment is customized to your skin — because you deserve
              more than a one-size-fits-all facial.
            </p>
            <Link to="/booking" className="btn-primary mt-8 w-fit group">
              Book Your Visit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <div className="mt-10 flex gap-10 border-t border-ka-sand pt-8">
              <div>
                <p className="font-serif text-3xl text-ka-accent">80+</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-ka-muted">
                  Happy Clients
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1 font-serif text-3xl text-ka-accent">
                  5.0
                  <Star className="h-4 w-4 fill-ka-accent text-ka-accent" />
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-ka-muted">
                  Average Rating
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" className="relative min-h-[280px] lg:min-h-full">
            <OptimizedImage
              src={images.promo}
              alt="Luxury skincare at K-Aesthetic"
              fill
              wrapperClassName="absolute inset-0"
            />
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
);

export default HomePromo;
