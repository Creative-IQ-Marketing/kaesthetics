import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#F5EFE6]">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-ka-accent/5 blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-ka-primary/5 blur-[80px]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-ka-accent uppercase tracking-[0.3em] text-sm font-medium mb-4 block">
            Expert Care
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-ka-primary mb-6">
            Our Treatments
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Personalized skincare solutions designed to reveal your natural
            glow. Experience the perfect blend of relaxation and results.
          </p>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <span className="text-xs uppercase tracking-[0.2em] text-ka-primary/60 font-medium">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-ka-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesHero;
