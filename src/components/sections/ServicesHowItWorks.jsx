import React from "react";
import { motion } from "framer-motion";
import { Calendar, UserCheck, Sparkles, Smile } from "lucide-react";

const steps = [
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Book",
    description: "Choose your service and preferred time online.",
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: "Consult",
    description: "Get a skin analysis during your first visit.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Treat",
    description: "Relax while we take care of your skin.",
  },
  {
    icon: <Smile className="w-8 h-8" />,
    title: "Glow",
    description: "Enjoy your radiant, refreshed results!",
  },
];

const ServicesHowItWorks = () => {
  return (
    <section className="py-20 bg-ka-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="text-ka-accent uppercase tracking-[0.2em] text-xs font-bold mb-3 block">
            Process
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-ka-primary transition-all duration-500 relative">
                {step.icon}
                <div className="absolute top-0 right-0 bg-ka-accent text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center translate-x-1/4 -translate-y-1/4">
                  {index + 1}
                </div>
              </div>
              <h3 className="font-serif text-xl mb-3 text-white group-hover:text-ka-accent transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHowItWorks;
