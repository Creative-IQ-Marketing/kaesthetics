import React from "react";
import PageHero from "../layout/PageHero";
import { images } from "../../data/images";

const ContactHero = () => (
  <PageHero
    image={images.contactHero}
    imagePosition="70% center"
    imageAlt="Contact K-Aesthetic Skin San Antonio"
    label="Connect"
    title="Get In Touch"
    subtitle="Questions about treatments, skin concerns, or booking — we're here to help."
    ctaTo="/booking"
    ctaLabel="Book a Visit"
    minHeight="min-h-[48vh]"
  />
);

export default ContactHero;
