import React from "react";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-ka-primary text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-ka-accent/10 blur-[100px]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-ka-accent uppercase tracking-[0.3em] text-sm font-medium mb-4 block">
            Connect
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions? We're here to help you on your journey to radiant
            skin.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
