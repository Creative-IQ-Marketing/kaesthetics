import React from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Star className="w-8 h-8" />,
    title: "17 Years Experience",
    description: "Led by Kassandra, a Licensed Skin Expert devoted to your skin's health."
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Advanced Technology",
    description: "Using cutting-edge tools like the Astrodome Facial for superior results."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Result Driven",
    description: "Customized treatments designed to promote healthy, radiant skin."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const HomeWhyChooseUs = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-ka-light/30 skew-x-12 translate-x-20 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-ka-primary mb-6">
            Why K-Aesthetic?
          </h2>
          <p className="text-gray-500 text-lg font-light tracking-wide">
            Where expertise meets elegance.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-ka-primary transition-colors duration-500 cursor-default"
            >
              <div className="w-16 h-16 rounded-full bg-ka-accent/10 flex items-center justify-center text-ka-accent mb-8 group-hover:bg-white/10 group-hover:text-white transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl text-ka-primary mb-4 group-hover:text-white transition-colors duration-500">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeWhyChooseUs;