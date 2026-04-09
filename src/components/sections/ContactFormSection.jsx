import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const MotionDiv = motion.div;

const ContactFormSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl text-ka-primary mb-8">
              Visit Our Studio
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F5EFE6] flex items-center justify-center text-ka-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-ka-primary mb-2">
                    Location
                  </h4>
                  <p className="text-gray-500 leading-relaxed">
                    1826 North Loop 1604 West
                    <br />
                    Access Road, Suite 31
                    <br />
                    San Antonio, TX 78248
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F5EFE6] flex items-center justify-center text-ka-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-ka-primary mb-2">
                    Phone
                  </h4>
                  <p className="text-gray-500 leading-relaxed">
                    (210) 986-2580
                  </p>
                  <span className="text-xs text-ka-accent uppercase tracking-wider font-bold mt-1 block">
                    Call or Text
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F5EFE6] flex items-center justify-center text-ka-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-ka-primary mb-2">
                    Email
                  </h4>
                  <p className="text-gray-500 leading-relaxed">
                    hello@k-aesthetic.skin
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F5EFE6] flex items-center justify-center text-ka-primary shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-ka-primary mb-2">
                    Hours
                  </h4>
                  <ul className="text-gray-500 space-y-1">
                    <li className="flex justify-between w-48">
                      <span>Mon - Fri</span> <span>9am - 6pm</span>
                    </li>
                    <li className="flex justify-between w-48">
                      <span>Saturday</span> <span>10am - 4pm</span>
                    </li>
                    <li className="flex justify-between w-48">
                      <span>Sunday</span> <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </MotionDiv>

          {/* Contact Form */}
          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#FBFBFB] p-8 md:p-12 rounded-3xl border border-gray-100 shadow-lg"
          >
            <h2 className="font-serif text-3xl text-ka-primary mb-2">
              Send a Message
            </h2>
            <p className="text-gray-500 mb-8">
              We'll get back to you within 24 hours.
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-ka-accent focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-ka-accent focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-ka-accent focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-ka-primary text-white py-4 rounded-full font-medium hover:bg-ka-accent transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </MotionDiv>
        </div>

        {/* Map Placeholder */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 w-full h-[400px] rounded-3xl overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
        >
          {/* Embedding a Google Maps iframe for visual appeal */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.608316886461!2d-98.51347668489626!3d29.60946798204285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c61a5b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2s1826%20N%20Loop%201604%20W%20Acc%20Rd%20Suite%2031%2C%20San%20Antonio%2C%20TX%2078248!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="K-Aesthetics Location"
          ></iframe>
        </MotionDiv>
      </div>
    </section>
  );
};

export default ContactFormSection;
