import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import SectionHeader from "../layout/SectionHeader";
import ScrollReveal from "../motion/ScrollReveal";

const contactItems = [
  {
    icon: MapPin,
    title: "Location",
    content: (
      <>
        1826 North Loop 1604 West
        <br />
        Access Road, Suite 31
        <br />
        San Antonio, TX 78248
      </>
    ),
  },
  {
    icon: Phone,
    title: "Phone",
    content: (
      <>
        <a href="tel:3614948656" className="hover:text-ka-accent">(361) 494-8656</a>
        <span className="mt-1 block text-[10px] uppercase tracking-widest text-ka-accent">
          Call or Text
        </span>
      </>
    ),
  },
  {
    icon: Mail,
    title: "Email",
    content: (
      <a href="mailto:Kaestheticsatx@gmail.com" className="hover:text-ka-accent">
        Kaestheticsatx@gmail.com
      </a>
    ),
  },
  {
    icon: Clock,
    title: "Hours",
    content: (
      <ul className="space-y-1">
        <li className="flex justify-between gap-8"><span>Mon – Fri</span><span>9am – 5pm</span></li>
        <li className="flex justify-between gap-8"><span>Saturday</span><span>9am – 4pm</span></li>
        <li className="flex justify-between gap-8"><span>Sunday</span><span>Closed</span></li>
      </ul>
    ),
  },
];

const ContactFormSection = () => (
  <section className="section-pad bg-ka-cream">
    <div className="container-custom">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeader
            align="left"
            className="!mb-10"
            label="Visit Us"
            title={
              <>
                Our <em className="text-accent-italic">studio</em>
              </>
            }
            subtitle="A private, welcoming space in San Antonio designed for your comfort and transformation."
          />

          <div className="space-y-8">
            {contactItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08} y={24}>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-ka-accent shadow-card">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-ka-primary">{item.title}</h4>
                    <div className="mt-1 text-sm leading-relaxed text-ka-muted">{item.content}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.15}>
          <div className="premium-card premium-card-pad">
            <h2 className="font-serif text-3xl text-ka-primary">Send a message</h2>
            <p className="mt-2 text-sm text-ka-muted">We'll get back to you within 24 hours.</p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="form-label">Name</label>
                <input type="text" placeholder="Your name" className="form-input" />
              </div>
              <div>
                <label className="form-label">Email</label>
                <input type="email" placeholder="your@email.com" className="form-input" />
              </div>
              <div>
                <label className="form-label">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="form-input resize-none"
                />
              </div>
              <button type="button" className="btn-primary w-full">
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.2} className="mt-16 overflow-hidden rounded-3xl shadow-soft">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.608316886461!2d-98.51347668489626!3d29.60946798204285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c61a5b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2s1826%20N%20Loop%201604%20W%20Acc%20Rd%20Suite%2031%2C%20San%20Antonio%2C%20TX%2078248!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="K-Aesthetic Skin location"
          className="grayscale transition-all duration-700 hover:grayscale-0"
        />
      </ScrollReveal>
    </div>
  </section>
);

export default ContactFormSection;
