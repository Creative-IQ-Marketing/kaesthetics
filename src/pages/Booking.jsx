import React from "react";
import { Clock } from "lucide-react";
import BookingHero from "../components/sections/BookingHero";
import BookingFormSection from "../components/sections/BookingFormSection";

const Booking = () => {
  return (
    <div>
      <BookingHero />
      <section className="bg-white">
        <div className="container-custom max-w-4xl">
          <div className="px-4 sm:px-0">
            <div className="rounded-3xl border border-gray-100 bg-[#FBFBFB] shadow-lg overflow-hidden -mt-10 sm:-mt-14 relative z-10">
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-ka-accent/10 flex items-center justify-center text-ka-accent">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
                      Open Hours
                    </p>
                    <h2 className="font-serif text-2xl text-ka-primary">
                      When to Visit
                    </h2>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="rounded-2xl bg-white border border-gray-100 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-2">
                      Mon – Fri
                    </p>
                    <p className="font-serif text-xl text-ka-primary">9am – 6pm</p>
                  </div>
                  <div className="rounded-2xl bg-white border border-gray-100 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-2">
                      Saturday
                    </p>
                    <p className="font-serif text-xl text-ka-primary">
                      10am – 4pm
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white border border-gray-100 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-2">
                      Sunday
                    </p>
                    <p className="font-serif text-xl text-ka-primary">Closed</p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-white border border-gray-100 p-5">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    If you don’t see an ideal time in the calendar, call us and
                    we’ll help you get booked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookingFormSection />
    </div>
  );
};

export default Booking;
