import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Absolutely amazing and knowledgeable of the service she provides. The best in San Antonio hands down. I don't trust anyone else with my face than Kassandra.",
    author: "Joan T."
  },
  {
    text: "I have been with Kassandra for many years. Actually, I followed her to two different locations and will continue to because of her professional skill.",
    author: "Bertha S."
  }
];

const HomeTestimonials = () => {
  return (
    <section className="py-32 bg-ka-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-ka-accent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-ka-accent uppercase tracking-[0.2em] text-sm font-medium">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-4">Client Stories</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <Quote className="absolute -top-8 -left-4 w-16 h-16 text-ka-accent/20" />
              <p className="text-xl md:text-2xl text-gray-300 font-serif leading-relaxed italic mb-8 relative z-10">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-ka-accent" />
                <span className="text-white font-medium tracking-wide">{item.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;