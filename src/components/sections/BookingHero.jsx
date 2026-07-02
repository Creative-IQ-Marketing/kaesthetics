import React from "react";
import PageHero from "../layout/PageHero";
import { images } from "../../data/images";

const BookingHero = () => (
  <PageHero
    image={images.bookingHero}
    imagePosition="center 40%"
    imageAlt="Book your appointment at K-Aesthetic Skin"
    label="Appointments"
    title="Book Your Glow"
    subtitle="Choose your treatment, then complete your booking in our secure live calendar."
    cta={false}
    minHeight="min-h-[50vh]"
  />
);

export default BookingHero;
