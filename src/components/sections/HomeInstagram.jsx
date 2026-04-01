/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Instagram, ArrowRight } from "lucide-react";

const HomeInstagram = () => {
  return (
    <section className="py-24 md:py-32 bg-[#fff] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ka-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-ka-accent uppercase tracking-[0.2em] text-sm font-bold flex items-center gap-2 mb-3">
              <Instagram className="w-4 h-4" />
              Follow Our Journey
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-ka-primary leading-tight mb-6">
              Connect With Us On Instagram
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Join our thriving community of skincare enthusiasts who are
              discovering radiant, glowing skin. Get exclusive insights into our
              treatments, expert skincare tips, success stories, and special
              offers available only to our followers.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-ka-accent/20 rounded-lg flex items-center justify-center mt-1">
                  <span className="text-ka-accent font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Behind-The-Scenes Content
                  </h3>
                  <p className="text-gray-600 text-sm">
                    See our treatments in action and meet our expert team
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-ka-accent/20 rounded-lg flex items-center justify-center mt-1">
                  <span className="text-ka-accent font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Skincare Tips & Tricks
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Expert advice to enhance your natural beauty between
                    appointments
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-ka-accent/20 rounded-lg flex items-center justify-center mt-1">
                  <span className="text-ka-accent font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Exclusive Follower Offers
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Get first access to promotions and limited-time deals
                  </p>
                </div>
              </div>
            </div>

            <motion.a
              href="https://www.instagram.com/k_aestheticskin/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-ka-primary text-white rounded-full hover:bg-ka-accent transition-all duration-300 shadow-lg hover:shadow-xl group font-medium"
            >
              <Instagram className="w-5 h-5" />
              <span>Follow @k_aestheticskin</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] hidden md:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-ka-primary/10 to-ka-accent/10 rounded-3xl overflow-hidden">
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-3 grid-rows-3 h-full w-full">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="border border-ka-primary/20" />
                  ))}
                </div>
              </div>

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-24 h-24 bg-ka-primary/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                  <Instagram className="w-12 h-12 text-ka-primary" />
                </div>
                <p className="text-gray-600 max-w-xs mb-8">
                  Join our community discovering the K-Aesthetic difference
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 md:hidden bg-gradient-to-r from-ka-primary/10 to-ka-accent/10 rounded-2xl p-8 text-center"
        >
          <div className="w-16 h-16 bg-ka-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Instagram className="w-8 h-8 text-ka-primary" />
          </div>
          <h3 className="font-serif text-2xl text-ka-primary mb-3">
            Join Our Community
          </h3>
          <p className="text-gray-600 mb-6">
            Follow for behind-the-scenes, tips, and exclusive offers
          </p>
          <a
            href="https://www.instagram.com/k_aestheticskin/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ka-primary text-white rounded-full hover:bg-ka-accent transition-all duration-300"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow Now</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeInstagram;
