import React from "react";
import { motion } from "framer-motion";

export default function TermsConditions() {
  return (
    <div className="pt-32 pb-20 bg-[#F5EFE6] min-h-screen">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-4xl md:text-5xl text-ka-primary mb-8">
            Terms of Use
          </h1>
          <div className="prose prose-lg text-gray-600">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>
              Welcome to K-Aesthetic Skin. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.
            </p>
            <h3>1. Appointment Policy</h3>
            <p>
              Please arrive on time for your scheduled appointment. Late arrivals may result in a shortened treatment time or rescheduling.
            </p>
            <h3>2. Cancellation Policy</h3>
            <p>
              We require at least 24 hours notice for cancellations. Failure to provide sufficient notice may result in a cancellation fee.
            </p>
            <h3>3. Service Changes</h3>
            <p>
              Prices and services are subject to change without notice. We reserve the right to refuse service to anyone for any reason at any time.
            </p>
            <h3>4. Contact</h3>
            <p>
              For any questions regarding these terms, please contact us at Kaestheticsatx@gmail.com.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
