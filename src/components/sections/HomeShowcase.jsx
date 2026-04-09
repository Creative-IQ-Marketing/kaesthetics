import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionDiv = motion.div;
const MotionImg = motion.img;
const MotionButton = motion.button;

const HomeShowcase = () => {
  return (
    <section className="relative py-40 overflow-hidden flex items-center justify-center">
      {/* Background Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <MotionImg 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop" 
          alt="Aesthetic Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-custom relative z-20 text-center text-white">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
            The Art of <span className="italic text-ka-accent">Aesthetics</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 font-light tracking-wide mb-12 max-w-2xl mx-auto">
            We believe that skincare is more than a routine—it's a ritual. 
            Experience the perfect balance of advanced clinical science and 
            luxurious relaxation tailored just for you.
          </p>
          
          <Link to="/services">
            <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border border-white/30 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium tracking-widest hover:bg-white hover:text-ka-primary transition-all duration-300"
            >
              EXPLORE OUR PHILOSOPHY
            </MotionButton>
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
};

export default HomeShowcase;
