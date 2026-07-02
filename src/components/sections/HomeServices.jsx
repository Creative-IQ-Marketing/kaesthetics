import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Calendar } from "lucide-react";
import ScrollReveal, { StaggerReveal, StaggerItem } from "../motion/ScrollReveal";
import OptimizedImage from "../OptimizedImage";
import { images } from "../../data/images";

const HomeServices = () => (
  <section className="section-pad bg-ka-cream">
    <div className="container-custom">
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between md:mb-12">
        <ScrollReveal className="max-w-xl">
          <p className="section-label mb-3">Treatments</p>
          <h2 className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] text-ka-primary">
            Signature <em className="text-accent-italic">treatments</em>
          </h2>
          <p className="mt-3 text-base text-ka-muted">
            Client favorites — each one customized to your skin.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <Link to="/services" className="link-arrow shrink-0">
            Full menu
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.04} className="mb-10">
        <div className="flex flex-wrap gap-2">
          {images.categories.map((cat) => {
            const linkProps = cat.service
              ? { to: "/booking", state: { serviceName: cat.service } }
              : { to: cat.path };

            return (
              <Link
                key={cat.id}
                {...linkProps}
                className="rounded-full border border-ka-sand bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ka-muted transition-all hover:border-ka-accent hover:text-ka-primary"
              >
                {cat.label}
                <span className="ml-2 text-ka-accent/70">{cat.count}</span>
              </Link>
            );
          })}
        </div>
      </ScrollReveal>

      <StaggerReveal className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4" stagger={0.07}>
        {images.featured.map((item) => (
          <StaggerItem key={item.slug}>
            <TreatmentCard item={item} />
          </StaggerItem>
        ))}
      </StaggerReveal>
    </div>
  </section>
);

function TreatmentCard({ item }) {
  return (
    <article className="treatment-card-v2 group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card">
      <OptimizedImage
        src={item.image}
        alt={item.title}
        width={4}
        height={5}
        wrapperClassName="rounded-t-2xl"
        imgClassName="transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl text-ka-primary">{item.title}</h3>
        <div className="mt-2 flex items-center gap-1">
          {Array.from({ length: item.rating }).map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-ka-accent text-ka-accent" />
          ))}
          <span className="ml-1 text-xs text-ka-muted">({item.reviews})</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ka-muted">{item.description}</p>
        <div className="mt-auto flex items-center justify-between border-t border-ka-sand pt-4">
          <span className="font-serif text-lg text-ka-primary">{item.price}</span>
          <Link
            to="/booking"
            state={{ serviceName: item.slug }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ka-sand bg-ka-cream text-ka-primary transition-all hover:border-ka-accent hover:bg-ka-primary hover:text-white"
            aria-label={`Book ${item.title}`}
          >
            <Calendar className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default HomeServices;
