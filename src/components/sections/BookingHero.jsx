import React from "react";
import { motion } from "framer-motion";

const BookingHero = () => {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#F5EFE6]">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-ka-accent/5 blur-[80px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-ka-primary/5 blur-[60px]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-ka-accent uppercase tracking-[0.3em] text-sm font-medium mb-4 block">
            Appointments
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-ka-primary mb-6">
            Book Your Glow
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Simple, seamless booking for radiant results. Select your preferred
            service and time below.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingHero;
