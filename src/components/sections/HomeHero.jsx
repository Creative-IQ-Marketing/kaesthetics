import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const MotionDiv = motion.div;

const HomeHero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#F5EFE6] pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[-5%] w-64 h-64 rounded-full bg-ka-accent/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-[-5%] w-96 h-96 rounded-full bg-ka-accent/10 blur-3xl"></div>
      </div>

      <div className="container-custom w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <div className="order-2 lg:order-1 flex flex-col items-start text-left">
            <h1 className="font-serif text-6xl lg:text-[5.5rem] leading-[1.1] font-medium text-ka-primary mb-8">
              Skincare, <br />
              <span className="italic">Redefined.</span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-md border-l-2 border-ka-accent pl-6">
              With 17 years of expertise as a Licensed Skin Expert, Kassandra is
              devoted to delivering result driven treatments designed to promote
              healthy, radiant skin.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <Link
                to="/services"
                className="group relative px-8 py-4 bg-ka-accent text-white rounded-full font-medium overflow-hidden transition-all hover:shadow-lg hover:scale-105"
              >
                <span className="relative z-10">View Our Services</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>

              <Link
                to="/booking"
                className="flex flex-col hover:opacity-80 transition-opacity"
              >
                <span className="text-sm font-bold text-ka-primary">
                  Book Online
                </span>
                <span className="text-xs text-gray-500">Simple & Seamless</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Arched Image */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            {/* Dotted Circle Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none flex items-center justify-center">
              <div className="w-full h-full border border-dashed border-ka-accent/30 rounded-full animate-spin-slow"></div>
            </div>

            <div className="relative w-full max-w-md aspect-[3/4]">
              {/* Arched Mask */}
              <div className="w-full h-full rounded-t-[1000px] overflow-hidden bg-white shadow-2xl relative z-10 border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
                  alt="Beautiful woman with glowing skin"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-10 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl max-w-[180px] hidden md:block animate-fade-in-up">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-ka-accent text-sm">★★★★★</div>
                </div>
                <p className="text-xs text-gray-600 leading-tight">
                  "The best in San Antonio hands down."
                </p>
                <p className="text-[10px] text-gray-400 mt-2 font-medium uppercase tracking-wide">
                  — Joan T.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Down Indicator */}
      <MotionDiv
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
        <MotionDiv
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-ka-primary/60" />
        </MotionDiv>
      </MotionDiv>
    </section>
  );
};

export default HomeHero;
